import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { 
  arrayOf,
  shape,
  string
} from 'prop-types'

import '../../../styles/components/feedback-layout.scss'

import FeedbackMobile from './FeedbackMobile'
import FeedbackDesktop from './FeedbackDesktop'

const FeedbackLayout = ({
  reviewImagesSm,
  reviewImagesLg
}) => {
  const breakpoint = useBreakpoint()

  return (
    <section className="feedback">
      <h2 className="caption-primary">Feedback</h2>
      {
        breakpoint.md ? 
          <FeedbackMobile reviewImages={ reviewImagesSm } /> :
          <FeedbackDesktop reviewImages={ reviewImagesLg } />
      }
    </section>
  )
}

FeedbackLayout.propTypes = {
  reviewImagesSm: arrayOf(shape({
    imageWebp: string.isRequired,
    imageJpg: string.isRequired
  })),
  reviewImagesLg: arrayOf(shape({
    imageWebp: string.isRequired,
    imageJpg: string.isRequired
  }))
}

export default FeedbackLayout