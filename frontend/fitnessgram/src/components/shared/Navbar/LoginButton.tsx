import { useRouter } from "next/router";
import { FC, useState } from "react";
import LoginCard from "@/components/auth/SignInCard";
import { Button } from "@/components/ui/Button";
import { ArrowLongLeftIcon, BoltIcon } from "@heroicons/react/24/outline";
import cn from "@/utils/cn";

interface LoginButtonProps {
    className?: string;
    isBig?: boolean;
    title?: string;
} 

const LoginButton: FC<LoginButtonProps> = ({
    className = "",
    isBig = true,
    title = "Login",
}) => {
    const { pathname, push, query } = useRouter(); 
    const [showCard, setShowCard] = useState(false); 
    return (
        <>
            <LoginCard show={showCard} onClose={()=> setShowCard(!showCard)} />
            <Button
                icon={<ArrowLongLeftIcon />}
                className={cn("flex", className)}
                size="md"
                onClick={() => setShowCard(true)}
            >
                <div className="flex gap-2 items-center justify-center">
                {title}
                <BoltIcon className="w-5 h-5" />
                </div>
            </Button>
        </>
    );
}; 

export default LoginButton;