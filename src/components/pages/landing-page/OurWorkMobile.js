import React from 'react'
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext,
  DotGroup 
} from 'pure-react-carousel'

import { workItems } from '../../../constants'

import OurWorkContent from './OurWorkContent'

export default () => (
  <>
    <CarouselProvider
      naturalSlideWidth={ 100 }
      naturalSlideHeight={ 80 }
      isIntrinsicHeight={ true }
      totalSlides={ workItems.length }
      infinite={ true }
      currentSlide={ 0 }
      visibleSlides={ 1 }
    >

      {/* Slides */}
      <Slider>
        {
          workItems.map((item, index) => (
            <Slide 
              index={ index }
              key={ index }
            >
              <div className={ `our-work__card ${ item.title }` }>
                <OurWorkContent 
                  title={ item.title }
                  content={ item.content }
                  link={ item.link }
                />
              </div>
            </Slide>
          ))
        }
      </Slider>

      {/* Buttons next and prev */}
      <ButtonBack className="hidden" />
      <ButtonNext className="hidden" />

      {/* Dots */}
      <DotGroup />
    </CarouselProvider>
  </>
)
    
 