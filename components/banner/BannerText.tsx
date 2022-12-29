import styles from "../../styles/Home.module.css";
import Button from "../buttons/Button";

export default function BannerText() {
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
        <Button text="Sign Up Now" onClick={() => {}} />
      </div>
    </div>
  );
}
