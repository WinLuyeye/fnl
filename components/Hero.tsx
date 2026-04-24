'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Forum National de la Logistique RDC 2027',
      ghost: 'FNL',
      description:
        "Le plus grand événement logistique de la République Démocratique du Congo réunissant les acteurs du transport, de la supply chain et de l’innovation.",
      video: 'https://www.youtube.com/embed/Xbpl9GEjQ-Q?si=huSiYW8kGrjcy9GY', // exemple
    },
    {
      title: 'Connecter les acteurs du transport en Afrique',
      ghost: 'Logistics',
      description:
        "Une plateforme stratégique pour les entreprises, investisseurs et institutions engagés dans la transformation logistique en Afrique centrale.",
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      title: 'Innovation & Supply Chain intelligente',
      ghost: 'Supply',
      description:
        "Digitalisation, corridors logistiques et modernisation des infrastructures au cœur des discussions du FNL 2027.",
      video: 'https://www.youtube.com/embed/ysz5S6PUM-U',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">

      {/* VIDEO SLIDES */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0">
            <iframe
              className="w-full h-full object-cover scale-125"
              src={`${slide.video}?autoplay=1&mute=1&controls=0&loop=1&playlist=${slide.video.split('/').pop()}`}
              allow="autoplay; fullscreen"
            />
          </div>

          <div className="absolute inset-0 bg-[#0f2a3d]/80" />
        </motion.div>
      ))}

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          {/* Ghost */}
          <motion.h1
            key={slides[currentSlide].ghost}
            className="hidden md:block absolute text-[120px] lg:text-[200px] font-extrabold text-white/5 uppercase"
          >
            {slides[currentSlide].ghost}
          </motion.h1>

          <div className="max-w-3xl">

            <motion.h2
              key={slides[currentSlide].title}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            >
              {slides[currentSlide].title}
            </motion.h2>

            <motion.p className="text-gray-300 text-lg mb-8">
              {slides[currentSlide].description}
            </motion.p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/inscription"
                className="bg-white text-black px-6 py-3 font-semibold"
              >
                S’inscrire
              </Link>

              <Link
                href="/sponsors"
                className="border border-white text-white px-6 py-3"
              >
                Devenir sponsor
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-6 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all ${
              index === currentSlide ? 'w-10 bg-white' : 'w-4 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;