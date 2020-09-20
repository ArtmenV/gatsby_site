import React from 'react'
import { string } from 'prop-types'
import { useDispatch } from 'react-redux'
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"

import { isMenuOpen } from '../../redux/actions/menuActions'
import { currentSectionIndex } from '../../redux/actions/fullpage'

const MenuItem = ({ 
  title, 
  link 
}) => {
  const dispatch = useDispatch()
  const location = useLocation()

  const handleClick = () => {
    const isHomePage = location.pathname === '/'
    const isLinkExternal = link.includes('/')

    dispatch(isMenuOpen(false))
    !isHomePage && document.querySelector('body').classList.remove('noscroll')

    if (isLinkExternal) {
      navigate(link)
      dispatch(currentSectionIndex(0))
    } else if (!isLinkExternal && isHomePage) {
        window.fullpage_api.setAllowScrolling(true)
        window.fullpage_api.setKeyboardScrolling(true)
        window.fullpage_api.moveTo(link)
    } else {
      navigate('/', { state: { anchor: link } })
    }
  }

  return (
    <li className="nav__list-item">
      <button 
        onClick={ handleClick }
        className="nav__list-item-button"
      >
        { title }
      </button>
    </li>
  )
}

MenuItem.propTypes = {
  title: string.isRequired,
  link: string.isRequired
}

export default MenuItem

