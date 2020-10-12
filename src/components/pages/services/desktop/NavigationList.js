import * as React from 'react'
import { useSelector } from 'react-redux'
import { array } from 'prop-types'

import { NavigationListItem } from './NavigationListItem'

export const NavigationList = ({ navigationListData, headIcon }) => {
  const [isClassAdd, setIsClassAdd] = React.useState(false)
  const currentSection = useSelector(state => state.currentSectionIndex)
  const addIconClass = React.useRef(null)

  //this function add class for set z-index on navigation page
  React.useEffect(() => {
    if (currentSection > 0 && currentSection < 8) setTimeout(() => setIsClassAdd(true), 460)
    else setTimeout(() => setIsClassAdd(false), 20)
  }, [currentSection])

  return (
    < ul className = {
      isClassAdd ?
      'services-desktop-section__list is-show-navigation' : 'services-desktop-section__list'
    }
    ref = {
      addIconClass
    } >
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
