import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header({lang}) {
  const location = useLocation()

  const switchLanguage = (newLang) => {
    const pathSegments = location.pathname.split('/')
    pathSegments[1] = newLang
    return pathSegments.join('/')
  }

  return (
    <header className="header">
      <nav className="navlinks">
        <Link to={`/${lang}`}>Home</Link>
        <Link to={`/${lang}/about`}>About</Link>
      </nav>
      <div className="locale-options">
        <span className="lang-icon">
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
    </header>
  )
}

export default Header