import { FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between h-10 px-12 bg-regal-blue">
      <div className="flex items-center justify-center gap-4">
        <Link href="https://t.me/volatilityplus">
          <FaTelegram className="text-2xl text-white" />
        </Link>
        <Link href=" https://wa.me/263718589710">
          <FaWhatsapp className="text-2xl text-white" />
        </Link>
        <Link href="https://www.instagram.com/niccyrilofficial/">
          <FaInstagram className="text-2xl text-white" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a className="font-sans text-xs font-bold text-white"></a>
      </div>
    </div>
  );
}


