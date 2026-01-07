'use client';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function HeroSection() {
  const { t } = useLanguage();

  const handleClick = () => {
    const phoneNumber = "+905345155355";
    const message = encodeURIComponent(t('whatsappMessage'));
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <section className="text-white py-2 bg-[#242D4B]">
      <div className="mx-auto flex max-w-[90vw] flex-col items-center px-4 xl:container md:h-[85vh] md:flex-row md:px-10 rtl:md:flex-row-reverse">
        <div className=''>
          <img
            src="grad.png"
            alt="Hero"
            className="flex-1 w-full h-auto"
          />
        </div>
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h1 className="mb-[10px] text-white text-[1.44rem] font-bold !leading-[1.35] text-primary text-opacity-80 md:text-3xl lg:mb-[25px] lg:text-[2.5rem] text-center">{t('hero.title')}</h1>
          <h2 className="mb-[11px] text-[1.44rem] font-bold text-secondary md:text-xl lg:mb-[25px] lg:text-[1.5rem] text-center rtl:text-center">{t('hero.subtitle')}</h2>
          <div className="flex md:flex-row flex-col gap-4 mt-6">
            <button className="md:w-1/2 py-3 bg-white text-[#242D4B] font-bold rounded-full hover:bg-gray-100 transition-colors" onClick={handleClick}>
              {t('hero.contactUs')}
            </button>
            <button className="md:w-1/2 py-3 bg-[#242D4B] text-white rounded-full font-bold border-white border hover:bg-[#1a2138] transition-colors">
              {t('hero.ourServices')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
