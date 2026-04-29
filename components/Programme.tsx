'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

type Session = {
  time: string;
  title: string;
  desc: string;
};

type Day = {
  date: string;
  label: string;
  sessions: Session[];
};

const programme: Day[] = [
  {
    date: 'Jour 1',
    label: 'Ouverture & Vision stratégique',
    sessions: [
      {
        time: '09:00',
        title: 'Cérémonie d’ouverture',
        desc: 'Discours officiels et lancement du forum.',
      },
      {
        time: '10:30',
        title: 'Panel : Transport & Infrastructures',
        desc: 'Défis logistiques en RDC et perspectives.',
      },
      {
        time: '14:00',
        title: 'Networking',
        desc: 'Rencontres entre entreprises et investisseurs.',
      },
    ],
  },
  {
    date: 'Jour 2',
    label: 'Innovation & Investissements',
    sessions: [
      {
        time: '09:00',
        title: 'Conférence : Logistique digitale',
        desc: 'Transformation numérique du secteur.',
      },
      {
        time: '11:00',
        title: 'Pitch startups',
        desc: 'Présentation de solutions innovantes.',
      },
      {
        time: '15:00',
        title: 'Clôture & recommandations',
        desc: 'Synthèse des échanges et perspectives.',
      },
    ],
  },
];

const Programme: FC = () => {
  return (
    <section className="bg-[#0A1F44] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-16"
        >
          Programme du{' '}
          <span className="text-[#F2B233]">FNL 2027</span>
        </motion.h2>

        {/* DAYS */}
        <div className="space-y-20">
          {programme.map((day, i) => (
            <div key={i}>

              {/* DAY HEADER */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h3 className="text-2xl font-bold text-[#F2B233]">
                  {day.date}
                </h3>
                <p className="text-gray-300">
                  {day.label}
                </p>
              </motion.div>

              {/* CARDS */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {day.sessions.map((session, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: j * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white text-[#0A1F44] p-6 shadow-sm hover:shadow-xl transition group"
                  >

                    {/* TIME */}
                    <div className="text-sm font-semibold text-[#F2B233] mb-2">
                      {session.time}
                    </div>

                    {/* TITLE */}
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#F2B233] transition">
                      {session.title}
                    </h4>

                    {/* DESC */}
                    <p className="text-gray-600 text-sm">
                      {session.desc}
                    </p>

                    {/* OPTIONAL LINE */}
                    <div className="mt-4 h-[2px] w-0 bg-[#F2B233] group-hover:w-full transition-all duration-300" />

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

export default Programme;