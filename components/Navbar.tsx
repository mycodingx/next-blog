"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
    const { status } = useSession();
    return (
        <div className="flex justify-between pb-4 border-b mb-4">
            <Link href={"/"}>
                <strong className="text-primary">Blog</strong>
            </Link>
            {status === "authenticated" ? (
                <button className="btn" onClick={() => signOut()}>
                    Sign Out
                </button>
            ) : (
                <Link className="btn" href={"/sign-in"}>
                    Sign In
                </Link>
            )}
        </div>
    );
}
