import React, { 
  useState, 
  useEffect, 
  useRef 
} from 'react'
import { useWindowSize } from '../../../customHooks'

import Modal from '../../Modal'
import OurServicesCard from './OurServicesCard'

import Plus from '../../../../static/icons/plus.svg'
import Api from '../../../../static/icons/api.svg'
import Backend from '../../../../static/icons/backend.svg'
import Design from '../../../../static/icons/design.svg'
import Discovery from '../../../../static/icons/discovery.svg'
import Frontend from '../../../../static/icons/frontend.svg'
import Maintenance from '../../../../static/icons/maintenance.svg'
import Featured from '../../../../static/icons/featured.svg'

import { servicesItems } from '../../../constants'

export default () => {
  const [isVisible, _setIsVisible] = useState(false),
        [currentIndex, setCurrentIndex] = useState(0)
  const { height } = useWindowSize()
  const isVisibleRef = useRef(isVisible)

  const setIsVisible = data => {
    isVisibleRef.current = data
    _setIsVisible(data)
  }

  useEffect(() => {
    setModalTopPosition()
  }, [height])

  useEffect(() => {
    const ourServices = document.querySelector('.our-services')

    ourServices.addEventListener('click', closeModalHandler)

    return () => ourServices.removeEventListener('click', closeModalHandler)
  }, [])

  const closeModalHandler = (e) => {
    const modal = document.querySelector('.our-services-mobile .modal')
    const isInsideModal = modal.contains(e.target)

    isVisibleRef && !isInsideModal && handleClose()
  }
  

  const handleClick = (index) => {
    setCurrentIndex(index)
    setIsVisible(true)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  const setModalTopPosition = () => {
    const captionEl = document.querySelector('.our-services .caption-primary')
    const { marginTop } = getComputedStyle(captionEl)

    const modal = document.querySelector('.modal')
    modal.style.top = captionEl.scrollHeight + parseInt(marginTop) + 'px'
  }

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
      case 'Live & Maintenance':
        return Maintenance
      case 'Featured':
        return Featured
      default:
        return Api
    }
  }

  return (
    <div className="our-services-mobile">

      {/* List of items */}
      <ul className="our-services__list">
        {
          servicesItems.map((item, index) => {
            let className

            switch (item.title) {
              case 'Discovery':
                className = 'background--discovery'
                break
              case 'UI/UX design':
                className = 'background--design'
                break
              case 'Frontend':
                className = 'background--frontend'
                break
              case 'Backend':
                className = 'background--backend'
                break
              case 'API':
                className = 'background--api'
                break
              case 'Live & Maintenance':
                className = 'background--maintenance'
                break
              case 'Featured':
                className = 'background--featured'
                break
              default:
                className = 'background--api'
            }

            return (  
              <li key={ index }>
                <button
                  onClick={ () => handleClick(index) } 
                  className={ `our-services__btn ${className}` }
                  aria-label="Open service"
                >
                  <span className="our-services__btn-title">{ item.title }</span>
                  <Plus />
                </button>
                
              </li>
            )
          })
        }
      </ul>
      
      {/* Modal */}
      <Modal 
        visible={ isVisible }
        onClose={ handleClose }
      >
        <OurServicesCard 
          title={ servicesItems[currentIndex].title }
          points={ servicesItems[currentIndex].points }
          anchor={ servicesItems[currentIndex].anchor }
          icon={ getIcon(servicesItems[currentIndex].title) }
        >
          {/* <div dangerouslySetInnerHTML={{ __html: servicesItems[currentIndex].text }} />  */}
          { servicesItems[currentIndex].text }
        </OurServicesCard>
      </Modal>

    </div>
  )
}