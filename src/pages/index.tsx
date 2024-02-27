import Navbar from "@/components/NavigationBar";
import Image from "next/image";
import Main from "@/components/Main";
import Price from "@/components/Prices";
import Footer from "@/components/Footer";
import Newsletter from "@/components/NewsLetter";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <main
      className={`grain-overlay flex min-h-screen flex-col items-center justify-between p-2 bg-gradient-to-b from-darkPurple to-pastelPurple`}
    >
      <header>
        <Navbar />
      </header>
      <Main />
      <Cards />
      <Price />
      <Newsletter />
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
