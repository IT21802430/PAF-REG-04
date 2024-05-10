import { useEffect, useState, type FC } from "react";

import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useCounter, useToggle } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import cn from "@/utils/cn";
import { Tooltip } from "@/components/ui/Tooltip";
import nFormatter from "@/lib/nFormatter";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthProvider";

interface LikeProps {
  publication: any;
  showCount: boolean;
}

const Like: FC<LikeProps> = ({ publication, showCount }) => {
  const [hasReacted, toggleReact] = useToggle(false);
  const [reactions, { decrement, increment, set }] = useCounter(
    publication.publication.likes.length
  );
  const [likeId, setLikeId] = useState<any[]>();
  const { isLoggedIn, token } = useAuth();

  const iconClassName = showCount
    ? "w-[17px] sm:w-[20px]"
    : "w-[15px] sm:w-[18px]";

  const getPostLikes = async () => {
    try {
      const response = await fetch(
        `/api/get-post?postId=${publication.publication.postId}`
      );

      if (response.ok) {
        const data = await response.json();
        set(data.likes.length);
        const likeId =
          data.likes?.find(
            (like: any) => like.user.id === publication.publication.user.id
          )?.id || null;
        if (likeId) {
          toggleReact();
          setLikeId(likeId);
        }
      }
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };

  const decreLike = async () => {
    try {
      getPostLikes();
      if (!likeId) return toast.error("Failed to unlike post");
      const response = await fetch(
        `/api/like-post?likeId=${likeId}&postId=${publication.publication.postId}&userId=${publication.publication.user.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );

      if (response.ok) {
        decrement();
      }
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };

  const increLike = async () => {
    if (likeId) return toast.error("You have already liked this post");
    try {
      const response = await fetch(
        `/api/like-post?postId=${publication.publication.postId}&userId=${publication.publication.user.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );

      if (response.ok) {
        increment();
      }
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };

  const handleReact = () => {
    if (!isLoggedIn) {
      return toast.error("You need to login first to like a post");
    }
    toggleReact();
    hasReacted ? decreLike() : increLike();
  };

  return (
    <div
      className={cn(
        hasReacted ? "text-brand-500" : "ld-text-gray-500",
        "flex items-center space-x-1"
      )}
    >
      <motion.button
        aria-label="Like"
        className={cn(
          hasReacted ? "hover:bg-brand-300/20" : "hover:bg-gray-300/20",
          "rounded-full p-1.5 outline-offset-2"
        )}
        whileTap={{ scale: 0.9 }}
      >
        <Tooltip
          content={hasReacted ? "Unlike" : "Like"}
          placement="top"
          withDelay
        >
          <div onClick={handleReact}>
            {hasReacted ? (
              <HeartIconSolid className={iconClassName} />
            ) : (
              <HeartIcon className={iconClassName} />
            )}
          </div>
        </Tooltip>
      </motion.button>
      {reactions && (
        <span className="text-[11px] sm:text-xs">{nFormatter(reactions)}</span>
      )}
    </div>
  );
};

export default Like;
