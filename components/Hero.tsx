'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'remixicon/fonts/remixicon.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2027-04-22T00:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      setTimeLeft({
        days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
        mins: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
        secs: Math.max(Math.floor((diff / 1000) % 60), 0),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

      {/* VIDEO */}
      <div className="absolute inset-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="/video/hero-background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2a3d]/90 via-[#1a1a40]/80 to-black/90" />

      {/* SOCIAL LEFT */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-5 items-center">

        <span className="text-xs text-gray-300 rotate-180 [writing-mode:vertical-rl] tracking-widest">
          FOLLOW US
        </span>

        <Link href="https://facebook.com" target="_blank" className="hover:text-blue-400 transition">
          <i className="ri-facebook-fill text-xl"></i>
        </Link>

        <Link href="https://twitter.com" target="_blank" className="hover:text-gray-300 transition">
          <i className="ri-twitter-x-line text-xl"></i>
        </Link>

        <Link href="https://instagram.com" target="_blank" className="hover:text-pink-400 transition">
          <i className="ri-instagram-line text-xl"></i>
        </Link>

        <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-300 transition">
          <i className="ri-linkedin-fill text-xl"></i>
        </Link>

        <Link href="https://wa.me/243000000000" target="_blank" className="hover:text-green-400 transition">
          <i className="ri-whatsapp-line text-xl"></i>
        </Link>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <div className="text-sm tracking-widest text-gray-300 mb-4">
              22-24 AVRIL 2027
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              FORUM<br />
              NATIONAL<br />
              <span className="text-blue-400">LOGISTIQUE RDC</span>
            </h1>

            <p className="text-gray-300 mb-6 flex items-center gap-2">
              <i className="ri-map-pin-line"></i>
              Pullman Kinshasa Grand Hôtel, Gombe
            </p>

            <div className="flex flex-wrap gap-4">

              <Link
                href="/programme"
                className="bg-white text-black px-6 py-3 font-semibold flex items-center gap-2 hover:scale-105 transition"
              >
                DÉCOUVRIR
                <i className="ri-arrow-right-line"></i>
              </Link>

              <Link
                href="/inscription"
                className="border border-white px-6 py-3 flex items-center gap-2 hover:bg-white hover:text-black transition"
              >
                <i className="ri-user-add-line"></i>
                S’INSCRIRE
              </Link>

            </div>
          </div>

          {/* COUNTDOWN */}
          <div className="flex justify-start md:justify-end">
            <div className="grid grid-cols-4 gap-4">

              {[
                { label: 'JOURS', value: timeLeft.days },
                { label: 'HRS', value: timeLeft.hours },
                { label: 'MINS', value: timeLeft.mins },
                { label: 'SECS', value: timeLeft.secs },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md px-6 py-4 text-center border border-white/10"
                >
                  <div className="text-3xl font-bold">
                    {item.value}
                  </div>
                  <div className="text-xs text-gray-300 tracking-widest">
                    {item.label}
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;