// import { categoriesData } from "@/data"; Moving form file to db
import { TCategory } from "@/app/types";
import Link from "next/link";

const getCategories = async () => {
    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`);
        const categories = await res.json();
        return categories;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export default async function CategoriesList() {
    const categories = await getCategories();
    return (
        <div className="flex gap-2 text-sm flex-wrap">
            {categories &&
                categories.map((category: TCategory) => (
                    <Link
                        className="px-4 py-1 rounded-md bg-primary text-white cursor-pointer"
                        key={category.id}
                        href={`/categories/${category.catName}`}
                    >
                        {category.catName}
                    </Link>
                ))}
        </div>
    );
}
