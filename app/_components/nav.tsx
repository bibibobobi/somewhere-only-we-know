"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoSrc from "/public/icons/bibologo.svg";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
];

const headerClass = `
    flex justify-between items-center sm:px-16 px-8 py-4 
    max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0
  `;

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className={headerClass}>
      <Link href="/">
        <Image src={logoSrc} alt="logo" priority />
      </Link>

      <nav className="flex text-lg gap-7 font-normal tracking-wider">
        {navLinks.slice(1).map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={link.name}
              className={`${
                isActive ? "text-violet-300" : "text-slate-500"
              } hover:text-slate-400`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
