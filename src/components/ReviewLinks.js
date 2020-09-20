import React from 'react'
import { bool } from 'prop-types'

import Clutch from '../../static/icons/clutch.svg'
import ClutchNoStars from '../../static/icons/clutch-no-stars.svg'
import GoodFirms from '../../static/icons/good-firms.svg'
import UpWork from '../../static/icons/upwork.svg'

import '../styles/components/review-links.scss'

const ReviewLinks = ({ noStar }) => (
  <div className="review-links-container">
    <a 
      href="https://clutch.co/profile/zimalab" 
      className="review-link"
    >
      {
        noStar ? (
          <ClutchNoStars className="clutch-no-stars" />
        ) : (
          <Clutch className="clutch" />
        )
      }
    </a>
    <a 
      href="https://www.upwork.com/ag/zimalab/"
      className="review-link"
    >
      <UpWork className="upwork" />
    </a>
    <a 
      href="https://www.goodfirms.co/company/zimalab"
      className="review-link good-firms"
    >
      <GoodFirms className="good-firms" />
    </a>
  </div>
)

ReviewLinks.propTypes = {
  noStar: bool
}

ReviewLinks.defaultProps = {
  noStar: false
}

export default ReviewLinks

 


    
 
  

