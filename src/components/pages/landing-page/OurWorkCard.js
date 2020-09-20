import React, { useState, useRef } from 'react'
import { string } from 'prop-types'

import OurWorkContent from './OurWorkContent'

import ExpandIcon from '../../../../static/icons/expand.svg'
import CollapseIcon from '../../../../static/icons/collapse.svg'

const OurWorkCard = ({ 
  title, 
  content, 
  link,
  className,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [timerId, setTimerId] = useState(null)
  const card = useRef(null)

  //----------------------------------------------
  const collapseSection = element => {
    let sectionHeight = element.scrollHeight

    let elementTransition = element.style.transition
    element.style.transition = ''

    requestAnimationFrame(function() {
      element.style.height = sectionHeight + 'px'
      element.style.transition = elementTransition

      requestAnimationFrame(function() {
        element.style.height = 0 + 'px'
      })
    })
  }

  const expandSection = element => {
    const sectionHeight = element.scrollHeight
    element.style.height = sectionHeight + 'px'
  }


  //----------------------------------------------
  const onMouseEnter = () => {
    setIsExpanded(true)

    const contentBlock = card.current.querySelector('.our-work-content-block')
    const timerId = setTimeout(() => expandSection(contentBlock), 200)

    setTimerId(timerId)
  }

  const onMouseLeave = () => {
    timerId && clearTimeout(timerId)

    setIsExpanded(false)

    const contentBlock = card.current.querySelector('.our-work-content-block')
    collapseSection(contentBlock)
  }

  return (
    <div
      ref={ el => { card.current = el } } 
      onMouseEnter={ onMouseEnter } 
      onMouseLeave={ onMouseLeave }
      className={ `our-work__card ${ className } ${ isExpanded ? 'our-work__card--expanded' : '' }` }
    >
      <OurWorkContent
        title={ title }
        content={ content }
        link={ link }
      >
        { isExpanded ? (
          <CollapseIcon className="our-work__card-icon icon--collapse" />
         ) : ( 
          <ExpandIcon className="our-work__card-icon icon--expand" /> 
        )}

      </OurWorkContent>
    </div>
  )
}

OurWorkCard.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  link: string.isRequired,
  className: string.isRequired,
}

export default OurWorkCard