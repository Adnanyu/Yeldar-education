import type { NextConfig } from "next";
// import { i18n } from './next-i18next.config';
// import i18nConfig from './next-i18next.config.js';
import i18n from './next-i18next.config';
const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
  }
};

export default nextConfig;
