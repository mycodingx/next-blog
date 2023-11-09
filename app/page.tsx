import CategoriesList from "@/components/CategoriesList";
import Post from "@/components/Post";
import { postsData } from "@/data";

export default function Home() {
    return (
        <main>
            <CategoriesList />
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
                <div className="mt-10">No data found..!!</div>
            )}
        </main>
    );
}
