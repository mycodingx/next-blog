import Image from "next/image";

export default function SignInBtns() {
    return (
        <div>
            <h1 className="text-center mt-8">Sign In</h1>
            <div className="mt-4 flex flex-col items-center justify-center gap-4">
                <button className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition">
                    <span>
                        <Image
                            src={"/github-logo.svg"}
                            width={30}
                            height={30}
                            alt="Github"
                        />
                    </span>
                    Sign In With Github
                </button>
                <button className="flex items-center border p-4 rounded-full gap-4 hover:bg-slate-100/25 transition">
                    <span>
                        <Image
                            src={"/google-logo.svg"}
                            width={30}
                            height={30}
                            alt="Google"
                        />
                    </span>
                    Sign In With Google
                </button>
            </div>
        </div>
    );
}
