import BlogNav from "@/app/(BlogClient)/_components/blog-nav";
import "@/app/globals.css";
import CustomThemeProvider from "@/utils/custom-theme-provider";
import { Open_Sans } from "next/font/google";
const font = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Blog｜Some Where Only We Know",
  description:
    "Came from a background in media PR and worked as a part-time translator before making a pivot into engineering. 曾經是媒體公關，兼職翻譯，某天轉職成工程師。",
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
          {children}
        </CustomThemeProvider>
      </body>
    </html>
  );
}
