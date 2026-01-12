'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const universities = [
  { name: "Istanbul Aydin University", link: "aydin", logo: "universities/istanbul_Ay.png" },
  { name: "Istanbul Bahcesehir University", link: "Bahcesehir", logo: "universities/bau.png" },
  { name: "Istanbul Medipol University", link: "Medipol", logo: "universities/medipol.png" },
  { name: "Biruni University", link: "Biruni", logo: "universities/biruni.png" },
  { name: "Yeni Yüzyıl University", link: "yusyil", logo: "universities/yuz.png" },
  { name: "Istinye University", link: "istinye", logo: "universities/istinye.webp" },
  { name: "Altınbaş University", link: "altinbash", logo: "universities/altinbas.webp" },
  { name: "Istanbul Atlas University", link: "Atlas", logo: "universities/atlas.webp" },
  { name: "Istanbul Kent University", link: "Kent", logo: "universities/kent.png" },
  { name: "Istanbul Gelişim University", link: "Gelisim", logo: "universities/gelisim.webp" },
  { name: "Istanbul Kultur University", link: "Kultur", logo: "universities/kultur.webp" },
  { name: "Istanbul Nisantasi University", link: "Nisantasi", logo: "universities/nisantasi.webp" },
  { name: "Beykent University", link: "Beykent", logo: "universities/beykent.webp" },
  { name: "Beykos University", link: "Beykos", logo: "universities/beykoz.webp" },
  { name: "Istanbul Bilgi University", link: "Bilgi", logo: "universities/bilgi.webp" },
];

const CLONE_COUNT = 5;

export default function Universities() {
  const { t, dir } = useLanguage();

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalItems = universities.length;

  const carouselItems = [
    ...universities,
    ...universities.slice(0, CLONE_COUNT),
  ];

  useEffect(() => {
    const measure = () => {
      if (!carouselRef.current) return;

      const item = carouselRef.current.querySelector('.carousel-item');
      if (item) {
        setItemWidth(item.offsetWidth);
      }
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [dir]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === totalItems) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);

        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalItems]);


  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(0);

    requestAnimationFrame(() => {
      setIsTransitioning(true);
    });
  }, [dir]);

  const translateValue = currentIndex * itemWidth;

  const transformStyle =
    dir === 'rtl'
      ? `translateX(${translateValue}px)`
      : `translateX(-${translateValue}px)`;

  return (
    <section className="flex flex-col py-8 space-y-9">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#242D4B]">
        <span className="text-secondary">{t('universities.title')}</span>
      </h2>

      <div className="container mx-auto lg:max-w-[85vw]">
        <div className="relative w-full px-4 overflow-hidden" role="region" aria-roledescription="carousel">
          <div
            ref={carouselRef}
            className={`flex ${
              isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''
            }`}
            style={{ transform: transformStyle }}
          >
            {carouselItems.map((university, index) => (
              <div
                key={`${university.name}-${index}`}
                className="carousel-item shrink-0 grow-0 ps-4 pb-8 select-none
                           sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/5"
              >
                <div className="bg-white inline-flex size-28 items-center justify-center overflow-hidden rounded-full p-2 md:p-3 lg:size-[214px] lg:p-5">
                  <a href={`/universities/${university.link}`} className="inline-block size-full">
                    <img
                      src={university.logo}
                      alt={university.name}
                      className="size-full object-contain"
                      draggable={false}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

