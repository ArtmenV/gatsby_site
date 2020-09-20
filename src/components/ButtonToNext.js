import React from 'react'
import { func, string } from 'prop-types'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import ArrowIcon from '../../static/icons/arrow-bottom.svg'
import MouseIcon from '../../static/icons/mouse.svg'

import '../styles/components/button-next-slide.scss'

const ButtonToNext = ({ 
  to,
  handleClick 
}) => {
  const breakpoints = useBreakpoint()

  const onClick = () => {
    if (to) {
      const target = document.querySelector(`.${to}`).offsetTop

      window.scrollTo({
        top: target,
        behavior: 'smooth'
      })
    } else {
      handleClick()
    }
  }
  
  return (
    <button
      onClick={ onClick }
      className="btn-next-slide"
      aria-label="To the next section" 
    >
      {
        !breakpoints.md && <MouseIcon className="mouse" />
      }
      <ArrowIcon className="arrow" />
    </button>
  )
}

ButtonToNext.propTypes = {
  to: string,
  handleClick: func
}

export default ButtonToNext
