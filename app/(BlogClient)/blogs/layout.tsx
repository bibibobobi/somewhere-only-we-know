import BlogNav from "@/app/(BlogClient)/_components/blog-nav";
import "@/app/globals.css";

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
      <body>
        <BlogNav />
        <main className="mx-auto max-w-5xl px-6">{children}</main>
      </body>
    </html>
  );
}
