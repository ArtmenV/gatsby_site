import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
// import {
//   shape,
//   string
// } from 'prop-types'

import FeedbackMobile from './FeedbackMobile'
import FeedbackDesktop from './FeedbackDesktop'

import '../../../styles/components/feedback-layout.scss'

const FeedbackLayout = ({
  reviewImagesSm,
  reviewImagesLg
}) => {
  const breakpoint = useBreakpoint()

  return (
    <section className="feedback-redesign">
      <h2 className="caption-primary">Feedback</h2>
      {
        breakpoint.md ?
          <FeedbackMobile reviewImages={ reviewImagesSm } /> :
          <FeedbackDesktop reviewImages={ reviewImagesLg } />
      }
    </section>
  )
}

// FeedbackLayout.propTypes = {
//   reviewImagesSm: shape({
//     imageWebp: string.isRequired,
//     imageJpg: string.isRequired
//   }),
//   reviewImagesLg: shape({
//     imageWebp: string.isRequired,
//     imageJpg: string.isRequired
//   })
// }

export default FeedbackLayout
