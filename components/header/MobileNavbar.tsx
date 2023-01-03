import Link from "next/link";

export default function MobileNavbar() {
  return (
    <div className="flex sm:hidden items-center justify-around gap-4 h-12 border-t-2 border-regal-blue fixed  bottom-0 w-full z-50 bg-transparent-white text-white">
      <Link href="#home" className="font-sans text-base font-semibold">
        Home
      </Link>
      <Link href="#results" className="font-sans text-base font-semibold">
        Results
      </Link>
      <Link href="https://t.me/theblueroof" className="font-sans text-base font-semibold">Contact</Link>
    </div>
  );
}
