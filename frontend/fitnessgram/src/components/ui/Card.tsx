import cn from "@/utils/cn";
import { ElementType, FC, MouseEvent, ReactNode } from "react";

interface CardProps {
    as?: ElementType;
    children: ReactNode;
    className?: string;
    forceRounded?: boolean;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
  }
  
  export const Card: FC<CardProps> = ({
    as: Tag = "div",
    children,
    className = "",
    forceRounded = false,
    onClick,
  }) => {
    return (
      <Tag
        className={cn(
          forceRounded
            ? "rounded-xl"
            : "rounded-none border-x-0 sm:rounded-xl sm:border-x",
          "border bg-white  ",
          className
        )}
        onClick={onClick}
      >
        {children}
      </Tag>
    );
};