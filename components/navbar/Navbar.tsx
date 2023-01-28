import Link from "next/link"
import {TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"


export default function Navbar(){
    return(
        <div className="fixed top-0 w-screen  bg-gray-100 shadow p-4 md:px-64 items-center justify-between flex py-2 h-12 z-10">
            <text>Wallace Mukoka</text>
            <div className="flex items-center justify-between gap-4">
                <Link href="#">
                    <TwitterLogoIcon />
                </Link>
                <Link href="#">
                    <InstagramLogoIcon />
                </Link>
                <Link href="#">
                    <LinkedInLogoIcon />
                </Link>
            </div>
        </div>
    )
}