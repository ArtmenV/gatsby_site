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
  object,
  shape,
  string
} from 'prop-types'
import { CompanyCard } from './re_spp/CompanyCard'

import LoadImage from '../../LoadImage'

import '../../../styles/components/re_project-pics-layout.scss'

const ProjectPicsLayout = ({
  pictureItems,
  cardData
}) => {

  return (
    <section className="project-pictures-redesign">
      <h2 className="caption-primary">Project pics</h2>

      <CarouselProvider
        naturalSlideWidth={ 100 }
        naturalSlideHeight={ 80 }
        isIntrinsicHeight={ true }
        totalSlides={ 2 }
        infinite={ true }
        currentSlide={ 0 }
        visibleSlides={ 1 }
        className="project-pictures__carousel"
      >

        {/* Slides */}
        <Slider>
          {
            pictureItems.map((item, index) => (
              <Slide
                index={ index }
                key={ index }
              >
                <div className="project__carousel-slide">
                  <LoadImage
                    primaryLg={ item.imageWebpLg }
                    primarySm={ item.imageWebpSm }
                    secondaryLg={ item.imageJpgLg }
                    secondarySm={ item.imageJpgSm }
                    className={ `project__image` }
                    alt={ `Project image ${++index}` }
                    lazyLoad
                  />
                </div>

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

      <CompanyCard
        cardData= { cardData }
      />
    </section>
  )
}

ProjectPicsLayout.propTypes = {
  pictureItems: arrayOf(shape({
    imageWebpLg: string.isRequired,
    imageJpgLg: string.isRequired,
    imageWebpSm: string.isRequired,
    imageJpgSm: string.isRequired,
  })),
  cardData: object
}

export default ProjectPicsLayout
