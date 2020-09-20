import React from 'react'
import { 
  arrayOf, 
  string 
} from 'prop-types'

export const ServicePortfolioCardList = ({ items }) => {
  return (
    <>
      { items && (
        <ul className="portfolio-card__list">
          {items.map((item, index) => (
            <li className="portfolio-card__item" key={ index }>
              { item }
            </li>)
          )}
        </ul>
      )}
    </>
  )
}

ServicePortfolioCardList.propTypes = {
  items: arrayOf(string)
}