'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

type Ticket = {
  title: string;
  subtitle: string;
  features: {
    text: string;
    available: boolean;
  }[];
  cta: string;
  highlight?: boolean;
};

const tickets: Ticket[] = [
  {
    title: 'VISITEUR',
    subtitle: 'Découverte du secteur logistique',
    features: [
      { text: 'Accès à l’exposition (2 jours)', available: true },
      { text: 'Accès aux zones publiques', available: true },
      { text: 'Conférences sélectionnées', available: false },
      { text: 'Business lounge', available: false },
      { text: 'Networking officiel', available: false },
    ],
    cta: 'Obtenir mon pass',
  },
  {
    title: 'PROFESSIONNEL',
    subtitle: 'Acteurs du transport & logistique',
    highlight: true,
    features: [
      { text: 'Accès à l’exposition (2 jours)', available: true },
      { text: 'Accès à toutes les conférences', available: true },
      { text: 'Networking officiel', available: true },
      { text: 'Accès aux rencontres B2B', available: true },
      { text: 'Business lounge', available: false },
    ],
    cta: 'Réserver mon pass',
  },
  {
    title: 'VIP / PARTENAIRE',
    subtitle: 'Décideurs & entreprises partenaires',
    features: [
      { text: 'Accès total à l’événement', available: true },
      { text: 'Business lounge VIP', available: true },
      { text: 'Accès aux sessions privées', available: true },
      { text: 'Networking premium', available: true },
      { text: 'Visibilité partenaire', available: true },
    ],
    cta: 'Accès VIP',
  },
];

const Tickets: FC = () => {
  return (
    <section className="bg-[#F7F9FC] py-28 text-[#0A1F44]">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            Inscription
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Choisissez votre <span className="text-[#F2B233]">pass</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl">
            Sélectionnez le type d’accès qui correspond à votre profil et participez
            au Forum National de la Logistique 2027.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          {tickets.map((ticket, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative bg-white p-8 shadow-sm border transition hover:shadow-xl ${
                ticket.highlight ? 'border-[#F2B233] scale-[1.03]' : 'border-gray-200'
              }`}
            >

              {/* BADGE */}
              {ticket.highlight && (
                <div className="absolute -top-3 left-6 bg-[#F2B233] text-black text-xs px-3 py-1 font-semibold">
                  RECOMMANDÉ
                </div>
              )}

              {/* TITLE */}
              <h3 className="text-xl font-bold">{ticket.title}</h3>

              <p className="text-sm text-gray-500 mt-1 mb-6">
                {ticket.subtitle}
              </p>

              {/* FEATURES */}
              <div className="space-y-3 mb-8">
                {ticket.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm">

                    <span
                      className={`mt-1 ${
                        feature.available ? 'text-green-500' : 'text-red-400'
                      }`}
                    >
                      {feature.available ? '✔' : '✕'}
                    </span>

                    <span
                      className={
                        feature.available ? 'text-gray-700' : 'text-gray-400'
                      }
                    >
                      {feature.text}
                    </span>

                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className={`w-full py-3 font-semibold transition ${
                  ticket.highlight
                    ? 'bg-[#F2B233] text-black hover:bg-[#0A1F44] hover:text-white'
                    : 'bg-[#0A1F44] text-white hover:bg-[#F2B233] hover:text-black'
                }`}
              >
                {ticket.cta}
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Tickets;