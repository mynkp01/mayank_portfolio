"use client";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 px-4 my-10">
      <HeroSection />
      <AboutSection/>
    </div>
  );
}
