import React from 'react'
import { 
  string, 
} from 'prop-types'

const ReviewSlide = ({ name, position, children }) => {

  return (
    <div className="review-slide">
      <div className="review-slide__text">{ children }</div>
      <hr className="review-slide__line" />
      <div className="review-slide__name">{ name }</div>
      <div className="review-slide__position">{ position }</div>
    </div>
  )
}

ReviewSlide.propTypes = {
  name: string.isRequired,
  position: string.isRequired,
  children: string.isRequired
}

export default ReviewSlide