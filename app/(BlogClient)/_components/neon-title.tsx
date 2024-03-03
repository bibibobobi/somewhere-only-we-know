import { Marck_Script } from "next/font/google";
const font = Marck_Script({ subsets: ["latin"], weight: ["400"] });

export default function NeonTitle() {
  return (
    <div
      className="bg-cover bg-center w-full flex items-center justify-center md:px-8 py-20 md:py-40 text-center"
      style={{ backgroundImage: `url("/images/night.jpg")` }}
    >
      <h1
        className={`${font.className} neonText  text-5xl md:text-6xl select-none`}
      >
        Somewhere Only We Know
      </h1>
    </div>
  );
}
