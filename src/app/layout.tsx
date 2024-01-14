import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "book-portal",
  description: "Book portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="border-gray-600 border rounded-xl w-[80%] h-[95vh] mx-auto mt-5">
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
