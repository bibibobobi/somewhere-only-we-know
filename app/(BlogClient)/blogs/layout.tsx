import BlogNav from "@/app/(BlogClient)/_components/blog-nav";
import "@/app/globals.css";
import CustomThemeProvider from "@/utils/custom-theme-provider";
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Bibo｜Blogs",
  description: "Somewhere Only We Know",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} h-full bg-zinc-50 text-indigo-950 selection:bg-violet-200 dark:bg-slate-950 dark: dark:text-zinc-50 dark:selection:bg-violet-400`}
      >
        <CustomThemeProvider>
          <BlogNav />
          <main className="mx-auto max-w-5xl px-6">{children}</main>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
