import * as React from 'react'
import {
  shape,
  bool, 
  array,
  string,
  func 
} from 'prop-types'

import { ServicePortfolioCardList } from './ServicePortfolioCardList'
import { ServicePortfolioCard } from './ServicePortfolioCard'

import ProgrammingIcons from '../../../../ProgrammingIcons'

export const ServicePortfolioCards = ({ 
  handleOpenCard, 
  isSeeDetailBtn,
  titleSection,
  currentCardItem: {
    webpImage, 
    jpgImage,
    isSeeMoreBtn,
    seeProjectLink,
    description, 
    category,
    title,
    items,
    programmingIcon: {
      isApi,
      isApi2,
      isAws,
      isHtml,
      isJs,
      isNote,
      isPhp,
      isScreen,
      isSpeed,
      isSquare,
      isSwan,
      isSymphony,
      isLaravel,
      isVue
    },
  }
}) => {
  // console.log('handleOpenCard', handleOpenCard)
  return (
    <ServicePortfolioCard
      handleOpenCard={ handleOpenCard }
      titleSection={ titleSection }
      seeProjectLink={ seeProjectLink }
      isSeeMoreBtn={ isSeeMoreBtn }
      isSeeDetailBtn={ isSeeDetailBtn }
      title={ title }
      category={ category }
      primaryLg={ webpImage }
      secondaryLg={ jpgImage }
      lazyLoad
    >
      <p>{ description }</p>
      <ServicePortfolioCardList items={ items }/>
      <ProgrammingIcons
        isApi={ isApi }
        isApi2={ isApi2 }
        isAws={ isAws }
        isHtml={ isHtml }
        isJs={ isJs }
        isNote={ isNote }
        isPhp={ isPhp }
        isScreen={ isScreen }
        isSpeed={ isSpeed }
        isSquare={ isSquare }
        isSwan={ isSwan }
        isSymphony={ isSymphony }
        isLaravel={ isLaravel }
        isVue={ isVue }
      />
    </ServicePortfolioCard>
  )
}

ServicePortfolioCards.propTypes = {
  handleOpenCard: func,
  isSeeDetailBtn: bool.isRequired,
  titleSection: string.isRequired,

  currentCardItem: shape({
    webpImage: string.isRequired, 
    jpgImage: string.isRequired,
    isSeeMoreBtn: bool,
    seeProjectLink: string,
    description: string.isRequired, 
    category: string.isRequired,
    title: string.isRequired,
    items: array,

    programmingIcon: shape({
      isApi: bool,
      isAws: bool,
      isHtml: bool,
      isJs: bool,
      isSpeed: bool,
      isSymphony: bool,
      isLaravel: bool,
      isVue: bool
    })
  })
}