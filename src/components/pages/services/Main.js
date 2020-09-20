import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import ButtonToNext from '../../ButtonToNext'
import HomeLink from '../../HomeLink'
import ReviewLinks from '../../ReviewLinks'

export const Main = () => {
  const breakpoint = useBreakpoint()
  
  const handleClick = () => window && window.fullpage_api.moveTo('Discovery')

  return (
    <div className="section main-service">
      <div className="shaded-rectangle" />
      <HomeLink />
      <h1 className="service-title">
        OUR services
      </h1>
      <ReviewLinks noStar={ breakpoint.md } />
      <ButtonToNext handleClick={ handleClick } />
    </div>
  )
}