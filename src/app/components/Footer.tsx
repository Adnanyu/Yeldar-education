'use client';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#242D4B] text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
      </div>
    </footer>
  );
};

export default Footer;
