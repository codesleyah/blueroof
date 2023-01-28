import Link from "next/link"
import Image from "next/image"
import { ChatBubbleIcon, Share1Icon, DownloadIcon } from "@radix-ui/react-icons"
import UserAvater from "../../avatar/Avatar"

export default function  QouteCard(){
    return (
       <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-start gap-2">
                <UserAvater />
                <text>Wallace Mukoka</text>
            </div>
            <Image src="/images/qoute.png" height={400} width={400} alt="qoute"/>
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <text className="flex flex-row items-center gap-1"><ChatBubbleIcon /> 0</text>
                        <Share1Icon />
                    </div>
                    <DownloadIcon />
                </div>
                <div className="flex items-center justify-start">
                    <text>Some monday motivation right here fellaz!</text>
                </div>
            </div>
       </div>
    )
}
