import * as React from 'react'
import { 
  object, 
  array,
} from 'prop-types'

import { Porfolio } from './Portfolio'
import { HeaderSection } from './HeaderSection'
import { MainContent } from './MainContent'
//css file
import '../../../../styles/pages/services/desktop/_services-header.scss'
import '../../../../styles/pages/services/desktop/_services-main-content.scss'
import '../../../../styles/pages/services/desktop/_services-navigation.scss'

export const ServicesDesktop = ({ 
  navigationServicesData
} ) => {
  const [isOpenPortfolio, setIsOpenPortfolio] = React.useState(false)

  // open portfolio
  const handleToggleSwitch = React.useCallback(() => {
    setIsOpenPortfolio(openPortfolio => !openPortfolio)
  }, [])

  return (
    <div className="services-desktop">
      <HeaderSection 
        headerData={ navigationServicesData.headerData }
        handleToggleSwitch={ handleToggleSwitch }
      />
      <div className="services-desktop-main">
        {!isOpenPortfolio && (
          <MainContent categoryList={ navigationServicesData.servicesCategoryList }/>
        )}
        {isOpenPortfolio && (
          <Porfolio portfolioCardData={ navigationServicesData.portfolioCardList }/>
        )}
      </div> 
    </div>
  )
}

ServicesDesktop.propTypes = {
  navigationServicesData: object.isRequired,
  navigationListData: array.isRequired
}