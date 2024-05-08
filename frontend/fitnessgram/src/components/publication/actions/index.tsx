import { memo } from "react";
import Comment from "./Comment";
import Like from "./Like";

const PublicationActions = (publication: any, showCount = true) => {
  return (
    <span className="-ml-2 mt-2 flex flex-wrap items-center gap-x-6 gap-y-1 sm:gap-8">
      <Comment publication={publication} showCount={showCount} />
      <Like publication={publication} showCount={showCount} />
    </span>
  );
};

export default memo(PublicationActions);