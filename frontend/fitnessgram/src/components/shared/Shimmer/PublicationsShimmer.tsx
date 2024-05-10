import type { FC } from "react";

import PublicationShimmer from "./PublicationShimmer";
import { Card } from "@/components/ui/Card";

const PublicationsShimmer: FC = () => {
  return (
    <Card className="divide-y-[1px] divide-gray-200">
      <PublicationShimmer />
      <PublicationShimmer />
      <PublicationShimmer />
    </Card>
  );
};

export default PublicationsShimmer;
