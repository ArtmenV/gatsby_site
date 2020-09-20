import React from 'react'
import { Link } from 'gatsby'
import { func } from 'prop-types'

import Logo from '../../static/icons/logo-with-title.svg'

import '../styles/components/home-link.scss'

const HomeLink = ({ onClick }) => {

  return (
    <Link 
      to="/"
      onClick={ onClick }
      className="link-home"
    >
      <Logo className="link-home__icon" />
    </Link>
  )
}

HomeLink.propTypes = {
  onClick: func
}

export default HomeLink

