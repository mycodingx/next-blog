import Link from "next/link";

export default function Navbar() {
    return (
        <div className="flex justify-between pb-4 border-b mb-4">
            <Link href={"/"}>
                <strong className="text-primary">Blog</strong>
            </Link>
            <Link className="btn" href={"/"}>
                Sign In
            </Link>
        </div>
    );
}
