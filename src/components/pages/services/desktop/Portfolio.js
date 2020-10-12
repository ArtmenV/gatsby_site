import * as React from 'react'
import {
  shape,
  bool,
  string,
  array
} from 'prop-types'

import { ServicePortfolioCardList } from './PortfolioCard/ServicePortfolioCardList'
import { ServicePortfolioCard } from './PortfolioCard/ServicePortfolioCard'
import ProgrammingIcons from '../../../ProgrammingIcons'

export const Porfolio = ({
  portfolioCardData
}) => {
  return (
    <div className="portfolio-card__container">
      {portfolioCardData.map((item, index) => (
        <ServicePortfolioCard
          key={ index }
          isCardBig={ item.isCardBig }
          isSeeMoreBtn={ item.isSeeMoreBtn }
          seeProjectLink={ item.seeProjectLink }
          title={ item.title }
          category={ item.category }
          primaryLg={ item.webpImage }
          secondaryLg={ item.jpgImage }
          isFeatured
          lazyLoad
        >
          <p>{ item.description }</p>
          <ServicePortfolioCardList items={ item.items }/>
          <ProgrammingIcons
            isApi={ item.programmingIcon.isApi }
            isApi2={ item.programmingIcon.isApi2 }
            isAws={ item.programmingIcon.isAws }
            isHtml={  item.programmingIcon.isHtml }
            isJs={  item.programmingIcon.isJs }
            isNote={ item.programmingIcon.isNote }
            isPhp={ item.programmingIcon.isPhp }
            isScreen={ item.programmingIcon.isScreen }
            isSpeed={ item.programmingIcon.isSpeed }
            isSquare={ item.programmingIcon.isSquare }
            isSwan={ item.programmingIcon.isSwan }
            isSymphony={ item.programmingIcon.isSymphony }
            isLaravel={ item.programmingIcon.isLaravel }
            isVue={ item.programmingIcon.isVue }
          />
        </ServicePortfolioCard>
      ))}
    </div>
  )
}

Porfolio.propTypes = {
  portfolioCardData: shape({
    webpImage: string.isRequired,
    jpgImage: string.isRequired,
    description: string.isRequired,
    category: string.isRequired,
    title: string.isRequired,
    isCardBig: bool.isRequired,
    isSeeMoreBtn: bool,
    seeProjectLink: string,
    items: array,

    programmingIcon: shape({
      isApi: bool,
      isApi2: bool,
      isAws: bool,
      isHtml: bool,
      isJs: bool,
      isNote: bool,
      isPhp: bool,
      isScreen: bool,
      isSpeed: bool,
      isSquare: bool,
      isSwan: bool,
      isSymphony: bool,
      isLaravel: bool,
      isVue: bool
    })
  })
}
