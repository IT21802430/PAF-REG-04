import type { FC } from "react";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { filteredUsers } from "@/lib/data";
import UserProfile from "@/components/shared/UserProfile";

// import Suggested from "../Suggested";

const Title: FC = () => (
  <p className="text-lg font-semibold text-gray-800">Who to Follow</p>
);

const WhoToFollow: FC = () => {
  const [error, setError] = useState<Error | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [recommedUsers, setRecommedUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-users");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setRecommedUsers(data.slice(0, 5));
        setIsLoading(false);
      } catch (error) {
        console.error("Error while fetching:", error);
        setError(error as Error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <Card as="aside" className="space-y-4 p-5">
        <Title />
        <div className="pb-1 pt-2">
          <div className="shimmer h-3 w-5/12 rounded-full" />
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <ErrorMessage
        className="text-gray-700"
        error={error}
        title="Failed to load recommendations"
      />
    );
  }

  return (
    <>
      <Card as="aside" className="space-y-4 p-5">
        <Title />
        {recommedUsers.map((profile) => (
          <div
            className="flex items-center space-x-3 truncate"
            key={profile?.id}
          >
            <div className="w-full">
              <UserProfile
                avatarImg={`${profile.imageLink}?seed=${profile?.id}`}
                slugWithPrefix={profile.about}
                profileId={profile?.id}
                name={profile.name}
              />
            </div>
          </div>
        ))}
      </Card>
    </>
  );
};

export default WhoToFollow;