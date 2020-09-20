import * as React from 'react'
import { func, array } from 'prop-types'

export const CategoryList = ({ categoryList, handleOpenCurrentCategory }) => (
  <ul className="services-category__list">
    {categoryList.map(({icon, title}, index) => (
      <li
        onClick={() => handleOpenCurrentCategory(index)}
        className="services-category__item"
        key={ index }
      >
        <div className="wrapper">
          <span>{ icon }</span>
          <span>{ title }</span>
        </div>
      </li>
    ))}
  </ul>
);

CategoryList.propTypes = {
  handleToggleItem: func,
  categoryList: array
}
