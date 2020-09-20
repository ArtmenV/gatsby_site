import * as React from 'react'
import { 
  arrayOf, 
  shape,
  element,
  string
} from 'prop-types'

export const MainContentList = ({ categoryList }) => {
  return (
    <ul className="services-main-desktop__list">
      {categoryList.map(({ icon, title, text}, index) => (
        <li
          className="services-main-desktop__item"
          key={ index }
        >
          <span className="icon-container">
            { icon }
          </span>
          <div>
            <h3 className="services-main-desktop__title">{ title }</h3>
            <p className="services-main-desktop__description">{ text }</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

MainContentList.propTypes = {
  categoryList: arrayOf(shape({
    icon: element.isRequired,
    title: string.isRequired,
    text: string.isRequired
  }))
}