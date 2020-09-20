import React from 'react'
import { func, bool } from 'prop-types'

// import '../styles/components/carousel-buttons.scss'

const CarouselButtons =  ({ 
  onClickPrev, 
  onClickNext,
  vertical,
  blue 
}) => {
  let classResult = 'carousel__button'
  
  // Calculate result class
  if (blue) {
    classResult += ' carousel__button--blue'
  } else {
    classResult += ' carousel__button--white'
  }

  return (
    <div className={ `carousel-buttons__container ${ vertical ? 'carousel-buttons__container--vertical' : '' }` }>
      <button  
        onClick={ onClickPrev }
        className={ classResult }
        aria-label="To the prev slide"
      >
        <span className="carousel__button-arrow left" />
      </button>

      <button  
        onClick={ onClickNext }
        className={ classResult }
        aria-label="To the next slide"
      >
        <span className="carousel__button-arrow right" />
      </button>
    </div>
  )
  
}

CarouselButtons.propTypes = {
  onClickPrev: func.isRequired,
  onClickNext: func.isRequired,
  blue: bool,
  vertical: bool
}

export default CarouselButtons