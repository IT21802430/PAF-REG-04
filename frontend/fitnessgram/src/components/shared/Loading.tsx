import { FC } from "react";
import PageMetatags from "./PageMetatags";
import Image from "next/image";

const Loading: FC = () => {
    return (
        <div className="grid h-screen place-items-center">
            <PageMetatags />
            <Image 
                alt="Logo"
                className="size-28"
                height={112}
                src={"/logo.png"}
                width={112}
            />
        </div>
    );
}; 

export default Loading;