import React from 'react'
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext 
} from 'pure-react-carousel'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { servicesItems } from '../../../constants'

import OurServicesCard from './OurServicesCard'

import ArrowPrev from '../../../../static/icons/arrow-prev.svg'
import ArrowNext from '../../../../static/icons/arrow-next.svg'
import Api from '../../../../static/icons/api.svg'
import Backend from '../../../../static/icons/backend.svg'
import Design from '../../../../static/icons/design.svg'
import Discovery from '../../../../static/icons/discovery.svg'
import Frontend from '../../../../static/icons/frontend.svg'
import Maintenance from '../../../../static/icons/maintenance.svg'
import Featured from '../../../../static/icons/featured.svg'

export default () => {
  const breakpoints = useBreakpoint()

  const getIcon = title => {
    switch (title) {
      case 'Discovery':
        return Discovery
      case 'UI/UX design':
        return Design
      case 'Frontend':
        return Frontend
      case 'Backend':
        return Backend
      case 'API':
        return Api
      case 'Featured':
        return Featured
      case 'Live & Maintenance':
        return Maintenance
      default:
        return Api
    }
  }

  return (
    <div className="our-services-desctop">
      <CarouselProvider
        naturalSlideWidth={ 354 }
        naturalSlideHeight={ 460 }
        isIntrinsicHeight={ true }
        interval={ 5000 }
        // isPlaying={ true }
        visibleSlides={ breakpoints.lg ? 2 : 3 }
        totalSlides={ servicesItems.length }
        infinite={ true }
        className="services-carousel"
      >
        <Slider>
          { 
            servicesItems.map((item, index) => (
              <Slide 
                index={ index } 
                key={ index } 
              >
                <OurServicesCard 
                  title={ item.title }
                  points={ item.points }
                  anchor={ item.anchor }
                  icon={ getIcon(item.title) }
                >
                  <div dangerouslySetInnerHTML={{ __html: item.text }} /> 
                </OurServicesCard>
              </Slide>
            ))
          }
        </Slider>

        {/* Buttons next and prev */}
        <ButtonBack className="button-go-back">
          <ArrowPrev width="42.77" height="13.5" />
        </ButtonBack>
        <ButtonNext className="button-go-next">
          <ArrowNext width="42.77" height="13.5" />
        </ButtonNext>
      </CarouselProvider>
    </div>
  )
}


    
