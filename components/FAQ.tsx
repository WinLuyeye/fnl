'use client';

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Qu’est-ce que le FNL ?',
    answer:
      'Le Forum National de la Logistique est un événement majeur en RDC qui réunit les acteurs du transport, de la supply chain et de l’innovation logistique.',
  },
  {
    question: 'Où se déroule l’événement ?',
    answer:
      'Le FNL 2027 se tiendra à Kinshasa, dans un lieu dédié aux grands événements professionnels (lieu confirmé prochainement).',
  },
  {
    question: 'Qui peut participer ?',
    answer:
      'Le forum est ouvert aux professionnels du secteur, entreprises, institutions, étudiants et visiteurs intéressés par la logistique.',
  },
  {
    question: 'Comment obtenir un pass ?',
    answer:
      'Vous pouvez choisir un type de pass dans la section Inscription et compléter votre demande en ligne ou via nos équipes.',
  },
  {
    question: 'Y a-t-il des opportunités de partenariat ?',
    answer:
      'Oui, des offres de sponsoring et de partenariat sont disponibles pour les entreprises souhaitant gagner en visibilité.',
  },
];

const FAQ: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-28 text-[#0A1F44]">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
            Questions <span className="text-[#F2B233]">fréquentes</span>
          </h2>

          <p className="text-gray-600 mt-4">
            Retrouvez ici les réponses aux questions les plus posées sur le FNL 2027.
          </p>
        </motion.div>

        {/* ACCORDION */}
        <div className="space-y-4">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-md overflow-hidden"
            >

              {/* QUESTION */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold">
                  {item.question}
                </span>

                <span className="text-[#F2B233] text-xl">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>

              {/* ANSWER */}
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5 text-gray-600 text-sm"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;