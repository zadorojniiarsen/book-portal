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
    <html lang="en" className="h-full overflow-hidden">
      <body className={`${inter.className} bg-neutral-900`}>
        <div className="lg:border lg:border-neutral-600 rounded-xl max-w-[1120px] h-[96vh] mx-auto mt-5">
          {children}
        </div>
      </body>
    </html>
  );
}
