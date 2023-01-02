import BannerText from "./BannerText";

export default function Banner() {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center w-screen bg-center bg-cover bg-hero bg-blend-darken h-screen"
    >
      <BannerText />
    </div>
  );
}
