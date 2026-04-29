"use client";
import AboutFNL from "@/components/AboutFNL";
import EventDate from "@/components/EventDate";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Programme from "@/components/Programme";
import Speakers from "@/components/Speakers";
import Text from "@/components/Text";
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
      <EventDate />
      <Text />
    </main>
  );
}