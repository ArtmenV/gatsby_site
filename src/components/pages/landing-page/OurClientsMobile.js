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

import ClientBox from './ClientBox'
import OurClientsCarouselTracker from './OurClientsCarouselTracker'

import eurasia from '../../../../static/images/landing/eurasia.png'
import europe from '../../../../static/images/landing/europe.png'
import america from '../../../../static/images/landing/america.png'

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
    timerIdRef.current !== null && clearInterval(timerIdRef.current)
    switchSlide()
    launchAutoPlaySlide()
  }

  const switchSlide = () => {
    switch (currentIndexRef.current) {
      case 1:
        setCurrentSlide(2)
        return
      case 0:
        setCurrentSlide(1)
        return
      case 2:
        setCurrentSlide(0)
        return
    }
  }

  const launchAutoPlaySlide = () => {
    const timerId = setInterval(() => {
      switchSlide()
    }, 3200)

    setTimerId(timerId)
  }

  // Launch/stop play slide
  useEffect(() => {
    if (currentSectionIndex === 4 && timerId === null) {
      launchAutoPlaySlide()
    } else if (currentSectionIndex !== 4 && timerId !== null) {
      clearInterval(timerId)
      setTimerId(null)
    }
    
    return () => clearInterval(timerId)
  }, [currentSectionIndex])

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
      interval={ 3200 }
      playDirection="forward"
      dragEnabled={ false }
      touchEnabled={ false }
      className="our-clients-carousel"
    >
      {/* Slides */}
      <Slider classNameAnimation="our-clients__transition">

        {/* America */}
        <Slide index={ 0 }  className="map-client">
          <img 
            data-src={ america }
            className="map-client__image lazyload" 
            alt="America map"
          />
          <ClientBox
            projectName="Adsblocking SaaS"
            projectBranch="Security"
            location="USA, IL, Chicago"
            className={ `chicago ${count === 4 ? 'animated' : '' }` }
          />
          <ClientBox 
            projectName="Car Bodyshops ERP"
            projectBranch="Auto"
            location="USA, CA, San Diego"
            className={ `san-diego ${count === 1 ? 'animated' : '' }` }
          />
          <ClientBox 
            projectName="ERP Product API"
            projectBranch="Retail"
            location="USA, MA, Lewiston"
            className={ `lewiston ${count === 7 ? 'animated' : '' }`}
          />
        </Slide>

        {/* Europe */}
        <Slide index={ 1 }  className="map-client">
          <img 
            data-src={ europe }
            className="map-client__image lazyload" 
            alt="Europe map"
          />
          <ClientBox 
            projectName="Gift Shop Directory"
            projectBranch="Lifestyle"
            location="UK, London"
            className={ `london ${count === 2 ? 'animated' : '' }` }
          />
          <ClientBox 
            projectName="Hotel Booking Platform"
            projectBranch="Travel"
            location="Netherlands, Breda"
            className={ `breda ${count === 8 ? 'animated' : '' }` }
          />
          <ClientBox 
            projectName="Language Schools Website"
            projectBranch="Education"
            location="Spain, Barcelona"
            className={ `barcelona ${count === 5 ? 'animated' : '' }`}
          />
        </Slide>

        {/* Asia */}
        <Slide index={ 2 } className="map-client">
          <img 
            data-src={ eurasia }
            className="map-client__image lazyload" 
            alt="Asia map"
          />
          <ClientBox 
            className="novosibirsk"
            location="Russia, Novosibirsk"
          >
            <div className="company-title">Zimalab here</div> 
          </ClientBox>
          <ClientBox 
            projectName="Monitoring Dashboard"
            projectBranch="Engineering"
            location="Australia, Wollongong"
            className={ `wollongong ${count === 6 ? 'animated' : '' }` }
          />
          <ClientBox 
            projectName="Vocalists Social Network"
            projectBranch="Music"
            location="Australia, Melbourne"
            className={ `melbourne ${count === 3 ? 'animated' : '' }`}
          />
          <ClientBox 
            projectName="Home Appliance eCommerce"
            projectBranch="Retail"
            location="Australia, Brisbane"
            className={ `brisbane ${count === 9 ? 'animated' : '' }` }
          />
        </Slide>
      </Slider>

      {/* Buttons */}
      <ButtonBack className="button-go-back" />
      <ButtonNext className="button-go-next" />

      <OurClientsCarouselTracker setCurrentIndex={ setCurrentIndex } />
    </CarouselProvider>
  )
}