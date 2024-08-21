import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import {useTranslation} from 'react-i18next'
function Navbar({lang}) {
  const location = useLocation()

  const switchLanguage = (newLang) => {
    const pathSegments = location.pathname.split('/')
    pathSegments[1] = newLang
    return pathSegments.join('/')
  }
  const {t} = useTranslation('header')
  return (
    <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to={`/${lang}`} className="navbar-brand p-0">
            <h1 className="display-6 text-primary">
              <i className="fas fa-car-alt me-3"></i>DDU.Jemeah
            </h1>
            {/* <img src="img/logo.png" alt="Logo" /> */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <Link to={`/${lang}`} className="nav-item nav-link active">{t('header.home')}</Link>
              <Link to={`/${lang}/about`} className="nav-item nav-link">{t('header.about')}</Link>
              <Link to={`/${lang}/services`} className="nav-item nav-link">{t('header.services')}</Link>
              <Link to={`/${lang}/blog`} className="nav-item nav-link">{t('header.blogs')}</Link>
              <Link to={`/${lang}/about`} className="nav-item nav-link">{t('header.contact')}</Link>
              <div className="locale-options">
        <span className="lang-icon nav-item nav-link">
          <FontAwesomeIcon icon={faGlobe} />
        </span>
        <div className="lang-dropdown">
          <Link to={switchLanguage('en')} className={lang === 'en' ? 'active' : ''}>
            English
          </Link>
          <Link to={switchLanguage('om')} className={lang === 'om' ? 'active' : ''}>
            oromic
          </Link>
          <Link to={switchLanguage('am')} className={lang === 'am' ? 'active' : ''}>
            አማርኛ
          </Link>
          <Link to={switchLanguage('so')} className={lang === 'so' ? 'active' : ''}>
            somalia
          </Link>
        </div>
      </div>

            </div>
            <Link to={`/${lang}`} className="btn btn-primary rounded-pill py-2 px-4">{t('header.donate')}</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;