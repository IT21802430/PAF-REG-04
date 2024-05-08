import cn from "@/utils/cn";
import { Image } from "../ui/Image";
import Slug from "./Slug";
import { FC, memo } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

const UserProfile = ({
  profileId,
  name = "",
  isBig = false,
  avatarImg = "",
  slugWithPrefix = "none",
}: {
  profileId: string | number;
  name?: string;
  isBig?: boolean;
  avatarImg?: string;
  slugWithPrefix?: string;
}) => {
  const UserAvatar = () => (
    <Image
      alt={`user ${name}`}
      className={cn(
        isBig ? "size-14" : "size-11",
        "rounded-full border bg-gray-200 dark:border-gray-700"
      )}
      height={isBig ? 56 : 44}
      loading="lazy"
      src={`${avatarImg}`}
      width={isBig ? 56 : 44}
    />
  );

  const UserName = () => (
    <>
      <div className="flex max-w-sm items-center">
        <div className={cn(isBig ? "font-bold" : "text-md", "grid")}>
          <div className="truncate font-semibold text-gray-600">{name}</div>
        </div>
      </div>
      <div>
        <Slug className="text-sm" slug={slugWithPrefix} />
      </div>
    </>
  );

  const UserInfo: FC = () => {
    return (
      <>
        <div className="mr-8 flex items-center space-x-3">
          <UserAvatar />
          <div>
            <UserName />
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="flex items-center justify-between">
      <Link as={`/user/${profileId}`} href={`/user/${profileId}`}>
        <UserInfo />
      </Link>
      <Button> Follow </Button>
    </div>
  );
};

export default memo(UserProfile);