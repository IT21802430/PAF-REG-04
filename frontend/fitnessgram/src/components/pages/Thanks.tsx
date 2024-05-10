import type { NextPage } from "next";
import type { FC, ReactNode } from "react";

import Footer from "@components/shared/Footer";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect } from "react";
import { APP_NAME, STATIC_IMAGES_URL } from "@/utils/constant";
import Image from "next/image";

interface BrandProps {
  children: ReactNode;
  logo: string;
  name: string;
  size: number;
  type: "png" | "svg";
  url: string;
}

const Brand: FC<BrandProps> = ({ children, logo, name, size, type, url }) => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="space-y-5 pt-10">
      <Image
        alt={`${name}'s Logo`}
        className="mx-auto"
        src={`${STATIC_IMAGES_URL}/thanks/${logo}-${
          resolvedTheme === "dark" ? "dark" : "light"
        }.${type}`}
        style={{ height: size }}
      />
      <div className="mx-auto pt-2 sm:w-2/3">{children}</div>
      <div>
        <Link
          className="font-bold"
          href={url}
          rel="noreferrer noopener"
          target="_blank"
        >
          ➜ Go to {name}
        </Link>
      </div>
    </div>
  );
};

const Thanks: NextPage = () => {
  return (
    <>
      <div className="flex h-48 w-full items-center justify-center bg-gray-400">
        <div className="relative text-center">
          <div className="flex items-center space-x-2 text-3xl font-bold text-white md:text-4xl">
            <div>Thank you!</div>
            <HeartIcon className="size-7 text-pink-600" />
          </div>
          <div className="text-white">for supporting our community</div>
        </div>
      </div>
      <div className="relative">
        <div className="flex justify-center">
          <div className="max-w-3/4 relative mx-auto rounded-lg lg:w-2/4">
            <div className="max-w-none space-y-10 divide-y px-5 pb-10 text-center text-gray-900">
              <Brand
                logo="vercel"
                name="Vercel"
                size={40}
                type="svg"
                url={"https://vercel.com"}
              >
                Vercel combines the best developer experience with an obsessive
                focus on end-user performance. Vercel platform enables frontend
                teams to do their best work.
              </Brand>
              <Brand
                logo="4everland"
                name="4EVERLAND"
                size={50}
                type="png"
                url={"https://4everland.org"}
              >
                4EVERLAND is a Web 3.0 cloud computing platform that integrates
                storage, computing, and network core capabilities.
              </Brand>
            </div>
          </div>
        </div>
        <div className="flex justify-center px-5 pb-6 pt-2">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Thanks;
