import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
    const { title, content, links, selectedCategory, imageUrl, publicId } =
        await req.json();

    const authorEmail = "mycodingx@gmail.com";
    if (!title || !content) {
        return NextResponse.json(
            { error: "Title and content are required." },
            { status: 400 }
        );
    }

    try {
        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                links,
                catName: selectedCategory,
                imageUrl,
                publicId,
                authorEmail,
            },
        });
        console.log("Post created");
        return NextResponse.json(newPost);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Could not create post." },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: { author: { select: { name: true } } },
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(posts);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { message: "Somthing went wrong." },
            { status: 500 }
        );
    }
}