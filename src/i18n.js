import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json'; // Import translations for all languages
import frTranslation from './locales/fr.json';
import ruTranslation from './locales/ru.json';
import zhTranslation from './locales/zh.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      ru: { translation: ruTranslation },
      zh: { translation: zhTranslation },
    },
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n; // Make sure to export the i18n instance
