import cn from "@/utils/cn";
import { 
    BellIcon,
    HomeIcon, 
    Squares2X2Icon 
} from "@heroicons/react/24/outline";
import { 
    BellIcon as BellIconSolid,
    HomeIcon as HomeIconSolid, 
    Squares2X2Icon as Squares2X2IconSolid 
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const BottomNavigation = () => {
    const router = useRouter(); 
    const [currentProfile, setCurrentProfile] = useState<null>(null); 
    const isActivePath = (path: string) => router.pathname === path; 

    return (
        <div className="pb-safe fixed inset-x-0 bottom-0 z-[5] border-t border-gray-200 bg-white md:hidden">
            <div
                className={cn("grid", currentProfile ? "grid-cols-4" : "grid-cols-3")}
            >
                <Link className="mx-auto my-3" href="/">
                {isActivePath("/") ? (
                    <HomeIconSolid className="size-6" />
                ) : (
                    <HomeIcon className="size-6" />
                )}
                </Link>
                <Link className="mx-auto my-3" href="/explore">
                {isActivePath("/explore") ? (
                    <Squares2X2IconSolid className="size-6" />
                ) : (
                    <Squares2X2Icon className="size-6" />
                )}
                </Link>
                <Link className="mx-auto my-3" href="/notifications">
                {isActivePath("/notifications") ? (
                    <BellIconSolid className="size-6" />
                ) : (
                    <BellIcon className="size-6" />
                )}
                </Link>
                {currentProfile && (
                <Link className="mx-auto my-3" href="/">
                    <p>user</p>
                </Link>
                )}
            </div>
            </div>
    );
}; 

export default BottomNavigation;