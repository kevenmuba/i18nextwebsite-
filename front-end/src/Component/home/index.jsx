import React from 'react';
import { useTranslation} from 'react-i18next';

function Home() {
  const { t } = useTranslation('home'); // No namespace specified
  return (
    <div>
      <h1>{t('home.title')}</h1> {/* This should work if 'home' is the key in your JSON */}
      <p>{t('home.description')}</p>
    </div>
  );
}

export default Home;