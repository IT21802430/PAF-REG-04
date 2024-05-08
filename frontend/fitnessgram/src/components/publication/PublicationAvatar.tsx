import cn from "@/utils/cn";
import { Image } from "../ui/Image";
import { FC } from "react";
import Link from "next/link";
import Slug from "../shared/Slug";

const PublicationAvatar = (user: any, isBig = false) => {
  const avatarImg = `${user.user.imageLink}?seed=${user.user?.id}`;
  const UserAvatar = () => (
    <Image
      alt={`user ${name}`}
      className={cn(
        isBig ? "size-10" : "size-6",
        "rounded-full border bg-gray-200 dark:border-gray-700"
      )}
      height={isBig ? 56 : 34}
      loading="lazy"
      src={`${avatarImg}`}
      width={isBig ? 56 : 34}
    />
  );

  const UserName = () => (
    <>
      <div className="flex max-w-sm items-center">
        <div className={cn(isBig ? "font-bold" : "text-md", "grid")}>
          <div className="truncate font-semibold text-gray-600">
            {user.user.name}
          </div>
        </div>
      </div>
      <div>
        <Slug className="text-sm" slug={user.user.about} />
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
      {user.user.profileId ? (
        <Link
          as={`/user/${user.user.slugWithPrefix}`}
          href={`/user/${user.user.slugWithPrefix}/${user.user.profileId}`}
        >
          <UserInfo />
        </Link>
      ) : (
        <UserInfo />
      )}
    </div>
  );
};

export default PublicationAvatar;