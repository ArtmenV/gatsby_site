import React from 'react'
import { array } from 'prop-types'

import '../../../styles/components/core-features-layout.scss'

import Link from '../../Link'

import bgWebpLg from '../../../../static/backgrounds/portfolio/features-large.webp'
import bgWebpSm from '../../../../static/backgrounds/portfolio/features-small.webp'
import bgJpgLg from '../../../../static/backgrounds/portfolio/features-large.jpg'
import bgJpgSm from '../../../../static/backgrounds/portfolio/features-small.jpg'

import Arrow from '../../../../static/icons/arrow.svg'

const CoreFeaturesLayout = ({ items }) => {

  return (
    <section className="core-features">
      <h2 className="caption-primary">Core Features:</h2>

      <ul className="core-features__list">
        { items.map((item, index) => <li key={ index }>{ item }</li>) }
      </ul>

      <div className="flex-container">
        <div className="core-features__timeline">Timeline: July 2018 - now</div>
        <Link 
          to="https://www.linguaschools.com"
          svgIcon={ <Arrow className="icon--arrow" /> }
          className="core-features__link"
          external
          outlined
        >
          go to website
        </Link>
      </div>
      
      <div 
        data-bgset={ `${bgJpgSm} [(max-width: 992px)] | ${bgJpgLg}` } 
        data-bgset-webp={ `${bgWebpSm} [(max-width: 992px)] | ${bgWebpLg}` }
        className="background lazyload"
      />
    </section>
  )
}

CoreFeaturesLayout.propTypes = {
  items: array.isRequired
}

export default CoreFeaturesLayout

  