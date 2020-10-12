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
  const ButtonMore = () => (
    <Link
      to={ seeProjectLink }
      className="portfolio-card__button--more portfolio-card__link"
    >
      SEE MORE
    </Link>
  )

  return (
    <div className="portfolio-card-gallery">
      <span className="category__container-close">
      </span>
      <h2 className={
        isCardBig ?
        'portfolio-card__title' :
        'portfolio-card__title portfolio-card__title-small__card'
      }>
        { title }
      </h2>

      <div className={
        isCardBig ?
        'portfolio-card__content' :
        'portfolio-card__content portfolio-card__content-small__card'
      }>
        { children }

        { isCardBig && isSeeMoreBtn && (
          <div className="portfolio-card__link-container">
            {ButtonMore()}
          </div>
        )}
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
  title: string.isRequired,
  category: string.isRequired,
  primaryLg: string.isRequired,
  secondaryLg: string.isRequired,
  children: node.isRequired,
  isSeeMoreBtn: bool,
  seeProjectLink: string,
  lazyLoad: bool
}
