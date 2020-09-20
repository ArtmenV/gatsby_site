import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { 
  arrayOf,
  shape,
  string
} from 'prop-types'

import FeedbackMobile from './FeedbackMobile'
import FeedbackDesktop from './FeedbackDesktop'

import '../../../styles/components/re_feedback-layout.scss'

const FeedbackLayout = ({
  reviewImagesSm,
  reviewImagesLg
}) => {
  const breakpoint = useBreakpoint()

  return (
    <section className="feedback-lingua">
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