import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import loadable from '@loadable/component'

// import OurWorkMobile from './OurWorkMobile'
// import OurWorkDesctop from './OurWorkDesctop'

import CarouselButtons from '../../CarouselButtons'

const OurWorkMobile = loadable(() => import('./OurWorkMobile'))
const OurWorkDesctop = loadable(() => import('./OurWorkDesctop'))

export default () => {
  const breakpoints = useBreakpoint()

  const handleClickNextBtn = () => {
    window.document.querySelector('.our-work-container .carousel__next-button').click()
  }

  const handleClickBackBtn = () => {
    window.document.querySelector('.our-work-container .carousel__back-button').click()
  }

  return (
    <div className="section our-work">
      <h2 className="caption-primary">
        Our Work
        {
          breakpoints.md && (
            <CarouselButtons 
              onClickPrev={ handleClickBackBtn }
              onClickNext={ handleClickNextBtn }
            />
          )
        }
      </h2>

      <div className="our-work-container">
        {
          breakpoints.md ? 
            <OurWorkMobile /> : 
            <OurWorkDesctop />
        }
      </div>
    </div>
  )
}


