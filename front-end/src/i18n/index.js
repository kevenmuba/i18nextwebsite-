import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    ns: ['home'], // Add namespaces here
    defaultNS: 'home', // Set default namespace
    backend: {
      // Load translations from the server
      loadPath: 'http://localhost:3002/locales/{{ns}}/{{lng}}', // Update the loadPath
    },
    detection: {
      order: ['path', 'navigator', 'localStorage'],
      lookupFromPathIndex: 0,
    },
    react: {
      useSuspense: true, // Ensure your components handle suspense
    },
  });
  export default i18n;