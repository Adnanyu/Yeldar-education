'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="bg-[#242D4B] shadow text-white sticky top-0 z-50 border-b-none">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <img className="w-auto h-10 lg:h-25" src="/logo.jpg" alt="Logo" />
          </Link>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:block md:w-auto md:mx-auto">
          <ul className="mt-4 flex gap-5 flex-row md:mt-0 md:flex-row md:items-center md:space-x-3 lg:space-x-4 md:text-sm md:font-medium rtl:space-x-reverse">
            <Link href="/" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl hover:text-gray-300 transition-colors">{t('nav.home')}</Link>
            <Link href="/universities" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl hover:text-gray-300 transition-colors">{t('nav.universities')}</Link>
            <Link href="/services" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl hover:text-gray-300 transition-colors">{t('nav.services')}</Link>
            <Link href="/about" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl hover:text-gray-300 transition-colors">{t('nav.about')}</Link>
            <Link href="/contact" className="select-none block py-2 text-base xl:text-lg 2xl:text-xl hover:text-gray-300 transition-colors">{t('nav.contact')}</Link>
          </ul>
        </nav>

        {/* Language switcher - Desktop */}
        <button
          onClick={toggleLanguage}
          className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
          aria-label="Switch language"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <span>{language === 'en' ? 'العربية' : 'English'}</span>
        </button>

        {/* Mobile hamburger button and language switcher */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xs font-medium"
            aria-label="Switch language"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>{language === 'en' ? 'AR' : 'EN'}</span>
          </button>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (hidden on desktop) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden w-full bg-[#242D4B] text-white`}>
        <ul className="flex flex-col items-center py-4 space-y-4">
          <Link href="/" className="text-base xl:text-lg 2xl:text-xl py-2 hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>{t('nav.home')}</Link>
          <Link href="/universities" className="text-base xl:text-lg 2xl:text-xl py-2 hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>{t('nav.universities')}</Link>
          <Link href="/services" className="text-base xl:text-lg 2xl:text-xl py-2 hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>{t('nav.services')}</Link>
          <Link href="/about" className="text-base xl:text-lg 2xl:text-xl py-2 hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>{t('nav.about')}</Link>
          <Link href="/contact" className="text-base xl:text-lg 2xl:text-xl py-2 hover:text-gray-300 transition-colors" onClick={() => setIsOpen(false)}>{t('nav.contact')}</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
