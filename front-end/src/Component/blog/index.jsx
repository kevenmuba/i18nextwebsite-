import React from 'react'
import {useTranslation} from 'react-i18next'

function Blog() {
  const {t} = useTranslation('blog')
  return (
    <div>
      <h1>Our Blogs</h1>
      <h1>{t('blogs.building')}</h1>
      <p>{t('blogs.history')}</p>
      <p>{t('blogs.students')}</p>
      <p>{t('blogs.leaders')}</p>
    </div>
  )
}

export default Blog
