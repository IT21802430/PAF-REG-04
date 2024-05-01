import cn from "@/utils/cn";
import { FC, ReactNode } from "react";

interface WarningMessageProps {
    className?: string;
    message?: ReactNode;
    title?: string;
}
  
export const WarningMessage: FC<WarningMessageProps> = ({
    className = "",
    message,
    title,
}) => {
    if (!message) {
        return null;
    }

    return (
        <div
            className={cn(
                "space-y-1 rounded-xl border-2 border-yellow-500/50 bg-yellow-50 p-4 /10",
                className
            )}
        >
            {title ? (
                <h3 className="text-sm font-medium text-yellow-800 ">
                    {title}
                </h3>
            ) : null}
            <div className="text-sm text-yellow-700 ">
                {message}
            </div>
        </div>
    );
};