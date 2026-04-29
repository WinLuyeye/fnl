'use client';

import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="bg-[#0A1F44] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-extrabold text-[#F2B233]">
              FNL 2027
            </h3>

            <p className="text-sm text-gray-300 mt-4 leading-relaxed">
              Forum National de la Logistique en République Démocratique du Congo.
              Un espace stratégique dédié aux acteurs du transport, de la supply chain et de l’innovation.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="#about">À propos</Link></li>
              <li><Link href="#programme">Programme</Link></li>
              <li><Link href="#partenaires">Partenaires</Link></li>
              <li><Link href="#tickets">Inscription</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>

            <ul className="space-y-3 text-sm text-gray-300">

              <li className="flex items-center gap-2">
                <i className="ri-map-pin-line text-[#F2B233]" />
                Kinshasa, RDC
              </li>

              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-[#F2B233]" />
                contact@fnl-rdc.com
              </li>

              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-[#F2B233]" />
                +243 XXX XXX XXX
              </li>

            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4">Réseaux sociaux</h4>

            <div className="flex gap-4 text-xl text-gray-300">

              <a href="#" className="hover:text-[#F2B233] transition">
                <i className="ri-facebook-fill" />
              </a>

              <a href="#" className="hover:text-[#F2B233] transition">
                <i className="ri-linkedin-fill" />
              </a>

              <a href="#" className="hover:text-[#F2B233] transition">
                <i className="ri-twitter-x-line" />
              </a>

              <a href="#" className="hover:text-[#F2B233] transition">
                <i className="ri-instagram-line" />
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()} FNL 2027. Tous droits réservés.
          </p>

          <p className="mt-4 md:mt-0">
            Designed with excellence for logistics innovation in Africa
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;