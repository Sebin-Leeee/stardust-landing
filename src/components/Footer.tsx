import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col p-1 w-full items-center gap-2">
      <a href="https://github.com/raxron/StarDust.git">
        Click to see our GitHub →
      </a>
      <h1>© Sebin Lee 2024 </h1>
    </div>
  );
}
