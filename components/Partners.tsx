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
  partners: Partner[];
};

const partnersData: Category[] = [
  {
    title: 'Partenaires Institutionnels',
    partners: [
      { name: 'Ministère des Transports', logo: '/images/p1.png' },
      { name: 'ANAPI', logo: '/images/p2.png' },
      { name: 'FEC', logo: '/images/p3.png' },
    ],
  },
  {
    title: 'Sponsors Gold',
    partners: [
      { name: 'Bolloré Logistics', logo: '/images/p4.png' },
      { name: 'DHL', logo: '/images/p5.png' },
    ],
  },
  {
    title: 'Sponsors Silver',
    partners: [
      { name: 'CMA CGM', logo: '/images/p6.png' },
      { name: 'MSC', logo: '/images/p7.png' },
      { name: 'Maersk', logo: '/images/p8.png' },
    ],
  },
];

const Partners: FC = () => {
  return (
    <section className="bg-gray-50 py-24 text-[#0A1F44]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16"
        >
          Nos <span className="text-[#F2B233]">Partenaires</span>
        </motion.h2>

        {/* CATEGORIES */}
        <div className="space-y-16">
          {partnersData.map((category, i) => (
            <div key={i}>

              {/* CATEGORY TITLE */}
              <motion.h3
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xl font-semibold mb-8"
              >
                {category.title}
              </motion.h3>

              {/* LOGOS GRID */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
                {category.partners.map((partner, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: j * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-center group"
                  >

                    <div className="relative w-[140px] h-[70px]">
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