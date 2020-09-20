import React from 'react'
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  DotGroup
} from 'pure-react-carousel'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { arrayOf, shape, string } from 'prop-types'

import '../../../styles/components/mobile-ui-layout.scss'

import LoadImage from '../../LoadImage'

/** Backgrounds */
import bgWebpLg from '../../../../static/backgrounds/portfolio/mobile-ui-large.webp'
import bgWebpSm from '../../../../static/backgrounds/portfolio/mobile-ui-small.webp'
import bgJpgLg from '../../../../static/backgrounds/portfolio/mobile-ui-large.jpg'
import bgJpgSm from '../../../../static/backgrounds/portfolio/mobile-ui-small.jpg'

const MobileUiLayout = ({ items }) => {
  const breakpoint = useBreakpoint()

  return (
    <section className="mobile-ui">
      <h2 className="caption-primary">Mobile UI</h2>
      <CarouselProvider
        naturalSlideWidth={ 100 }
        naturalSlideHeight={ 80 }
        isIntrinsicHeight={ true }
        totalSlides={ items.length }
        infinite={ true }
        currentSlide={ 0 }
        visibleSlides={ breakpoint.md ? 1 : 5 }
        className="mobile-ui-carousel"
      >

        {/* Slides */}
        <Slider>
          {
            items.map((item, index) => (
              <Slide
                key={ index }
                index={ index }
              >
                <div className="mobile-ui__card">
                  <LoadImage
                    primarySm={ item.imageSmWebp }
                    primaryLg={ item.imageLgWebp }
                    secondarySm={ item.imageSmPng }
                    secondaryLg={ item.imageLgPng }
                    lazyLoad
                    secondaryType="png" 
                    alt="UI image"
                  />
                </div>
              </Slide>
            ))
          }
        </Slider>

        { breakpoint.md && <DotGroup /> }
   
        {/* {
          breakpoint.md ? (
            <DotGroup />
          ) : (
            <div className="carousel-buttons__container">
              <ButtonBack className="carousel__button carousel__button--white ">
                <span className="carousel__button-arrow left" />
              </ButtonBack>
              <ButtonNext className="carousel__button carousel__button--white ">
                <span className="carousel__button-arrow right" />
              </ButtonNext>
            </div>
          )
        } */}
      </CarouselProvider>

      <div 
        data-bgset={ `${bgJpgSm} [(max-width: 992px)] | ${bgJpgLg}` } 
        data-bgset-webp={ `${bgWebpSm} [(max-width: 992px)] | ${bgWebpLg}` }
        className="background lazyload"
      />
    </section>
  )
}

MobileUiLayout.propTypes = {
  items: arrayOf(shape({
    imageSmWebp: string.isRequired,
    imageLgWebp: string.isRequired,
    imageSmPng: string.isRequired,
    imageLgPng: string.isRequired
  }))
}

export default MobileUiLayout