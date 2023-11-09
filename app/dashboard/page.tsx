import Post from "@/components/Post";
import { postsData } from "@/data";
import Link from "next/link";

export default function Dashboard() {
    return (
        <div>
            <h1>My Posts</h1>
            {postsData && postsData.length > 0 ? (
                postsData.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        author={post.author}
                        authorEmail={"test@demo.com"}
                        date={post.datepublished}
                        thumbnail={post.thumbnail}
                        category={post.category}
                        title={post.title}
                        content={post.content}
                        links={post.links || []}
                    />
                ))
            ) : (
                <div className="py-6">
                    No posts created yet.{" "}
                    <Link className="link underline" href={"/create-post"}>
                        Create New
                    </Link>
                </div>
            )}
        </div>
    );
}
