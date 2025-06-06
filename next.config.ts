import type { NextConfig } from "next";
// import { i18n } from './next-i18next.config';
// import i18nConfig from './next-i18next.config.js';
import i18n from './next-i18next.config';
const nextConfig: NextConfig = {
  eslint: {
    // Disabling all ESLint warnings for unescaped entities and <img> usage
    ignoreDuringBuilds: true,
  },
  /* config options here */
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
  }
};

export default nextConfig;
