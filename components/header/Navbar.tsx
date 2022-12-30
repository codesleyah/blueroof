import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex items-center justify-center md:justify-between px-12 py-4 w-full bg-transparent-white z-50 border-b-2 border-blue-900">
      <div>
        <p className="font-sans text-2xl font-bold text-blue-900">BlueRoof</p>
      </div>
      <div className="hidden sm:flex items-center justify-center gap-4">
        <Link href="#home" className="font-sans text-base font-semibold">
          Home
        </Link>
        <Link href="#results" className="font-sans text-base font-semibold">
          Results
        </Link>
        <Link href="https://t.me/volatilityplus">Contact</Link>
      </div>
    </div>
  );
}
