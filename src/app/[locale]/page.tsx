// app/[locale]/page.tsx
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSwitcher from '../components/langaugeSwitcher';

export default async function Page() {
  return (
    <div>
          <h1>Welcome (this will be translated)</h1>
          <LanguageSwitcher />
    </div>
  );
}

// For static props (in pages, not app dir)
// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// }
