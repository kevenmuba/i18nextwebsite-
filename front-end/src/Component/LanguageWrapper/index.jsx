import React, { useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../Header';
import Footer from  '../Footer/Footer';


const LanguageWrapper = () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    // Check if lang is valid before changing the language
    const supportedLanguages = ['en', 'om', 'am','so']; // Add your supported languages here
    if (lang && supportedLanguages.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <>
       
      <Header lang={lang} />
      <div style={{marginTop:'50px'}}>
      <Outlet /> 
      

      </div>
      
    </>
  );
}

export default LanguageWrapper;