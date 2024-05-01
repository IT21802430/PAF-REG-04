import cn from "@/utils/cn";
import Link from "next/link";
import { Card } from "../ui/Card";

function PublicationPreview({ post }: { post: any }) {
    const UserAvatar = () => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
        alt={`user ${post.user.name}`}
        className={cn("rounded-full border bg-gray-200 dark:border-gray-700")}
        height={34}
        loading="lazy"
        src={`${post.user.imageLink}`}
        width={34}
        />
    );

    return (
        <Card className="p-4" forceRounded>
            <Link href={`/posts/${post.postId}`}>
                <div className="flex items-center gap-2 justify-between">
                    <UserAvatar />
                    <div className="w-full justify-start">
                        <h1 className="text-gray-600 text-sm">{post.title}</h1>
                        <p className="text-gray-300 text-xs truncate flex-nowrap">
                            {post.content}
                        </p>
                    </div>
                </div>
            </Link>
        </Card>
    );
}

export default PublicationPreview;