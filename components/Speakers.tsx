'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Speaker = {
  name: string;
  role: string;
  company: string;
  image: string;
};

const speakers: Speaker[] = [
  {
    name: 'Jean Mbala',
    role: 'Directeur Logistique',
    company: 'Congo Transport Group',
    image: '/images/speaker1.jpg',
  },
  {
    name: 'Sarah Mukendi',
    role: 'CEO',
    company: 'LogiTech Africa',
    image: '/images/speaker2.jpg',
  },
  {
    name: 'David Nkongolo',
    role: 'Expert Supply Chain',
    company: 'Global Freight',
    image: '/images/speaker3.jpg',
  },
  {
    name: 'Amina Kabila',
    role: 'Responsable Innovation',
    company: 'Smart Logistics RDC',
    image: '/images/speaker4.jpg',
  },
];

const Speakers: FC = () => {
  return (
    <section className="bg-white py-24 text-[#0A1F44]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16"
        >
          Intervenants du{' '}
          <span className="text-[#F2B233]">FNL 2027</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative h-[320px] w-full">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-[#0A1F44]/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6">

                  <h3 className="text-white text-lg font-bold">
                    {speaker.name}
                  </h3>

                  <p className="text-sm text-gray-300">
                    {speaker.role}
                  </p>

                  <p className="text-xs text-[#F2B233]">
                    {speaker.company}
                  </p>

                  {/* SOCIALS */}
                  <div className="flex gap-3 mt-4">
                    <i className="ri-linkedin-fill text-white cursor-pointer hover:text-[#F2B233]" />
                    <i className="ri-twitter-x-line text-white cursor-pointer hover:text-[#F2B233]" />
                  </div>

                </div>
              </div>

              {/* NAME BELOW (VISIBLE DEFAULT) */}
              <div className="mt-4">
                <h3 className="font-semibold">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {speaker.role}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Speakers;