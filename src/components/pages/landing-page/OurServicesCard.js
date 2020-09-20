import React, { useRef, useEffect } from 'react'
import { 
  string, 
  element, 
  oneOfType, 
  array
} from 'prop-types'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { navigate } from "gatsby"

import Arrow from '../../../../static/icons/arrow.svg'


const OurServicesCard = ({ 
  title, 
  anchor, 
  icon,
  points, 
  children 
}) => {
  const breakpoints = useBreakpoint()
  const card = useRef(null)
  const Icon = icon

  useEffect(() => {
    const isClient = typeof window === 'object'

    isClient && !breakpoints.md && calculateSpacerHeight()
  },[])

  const calculateSpacerHeight = () => {
    const { 
      paddingTop,
      paddingBottom 
    } = getComputedStyle(card.current)
    
    const cardHeight = card.current.clientHeight
    const icon = card.current.querySelector(".service-card__icon")
    const { height: iconHeight } = getComputedStyle(icon)
    
    const spacer = card.current.querySelector(".service-card__spacer")

    if (spacer) {
      spacer.style.height = cardHeight - parseInt(paddingTop) - parseInt(paddingBottom) - parseInt(iconHeight) + 'px'
    }
    
  }

  const handleClick = () => {
    navigate('/services/', { state: { anchor } })
  }
  
  return (
    <div 
      ref={ card } 
      className="service-card"
    >
      {
        !breakpoints.md && (
          <>
            <div className="service-card__spacer"></div>
            <Icon className="service-card__icon" />
          </>
        )
      }
      <div className="service-card__line"></div>
      <h3 className="service-card__title">{ title }</h3>
      <div className="service-card__text">{ children }</div>
      
      <ul className="service-card__points">
        {
          points.map((point, index) => (
            <li key={ index }>{ point }</li>
          ))
        }
      </ul> 

      {/* <Link
        // to={ url }
        to="/services/"
        
        svgIcon={ <Arrow className="icon--arrow" /> }
        className="service-card__link"
      >
        see more
      </Link> */}

      <button
        onClick={ handleClick } 
        className="service-card__link"
      >
        see more
        <Arrow className="icon--arrow" />
      </button>

      {
        breakpoints.md && (
          <div className="service-card__icon-mobile">
            <Icon />
          </div>
        )
      }
    </div>
  )
}

OurServicesCard.propTypes = {
  title: string.isRequired,
  anchor: string.isRequired,
  // children: oneOfType([
  //   element,
  //   array
  // ])
}

export default OurServicesCard
    
