import { Tooltip } from "@/components/ui/Tooltip";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FC } from "react";

const MessagesIcon: FC = () => {
    return (
        <Tooltip content="Messages" placement="bottom">
            <Link
                className="hidden rounded-md px-2 py-1 hover:bg-gray-300/20 md:flex"
                href="/messages"
            >
                <EnvelopeIcon className="size-5 sm:size-6" />
            </Link>
        </Tooltip>
    );
}; 

export default MessagesIcon;