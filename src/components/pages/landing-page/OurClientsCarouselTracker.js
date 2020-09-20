import { 
  useState, 
  useEffect,
  useContext
} from 'react'
import { useDispatch } from 'react-redux'
import { func } from 'prop-types'
import { CarouselContext } from 'pure-react-carousel'

import { increment } from '../../../redux/actions/clientsCarousel'

{/* It tracks current slide and count of switches */}
const OurClientsCarouselTracker = ({ setCurrentIndex }) => {
  const dispatch = useDispatch()
  const carouselContext = useContext(CarouselContext)
  const [currentSlide, setCurrentSlide] = useState(carouselContext.state.currentSlide)

  useEffect(() => {
    function onChange() {
      setCurrentSlide(carouselContext.state.currentSlide)
    }
    
    carouselContext.subscribe(onChange)

    return () => carouselContext.unsubscribe(onChange)
  }, [carouselContext])

  useEffect(() => {
    setCurrentIndex(currentSlide)
    dispatch(increment())
  }, [currentSlide])

  return null
}

OurClientsCarouselTracker.propTypes = {
  setCurrentIndex: func.isRequired
}

export default OurClientsCarouselTracker