'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Pillar = {
  icon: string;
  title: string;
  desc: string;
};

const pillars: Pillar[] = [
  {
    icon: 'ri-truck-line',
    title: 'Transport & Logistique',
    desc: 'Un espace dédié aux enjeux du transport, des infrastructures et de la supply chain en RDC.',
  },
  {
    icon: 'ri-lightbulb-flash-line',
    title: 'Innovation',
    desc: 'Mise en avant des solutions digitales et innovations logistiques adaptées au contexte africain.',
  },
  {
    icon: 'ri-handshake-line',
    title: 'Partenariats',
    desc: 'Favoriser les collaborations entre acteurs publics, privés et investisseurs.',
  },
];

const AboutFNL: FC = () => {
  return (
    <section className="bg-white py-24 text-[#0A1F44]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            C’est quoi le{' '}
            <span className="text-[#F2B233]">FNL</span> ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-8 leading-relaxed"
          >
            Le Forum National de la Logistique (FNL) est une plateforme stratégique
            réunissant les acteurs clés du transport, de la supply chain et de
            l’innovation en République Démocratique du Congo.
            <br /><br />
            Il vise à accélérer la transformation du secteur logistique en favorisant
            les échanges, les investissements et le développement des infrastructures.
          </motion.p>

          {/* PILLARS */}
          <div className="space-y-6">
            {pillars.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <i className={`${item.icon} text-2xl text-[#F2B233]`} />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[450px]"
        >
          <Image
            src="/images/logistique.jpg"
            alt="Forum logistique"
            fill
            className="object-cover"
          />

          {/* overlay card */}
          <div className="absolute bottom-6 left-6 bg-white p-4 shadow-md">
            <div className="text-sm text-gray-500">Depuis</div>
            <div className="text-2xl font-bold text-[#0A1F44]">2027</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutFNL;