import Link from "next/link";
import { FC } from "react";
import LoginButton from "./LoginButton";
import { useAuth } from "@/context/AuthProvider";
import SignedUser from "./SignedUser";
import SignupButton from "./SignupButton";

export const NextLink = ({ children, href, ...rest }: Record<string, any>) => (
    <Link href={href} {...rest}>
        {children}
    </Link>
); 

const MenuItems: FC = () => {
    const { isLoggedIn } = useAuth(); 

    if (isLoggedIn) {
        return <SignedUser />; 
    } 

    return (
        <div className="flex items-center space-x-2">
            <SignupButton />
            <LoginButton />
        </div>
    );
}; 

export default MenuItems;