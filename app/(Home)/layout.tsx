import Nav from "@/app/(Home)/_components/nav";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Some Where Only We Know",
  description: "Hi there, I'm Bibo, a self-taught web developer. This is my portfolio site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
