'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Programme', href: '#programme' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Sponsors', href: '#partners' },
    { name: 'Inscription', href: '#tickets' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link =>
        document.querySelector(link.href)
      );

      const scrollPos = window.scrollY + 120;

      sections.forEach((section, i) => {
        if (!section) return;

        const el = section as HTMLElement;

        if (
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(navLinks[i].href);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (href: string) => {
    setIsMobileMenuOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">

          {/* LOGO */}
          <Link href="#home">
            <div className="relative w-44 h-12">
              <Image
                src="/logoFNL.png"
                alt="FNL RDC"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* LINKS DESKTOP */}
          <div className="hidden md:flex gap-8 cursor-pointer">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScrollTo(link.href)}
                className={`font-medium transition ${
                  activeSection === link.href
                    ? 'text-[#F2B233]'
                    : isScrolled
                    ? 'text-black'
                    : 'text-white'
                } hover:text-[#F2B233]`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => handleScrollTo('#tickets')}
            className="hidden md:block bg-[#F2B233] text-black px-5 py-2 font-semibold hover:bg-black hover:text-white transition"
          >
            S’inscrire
          </button>

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden text-2xl ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            ☰
          </button>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0A1F44]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center gap-8">

          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>

          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScrollTo(link.href)}
              className="cursor-pointer text-2xl text-white hover:text-[#F2B233] transition"
            >
              {link.name}
            </button>
          ))}

        </div>
      )}
    </>
  );
};

export default Navbar;