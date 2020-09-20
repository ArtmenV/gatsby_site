import React from 'react'

import Facebook from '../../static/icons/facebook.svg'
import Twitter from '../../static/icons/twitter.svg'
import Linkedin from '../../static/icons/linkedin.svg'

import '../styles/components/social-links.scss'

export default ({ children }) => (
  <div className="social-links-container">
    <a href="">
      <Facebook />
    </a>
    <a 
      href="">
      <Twitter />
    </a>
    <a 
      href="">
      <Linkedin />
    </a>
    { children }
  </div>
)