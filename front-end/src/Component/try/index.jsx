import React from 'react'
import {useTranslation} from 'react-i18next'

function Try() {
  const {t} = useTranslation()
  return (
    <div>
      <h1>{t('try.title')}</h1>
      <p>{t('try.description')}</p>
    </div>
  )
}

export default Try
