import * as React from 'react'
import {
  number, 
  string
} from 'prop-types'

export const NavigationListItem = ({ 
  title, 
  NumberslistsSection, 
  currentSection 
}) => {
  //navigation
  const handleSectionNavigation = (data) => {
    switch (title) {
      case 'UI/UX design': window.fullpage_api.moveTo('UI/UX')
        break;
      case 'Live & Maintenance': window.fullpage_api.moveTo('Live&Maintenance')
        break;
      default: window.fullpage_api.moveTo(title)
        break;
    }
  }
  //add class for set color current section
  const currentItem = currentSection === NumberslistsSection ? 
    'services-desktop-section__list-item current-section' :
    'services-desktop-section__list-item'

  return (
    <li 
      onClick={ () => handleSectionNavigation(1) }
      className={ currentItem }
    >
      { title }
    </li>
  )
}

NavigationListItem.propTypes = {
  item: string,
  currentSection: number.isRequired,
  NumberslistsSection: number.isRequired
}