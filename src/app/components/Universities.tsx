// components/Carousel.js
'use client';

import { useEffect, useRef, useState } from 'react';

const universities = [
  { name: 'Istanbul Aydin University', logo: 'universities/istanbul_Ay.png' },
  { name: 'Istanbul Biruni University', logo: 'universities/biruni.png' },
  { name: 'Istanbul Yeni Yüz Yıl', logo: 'universities/yuz.png' },
  { name: 'Istanbul Kent University', logo: 'universities/kent.png' },
  { name: 'Atlas University', logo: 'universities/atlas.webp' },
  { name: 'Istanbul altinbas University', logo: 'universities/altinbas.webp' },
  { name: 'Bahcesehir University', logo: 'universities/bau.png' },
  { name: 'Beykent University', logo: 'universities/beykent.webp' },
  { name: 'Beykoz University', logo: 'universities/beykoz.webp' },
  { name: 'Istanbul Kultur University', logo: 'universities/kultur.webp' },
  { name: 'Nisantasi University', logo: 'universities/nisantasi.webp' },
  { name: 'Istanbul Bilgi University', logo: 'universities/bilgi.webp' },
  { name: 'Istanbul Gelisim University', logo: 'universities/gelisim.webp' },
  { name: 'Istinye University', logo: 'universities/istinye.webp' },
];

const Universities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalItems = universities.length;
  const carouselItems = [...universities, universities[0], universities[1], universities[2], universities[3]]; // clone first item

  // Set item width
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const item = carouselRef.current.querySelector('.carousel-item') as HTMLDivElement;
        if (item) {
          setItemWidth(item.offsetWidth);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Reset instantly when reaching the clone
  useEffect(() => {
    if (currentIndex === totalItems) {
      // Wait for animation to finish
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // 1000ms = transition duration

      return () => clearTimeout(timeout);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, totalItems]);

  return (
    <section className="flex flex-col py-8 space-y-9">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-[#242D4B] flex justify-center gap-x-2 flex-col md:flex-row">
        <span className="text-secondary">Partner Universities</span>
      </h2>

      <div className="container mx-auto lg:max-w-[85vw]">
        <div className="mx-auto mb-4">
          <div className="relative w-full px-4" role="region" aria-roledescription="carousel">
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className={`flex ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
                style={{
                  transform: `translateX(-${currentIndex * itemWidth}px)`,
                }}
              >
                {carouselItems.map((university, index) => (
                  <div
                    className="carousel-item min-w-0 shrink-0 grow-0 ps-4 select-none pb-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/5"
                    key={`${university.name}-${index}`}
                  >
                    <div className="bg-white inline-flex size-28 items-center justify-center overflow-hidden rounded-full p-2 md:p-3 lg:size-[214px] lg:p-5">
                      <a href={`/university/${university.name}`} className="inline-block size-full">
                        <img
                          src={university.logo}
                          alt={university.name}
                          className="size-full object-contain"
                          style={{ color: 'transparent' }}
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Universities;
