import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
    title: "Application",
    description: "Example description",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Navbar />
                <main className="container mx-auto p-4">{children}</main>
            </body>
        </html>
    );
}
