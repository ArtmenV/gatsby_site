import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import favicon from '../../static/icons/favicon.png'

// import '../style/global.scss'

export default ({ children }) => {

  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.src = 'https://assets.calendly.com/assets/external/widget.js'
  //   document.head.append(script)

  //   script.onload = function() {
  //      Calendly.initBadgeWidget(
  //       { 
  //         url: 'https://calendly.com/zimalab/call',
  //         text: 'Schedule a Call', 
  //         color: '#00a2ff', 
  //         textColor: '#ffffff', 
  //         branding: false 
  //       })
  //   }
  // }, [])

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <link rel="icon" href={ favicon } />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src={ withPrefix('scripts/modernizr-custom.js') } type="text/javascript" />
        <script src={ withPrefix('scripts/modernizr-on-webp.js') } type="text/javascript" async />
        <script src={ withPrefix('scripts/lazysizes.min.js') } type="text/javascript" async />
        <script src={ withPrefix('scripts/ls.bgset.min.js') } type="text/javascript" async />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" defer />
      </Helmet>
      { children }
      
    </>
  )
}

