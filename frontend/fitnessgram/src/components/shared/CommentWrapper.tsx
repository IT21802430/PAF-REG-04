import type { FC, ReactNode } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import cn from "@/utils/cn";

interface CommentWrapperProps {
  children: ReactNode | ReactNode[];
  className?: string;
}

const CommentWrapper: FC<CommentWrapperProps> = ({
  children,
  className = "",
}) => {
  const { pathname, push } = useRouter();

  return (
    <motion.article
      animate={{ opacity: 1 }}
      className={cn(className)}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
    >
      {children}
    </motion.article>
  );
};

export default CommentWrapper;
