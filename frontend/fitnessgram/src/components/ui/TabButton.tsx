import cn from "@/utils/cn";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";

interface TabButtonProps {
    active: boolean;
    className?: string;
    icon?: ReactNode;
    name: string;
    onClick: () => void;
    showOnSm?: boolean;
    type?: string;
}
  
const TabButton: FC<TabButtonProps> = ({
    active,
    className = "",
    icon,
    name,
    onClick,
    showOnSm = false,
    type,
}) => {
    const router = useRouter();

    return (
        <button
            aria-label={name}
            className={cn(
                { "text-black ": active },
                { "bg-gray-300 /20": active },
                "hover:bg-gray-300 :bg-gray-300/30",
                "hover:text-black hover:",
                "flex items-center justify-center space-x-2 rounded-lg px-4 py-2 text-sm sm:px-3 sm:py-1.5",
                className
            )}
            onClick={() => {
                if (type) {
                router.replace({ query: { ...router.query, type } }, undefined, {
                    shallow: true,
                });
                }
                onClick();
            }}
            type="button"
        >
            {icon}
            <span className={cn({ "hidden sm:block": !showOnSm })}>{name}</span>
        </button>
    );
};

export default TabButton;