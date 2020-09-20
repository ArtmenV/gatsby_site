import React from 'react'
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  DotGroup
} from 'pure-react-carousel'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import LoadImage from '../../../LoadImage'

/** Images */
import Ui1SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-1-small.png'
import Ui1SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-1-small.webp'
import Ui1LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-1-large.png'
import Ui1LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-1-large.webp'

import Ui2SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-2-small.png'
import Ui2SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-2-small.webp'
import Ui2LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-2-large.png'
import Ui2LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-2-large.webp'

import Ui3SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-3-small.png'
import Ui3SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-3-small.webp'
import Ui3LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-3-large.png'
import Ui3LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-3-large.webp'

import Ui4SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-small.png'
import Ui4SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-small.webp'
import Ui4LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-large.png'
import Ui4LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-large.webp'

import Ui5SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-small.png'
import Ui5SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-small.webp'
import Ui5LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-large.png'
import Ui5LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-large.webp'

/** Backgrounds */
import bgWebpLg from '../../../../../static/backgrounds/portfolio/mobile-ui-large.webp'
import bgWebpSm from '../../../../../static/backgrounds/portfolio/mobile-ui-small.webp'
import bgJpgLg from '../../../../../static/backgrounds/portfolio/mobile-ui-large.jpg'
import bgJpgSm from '../../../../../static/backgrounds/portfolio/mobile-ui-small.jpg'

export default () => {
  const breakpoint = useBreakpoint()

  return (
    <section className="mobile-ui">
      <h2 className="caption-primary">Mobile UI</h2>
      <CarouselProvider
        naturalSlideWidth={ 100 }
        naturalSlideHeight={ 80 }
        isIntrinsicHeight={ true }
        totalSlides={ 5 }
        infinite={ true }
        currentSlide={ 0 }
        visibleSlides={ breakpoint.md ? 1 : 5 }
        className="mobile-ui-carousel"
      >
        {/* Slides */}
        <Slider>
          <Slide index={ 0 }>
            <div className="mobile-ui-card">
              <LoadImage
                primarySm={ Ui1SmWebp }
                primaryLg={ Ui1LgWebp }
                secondarySm={ Ui1SmPng }
                secondaryLg={ Ui1LgPng }
                lazyLoad
                secondaryType="png" 
                alt="UI image"
              />
            </div>
          </Slide>

          <Slide index={ 1 }>
            <div className="mobile-ui-card">
              <LoadImage
                primarySm={ Ui2SmWebp }
                primaryLg={ Ui2LgWebp }
                secondarySm={ Ui2SmPng }
                secondaryLg={ Ui2LgPng }
                lazyLoad
                secondaryType="png" 
                alt="UI image"
              />
            </div>
          </Slide>

          <Slide index={ 2 }>
            <div className="mobile-ui-card">
              <LoadImage
                primarySm={ Ui3SmWebp }
                primaryLg={ Ui3LgWebp }
                secondarySm={ Ui3SmPng }
                secondaryLg={ Ui3LgPng }
                lazyLoad
                secondaryType="png" 
                alt="UI image"
              />
            </div>
          </Slide>

          <Slide index={ 3 }>
            <div className="mobile-ui-card">
              <LoadImage
                primarySm={ Ui4SmWebp }
                primaryLg={ Ui4LgWebp }
                secondarySm={ Ui4SmPng }
                secondaryLg={ Ui4LgPng }
                lazyLoad
                secondaryType="png" 
                alt="UI image"
              />
            </div>
          </Slide>

          <Slide index={ 4 }>
            <div className="mobile-ui-card">
              <LoadImage
                primarySm={ Ui5SmWebp }
                primaryLg={ Ui5LgWebp }
                secondarySm={ Ui5SmPng }
                secondaryLg={ Ui5LgPng }
                lazyLoad
                secondaryType="png" 
                alt="UI image"
              />
            </div>
          </Slide>
        </Slider>

        {
          breakpoint.md && <DotGroup />
        }
   
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