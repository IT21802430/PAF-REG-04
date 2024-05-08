import cn from "@/utils/cn";
import { FC, memo } from "react";
import PublicationAvatar from "./PublicationAvatar";
import PublicationBody from "./PublicationBody";
import PublicationWrapper from "../shared/PublicationWrapper"; 
import PublicationActions from "./actions";

interface SinglePublicationProps {
  feedItem?: any;
  isFirst?: boolean;
  isLast?: boolean;
  publication: any;
  showActions?: boolean;
  showMore?: boolean;
  showThread?: boolean;
  showType?: boolean;
}

const SinglePublication: FC<SinglePublicationProps> = ({
  feedItem,
  isFirst = false,
  isLast = false,
  publication,
}) => {
  return (
    <PublicationWrapper
      className={cn(
        isFirst && "rounded-t-xl",
        isLast && "rounded-b-xl",
        "cursor-pointer px-5 pb-3 pt-4 hover:bg-gray-100"
      )}
      publication={publication}
    >
      <div className="flex items-start flex-col">
        <PublicationAvatar user={publication.user} />
        <div className="w-full pl-12 mt-4">
          <PublicationBody publication={publication} />
          <PublicationActions publication={publication} />
        </div>
      </div>
    </PublicationWrapper>
  );
};

export default memo(SinglePublication);