import { Image } from "@/components/ui/Image";
import { useAuth } from "@/context/AuthProvider";
import { Menu } from "@headlessui/react";
import { FC } from "react";
import toast from "react-hot-toast";
import MenuTransition from "./MenuTransition";
import { NextLink } from "./MenuItems";
import cn from "@/utils/cn";
import { PencilIcon } from "@heroicons/react/24/outline";

const SignedUser: FC = () => {
    const { logout, currentUser, user } = useAuth(); 
    const Avatar = () => (
        <Image
            alt={currentUser?.name ?? "Profile"}
            className="size-8 cursor-pointer rounded-full border "
            src={
                currentUser?.imageLink ?? "https://api.dicebear.com/8.x/identicon/svg"
            }
        />
    ); 

    function LogOut() {
        localStorage.removeItem("userId");
        user(null);
        logout();
        toast.success("Logged out successfully");
    } 

    return (
        <>
            <Menu as="div">
                <Menu.Button className="flex self-center rounded-full">
                    <Avatar />
                </Menu.Button>
                <MenuTransition>
                    <Menu.Items
                        className="absolute right-0 mt-2 w-48 rounded-xl border bg-white py-1 shadow-sm focus:outline-none text-gray-800"
                        static
                    >
                        <Menu.Item
                            as="div"
                            className=" flex items-center rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                            <div className="flex w-full gap-2">
                                <p className="text-gray-800">Logged in as</p>
                                <p className="truncate underline underline-offset-2">
                                {currentUser?.name ?? "Profile"}
                                </p>
                            </div>
                        </Menu.Item>
                        <div className="divider" />
                        <Menu.Item
                            as={NextLink}
                            className={({ active }: { active: boolean }) =>
                                cn(
                                { "dropdown-active": active },
                                "m-2 rounded-lg border px-2 py-1.5 flex gap-1"
                                )
                            }
                            href="/create"
                        >
                            <PencilIcon className="size-4 fill-black" />
                            <p className="font-semibold text-gray-800 text-xs uppercase">
                                create post
                            </p>
                        </Menu.Item>
                        <div className="divider" />
                        <Menu.Item
                            as="div"
                            className={({ active }: { active: boolean }) =>
                                cn(
                                { "dropdown-active": active },
                                "menu-item rounded-lg border border-red-200"
                                )
                            }
                        >
                        <button onClick={LogOut} className="px-2 flex gap-1">
                            <p className="font-bold text-gray-800 text-xs uppercase w-full text-center">
                                Log out
                            </p>
                        </button>
                        </Menu.Item>
                    </Menu.Items>
                </MenuTransition>
            </Menu>
        </>
    );
}; 

export default SignedUser;