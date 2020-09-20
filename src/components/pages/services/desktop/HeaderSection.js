import * as React from 'react'
import {
  func,
  shape,
  string
} from 'prop-types'

//switch component
import { Switch } from '../Switch'

import IconT from '../../../../../static/services/icon/t-icon.svg'
import IconFrame from '../../../../../static/services/icon/frame-icon.svg'

export const HeaderSection = ({ 
  handleToggleSwitch, 
  headerData: {
    title,
    description
  }
}) => {
  return (
    <div className="services-desktop__header">
      <div className="services-desktop__header-container">
        <h1 className="service-desktop__title">{ title }</h1>
        <div className="service-desktop__toggle">
          <IconT />
          <Switch handleToggleSwitch={ handleToggleSwitch } />
          <IconFrame />
        </div>
        <div className="service-desktop__description">
          { description }
        </div>
      </div>  
    </div>
  )
}

HeaderSection.propTypes = {
  handleToggleSwitch: func.isRequired,
  headerData: shape({
    title: string.isRequired,
    description: string.isRequired,
  })
}