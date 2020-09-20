import React from 'react'
import { array } from 'prop-types'

const PortfolioCardList = ({ items }) => {

  return (
    <ul className="portfolio-card__list">
      { items.map((item, index) => <li key={ index }>{ item }</li>) }
    </ul>
  )
}

PortfolioCardList.propTypes = {
  items: array.isRequired
}

export default PortfolioCardList