import React from 'react'
import { string, element } from 'prop-types'

import Link from '../../Link'

import Arrow from '../../../../static/icons/arrow.svg'

const OurWorkContent = ({ 
  title, 
  content,
  link, 
  children 
}) => (
  <div className="our-work-content">
    <h3 className="our-work-content__title">{ title }</h3>
    <div className="our-work-content-block">
      <div className="our-work-content__text">{ content }</div>
      <Link
        to={ link }
        svgIcon={ <Arrow className="icon--arrow" /> }
        className="our-work-content__link"
      >
        view case
        <span className="circle--blue" />
      </Link>
    </div>
    { children }
  </div>
)

OurWorkContent.propTypes = {
  title: string.isRequired,
  content: string.isRequired,
  link: string.isRequired,
  children: element
}

export default OurWorkContent