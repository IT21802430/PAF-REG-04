import cn from "@/utils/cn";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import MessagesIcon from "./MessagesIcon";
import MenuItems from "./MenuItems";
import Search from "../Search";

const Navbar: FC = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [currentProfile, setCurrentProfile] = useState<null | {
        id: string;
        avatarURL: string;
    }>(null);

    const [showMobileDrawer, setShowMobileDrawer] = useState<boolean>(false);

    interface NavItemProps {
        current: boolean;
        name: string;
        url: string;
    } 

    const NavItem = ({ current, name, url }: NavItemProps) => {
        return (
          <Link
            className={cn(
              "cursor-pointer rounded-md px-2 py-1 text-left text-sm font-bold tracking-wide md:px-3",
              {
                "bg-gray-200 text-black  ": current,
                "text-gray-700 hover:bg-gray-200 hover:text-black  :bg-gray-800 :text-white":
                  !current,
              }
            )}
            href={url}
          >
            {name}
          </Link>
        );
    }; 

    const NavItems = () => {
        const { pathname } = useRouter();
    
        return (
          <>
            <NavItem current={pathname === "/"} name="Home" url="/" />
            {/* <NavItem
              current={pathname === "/explore"}
              name="Explore"
              url="/explore"
            /> */}
          </>
        );
    }; 

    return (
        <header className="divider sticky top-0 z-10 w-full bg-white ">
          <div className="container mx-auto max-w-screen-xl px-5">
            <div className="relative flex h-14 items-center justify-between sm:h-16">
              <div className="flex items-center justify-start">
                <button
                  className="inline-flex items-center justify-center rounded-md text-gray-500 focus:outline-none md:hidden"
                  onClick={() => setShowSearch(!showSearch)}
                  type="button"
                >
                  {showSearch ? (
                    <XMarkIcon className="size-6" />
                  ) : (
                    <MagnifyingGlassIcon className="size-6" />
                  )}
                </button>
                <Link
                  className="hidden rounded-full outline-offset-8 md:block"
                  href="/"
                >
                  <Image
                    alt="Logo"
                    className="size-8"
                    height={32}
                    src={"/logo.png"}
                    width={32}
                  />
                </Link>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex items-center space-x-4">
                    <div className="hidden md:block">
                      <Search />
                    </div>
                    <NavItems />
                  </div>
                </div>
              </div>
              <Link
                className={cn("md:hidden", !currentProfile?.id && "ml-[60px]")}
                href="/"
              >
                <Image
                  alt="Logo"
                  className="size-7"
                  height={32}
                  src={"/logo.png"}
                  width={32}
                />
              </Link>
              <div className="flex items-center gap-4">
                {currentProfile ? (
                  <>
                    {/* <ModIcon /> */}
                    <MessagesIcon />
                    {/* <NotificationIcon /> */}
                  </>
                ) : null}
                <MenuItems />
              </div>
            </div>
          </div>
          {showSearch ? (
            <div className="m-3 md:hidden">
              <Search />
            </div>
          ) : null}
        </header>
      );
}; 

export default Navbar;