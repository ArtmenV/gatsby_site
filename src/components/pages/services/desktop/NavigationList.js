import * as React from 'react'
import { useSelector } from 'react-redux'
import { array } from 'prop-types'

import { NavigationListItem } from './NavigationListItem'

export const NavigationList = ({ navigationListData, headIcon }) => {
  const currentSection = useSelector(state => state.currentSectionIndex)
  const addIconClass = React.useRef(null)

  //this function add class for set z-index on navigation page
  React.useEffect(() => {
    if (currentSection > 0 && currentSection < 8 && addIconClass.current) {
      setTimeout(() => addIconClass.current.classList.add(`is-show-navigation`), 460)
    } else {
      const data = addIconClass.current.className.includes('is-show-navigation')
      if (data && addIconClass.current) setTimeout(() => addIconClass.current.classList.remove(`is-show-navigation`), 20)
    }
  }, [currentSection])

  return (
    <ul className="services-desktop-section__list" ref={ addIconClass }>
      <span className="services-desktop-icons-container">
        { headIcon.iconHead }
      </span>
      {navigationListData.map((item, index) => (
        <NavigationListItem 
          key={ index }
          NumberslistsSection={ index }
          currentSection={ currentSection - 1 }
          title={ item }
        />
      ))}
    </ul>
  )
}

NavigationList.propTypes = {
  navigationListData: array.isRequired
}
