import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { FullScreen } from "react-full-screen";

export default function ScreenShots() {
  return (
    <div
      id="results"
      className="flex flex-col items-center justify-center gap-4 py-12 px-12"
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <text className="font-sans text-2xl font-bold">Results</text>
        <text className="font-sans text-base -mt-4">See what we do</text>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          "im1.jpg",
          "shot.jpg",
          "im3.jpg",
          "im4.jpg",
          "im5.jpg",
          "im6.jpg",
          "im7.jpg",
          "im8.jpg",
        ].map((item, i) => (
          <div key={i}>
            <div>
              <Image
                src={`/images/${item}`}
                alt="Picture of the author"
                width={250}
                height={350}
                className="shadow-lg rounded-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
