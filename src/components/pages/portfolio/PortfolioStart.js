import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import HomeLink from '../../HomeLink'
import ButtonToNext from '../../ButtonToNext'
import ReviewLinks from '../../ReviewLinks'

export default () => {
  const breakpoint = useBreakpoint()

  return (
    <section className="portfolio-start">
      <h1 className="portfolio-start__title">Our work</h1>
      <HomeLink />
      <ReviewLinks noStar={ breakpoint.md } />
      <ButtonToNext to="portfolio-container" />
    </section>
  )
}