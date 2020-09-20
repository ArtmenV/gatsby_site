import React from 'react'
import { 
  arrayOf,
  shape,
  string
} from 'prop-types'

import LoadImage from '../../LoadImage'

const FeedbackDesktop = ({ reviewImages }) => {
  return (
    <>
      {   
        reviewImages.map((reviewImage, index) => (
          <LoadImage
            key={ index } 
            primaryLg={ reviewImage.imageWebp }
            secondaryLg={ reviewImage.imageJpg }
            className={ `feedback__image feedback__image-${++index}` }
            alt={ `Review-${++index} image` }
            lazyLoad
          />
        ))
      }
    </>
  )
}

FeedbackDesktop.propTypes = {
  reviewImages: arrayOf(shape({
    imageWebp: string.isRequired,
    imageJpg: string.isRequired
  }))
}

export default FeedbackDesktop