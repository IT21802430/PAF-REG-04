
import type { FC } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
import { Button } from "@ui/Button";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME, STATIC_IMAGES_URL } from "@/utils/constant";
import MetaTags from "@/components/common/MetaTags";

const Custom404: FC = () => {
  return (
    <div className="page-center flex-col">
      <MetaTags title={`404 • ${APP_NAME}`} />

      <div className="py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-700">Oops, Lost‽</h1>
        <div className="mb-4 text-gray-600">This page could not be found.</div>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <Link href="/">
          <Button
            className="mx-auto flex items-center"
            icon={<HomeIcon className="size-4" />}
            size="lg"
          >
            Go to home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
