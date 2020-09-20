import React, { useRef } from 'react'
import { 
  bool,
  string,
  func,
  element, array
} from 'prop-types'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Link from '../../../../Link'

import ArrowNext from '../../../../../../static/icons/arrow-next.svg'
import CloseIcon from '../../../../../../static/icons/close-icon.svg'
import CarouselButtons from '../../../../CarouselButtons'
import LoadImage from '../../../../LoadImage'

export const ServicePortfolioCard = ({
  seeProjectLink,
  isSeeMoreBtn,
  handleOpenCard,
  titleSection,
  isSeeDetailBtn,
  title,
  category,
  primaryLg,
  secondaryLg,
  lazyLoad,
  children
}) => {
  const refCard = useRef(null)
  const breakpoint = useBreakpoint()

  const onPrevSlide = () => {
    document.body.querySelector(
      `.services__carousel-${titleSection} .carousel__back-button`
      ).click()
  }

  const onNextSlide = () => {
    document.body.querySelector(`
      .services__carousel-${titleSection} .carousel__next-button
    `).click()
  }

  //component for card
  const ButtonDetails = () => (
    <button 
      onClick={ handleOpenCard }
      className="portfolio-card__button-details"
    >
      DETAILS 
      <ArrowNext width="42.77" height="13.5" className="arrow-next"/>
    </button>
  )

  const ButtonMore = () => (
    <Link to={ seeProjectLink }>
      <button className="portfolio-card__button--more ">
        SEE MORE
      </button>
    </Link>
  )

  return (
    <div className="portfolio-card" ref={ refCard }>
      <div className="services-card__carousel">
        <CarouselButtons 
          onClickPrev={ onPrevSlide }
          onClickNext={ onNextSlide }
          blue={ breakpoint.md }
        />
      </div>
      <button
        onClick={ handleOpenCard } 
        className='modal__btn-close'
        aria-label="Open service"
      >
        <CloseIcon className="modal__icon-close"/>
      </button>
      <h2 className="portfolio-card__title-mobile">{ title }</h2>
      <div className="portfolio-card__content">
        { children }
        <div className="portfolio-card__button-container">
          { isSeeMoreBtn && ButtonMore() }
        </div>
      </div>
      <div className="portfolio-card__category">{ category }</div>

      {/*take only button what need */}
      { !isSeeDetailBtn &&  ButtonDetails()}
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
  title: string.isRequired,
  titleSection: string.isRequired,
  category: string.isRequired,
  primaryLg: string.isRequired,
  secondaryLg: string.isRequired,
  isSeeMoreBtn: bool,
  isSeeDetailBtn: bool.isRequired,
  seeProjectLink: string,
  handleOpenCard: func,
  children: array.isRequired,
  lazyLoad: bool,
  isFeatured: bool
}
