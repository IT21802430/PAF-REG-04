import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { APP_NAME } from "@/utils/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import type { FC } from "react";

const SignupCard: FC = () => {
  const { push } = useRouter();
  return (
    <Card as="aside" className="mb-4 space-y-4 p-5">
      <Image
        alt="Dizzy emoji"
        className="mx-auto size-14"
        src="/cdn/dizzy.png"
        height={40}
        width={40}
      />
      <div className="space-y-3 text-center">
        <div className="font-bold">Get your {APP_NAME} profile now!</div>
        <div>
          <Button
            onClick={() => {
              push("/signup");
            }}
            size="lg"
          >
            Signup now
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SignupCard;