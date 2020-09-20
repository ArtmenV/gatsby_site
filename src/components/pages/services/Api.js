import * as React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { ServicesMobile } from './mobile/ServicesMobile'
import { ServicesDesktop } from './desktop/ServicesDesktop'
import { servicesApiData, navigationListData } from '../../../constants/ServicesPage'

import IconApiIntegrations from '../../../../static/services/icon/api-integration.svg'
import IconApiIDevelopment from '../../../../static/services/icon/api-development.svg'
import IconApiConnections from '../../../../static/services/icon/api-connection.svg'

export const Api = () => {
  const breakpoints = useBreakpoint()
  const [sectionIcon, setSectionIcon] = React.useState([
    <IconApiIntegrations />,
    <IconApiIDevelopment />,
    <IconApiConnections />
  ])

  const navigationServicesData = React.useMemo(() => ({
    ...servicesApiData,
    servicesCategoryList: servicesApiData.servicesCategoryList.map((item, index) => ({
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