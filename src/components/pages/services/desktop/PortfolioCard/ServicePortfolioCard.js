import React from 'react'
import { 
  bool,
  string,
  node
} from 'prop-types'
import Link from '../../../../Link'

import LoadImage from '../../../../LoadImage'

export const ServicePortfolioCard = ({
  isCardBig,
  isSeeMoreBtn,
  seeProjectLink,
  title,
  category,
  primaryLg,
  secondaryLg,
  lazyLoad,
  children
}) => {
  //component btn for card see more
  console.log('seeMore', seeProjectLink)
  const ButtonMore = () => (
    <Link to={ seeProjectLink }>
      <button 
        className="portfolio-card__button-details btn-see-more"
      >
        SEE MORE
      </button>
    </Link>
  )

  return (
    <div className="portfolio-card-gallery">
      <span className="category__container-close">
      </span>
      <h2 className={
        isCardBig ? 'portfolio-card__title':
        'portfolio-card__title portfolio-card__title-small__card'
        }
      >
        { title }
      </h2>

      <div className={
        isCardBig ? 
        'portfolio-card__content' : 
        'portfolio-card__content portfolio-card__content-small__card'
        }
      >
        { children }
        { isCardBig && isSeeMoreBtn && ButtonMore()}
      </div>
      <div className="portfolio-card__category">{ category }</div>

      <div className="our-work-card__background">
        <LoadImage
          primaryLg={ primaryLg }
          secondaryLg={ secondaryLg }
          lazyLoad={ lazyLoad }
          alt="background image"
        />
      </div>
    </div>
  )
} 

ServicePortfolioCard.propTypes = {
  isCardBig: bool.isRequired,
  isSeeMoreBtn: bool,
  seeProjectLink: string,
  title: string.isRequired,
  category: string.isRequired,
  primaryLg: string.isRequired,
  secondaryLg: string.isRequired,
  lazyLoad: bool,
  children: node.isRequired,
}
