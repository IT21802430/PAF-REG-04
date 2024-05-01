import SignUpCard from "@/components/auth/SignUpCard";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/router";
import { FC, useState } from "react";

const SignupButton: FC = () => {
    const { pathname, push, query } = useRouter();
    const [showCard, setShowCard] = useState(false);
    return (
        <>
            <SignUpCard show={showCard} onClose={() => setShowCard(!showCard)} />
            <Button outline size="md" onClick={() => setShowCard(true)}>
                Signup
            </Button>
        </>
    );
}; 

export default SignupButton;