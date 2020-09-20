import React from 'react'
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext,
  DotGroup 
} from 'pure-react-carousel'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import 'pure-react-carousel/dist/react-carousel.es.css'

import { reviews } from '../../../constants'

import ReviewSlide from './ReviewSlide'
import ReviewLinks from '../../ReviewLinks'
import CarouselButtons from '../../CarouselButtons'

import ArrowNext from '../../../../static/icons/arrow-next.svg'
import ArrowPrev from '../../../../static/icons/arrow-prev.svg'
import Logo from '../../../../static/icons/logo.svg' 

import snowflakeSmJpg from '../../../../static/backgrounds/landing/snowflake-small.jpg'
import snowflakeSmWebp from '../../../../static/backgrounds/landing/snowflake-small.webp'
import snowflakeJpg from '../../../../static/backgrounds/landing/snowflake-large.jpg'
import snowflakeWebp from '../../../../static/backgrounds/landing/snowflake-large.webp'

export default () => {
  const breakpoints = useBreakpoint()

  const handleClickNextBtn = () => {
    window.document.querySelector('.reviews-carousel .carousel__next-button').click()
  }

  const handleClickBackBtn = () => {
    window.document.querySelector('.reviews-carousel .carousel__back-button').click()
  }

  return (
    <div 
      data-bgset={ `${snowflakeSmJpg} [(max-width: 992px)] | ${snowflakeJpg}` } 
      data-bgset-webp={ `${snowflakeSmWebp} [(max-width: 992px)] | ${snowflakeWebp}` }
      className="section reviews lazyload"
    >
      <h2 className="caption-primary">
        Reviews
        {
          breakpoints.md && (
            <CarouselButtons 
              onClickPrev={ handleClickBackBtn }
              onClickNext={ handleClickNextBtn }
            />
          )
        }
      </h2>

      <div className="reviews__content">
        <Logo className="reviews__logo" />

        <CarouselProvider
          naturalSlideWidth={ 100 }
          naturalSlideHeight={ 80 }
          isIntrinsicHeight={ true }
          interval={ 5000 }
          // isPlaying={ true }
          totalSlides={ reviews.length }
          infinite={ true }
          className="reviews-carousel"
        >
          <Slider>
            {
              reviews.map((review, index) => (
                <Slide 
                  index={ index }
                  key={ index }
                >
                  <ReviewSlide
                    name={ review.name }
                    position={ review.position }
                  >
                    { review.review }
                  </ReviewSlide>
                </Slide>
              ))
            }
          </Slider>

          {/* Buttons */}
          <ButtonBack className="button-go-back">
            <ArrowPrev className="icon--arrow" />
          </ButtonBack>
          <ButtonNext className="button-go-next">
            <ArrowNext className="icon--arrow" />
          </ButtonNext>

          {/* Dots */}
          <DotGroup />

        </CarouselProvider>
      </div>
      <ReviewLinks />
    </div>
  )
}