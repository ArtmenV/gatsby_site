import React from 'react'
import { 
  bool,
  string
} from 'prop-types'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import LoadImage from '../../LoadImage'
import Link from '../../Link'

const PortfolioCard = ({
  title,
  category,
  primaryLg,
  secondaryLg,
  lazyLoad,
  isFeatured,
  isSmall,
  isLong,
  to,
  children
}) => {
  const breakpoint = useBreakpoint()

  let classResult = 'portfolio-card'
  if (isSmall) {
    classResult += ' portfolio-card--small'
  }
  if (isLong) {
    classResult += ' portfolio-card--long'
  }

  const handleClick = (e) => {
    const openedCard = document.body.querySelector('.portfolio-card.portfolio-card--opened')
    const target = e.currentTarget
    const cardIsOpened = target.classList.contains('portfolio-card--opened')

    // if (!cardIsOpened && openedCard) {
    //   openedCard && openedCard.classList.remove('portfolio-card--opened')
    // }

    if (!cardIsOpened) {
      openedCard && openedCard.classList.remove('portfolio-card--opened')
      target.classList.add('portfolio-card--opened')

      setTimeout(() => {
        target.scrollIntoView({
          behavior: 'smooth'
        })
      }, 0.1)
    }
  }

  return (
    <div 
      className={ classResult }
      {
        ...(breakpoint.md ?
          { 'onClick': handleClick } :
          {}
        )
      }
    >
      <h2 className="portfolio-card__title">{ title }</h2>
      <div className="portfolio-card__content">
        { children }
        { to && (
            <div className="portfolio-card__link-container">
              <Link
                outlined
                className="portfolio-card__link"
                to={ to }
              >
                see more
              </Link>
            </div>
          ) 
        }
      </div>
      <div className="portfolio-card__category">{ category }</div>
      <div className="portfolio-card__background">
        <LoadImage
          primaryLg={ primaryLg }
          secondaryLg={ secondaryLg }
          lazyLoad={ lazyLoad }
          alt="background image"
        />
      </div>
      { isFeatured && <div className="portfolio-card__ribbon">Featured</div> }
    </div>
  )
}

PortfolioCard.propTypes = {
  title: string.isRequired,
  category: string.isRequired,
  primaryLg: string.isRequired,
  secondaryLg: string.isRequired,
  lazyLoad: bool,
  isSmall: bool,
  isLong: bool,
  isFeatured: bool
}

export default PortfolioCard