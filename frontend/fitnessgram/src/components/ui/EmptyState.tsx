import { FC, ReactNode } from "react";
import { Card } from "./Card";

interface EmptyStateProps {
    hideCard?: boolean;
    icon: ReactNode;
    message: ReactNode;
    className?: string;
}
  
export const EmptyState: FC<EmptyStateProps> = ({
    hideCard = false,
    icon,
    message,
    className,
}) => {
    return (
        <Card
            className={hideCard ? "border-0 !bg-transparent !shadow-none" : className}
            forceRounded
        >
            <div className="grid justify-items-center space-y-2 p-5">
                <div>{icon}</div>
                <div>{message}</div>
            </div>
        </Card>
    );
};