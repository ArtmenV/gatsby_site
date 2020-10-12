import React from 'react'
import {
  shape,
  string
} from 'prop-types'

import LoadImage from '../../LoadImage'

export const FeaturesGallery = ({ coreFeaturesGallery: {
  Site1SmWebp,
  Site1SmJpg,
  Site1LgWebp,
  Site1LgJpg,

  Site2SmWebp,
  Site2SmJpg,
  Site2LgWebp,
  Site2LgJpg
}}) => {

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


FeaturesGallery.propTypes = {
  coreFeaturesGallery: shape({
    Site1SmWebp: string.isRequired,
    Site1SmJpg: string.isRequired,
    Site1LgWebp: string.isRequired,
    Site1LgJpg: string.isRequired,

    Site2SmWebp: string.isRequired,
    Site2SmJpg: string.isRequired,
    Site2LgWebp: string.isRequired,
    Site2LgJpg: string.isRequired
  })
}

