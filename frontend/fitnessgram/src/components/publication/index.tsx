import type { NextPage } from "next";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import PublicationPageShimmer from "../shared/Shimmer/PublicationPageShimmer";
import Custom404 from "@/pages/404";
import Custom500 from "@/pages/500";
import { GridItemEight, GridItemFour, GridLayout } from "../ui/GridLayout";
import MetaTags from "../common/MetaTags";
import { Card } from "../ui/Card";
import Footer from "../shared/Footer";
import SinglePublication from "./SinglePublication";
import UserProfile from "../shared/UserProfile";
import CommentCard from "./CommentCard";
import { Virtuoso } from "react-virtuoso";
import WhoToFollow from "../home/Sidebar/WhoToFollow";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { useAuth } from "@/context/AuthProvider";

const ViewPublication: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [publications, setPublications] = useState<any | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [comments, setComments] = useState<any[] | null>(null);
  const [commentText, setCommentText] = useState<string>("");
  const [isNewComment, setIsNewComment] = useState<boolean>(false);
  const { token } = useAuth();

  const {
    pathname,
    query: { id },
  } = useRouter();

  const showQuotes = pathname === "/posts/[id]/quotes";
  const showMirrors = pathname === "/posts/[id]/mirrors";
  const showLikes = pathname === "/posts/[id]/likes";
  const showCollectors = pathname === "/posts/[id]/collectors";

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await fetch(`/api/get-post?postId=${id}`);

        if (response.ok) {
          const data = await response.json();
          setPublications(data);
          setUser(data.user);
          setComments(data.comments);
          setIsLoading(false);
        }
      } catch (error) {
        setError(error as Error);
        console.error("Error while fetching:", error);
      }
    };
    getPost();
  }, [id, isNewComment]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/comment?postId=${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: commentText, token: token }),
      });

      if (response.ok) {
        const data = await response.json();
        setComments((prevComments) => [data, ...(prevComments || [])]);
        setCommentText("");
        setIsNewComment(true);
      }
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };

  if (isLoading) {
    return (
      <PublicationPageShimmer
        profileList={showMirrors || showLikes || showCollectors}
        publicationList={showQuotes}
      />
    );
  }

  if (!publications) {
    return <Custom404 />;
  }

  if (error) {
    return <Custom500 />;
  }

  return (
    <GridLayout>
      <MetaTags title="post" />
      <GridItemEight className="space-y-5">
        <Card>
          <SinglePublication publication={publications as any} />
        </Card>
        <Card>
          <div className="flex flex-col space-y-2 px-2 py-3">
            <p className="text-sm text-start font-bold text-gray-500">
              Add Comment
            </p>
            <form
              className="flex-1 space-y-3"
              spellCheck="false"
              onSubmit={handleSubmit}
            >
              <Input
                type="text"
                placeholder="Write a comment"
                autoCapitalize="none"
                autoCorrect="off"
                autoComplete="off"
                value={commentText}
                onChange={(e) => {
                  setCommentText(e.target.value);
                }}
                className="text-gray-600 mb-2 w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent"
              />
              <Button outline={true} variant="secondary" className="px-2">
                Post Comment
              </Button>
            </form>
          </div>
        </Card>
        {comments && comments.length > 0 && (
          <Card>
            <Virtuoso
              computeItemKey={(index, comments) => `${comments.id}-${index}`}
              data={comments || undefined}
              itemContent={(index, comment) => {
                return (
                  <CommentCard
                    key={comment.id}
                    publication={comment}
                    isFirst={index === 0}
                    isLast={index === (comments?.length || 0) - 1}
                  />
                );
              }}
              useWindowScroll
            />
          </Card>
        )}
      </GridItemEight>
      <GridItemFour className="space-y-5">
        <Card as="aside" className="p-5">
          <UserProfile
            avatarImg={`${user.imageLink}?seed=${user.username}`}
            slugWithPrefix={user.about}
            profileId={user?.id}
            name={user.name}
          />
        </Card>
        <WhoToFollow />
        <Footer />
      </GridItemFour>
    </GridLayout>
  );
};

export default ViewPublication;
