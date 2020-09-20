import React from 'react'
import { array } from 'prop-types'

export const ServicePortfolioCardList = ({ items }) => {
  return (
    <>
      { items && (
        <ul className="portfolio-card__list">
          { items.map((item, index) => <li key={ index }>{ item }</li>) }
        </ul>
      )}
    </>
  )
}

ServicePortfolioCardList.propTypes = {
  items: array
}