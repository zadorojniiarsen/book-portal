import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} bg-neutral-900`}>
        <div className="border-neutral-600 border rounded-xl  max-w-[1120px] h-[95vh] mx-auto mt-5">
          {children}
        </div>
      </body>
    </html>
  );
}
