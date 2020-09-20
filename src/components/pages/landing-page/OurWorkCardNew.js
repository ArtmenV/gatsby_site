import React from 'react'
import { Link } from 'gatsby'

const OurWorkCard = ({ title, text, className, children }) => (
  <div className={ `our-work__card ${ className }` }>
    <div className="our-work__card-content">
      <h3 className="our-work__card-title">{ title }</h3>
      <div className="desctop-expanded-block">
        <div className="our-work__card-text">{ text }</div>
        <Link to="">see more</Link>
      </div>
      { children }
    </div>
  </div>
)

export default OurWorkCard

