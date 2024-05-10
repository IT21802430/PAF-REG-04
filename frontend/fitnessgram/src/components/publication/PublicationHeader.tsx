import type { FC } from "react";

import { XMarkIcon } from "@heroicons/react/24/outline";

import PublicationProfile from "./PublicationProfile";

interface PublicationHeaderProps {
  isVerified?: boolean;
  profile: any;
  targetPublication: any;
  timestamp: Date;
  feedItem?: any;
  isNew?: boolean;
  publication: any;
  quoted?: boolean;
}

const PublicationHeader: FC<PublicationHeaderProps> = ({
  isVerified = false,
  profile,
  targetPublication,
  timestamp,
  feedItem,
  isNew = false,
  publication,
  quoted = false,
}) => {
  return (
    <div className="flex w-full items-start justify-between">
      <PublicationProfile
        isVerified={isVerified}
        profile={profile}
        publicationId={targetPublication.id}
        source={targetPublication.publishedOn?.id}
        timestamp={timestamp}
      />
      <div className="size-[30px]" />
      {quoted && isNew ? (
        <button
          aria-label="Remove Quote"
          className="rounded-full border p-1.5 hover:bg-gray-300/20"
          type="reset"
        >
          <XMarkIcon className="ld-text-gray-500 size-4" />
        </button>
      ) : null}
    </div>
  );
};

export default PublicationHeader;
