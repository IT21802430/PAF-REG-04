import cn from "@/utils/cn";
import { FC } from "react";
import { Spinner } from "../ui/Spinner";

interface LoaderProps {
    className?: string;
    message?: string;
    small?: boolean;
}

const Loader: FC<LoaderProps> = ({
    className = "",
    message,
    small = false,
}) => {
    return (
        <div className={cn("space-y-2 text-center font-bold", className)}>
            <Spinner className="mx-auto" size={small ? "sm" : "md"} />
            {message ? (
                <div className={cn({ "text-sm text-gray-500": small })}>{message}</div>
            ) : null}
        </div>
    );
};

export default Loader;