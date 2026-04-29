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
  <div id="home">
    <Navbar />
    <Hero />
  </div>

  <section id="about">
    <AboutFNL />
  </section>

  <section id="why">
    <WhyAttend />
  </section>

  <section id="programme">
    <Programme />
  </section>

  <section id="speakers">
    <Speakers />
  </section>

  <section id="partners">
    <Partners />
  </section>

  <section id="tickets">
    <Tickets />
  </section>

  <section id="faq">
    <FAQ />
  </section>

  <section id="location">
    <LocationAndCTA />
  </section>

  <section id="contact">
    <Footer />
  </section>
</main>
  );
}