"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import img from "../public/construction.png";
import logo from "../public/LogoFNL.png";

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  const text = {
    fr: {
      title: "EN CONSTRUCTION",
      description: "Notre site web est actuellement en construction.",
      emailPlaceholder: "Entrez votre adresse email",
      button: "PRÉVENEZ-MOI",
      footer: "Soyez informé dès le lancement",
      company: "Forum National de la Logistique - RDC",
    },
    en: {
      title: "UNDER CONSTRUCTION",
      description: "Our website is currently under construction.",
      emailPlaceholder: "Enter your email address",
      button: "NOTIFY ME",
      footer: "Be informed at launch",
      company: "Forum National de la Logistique - RDC",
    },
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl text-center">

        {/* Language Switch */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLang("fr")}
            className={`cursor-pointer px-3 py-1 border ${
              lang === "fr"
                ? "bg-[#284173] text-white"
                : "bg-white text-black"
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLang("en")}
            className={`cursor-pointer px-3 py-1 border ${
              lang === "en"
                ? "bg-[#284173] text-white"
                : "bg-white text-black"
            }`}
          >
            EN
          </button>
        </div>

        {/* Logo + Nom */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src={logo}
            alt="Logo"
            width={90}
            height={90}
            className="object-contain mb-2"
          />
          <h2 className="text-lg sm:text-xl font-semibold text-black">
            {text[lang].company}
          </h2>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#284173] mb-6"
        >
          {text[lang].title}
        </motion.h1>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Image
            src={img}
            alt="Construction"
            width={200}
            height={200}
            className="object-contain"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-black mb-6 text-sm sm:text-base"
        >
          {text[lang].description}
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <input
            type="email"
            placeholder={text[lang].emailPlaceholder}
            className="text-black px-4 py-3 w-full sm:w-auto flex-1 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#284173]"
          />
          <button className="px-6 py-3 text-white font-semibold bg-[#284173] hover:bg-[#f9c253] hover:text-black transition cursor-pointer">
            {text[lang].button}
          </button>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-black text-sm mt-6"
        >
          {text[lang].footer}
        </motion.p>
      </div>
    </main>
  );
}