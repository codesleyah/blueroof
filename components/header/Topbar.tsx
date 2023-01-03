import { FaWhatsapp, FaTelegram, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between h-10 px-12 bg-regal-blue">
      <div className="flex items-center justify-center gap-4">
        <Link href="https://t.me/theblueroof">
          <FaTelegram className="text-2xl text-white" />
        </Link>
        <Link href="https://www.instagram.com/blue_roof23/">
          <FaInstagram className="text-2xl text-white" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4">
        <a className="font-sans text-xs font-bold text-white"></a>
      </div>
    </div>
  );
}


