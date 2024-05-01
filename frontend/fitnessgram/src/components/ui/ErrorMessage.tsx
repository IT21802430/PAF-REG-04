import cn from "@/utils/cn";
import { FC } from "react";

interface ErrorMessageProps {
    className?: string;
    error?: Error;
    title?: string;
}
  
export const ErrorMessage: FC<ErrorMessageProps> = ({
    className = "",
    error,
    title,
}) => {
    if (!error) {
        return null;
    }

    return (
        <div
            className={cn(
                "space-y-1 rounded-xl border-2 border-gray-500/50 bg-gray-50 p-4 text-sm /10",
                className
            )}
        >
            <div className="flex flex-wrap items-center gap-2">
                {title ? <h3 className="font-medium">{title}</h3> : null}
            </div>
            <div className="ld-text-gray-500 break-words">{error?.message}</div>
        </div>
    );
};