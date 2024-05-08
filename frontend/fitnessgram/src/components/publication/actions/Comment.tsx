import { Tooltip } from "@/components/ui/Tooltip";
import humanize from "@/lib/humanize";
import nFormatter from "@/lib/nFormatter";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { FC } from "react"; 
import { motion } from "framer-motion";

interface CommentProps {
  publication: any;
  showCount: boolean;
}

const Comment: FC<CommentProps> = ({ publication, showCount }) => {
  const { push } = useRouter();
  const count = publication.publication.comments.length;
  const iconClassName = showCount
    ? "w-[17px] sm:w-[20px]"
    : "w-[15px] sm:w-[18px]";

  return (
    <div className="ld-text-gray-500 flex items-center space-x-1">
      <motion.button
        aria-label="Comment"
        className="rounded-full p-1.5 outline-offset-2 hover:bg-gray-300/20"
        onClick={() => {
          push(`/posts/${publication.publication.postId}`);
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Tooltip
          content={count > 0 ? `${humanize(count)} Comments` : "Comment"}
          placement="top"
          withDelay
        >
          <ChatBubbleLeftIcon className={iconClassName} />
        </Tooltip>
      </motion.button>
      {count && (
        <span className="text-[11px] sm:text-xs">{nFormatter(count)}</span>
      )}
    </div>
  );
};

export default Comment;