import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { useLocation } from "@reach/router"

import { isMenuOpen } from '../../redux/actions/menuActions'

import Navigation from './Navigation'
import CompanyInfo from '../CompanyInfo'
import ReviewLinks from '../ReviewLinks'
import Copyright from '../Copyright'
import HomeLink from '../HomeLink'
import ScheduleCallButton from '../ScheduleCallButton'

import CloseIcon from '../../../static/icons/close-icon.svg'

import '../../styles/components/menu.scss'

export default () => {
  const isOpen = useSelector(state => state.isMenuOpen)
  const dispatch = useDispatch()
  const location = useLocation()
  const breakpoints = useBreakpoint()
  const menuInfo = useRef(null)

  const handleClose = () => {
    if (window && location.pathname === '/') {
      // Enable fullpage scroll
      // window.fullpage_api.setAllowScrolling(true)
      window.fullpage_api.setKeyboardScrolling(true)
    } else {
      document.querySelector('body').classList.remove('noscroll')
    }

    dispatch(isMenuOpen(false))
  }

  const handleClick = () => {
    dispatch(isMenuOpen(false))
    document.querySelector('body').classList.remove('noscroll')
  }

  return (
    <div className={ `menu ${ isOpen ? 'menu--opened' : '' }` }>
      <button
        onClick={ handleClose }
        className="menu__btn-close"
        aria-label="Close menu" 
      >
        <CloseIcon />
      </button>
      <HomeLink onClick={ handleClick } />
      <Navigation />
      <div
        ref={ menuInfo } 
        className="menu-info"
      >
        <CompanyInfo />
        <ReviewLinks noStar={ breakpoints.md ? true : false } />
        <ScheduleCallButton />
      </div>
      { !breakpoints.md && <Copyright /> }
    </div>    
  )
}