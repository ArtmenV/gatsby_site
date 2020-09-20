import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from "@reach/router"

import { isMenuOpen } from '../redux/actions/menuActions'

import '../styles/components/hamburger-menu.scss'

export default () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const handleClick = () => {
    if (window && location.pathname === '/') {
      // Disable fullpage scroll
      window.fullpage_api.setKeyboardScrolling(false)
    } else {
      document.querySelector('body').classList.add('noscroll')
    }

    dispatch(isMenuOpen(true))
  }

  return (
    <button
      onClick={ handleClick }
      className="menu-btn"
      aria-label="Open menu"
    >
      <div className="menu-btn__inner">
        <div className="bar bar-1"></div>
        <div className="bar bar-2"></div>
        <div className="bar bar-3"></div>
      </div>
    </button>
  )
}

