import type { FC } from "react"; 

import cn from "../utils/cn"; 
import MetaTags from "@/components/common/MetaTags";
import { FitnessGramFont } from "@/lib/fonts";
import { APP_NAME } from "@/utils/constant";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { HomeIcon } from "@heroicons/react/24/outline";

const Custom500: FC = () => {
    return (
        <div className={cn("page-center flex-col", FitnessGramFont.className)}>
            <MetaTags title={`500 • ${APP_NAME}`} />
            <div className="py-10 text-center">
                <h1 className="mb-4 text-3xl font-bold">
                    Looks like something went wrong!
                </h1>
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
                <div className="ld-text-gray-500 mb-4">
                    We track these errors automatically, but if the problem persists feel free to contact us.
                </div> 
                <Link href="/">
                    <Button
                        className="mx-auto flex items-center"
                        icon={<HomeIcon className="size-4" />}
                        size="lg"
                    >
                        Go to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}; 

export default Custom500;