import React from 'react'

import LoadImage from '../../../LoadImage'

import Site1SmWebp from '../../../../../static/backgrounds/portfolio/linguaschools/site-1-small.webp'
import Site1SmJpg from '../../../../../static/backgrounds/portfolio/linguaschools/site-1-small.jpg'
import Site1LgWebp from '../../../../../static/backgrounds/portfolio/linguaschools/site-1-large.webp'
import Site1LgJpg from '../../../../../static/backgrounds/portfolio/linguaschools/site-1-large.jpg'

import Site2SmWebp from '../../../../../static/backgrounds/portfolio/linguaschools/site-2-small.webp'
import Site2SmJpg from '../../../../../static/backgrounds/portfolio/linguaschools/site-2-small.jpg'
import Site2LgWebp from '../../../../../static/backgrounds/portfolio/linguaschools/site-2-large.webp'
import Site2LgJpg from '../../../../../static/backgrounds/portfolio/linguaschools/site-2-large.jpg'

export default () => {

  return (
    <section className="features-gallery">
      <LoadImage 
        primarySm={ Site1SmWebp }
        primaryLg={ Site1LgWebp }
        secondarySm={ Site1SmJpg }
        secondaryLg={ Site1LgJpg }
        className="features-gallery__image--first"
        alt="Sample image of site"
        lazyLoad
      />
      <LoadImage 
        primarySm={ Site2SmWebp }
        primaryLg={ Site2LgWebp }
        secondarySm={ Site2SmJpg }
        secondaryLg={ Site2LgJpg }
        className="features-gallery__image--second"
        alt="Sample image of site"
        lazyLoad
      />
      <div className="features-gallery__shadow-rectangle" />
    </section>
  )
}