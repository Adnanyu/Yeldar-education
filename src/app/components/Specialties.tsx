'use client';
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Specialties() {
  const { t } = useLanguage();

  const specialties = [
    {
      nameKey: 'specialties.engineering',
      imageSource: 'engineers.png'
    },
    {
      nameKey: 'specialties.medical',
      imageSource: 'medical-team.png'
    },
    {
      nameKey: 'specialties.sciences',
      imageSource: 'chemistry.png'
    },
    {
      nameKey: 'specialties.business',
      imageSource: 'project-manager.png'
    },
    {
      nameKey: 'specialties.arts',
      imageSource: 'graphic-designer.png'
    },
  ];

  return (
    <section className="flex flex-col py-8 space-y-9 bg-white" id="">
      <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-extrabold text-[#242D4B] flex justify-center gap-x-2 flex-col md:flex-row">
        {t('specialties.title')}
      </h2>
      <div className="container mx-auto 6xl:!container lg:max-w-[85vw]">
        <div>
          <div className="grid w-full sm:grid-cols-5 gap-4 px-4 md:px-0 grid-cols-2">
            {specialties.map((specialty, index) => (
            <div className="pb-8" key={index}>
            <div className="border bg-white text-card-foreground shadow-all group flex h-full w-full cursor-pointer flex-col justify-center rounded-2xl border-none px-3 py-6 shadow-none duration-300 md:my-4 hover:shadow-xl">
                  <div className="flex-col flex h-full items-center justify-center space-y-5 p-0 text-center">
                  <img src={specialty.imageSource} alt={t(specialty.nameKey)} className="size-16 duration-300 group-hover:scale-105 md:size-36"/>
                  <div className="tracking-tight w-full text-wrap text-base text-gray-500 group-hover:text-primary md:text-2xl font-normal">
                    <h3>{t(specialty.nameKey)}</h3>
                  </div>
              </div>
            </div>
          </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialties;
