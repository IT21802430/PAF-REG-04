import React, { FC } from "react";
import PublicationAvatar from "./PublicationAvatar";
import CommentWrapper from "../shared/CommentWrapper";
import cn from "@/utils/cn";

interface CommentProps {
  feedItem?: any;
  isFirst?: boolean;
  isLast?: boolean;
  publication: any;
  showActions?: boolean;
  showMore?: boolean;
  showThread?: boolean;
  showType?: boolean;
}

const CommentCard: FC<CommentProps> = ({
  isFirst = false,
  isLast = false,
  publication,
}) => {
  return (
    <CommentWrapper
      className={cn(
        isFirst && "rounded-t-xl",
        isLast && "rounded-b-xl border-none",
        "cursor-pointer px-5 pb-3 pt-4 hover:bg-gray-100 border-b border-gray-200"
      )}
    >
      <div className="flex w-full items-start justify-between">
        <PublicationAvatar user={publication.user} />
        <div className="size-[30px]" />
      </div>
      <div className="border-l-4 border-gray-200 bg-gray-50 p-2 mt-4">
        <p className="text-gray-500 text-sm">{publication.content}</p>
      </div>
    </CommentWrapper>
  );
};

export default CommentCard;
