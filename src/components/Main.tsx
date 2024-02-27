import Image from "next/image";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function Main() {
  return (
    <div className="h-80vh w-full text-center pt-48 text-white">
      <p className="text-5xl font-newYork text-purple-200 pb-4">
        Your Zodiac, Your Daily Forecast
      </p>
      <p className="text-xl text-purple-200">
        Stardust is an app where you can find your zodiac sign and get your
        daily horoscopes!
      </p>
      <Spline
        scene="https://prod.spline.design/bt1hG-DMNt81VmKE/scene.splinecode"
        style={{ height: "500px", width: "100%" }}
      />

      <button className="mt-4 px-6 py-3 bg-rgb-dark text-white rounded-30 text-xl">
        <a href="https://stardust-horoscope.vercel.app/">
          ✴︎ Check Your Horoscope Today ✴︎
        </a>
      </button>
    </div>
  );
}
