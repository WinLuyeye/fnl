'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Partner = {
  name: string;
  logo: string;
};

type Category = {
  title: string;
  subtitle: string;
  partners: Partner[];
};

const partnersData: Category[] = [
  {
    title: 'Partenaires Institutionnels',
    subtitle: 'Organisations publiques et institutions de régulation',
    partners: [
      { name: 'Ministère des Transports', logo: '/images/p1.png' },
      { name: 'ANAPI', logo: '/images/p2.png' },
      { name: 'FEC', logo: '/images/p3.png' },
    ],
  },
  {
    title: 'Sponsors Gold',
    subtitle: 'Acteurs majeurs du transport et de la logistique',
    partners: [
      { name: 'Bolloré Logistics', logo: '/images/p4.png' },
      { name: 'DHL', logo: '/images/p5.png' },
    ],
  },
  {
    title: 'Sponsors Silver',
    subtitle: 'Partenaires stratégiques et solutions logistiques',
    partners: [
      { name: 'CMA CGM', logo: '/images/p6.png' },
      { name: 'MSC', logo: '/images/p7.png' },
      { name: 'Maersk', logo: '/images/p8.png' },
    ],
  },
];

const Partners: FC = () => {
  return (
    <section className="bg-[#0A1F44] text-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Nos <span className="text-[#F2B233]">Partenaires</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl">
            Des institutions et entreprises qui soutiennent la transformation
            logistique en République Démocratique du Congo.
          </p>
        </motion.div>

        {/* SECTIONS */}
        <div className="space-y-20">

          {partnersData.map((category, i) => (
            <div key={i}>

              {/* CATEGORY HEADER */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {category.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {category.subtitle}
                </p>
              </motion.div>

              {/* LOGOS STRIP (premium layout) */}
              <div className="flex flex-wrap gap-10 items-center">

                {category.partners.map((partner, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: j * 0.08 }}
                    viewport={{ once: true }}
                    className="group relative flex items-center justify-center"
                  >

                    {/* CARD */}
                    <div className="relative w-[160px] h-[90px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center p-4 overflow-hidden">

                      {/* subtle glow hover */}
                      <div className="absolute inset-0 bg-[#F2B233]/0 group-hover:bg-[#F2B233]/10 transition" />

                      {/* LOGO */}
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition duration-300"
                      />

                    </div>

                  </motion.div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Partners;