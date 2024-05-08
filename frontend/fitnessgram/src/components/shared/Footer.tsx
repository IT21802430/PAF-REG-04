import cn from "@/utils/cn";
import { APP_NAME } from "@/utils/constant";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  const staffMode = false;
  return (
    <footer
      className={cn(
        staffMode ? "top-28" : "top-20",
        "sticky text-sm max-w-4xl justify-center items-center mx-auto text-gray-700"
      )}
    >
      <div className="mt-4 flex flex-wrap gap-x-[12px] gap-y-2 px-3 lg:px-0">
        <span className="ld-text-gray-500 font-bold">
          &copy; {new Date().getFullYear()} {APP_NAME}.xyz
        </span>
        <Link className="outline-offset-4" href="/terms">
          Terms
        </Link>
        <Link className="outline-offset-4" href="/privacy">
          Privacy
        </Link>
        <Link
          className="outline-offset-4"
          href="https://hey.xyz/discord"
          rel="noreferrer noopener"
          target="_blank"
        >
          Discord
        </Link>
        <Link
          className="outline-offset-4"
          href="https://status.hey.xyz"
          rel="noreferrer noopener"
          target="_blank"
        >
          Status
        </Link>
        <Link
          className="outline-offset-4"
          href="https://feedback.hey.xyz"
          rel="noreferrer noopener"
          target="_blank"
        >
          Feedback
        </Link>
        <Link className="outline-offset-4" href="/rules">
          Rules
        </Link>
        <Link
          className="outline-offset-4"
          href="https://github.com/heyxyz/hey"
          rel="noreferrer noopener"
          target="_blank"
        >
          GitHub
        </Link>
        <button
          className="outline-offset-4"
          onClick={() => console.log("support")}
        >
          Support
        </button>
      </div>
      <div className="mt-4 justify-center flex mx-auto">
        <Link
          className="outline-offset-4 hover:font-bold focus:font-bold"
          href="https://vercel.com"
          rel="noreferrer noopener"
          target="_blank"
        >
          ▲ Powered by Vercel & Spring
        </Link>
      </div>
    </footer>
  );
};

export default Footer;