import React from 'react'
import {
  string,
  array,
  func,
  bool
} from 'prop-types'
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext
} from 'pure-react-carousel' 

import { ServicePortfolioCards } from './ServicePortfolioCards'

export const CardCarouselComponent = ({ 
  navigationServicesData, 
  handleOpenCard, 
  isSeeDetailBtn,
  titleSection
}) => {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={ 320 }
        naturalSlideHeight={ 340 }
        totalSlides={ navigationServicesData.length }
        infinite={ true }
        currentSlide={ 0 }
        visibleSlides={ 1 }
        dragEnabled={ false }
        touchEnabled={ false }
        className={`services__carousel services__carousel-${ titleSection }`}
      >
        {/* Slides */}
        <Slider>
          {navigationServicesData.map((currentCardItem, index) => (
            <Slide
              key={ index }
              index={ index }
            >
              <ServicePortfolioCards
                titleSection={ titleSection }
                currentCardItem={ currentCardItem }
                handleOpenCard={ handleOpenCard }
                isSeeDetailBtn={ isSeeDetailBtn }
              />
            </Slide>
          ))}
        </Slider>

        {/* Buttons */}
        <ButtonBack className="hidden" />
        <ButtonNext className="hidden" />
      </CarouselProvider>
    </>
  )
}

CardCarouselComponent.propTypes = {
  navigationServicesData: array.isRequired,
  isSeeDetailBtn: bool.isRequired,
  titleSection: string.isRequired,
  handleOpenCard: func
}