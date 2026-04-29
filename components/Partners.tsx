'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Partner = {
  name: string;
  logo: string;
  label: string;
};

const partners: Partner[] = [
  {
    name: 'CCI Franco-Congolaise',
    logo: '/images/p1.png',
    label: 'Organisateur',
  },
  {
    name: 'Ambassade de France',
    logo: '/images/p2.png',
    label: 'Partenaire Institutionnel',
  },
  {
    name: 'Conseillers du Commerce Extérieur',
    logo: '/images/p3.png',
    label: 'Partenaire',
  },
  {
    name: 'Choose France',
    logo: '/images/p4.png',
    label: 'Partenaire',
  },
];

const Partners: FC = () => {
  return (
    <section id="partenaires" className="bg-white py-28 text-[#0A1F44]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-20 text-left">

          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-widest text-gray-500 uppercase"
          >
            Partenaires
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mt-3"
          >
            Ils nous font confiance
          </motion.h2>

          <p className="text-gray-600 mt-4 max-w-2xl">
            Des partenaires institutionnels et privés de premier plan engagés
            dans le développement de la logistique en Afrique centrale.
          </p>
        </div>

        {/* LOGOS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">

          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >

              <div className="flex justify-center h-[120px]">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={100}
                  className="object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <p className="mt-4 text-sm font-semibold text-gray-600 text-center">
                {partner.label}
              </p>

            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-24 pt-12 border-t border-gray-200 text-left max-w-4xl">

          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Devenez partenaire
          </h3>

          <p className="text-gray-600 mb-8">
            Associez votre marque au plus grand événement logistique en RDC
            et bénéficiez d’une visibilité stratégique auprès des décideurs.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0A1F44] text-white px-8 py-4 font-semibold hover:bg-[#F2B233] hover:text-black transition"
          >
            Contactez-nous
            <i className="ri-mail-line"></i>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Partners;