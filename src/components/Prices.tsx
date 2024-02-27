import Image from "next/image";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function Price() {
  return (
    <div className="flex-column justify-center items-center text-center">
      <h2 className="text-4xl font-bold mb-4">Pricing</h2>
      <p className="text-xl mb-12">
        Choose the plan that suits you best and enjoy daily horoscopes with
        Stardust
      </p>
      <div className="flex justify-center items-center">
        <style jsx>{`
          @media (max-width: 1000px) {
            .flex {
              flex-direction: column;
            }
          }
        `}</style>
        <div className="mx-4" style={{ width: "270px", height: "500px" }}>
          <div className="bg-purple-200 flex-column justify-center items-center p-8 rounded-30 text-black text-center w-250 border border-dotted border-2 border-purple-800">
            <Spline
              scene="https://prod.spline.design/7Gipfrp4Z2nIkF3O/scene.splinecode"
              style={{ height: "100px", width: "170px" }}
            />
            <p className="text-4xl font-bold font-newYork mb-8">Premium</p>
            <p className="mb-2">
              {" "}
              <span className="text-3xl font-bold">$19.99</span> / month
            </p>
            <p className="mb-4">
              All Basic Features <br />
              Compatibility Chart
              <br />
              Share with your Friends
            </p>
            <button className="mt-4 px-6 py-3 bg-rgb-dark text-white rounded-30">
              ✴︎ Buy Now ✴︎
            </button>
          </div>
        </div>

        <div className="mx-4" style={{ width: "270px", height: "500px" }}>
          <div className="bg-purple-200 flex-column justify-center items-center p-8 rounded-30 text-black text-center border border-dotted border-2 border-purple-800">
            <Spline
              scene="https://prod.spline.design/tzSIrLb2KzCjAVkz/scene.splinecode"
              style={{ height: "100px", width: "160px" }}
            />
            <p className="text-4xl font-bold font-newYork mb-8">Basic</p>
            <p className="mb-2">
              <span className="text-3xl font-bold">$0.00</span> / month
            </p>
            <p className="mb-4">
              Find Your Zodiac <br />
              Daily Horoscope <br />
              Horoscope Diary
            </p>
            <button className="mt-4 px-6 py-3 bg-rgb-dark text-white rounded-30">
              ✴︎ Buy Now ✴︎
            </button>
          </div>
        </div>

        <div className="mx-4" style={{ width: "270px", height: "500px" }}>
          <div className="bg-purple-200 flex-column justify-center items-center p-8 rounded-30 text-black text-center border border-dotted border-2 border-purple-800">
            <Spline
              scene="https://prod.spline.design/5jGRFFG8Upb8uS6A/scene.splinecode"
              style={{ height: "100px", width: "180px" }}
            />
            <p className="text-4xl font-bold font-newYork mb-8">Deluxe</p>
            <p className="mb-2">
              <span className="text-3xl font-bold">$29.99</span> / month
            </p>
            <p className="mb-4">
              All Premium Features <br />
              Chat with AI <br />
              Tarot Card Reading
            </p>
            <button className="mt-4 px-6 py-3 bg-rgb-dark text-white rounded-30">
              ✴︎ Buy Now ✴︎
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
