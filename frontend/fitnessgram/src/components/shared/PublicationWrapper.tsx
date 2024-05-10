import type { FC, ReactNode } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import cn from "@/utils/cn";

interface PublicationWrapperProps {
  children: ReactNode | ReactNode[];
  className?: string;
  publication?: any;
}

const PublicationWrapper: FC<PublicationWrapperProps> = ({
  children,
  className = "",
  publication,
}) => {
  const { pathname, push } = useRouter();
  return (
    <motion.article
      animate={{ opacity: 1 }}
      className={cn(className)}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      onClick={() => {
        const selection = window.getSelection();
        if (!selection || selection.toString().length === 0) {
          push(`/posts/${publication?.postId}`);
        }
      }}
    >
      {children}
    </motion.article>
  );
};

export default PublicationWrapper;
