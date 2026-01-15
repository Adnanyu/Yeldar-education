"use client"
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const PromoBanner = () => {
  const [showPromo, setShowPromo] = useState(true);
    const { t } = useLanguage();
  useEffect(() => {

    // const hasSeenPromo = localStorage.getItem('hasSeenPromo');

    // if (!hasSeenPromo) {
    //   setShowPromo(true);
    //   localStorage.setItem('hasSeenPromo', 'true');
    // }
  }, []);

  if (!showPromo) return null;

  const handleClose = () => {
    setShowPromo(false);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-yellow-500 text-white p-4 text-center z-50">
      <span className="text-base sm:text-lg md:text-xl font-semibold">
        {t('promo.text')}
      </span>
      <button 
        onClick={handleClose} 
        className="absolute top-2 right-5 text-xl text-white bg-transparent hover:bg-white hover:text-yellow-500 rounded-full w-10 h-10 p-1 "
      >
        &times;
      </button>
    </div>
  );
};

export default PromoBanner;
