import { APP_NAME } from "@/utils/constant";
import Image from "next/image";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="divider py-12">
      <div className="mx-auto flex w-full max-w-screen-xl items-center px-5 py-8 sm:py-12">
        <Image
          alt="Hey Logo"
          className="mr-5 size-24 sm:mr-8 sm:size-36"
          src="/logo.png"
          width={96}
          height={96}
        />
        <div className="flex-1 space-y-1 tracking-tight sm:max-w-lg">
          <div className="text-2xl font-extrabold sm:text-5xl text-gray-800">
            Welcome to {APP_NAME},
          </div>
          <div className="ld-text-gray-500 text-2xl font-extrabold sm:text-5xl">
            a social network built on React-Spring Boot
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
