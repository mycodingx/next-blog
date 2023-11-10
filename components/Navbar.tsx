"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
    const { status, data: session } = useSession();
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const popupRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutSide = (e: MouseEvent) => {
            if (
                popupRef.current &&
                !popupRef.current.contains(e.target as Node)
            ) {
                setIsPopupVisible(false);
            }
        };
        document.addEventListener("click", handleClickOutSide);
        if (!isPopupVisible) {
            document.removeEventListener("click", handleClickOutSide);
        }

        return () => {
            document.removeEventListener("click", handleClickOutSide);
        };
    }, [isPopupVisible]);

    return (
        <div className="flex justify-between pb-4 border-b mb-4 relative">
            <Link href={"/"}>
                <strong className="text-primary">Blog</strong>
            </Link>
            {status === "authenticated" ? (
                <>
                    <div
                        ref={popupRef}
                        className={`absolute z-30 right-0 top-10 bg-white p-6 shadow-lg rounded-md flex-col gap-2 text-right min-w-[160px]
                        ${isPopupVisible ? "flex" : "hidden"}`}
                    >
                        <div className="text-sm font-bold">
                            {session?.user?.name}
                        </div>
                        <div className="text-sm">{session?.user?.email}</div>
                        <Link
                            onClick={() => setIsPopupVisible(false)}
                            className="hover:underline"
                            href={"/dashboard"}
                        >
                            Dashboard
                        </Link>
                        <Link
                            onClick={() => setIsPopupVisible(false)}
                            className="hover:underline"
                            href={"/create-post"}
                        >
                            Create Post
                        </Link>
                        <button className="btn" onClick={() => signOut()}>
                            Sign Out
                        </button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link
                            className="hidden md:flex items-center gap-1"
                            href={"/create-post"}
                        >
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-primary"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                            <span className="text-sm font-bold text-primary">
                                Create New
                            </span>
                        </Link>
                        <Image
                            src={session?.user?.image || ""}
                            width={40}
                            height={40}
                            alt="Profile Image"
                            className="rounded-full border p-1 cursor-pointer"
                            onClick={() => setIsPopupVisible((prev) => !prev)}
                        />
                    </div>
                </>
            ) : (
                <Link className="btn" href={"/sign-in"}>
                    Sign In
                </Link>
            )}
        </div>
    );
}
