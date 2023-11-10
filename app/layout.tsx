import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Blog",
    description: "Next JS Blog App",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NextAuthProvider>
                    <div
                        className="lg:max-w-[900px] lg:px-16 mx-auto 
                py-8 shadow-xl min-h-screen flex flex-col px-8"
                    >
                        <Navbar />
                        <div className="flex-auto">{children}</div>
                        <Footer />
                    </div>
                </NextAuthProvider>
            </body>
        </html>
    );
}
