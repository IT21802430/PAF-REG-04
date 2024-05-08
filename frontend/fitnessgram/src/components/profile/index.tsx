import React, { useEffect, useRef, useState } from "react";
import { GridItemEight, GridItemFour, GridLayout } from "../ui/GridLayout";
import MetaTags from "../common/MetaTags";
import { useRouter } from "next/router";
import ProfilePageShimmer from "./Shimmer";
import { Card } from "../ui/Card";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";
import SinglePublication from "../publication/SinglePublication";
import { EmptyState } from "../ui/EmptyState";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { ErrorMessage } from "../ui/ErrorMessage";

function ViewProfile(profileList = false) {
  const virtuoso = useRef<VirtuosoHandle>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [user, setUser] = useState<any>();
  const [publications, setPublications] = useState<any[]>();

  const {
    query: { slug },
  } = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/get-user?userId=${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error while fetching:", error);
        setError(error as Error);
        setIsLoading(false);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/get-user-posts?userId=${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error("Error while fetching:", error);
        setError(error as Error);
      }
    };

    fetchPosts();
    fetchUser();
  }, [slug]);

  if (isLoading) {
    return <ProfilePageShimmer />;
  }

  if (error) {
    return (
      <ErrorMessage
        className="text-gray-700"
        error={error}
        title="Failed to load user page"
      />
    );
  }

  return (
    <>
      <MetaTags title="user name fafa profiile" />
      <GridLayout>
        <GridItemFour>
          <div className="mb-4 space-y-9 px-5 sm:px-0">
            <div className="relative size-32 bg-gray-100 sm:size-52">
              {user && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="size-32 rounded-xl ring-8 ring-gray-50 sm:size-52 mx-auto bg-cover"
                  src={user?.imageLink as string}
                  width={200}
                  height={200}
                  alt={user?.name as string}
                />
              )}
            </div>
            <div className="space-y-2">
              <h1 className="rounded-lg text-lg text-gray-800 font-semibold">
                {user?.name}
              </h1>
              <p className="text-gray-700 font-medium text-sm max-w-60">
                {user?.about}
              </p>
            </div>
          </div>
        </GridItemFour>
        <GridItemEight>
          {publications?.length ?? 0 > 0 ? (
            <Card>
              <Virtuoso
                className="virtual-divider-list-window"
                computeItemKey={(index, publication) =>
                  `${publication.id}-${index}`
                }
                data={publications}
                itemContent={(index, publication) => {
                  return (
                    <SinglePublication
                      isFirst={index === 0}
                      isLast={index === (publications?.length || 0) - 1}
                      publication={publication as any}
                    />
                  );
                }}
                ref={virtuoso}
                useWindowScroll
              />
            </Card>
          ) : (
            <EmptyState
              className="text-gray-600"
              icon={<RectangleStackIcon className="size-8" />}
              message="No posts yet!"
            />
          )}
        </GridItemEight>
      </GridLayout>
    </>
  );
}

export default ViewProfile;