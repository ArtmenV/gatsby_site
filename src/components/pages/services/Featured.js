import * as React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { ServicesMobile } from './mobile/ServicesMobile'
import { ServicesDesktop } from './desktop/ServicesDesktop'
import { servicesFeaturedData, navigationListData } from '../../../constants/ServicesPage'

import IconFeaturedSecurity from '../../../../static/services/icon/featured-security.svg'
import IconFeaturedQA from '../../../../static/services/icon/featured-qa.svg'
import IconFeaturedSpeedOptimisation from '../../../../static/services/icon/featured-speed-optimisation.svg'

export const Featured = () => {
  const breakpoints = useBreakpoint()
  const [sectionIcon, setSectionIcon] = React.useState([
    <IconFeaturedSecurity />,
    <IconFeaturedQA />,
    <IconFeaturedSpeedOptimisation />
  ])

  const navigationServicesData = React.useMemo(() => ({
    ...servicesFeaturedData,
    servicesCategoryList: servicesFeaturedData.servicesCategoryList.map((item, index) => ({
      ...item,
      icon: sectionIcon[index]
    }))
  }), [])

  return (
    <div className="section services-section">
      {/* don't delete this div */}
      <div>
        { breakpoints.md ? (
          <ServicesMobile 
            navigationServicesData={ navigationServicesData }
          />
        ) : (
          <ServicesDesktop 
          navigationServicesData={ navigationServicesData }
          navigationListData={ navigationListData }
        />
        )}
      </div>
    </div>
  )
}