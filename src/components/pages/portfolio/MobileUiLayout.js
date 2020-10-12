import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import '../../../styles/components/mobile-ui-layout.scss'

import LoadImage from '../../LoadImage'

export default ({
  items
}) => {
  const breakpoint = useBreakpoint()
  const refMobileUi = React.useRef(null)

  const handleChangeSlide = (activeSLideIndex) => {
    const totalSlide =[...refMobileUi.current.querySelectorAll('.carousel__slide')]
    const activeSlideIndex = totalSlide
      .map(item => item.className.includes('carousel__slide--visible'))
      .indexOf(true)
    if (activeSlideIndex > activeSLideIndex) {
      document.body.querySelector(`.carousel__back-button`).click()
    } else {
      document.body.querySelector(`.carousel__next-button`).click()
    }
  }

  return (
    <section
      ref={ refMobileUi }
      className="mobile-ui-redesign"
    >
      <h2 className="caption-primary">Mobile UI</h2>
      <CarouselProvider
        naturalSlideWidth={ 165 }
        naturalSlideHeight={ 323 }
        isIntrinsicHeight={ true }
        totalSlides={ 5 }
        infinite={ true }
        currentSlide={ breakpoint.md ? 1 : 2 }
        visibleSlides={ 1 }
        className="mobile-ui-carousel"
      >
        {/* Slides */}
        <Slider>
          {items.map((item, index) => (
            <Slide
              key={ index }
              index={ index }
              onClick={ () => handleChangeSlide(index) }
            >
              <div className="mobile-ui__card">
                <LoadImage
                  primarySm={ item.imageSmWebp }
                  primaryLg={ item.imageLgWebp }
                  secondarySm={ item.imageSmPng }
                  secondaryLg={ item.imageLgPng }
                  secondaryType="png"
                  alt="UI image"
                  lazyLoad
                />
              </div>
            </Slide>
          ))}
        </Slider>

        <div className="carousel-buttons__container">
          <ButtonBack className="carousel__button carousel__button--white ">
            <span className="carousel__button-arrow left" />
          </ButtonBack>
          <ButtonNext className="carousel__button carousel__button--white ">
            <span className="carousel__button-arrow right" />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </section>
  )
}
