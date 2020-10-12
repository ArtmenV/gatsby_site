import React from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import {
  arrayOf,
  shape,
  string
} from 'prop-types'

import LoadImage from '../../LoadImage'

const FeedbackMobile = ({
  reviewImages
}) => {
  return (
    <CarouselProvider
      naturalSlideWidth={ 278 }
      naturalSlideHeight={ 180 }
      isIntrinsicHeight={ true }
      totalSlides={ reviewImages.length }
      infinite={ true }
      currentSlide={ 0 }
      visibleSlides={ 1 }
      className="feedback__carousel"
    >

      {/* Slides */}
      <Slider>
        {
          reviewImages.map((reviewImage, index) => (
            <Slide
              index={ index }
              key={ index }
            >
              <LoadImage
                primaryLg={ reviewImage.imageWebp }
                secondaryLg={ reviewImage.imageJpg }
                className={ `carousel__image carousel__image-${index + 1}` }
                alt={ `Review-${++index} image` }
                lazyLoad
              />
            </Slide>
          ))
        }
      </Slider>

      {/* Buttons */}
      <div className="carousel-buttons__container">
        <ButtonBack className="carousel__button carousel__button--blue">
          <span className="carousel__button-arrow left" />
        </ButtonBack>
        <ButtonNext className="carousel__button carousel__button--blue">
          <span className="carousel__button-arrow right" />
        </ButtonNext>
      </div>
    </CarouselProvider>
  )
}

FeedbackMobile.propTypes = {
  reviewImages: arrayOf(shape({
    imageWebp: string.isRequired,
    imageJpg: string.isRequired
  }))
}


export default FeedbackMobile
