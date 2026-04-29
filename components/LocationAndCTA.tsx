'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';

const LocationAndCTA: FC = () => {
  return (
    <section className="bg-[#0A1F44] text-white py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT - LOCATION */}
        <div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm tracking-widest text-gray-300 uppercase">
              Lieu de l’événement
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mt-3">
              Kinshasa, <span className="text-[#F2B233]">RDC</span>
            </h2>

            <p className="text-gray-300 mt-4 leading-relaxed max-w-xl">
              Le Forum National de la Logistique 2027 se tiendra à Kinshasa,
              capitale économique de la République Démocratique du Congo,
              au cœur des échanges logistiques et commerciaux de la région.
            </p>

            {/* INFO BOX */}
            <div className="mt-8 space-y-3 text-sm text-gray-300">

              <p className="flex items-center gap-2">
                <i className="ri-calendar-line text-[#F2B233]" />
                12 – 14 Juin 2027
              </p>

              <p className="flex items-center gap-2">
                <i className="ri-map-pin-line text-[#F2B233]" />
                Centre d’événements (lieu confirmé prochainement)
              </p>

              <p className="flex items-center gap-2">
                <i className="ri-flight-takeoff-line text-[#F2B233]" />
                Accès facile depuis l’aéroport international de N’djili
              </p>

            </div>
          </motion.div>

          {/* MAP PLACEHOLDER */}
          <div className="mt-10 bg-white/10 border border-white/10 h-[220px] flex items-center justify-center text-gray-300">
            Carte Google Maps (à intégrer)
          </div>

        </div>

        {/* RIGHT - CTA */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white text-[#0A1F44] p-10 shadow-2xl"
        >

          <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            Inscription
          </span>

          <h3 className="text-3xl font-extrabold mt-3">
            Réservez votre <span className="text-[#F2B233]">place</span>
          </h3>

          <p className="text-gray-600 mt-4">
            Rejoignez les acteurs majeurs de la logistique en Afrique centrale
            et participez à un événement stratégique incontournable.
          </p>

          {/* BENEFITS */}
          <div className="mt-8 space-y-3 text-sm text-gray-700">

            <p className="flex items-center gap-2">
              <i className="ri-check-line text-green-500" />
              Accès aux conférences
            </p>

            <p className="flex items-center gap-2">
              <i className="ri-check-line text-green-500" />
              Networking professionnel
            </p>

            <p className="flex items-center gap-2">
              <i className="ri-check-line text-green-500" />
              Rencontres B2B
            </p>

            <p className="flex items-center gap-2">
              <i className="ri-check-line text-green-500" />
              Accès exposition
            </p>

          </div>

          {/* CTA BUTTON */}
          <button className="mt-10 w-full bg-[#F2B233] text-black py-4 font-semibold hover:bg-[#0A1F44] hover:text-white transition flex items-center justify-center gap-2">
            <i className="ri-user-add-line" />
            S’inscrire maintenant
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Places limitées — inscription recommandée
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default LocationAndCTA;