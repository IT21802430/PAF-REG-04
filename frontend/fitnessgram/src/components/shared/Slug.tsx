import cn from "@/utils/cn";
import { FC } from "react";

interface SlugProps {
  className?: string;
  prefix?: string;
  slug: string;
  useBrandColor?: boolean;
}

const Slug: FC<SlugProps> = ({
  className = "",
  prefix,
  slug,
  useBrandColor = false,
}) => {
  return (
    <span
      className={cn(
        useBrandColor ? "text-brand-500" : "ld-text-gray-500",
        `${className} truncate flex-nowrap`
      )}
    >
      {prefix}
      {slug}
    </span>
  );
};

export default Slug;