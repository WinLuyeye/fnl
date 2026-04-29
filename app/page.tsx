"use client";
import AboutFNL from "@/components/AboutFNL";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LocationAndCTA from "@/components/LocationAndCTA";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Programme from "@/components/Programme";
import Speakers from "@/components/Speakers";
import Tickets from "@/components/Tickets";
import WhyAttend from "@/components/WhyAttend";

export default function Home() {

  return (
    <main>
      <Navbar />
      <Hero />
      <AboutFNL />
      <WhyAttend />
      <Programme />
      <Speakers />
      <Partners />
      <Tickets />
      <FAQ />
      <LocationAndCTA />
      <Footer />
    </main>
  );
}