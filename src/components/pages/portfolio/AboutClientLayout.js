import React from 'react'
import { 
  string, 
  object 
} from 'prop-types'

import '../../../styles/components/about-client-layout.scss'

import bgWebpLg from '../../../../static/backgrounds/portfolio/about-client-large.webp'
import bgWebpSm from '../../../../static/backgrounds/portfolio/about-client-small.webp'
import bgJpgLg from '../../../../static/backgrounds/portfolio/about-client-large.jpg'
import bgJpgSm from '../../../../static/backgrounds/portfolio/about-client-small.jpg'

const AboutClientLayout = ({
  logo,
  children
}) => {

  return (
    <section className="about-client">
      <div className="about-client__logo">
        <div className="about-client__logo-inner">
          { logo }
        </div>  
      </div>

      <div className="about-client__content">
        <h3 className="about-client__title">Client</h3>
        <div className="about-client__text">{ children }</div>
      </div>

      <div 
        data-bgset={ `${bgJpgSm} [(max-width: 992px)] | ${bgJpgLg}` } 
        data-bgset-webp={ `${bgWebpSm} [(max-width: 992px)] | ${bgWebpLg}` }
        className="background lazyload"
      />
    </section>
  )
}

AboutClientLayout.propTypes = {
  logo: object.isRequired,
  children: string.isRequired
}

export default AboutClientLayout