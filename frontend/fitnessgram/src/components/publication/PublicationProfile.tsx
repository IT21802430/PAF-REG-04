import type { FC, ReactNode } from "react";
import {
  CheckBadgeIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { memo } from "react";
import Slug from "../shared/Slug";

interface FeedUserProfileProps {
  isVerified: boolean;
  profile: any;
  publicationId: string;
  source?: string;
  timestamp: Date;
}

const PublicationProfile: FC<FeedUserProfileProps> = ({
  isVerified = false,
  profile,
  publicationId,
  source,
  timestamp,
}) => {
  const WrappedLink = ({ children }: { children: ReactNode }) => (
    <Link
      className="truncate outline-none hover:underline focus:underline"
      href={"/"}
    >
      {children}
    </Link>
  );

  return (
    <div className="flex max-w-sm flex-wrap items-center">
      <WrappedLink>
        <span className="font-semibold">user name</span>
      </WrappedLink>
      <WrappedLink>
        <Slug className="ml-1 truncate text-sm" slug={"slug"} />
      </WrappedLink>
      {isVerified ? (
        <CheckBadgeIcon className="text-brand-500 ml-1 size-4" />
      ) : null}
      {timestamp ? (
        <span className="ld-text-gray-500 truncate">
          <span className="mx-1">·</span>
          <Link
            className="text-xs hover:underline"
            href={`/posts/${publicationId}`}
          >
            {timestamp.toDateString()}
          </Link>
        </span>
      ) : null}
    </div>
  );
};

export default memo(PublicationProfile);
