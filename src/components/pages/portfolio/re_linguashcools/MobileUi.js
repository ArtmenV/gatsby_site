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

import LoadImage from '../../../LoadImage'

import ArrowPrev from '../../../../../static/icons/arrow-prev.svg'
import ArrowNext from '../../../../../static/icons/arrow-next.svg'

/** Images */
import Ui1SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-1-sm.png'
import Ui1SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-1-sm.webp'
import Ui1LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-1-lg.png'
import Ui1LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-1-lg.webp'

import Ui2SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-2-sm.png'
import Ui2SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-2-sm.webp'
import Ui2LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-2-lg.png'
import Ui2LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-2-lg.webp'

import Ui3SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-3-sm.png'
import Ui3SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-3-sm.webp'
import Ui3LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-3-lg.png'
import Ui3LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-3-lg.webp'

// import Ui4SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-small.png'
// import Ui4SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-small.webp'
// import Ui4LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-large.png'
// import Ui4LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-large.webp'

// import Ui5SmPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-small.png'
// import Ui5SmWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-small.webp'
// import Ui5LgPng from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-large.png'
// import Ui5LgWebp from '../../../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-large.webp'

/** Backgrounds */
import bgWebpLg from '../../../../../static/backgrounds/portfolio/mobile-ui-large.webp'
import bgWebpSm from '../../../../../static/backgrounds/portfolio/mobile-ui-small.webp'
import bgJpgLg from '../../../../../static/backgrounds/portfolio/mobile-ui-large.jpg'
import bgJpgSm from '../../../../../static/backgrounds/portfolio/mobile-ui-small.jpg'

export default () => {
  const breakpoint = useBreakpoint()

  return (
    <section className="mobile-ui-redesign">
      <h2 className="caption-primary">Mobile UI</h2>
      <CarouselProvider
        naturalSlideWidth={ 165 }
        naturalSlideHeight={ 323 }
        isIntrinsicHeight={ true }
        totalSlides={ 3 }
        infinite={ true }
        currentSlide={ 1 }
        visibleSlides={ breakpoint.md ? 1 : 1 }
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
        </Slider>

        <div className="carousel-buttons__container">
          <ButtonBack className="carousel__button carousel__button--white ">
            <span className="carousel__button-arrow left" />
            {/* <ArrowPrev width="42.77" height="13.5" /> */}
          </ButtonBack>
          <ButtonNext className="carousel__button carousel__button--white ">
            <span className="carousel__button-arrow right" />
            
          </ButtonNext>
        </div>
        
        {/* <ButtonBack className="button-go-back">
          <ArrowPrev width="42.77" height="13.5" />
        </ButtonBack>
        <ButtonNext className="button-go-next">
          <ArrowNext width="42.77" height="13.5" />
        </ButtonNext> */}
      </CarouselProvider>
    </section>
  )
}