import React, { 
  useState, 
  useEffect,
  useRef
} from 'react'
import { 
  CarouselProvider, 
  Slider, 
  Slide, 
  ButtonBack, 
  ButtonNext
} from 'pure-react-carousel'
import { useSelector } from 'react-redux'

import { clients } from '../../../constants'

import ClientBox from './ClientBox'
import OurClientsCarouselTracker from './OurClientsCarouselTracker'

import eurasia from '../../../../static/images/landing/eurasia.png'
import europe from '../../../../static/images/landing/europe.png'
import america from '../../../../static/images/landing/america.png'

const continents = [
  'america',
  'europe',
  'eurasia'
]

export default () => {
  const count = useSelector(state => state.countClick)

  // Timer Id
  const [timerId, _setTimerId] = useState(null)
  const timerIdRef = useRef(timerId)

  const setTimerId = data => {
    timerIdRef.current = data
    _setTimerId(data)
  }

  // Current Index of Fullpage
  const currentSectionIndex = useSelector(state => state.currentSectionIndex)

  // It uses for setting current slide value from currentIndex in carousel
  const [currentSlide, setCurrentSlide] = useState(0)

  // It store current index of slide via OurClientsCarouselTracker
  const [currentIndex, _setCurrentIndex] = useState(0)
  const currentIndexRef = useRef(currentIndex)
  
  const setCurrentIndex = data => {
    currentIndexRef.current = data
    _setCurrentIndex(data)
  }

  const handleClick = () => {  
    // timerIdRef.current !== null && clearInterval(timerIdRef.current)
    // switchSlide()
    launchAutoPlaySlide()
  }

  const switchSlide = () => {
    switch (currentIndexRef.current) {
      case 0:
        setCurrentSlide(1)
        break
      case 1:
        setCurrentSlide(2)
        break
      case 2:
        setCurrentSlide(0)
        break
      default:
        break
    }
  }

  const launchAutoPlaySlide = () => {
    const timerId = setInterval(() => {
      switchSlide()
    }, 3200)

    setTimerId(timerId)
  }

  // Launch/stop slide playback
  // useEffect(() => {
  //   if (currentSectionIndex === 4 && timerId === null) {
  //     launchAutoPlaySlide()
  //   } else if (currentSectionIndex !== 4 && timerId !== null) {
  //     clearInterval(timerId)
  //     setTimerId(null)
  //   }
    
  //   return () => clearInterval(timerId)
  // }, [currentSectionIndex])

  useEffect(() => {
    const carousel = document.querySelector('.our-clients-carousel')
    carousel.addEventListener('click', handleClick)

    return () => carousel.removeEventListener('click', handleClick)
  }, [])

  return (
    <CarouselProvider
      naturalSlideWidth={ 100 }
      naturalSlideHeight={ 80 }
      isIntrinsicHeight={ true }
      totalSlides={ 3 }
      infinite={ false }
      currentSlide={ currentSlide }
      isPlaying={ false }
      // interval={ 3200 }
      playDirection="forward"
      dragEnabled={ false }
      touchEnabled={ false }
      className="our-clients-carousel"
    >
      {/* Slides */}
      <Slider classNameAnimation="our-clients__transition">
        {
          continents.map((continent, index) => {
            let imgSrc

            switch (continent) {
              case 'europe':
                imgSrc = europe
                break;
              case 'eurasia':
                imgSrc = eurasia
                break;
              case 'america':
                imgSrc = america
                break;
              default:
                break
            }

            return (
              <Slide 
                index={ index }
                key={ index }  
              >
                <img 
                  data-src={ imgSrc }
                  className="map-client__image lazyload" 
                  alt={ `${continent} map` }
                />

                {
                  clients.map((client, index) => {
                    if (client.continent === continent) {
                      return (
                        <ClientBox 
                          projectName={ client.projectName }
                          projectBranch={ client.projectBranch }
                          location={ client.location }
                          className={ `${client.city} ${count === client.order ? 'animated' : '' }` }
                          key={ index }
                        />
                      )
                    }
                  })
                }
              </Slide>
            )
          })
        }
      </Slider>

      {/* Buttons */}
      <ButtonBack className="button-go-back" />
      <ButtonNext className="button-go-next" />

      {/* <OurClientsCarouselTracker setCurrentIndex={ setCurrentIndex } /> */}
    </CarouselProvider>
  )
}