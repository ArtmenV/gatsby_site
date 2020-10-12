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

import eurasia from '../../../../static/images/landing/eurasia.png'
import europe from '../../../../static/images/landing/europe.png'
import america from '../../../../static/images/landing/america.png'

const continents = [
  'america',
  'europe',
  'eurasia'
]

export default () => {
  const [count, _setCount] = useState(1)
  const countRef = useRef(count)
  const setCount = data => {
    countRef.current = data
    _setCount(data)
  }


  const [timerId, _setTimerId] = useState(null)
  const timerIdRef = useRef(timerId)
  const setTimerId = data => {
    timerIdRef.current = data
    _setTimerId(data)
  }

  const currentSectionIndex = useSelector(state => state.currentSectionIndex)

  const [currentSlide, _setCurrentSlide] = useState(0)
  const currentSlideRef = useRef(currentSlide)
  const setCurrentSlide = data => {
    currentSlideRef.current = data
    _setCurrentSlide(data)
  }

  const handleClick = () => {  
    timerIdRef.current && stopAutoPlaySlide(timerIdRef.current)
    switchSlide()
    launchAutoPlaySlide()
  }

  const switchSlide = () => {
    switch (currentSlideRef.current) {
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

    countRef.current === clients.length ?
      setCount(1) :
      setCount(countRef.current + 1)
  }

  const stopAutoPlaySlide = timerId => {
    clearInterval(timerId)
    setTimerId(null)
  }

  const launchAutoPlaySlide = () => {
    const timerId = setInterval(() => {
      switchSlide()
    }, 3200)
    setTimerId(timerId)
  }

  useEffect(() => {
    const carousel = document.querySelector('.our-clients-carousel')
    carousel.addEventListener('click', handleClick)

    return () => carousel.removeEventListener('click', handleClick)
  }, [])

   useEffect(() => {
    if (currentSectionIndex === 4) {
      launchAutoPlaySlide()
    } else if (currentSectionIndex !== 4 && timerIdRef.current) {
      stopAutoPlaySlide(timerIdRef.current)
    }

    return () => timerIdRef.current && clearInterval(timerIdRef.current)
  }, [currentSectionIndex])

  return (
    <CarouselProvider
      naturalSlideWidth={ 100 }
      naturalSlideHeight={ 80 }
      isIntrinsicHeight={ true }
      totalSlides={ 3 }
      infinite={ false }
      currentSlide={ currentSlide }
      isPlaying={ false }
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
                          className={ `${client.city} 
                            ${count === client.order && currentSectionIndex === 4 ? 
                              'animated' : 
                              '' 
                            }` 
                          }
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
    </CarouselProvider>
  )
}