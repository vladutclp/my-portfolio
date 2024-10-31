import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="bg-[#0E1C36] px-32 min-h-screen w-full text-white">
      <NavBar />
      <HeroSection />
    </div>
  );
}
