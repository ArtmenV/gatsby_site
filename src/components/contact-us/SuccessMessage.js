import React from 'react'

import SmileSvg from '../../../static/icons/smile.svg'

export default () => (
  <div className="message">
    <div>
      <SmileSvg className="message__icon" />
      <p className="message__text">thank you!</p>
    </div>
    
    <p>Your message has been sent. We’ll get back to you in 24 hours.</p>
  </div>
)