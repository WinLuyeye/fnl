"use client";
import AboutFNL from "@/components/AboutFNL";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Text from "@/components/Text";
import WhyAttend from "@/components/WhyAttend";

export default function Home() {

  return (
    <main>
      <Navbar />
      <Hero />
      <AboutFNL />
      <WhyAttend />
      <Text />
    </main>
  );
}