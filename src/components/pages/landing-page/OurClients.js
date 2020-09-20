import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import OurClientsMobile from './OurClientsMobile'
import OurClientsDesctop from './OurClientsDesctop'

import spaceSmJpg from '../../../../static/backgrounds/landing/space-small.jpg'
import spaceSmWebp from '../../../../static/backgrounds/landing/space-small.webp'
import spaceLgJpg from '../../../../static/backgrounds/landing/space-large.jpg'
import spaceLgWebp from '../../../../static/backgrounds/landing/space-large.webp'

export default () => {
  const breakpoints = useBreakpoint()

  return (
    <div 
      data-bgset={ `${spaceSmJpg} [(max-width: 992px)] | ${spaceLgJpg}` } 
      data-bgset-webp={ `${spaceSmWebp} [(max-width: 992px)] | ${spaceLgWebp}` }
      className="section our-clients lazyload"
    >
      <h2 className="caption-primary">
        Our Clients
      </h2>
      <div>
        {
          breakpoints.md ? 
            <OurClientsMobile /> : 
            <OurClientsDesctop />
        }
      </div>
      <div className="our-clients__info">
        <span className="our-clients__info-number">56</span> Projects for <span className="our-clients__info-number">14</span> Countries
      </div>
    </div>
  )
}