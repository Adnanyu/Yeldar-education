'use client';
import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ar')}>AR</button>
    </div>
  );
};

export default LanguageSwitcher;
