import { FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="items-center justify-between flex bg-blue-900 h-10 px-12">
      <div className="flex items-center justify-center gap-4">
        <Link href="https://t.me/volatilityplus">
          <FaTelegram className="text-white text-2xl" />
        </Link>
        <Link href=" https://wa.me/263718589710">
          <FaWhatsapp className="text-white text-2xl" />
        </Link>
        <Link href="https://www.instagram.com/niccyrilofficial/">
          <FaInstagram className="text-white text-2xl" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a className="font-sans text-xs font-bold text-white">
          +263 71 858 9710
        </a>
      </div>
    </div>
  );
}
