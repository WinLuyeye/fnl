'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Stat = {
  value: string;
  label: string;
};

type Feature = {
  icon: string;
  title: string;
  desc: string;
};

const stats: Stat[] = [
  { value: '500+', label: 'Participants' },
  { value: '30+', label: 'Entreprises' },
  { value: '10+', label: 'Pays' },
  { value: '20+', label: 'Intervenants' },
];

const features: Feature[] = [
  {
    icon: 'ri-team-line',
    title: 'Networking stratégique',
    desc: 'Rencontrez les décideurs clés du secteur logistique en RDC et en Afrique centrale.',
  },
  {
    icon: 'ri-line-chart-line',
    title: 'Opportunités business',
    desc: 'Accédez à des opportunités d’investissement et de partenariats.',
  },
  {
    icon: 'ri-global-line',
    title: 'Dimension internationale',
    desc: 'Des acteurs régionaux et internationaux réunis à Kinshasa.',
  },
];

const WhyAttend: FC = () => {
  return (
    <section className="bg-white text-[#0A1F44] py-24 relative overflow-hidden">

      {/* subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,178,51,0.08),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16"
        >
          Pourquoi participer au{' '}
          <span className="text-[#F2B233]">FNL 2027</span> ?
        </motion.h2>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              <i className={`${item.icon} text-3xl text-[#F2B233] mb-4`} />
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A1F44] text-white p-6 text-center rounded-sm"
            >
              <div className="text-3xl font-bold text-[#F2B233]">
                {stat.value}
              </div>
              <div className="text-xs tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link
            href="/programme"
            className="bg-[#0A1F44] text-white px-8 py-4 font-semibold flex items-center gap-2 hover:bg-[#F2B233] hover:text-black transition"
          >
            VOIR LE PROGRAMME
            <i className="ri-arrow-right-line"></i>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyAttend;