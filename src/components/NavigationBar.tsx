import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-12 text-white fixed top-0 left-0 right-0 w-full">
      <Link href="/">
        <Image src="/Images/Logo.png" width={100} height={100} alt="Logo" />
      </Link>
      <div className="mt-4 px-6 py-3 bg-rgb-dark text-white rounded-30">
        <a href="https://stardust-horoscope.vercel.app/" >
          Sign Up
        </a>
      </div>
    </div>
  );
}