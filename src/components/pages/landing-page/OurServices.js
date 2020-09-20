import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import OurServicesMobile from './OurServicesMobile'
import OurServicesDesctop from './OurServicesDesctop'

import mountainsJpg from '../../../../static/backgrounds/landing/mountains.jpg'
import mountainsWebp from '../../../../static/backgrounds/landing/mountains.webp'

import ArrowLeft from '../../../../static/icons/angle-arrow-left.svg'
import ArrowRight from '../../../../static/icons/angle-arrow-right.svg'

export default () => {
  const breakpoints = useBreakpoint()

  const handleClickBackBtn = () => {
    if (window) {
      window.document.querySelector('.services-carousel .button-go-back').click()
    }
  }

  const handleClickNextBtn = () => {
    if (window) {
      window.document.querySelector('.services-carousel .button-go-next').click()
    }
  }

  return (
    <div
      data-bgset={ mountainsJpg } 
      data-bgset-webp={ mountainsWebp } 
      className="section our-services lazyload"
    >
      <h2 className="caption-primary">
        Our Services
        {
          !breakpoints.md && (
            <div className="our-services--btn-container">
              <button
                onClick={ handleClickBackBtn }
                className="our-services--btn-arrow"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={ handleClickNextBtn }
                className="our-services--btn-arrow"
              >
                <ArrowRight />
              </button>
            </div>
          )
        }
      </h2>

      {/* Condition is wrapped in <div> otherwise an error occurs when condition changes */}
      <div>
      {
        breakpoints.md ?
          <OurServicesMobile /> :
          <OurServicesDesctop />
      }
      </div>
    </div>
  )
}