'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const EventDate: FC = () => {
  return (
    <section className="bg-white py-28 text-[#0A1F44] relative overflow-hidden">

      {/* subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(242,178,51,0.12),transparent_60%)]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Dates du <span className="text-[#F2B233]">FNL 2027</span>
        </motion.h2>

        {/* DATE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#0A1F44] text-white inline-block px-12 py-10 shadow-2xl relative"
        >

          {/* decorative border */}
          <div className="absolute inset-0 border border-[#F2B233]/30 -m-2" />

          {/* MAIN DATE */}
          <div className="text-5xl md:text-6xl font-extrabold text-[#F2B233] tracking-wide">
            12 - 14
          </div>

          <div className="text-xl md:text-2xl font-semibold mt-2">
            Juin 2027
          </div>

          <div className="text-gray-300 mt-4 text-sm tracking-wide">
            Kinshasa • République Démocratique du Congo
          </div>

        </motion.div>

        {/* SUB TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-10 max-w-2xl mx-auto"
        >
          Le Forum National de la Logistique réunira les acteurs majeurs du transport,
          de la supply chain et de l’innovation pendant trois jours d’échanges,
          d’opportunités et de transformation.
        </motion.p>

      </div>
    </section>
  );
};

export default EventDate;