import type { StateSnapshot, VirtuosoHandle } from "react-virtuoso";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { type FC, useRef, useState, useEffect } from "react";
import { Virtuoso } from "react-virtuoso";
import PublicationsShimmer from "../shared/Shimmer/PublicationsShimmer";
import { Card } from "../ui/Card";
import { EmptyState } from "../ui/EmptyState";
import { ErrorMessage } from "../ui/ErrorMessage";
import SinglePublication from "../publication/SinglePublication";

let virtuosoState: any = { ranges: [], screenTop: 0 };

const Feed: FC = () => {
  const virtuoso = useRef<VirtuosoHandle>(null);

  const hasMore = false;
  const [isLoading, setIsLoading] = useState(true);
  const [publications, setPublications] = useState<any[]>();
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-posts?sortDir='desc'");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPublications(data.content);
        setIsLoading(false);
      } catch (error) {
        console.error("Error while fetching:", error);
        setError(error as Error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onScrolling = (scrolling: boolean) => {
    if (!scrolling) {
      virtuoso?.current?.getState((state: StateSnapshot) => {
        virtuosoState = { ...state };
      });
    }
  };

  const onEndReached = async () => {
    if (!hasMore) {
      return;
    }
  };

  if (isLoading) {
    return <PublicationsShimmer />;
  }

  if (publications?.length === 0) {
    return (
      <EmptyState
        icon={<RectangleStackIcon className="size-8" />}
        message="No posts yet!"
      />
    );
  }

  if (error) {
    return (
      <ErrorMessage
        className="text-gray-700"
        error={error}
        title="Failed to load explore feed"
      />
    );
  }

  return (
    <Card>
      <Virtuoso
        className="virtual-divider-list-window"
        computeItemKey={(index, publication) => `${publication.id}-${index}`}
        data={publications}
        endReached={onEndReached}
        isScrolling={onScrolling}
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
        restoreStateFrom={
          virtuosoState.ranges.length === 0
            ? virtuosoState?.current?.getState((state: StateSnapshot) => state)
            : virtuosoState
        }
        useWindowScroll
      />
    </Card>
  );
};

export default Feed;