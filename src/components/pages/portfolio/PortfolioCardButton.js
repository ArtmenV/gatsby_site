import React from 'react'

import Arrow from '../../../../static/icons/arrow.svg'

export default () => {
  const handleClick = (e) => {
    const parent = e.currentTarget.parentNode
    
    parent.classList.add('portfolio-card--opened')
  }

  return (
    <button
      onClick={ handleClick }
      className="portfolio-card__button"
    >
      Details
      <Arrow className="icon--arrow" />
    </button>
  )
}