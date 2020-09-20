import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import favicon from '../../static/icons/favicon.png'

// import '../style/global.scss'

export default ({ children }) => (
  <>
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <link rel="icon" href={ favicon } />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap" rel="stylesheet"></link>
      <script src={ withPrefix('scripts/modernizr-custom.js') } type="text/javascript" />
      <script src={ withPrefix('scripts/modernizr-on-webp.js') } type="text/javascript" async="" />
      <script src={ withPrefix('scripts/lazysizes.min.js') } type="text/javascript" async="" />
      <script src={ withPrefix('scripts/ls.bgset.min.js') } type="text/javascript" async="" />
      {/* <script src={ withPrefix('scripts/fix100vh.js') } type="text/javascript" async="" /> */}
      
    </Helmet>
    { children }
  </>
)

