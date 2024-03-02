import { Black_Ops_One } from "next/font/google";
import Link from "next/link";
import ThemeSwitch from "./theme-switch";

const logoFont = Black_Ops_One({ subsets: ["latin"], weight: ["400"] });

export default function BlogNav() {
  return (
    <header className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div
            className={`${logoFont.className} text-violet-300 text-3xl select-none`}
          >
            Bibo
          </div>
        </Link>
        <ThemeSwitch />
      </div>
    </header>
  );
}
