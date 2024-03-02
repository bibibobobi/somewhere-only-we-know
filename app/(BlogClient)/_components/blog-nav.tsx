import Link from "next/link";

export default function BlogNav() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div>Bibo</div>
        </Link>
        <div>theme</div>
      </div>
    </div>
  );
}
