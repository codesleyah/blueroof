import styles from "../../styles/Home.module.css";
import Button from "../buttons/Button";
import { useRouter } from "next/router";

export default function BannerText() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-8 py-4">
      <div
        className="flex flex-col items-center justify-center gap-4 px-4 py-8 text-white rounded-md"
        style={{ backgroundColor: "#0000008e" }}
      >
        <text className="font-sans text-3xl font-bold">
          Trust. Knowledge. Experience.
        </text>
        <text className="items-center justify-center font-sans text-base">
          No more VIP Fees . Just Open account Using our Patner Broker, Boom you
          welcome to the Blue Roof Trading Group Just Signup Below
        </text>
        <div className="w-full flex items-center justify-center sm:w-1/4">
          <Button
            text="Sign Up Now"
            onClick={() => {
              router.push(
                "https://record.binary.com/_BG8T7jc7Vs26tyDIijdDK2Nd7ZgqdRLk/1/"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
