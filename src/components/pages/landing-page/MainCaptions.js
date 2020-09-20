import React from 'react'

import Link from '../../Link'

import Arrow from '../../../../static/icons/arrow.svg'

export default () => {
  return (
    <div className="main-captions">
      <header className="main-captions__headers">
        <h1>Featured</h1>
        <h3>Web development team</h3>
      </header>
      <Link 
        to="/portfolio/"
        svgIcon={ <Arrow className="icon--arrow" /> }
        className="portfolio-link"
        outlined
        bold
      >
        Portfolio
      </Link>
    </div>
  )
}
  

