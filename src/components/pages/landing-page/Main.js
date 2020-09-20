import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import MainCaptions from './MainCaptions'
import ReviewLinks from '../../ReviewLinks'
import ButtonToNext from '../../ButtonToNext'
import HomeLink from '../../HomeLink'

import Finger from '../../../../static/icons/finger.svg'

export default () => {
  const breakpoints = useBreakpoint()
  
  const handleClick = () => {
    window && window.fullpage_api.moveTo('our-work')
  }

  return (
    <div className="section main">
      <div className="shaded-rectangle" />
      <HomeLink />
      <MainCaptions />
      <div className="developers">
        <Finger />
        Remote developers, in-house quality
      </div>
      <ReviewLinks noStar={ breakpoints.md } />
      <ButtonToNext handleClick={ handleClick } />
    </div>
  )
}