import { Card } from "@/components/ui/Card";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import UserProfileShimmer from "./UserProfileShimmer";

const ProfileListShimmer: FC = () => {
  return (
    <Card className="divide-y divide-gray-200">
      <div className="flex items-center space-x-3 px-5 py-6">
        <ArrowLeftIcon className="size-5" />
        <div className="shimmer h-4 w-1/5 rounded-full" />
      </div>
      <UserProfileShimmer className="p-5" showFollowUnfollowButton />
      <UserProfileShimmer className="p-5" showFollowUnfollowButton />
      <UserProfileShimmer className="p-5" showFollowUnfollowButton />
      <UserProfileShimmer className="p-5" showFollowUnfollowButton />
      <UserProfileShimmer className="p-5" showFollowUnfollowButton />
    </Card>
  );
};

export default ProfileListShimmer;