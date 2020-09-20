import * as React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { ServicesMobile } from './mobile/ServicesMobile'
import { ServicesDesktop } from './desktop/ServicesDesktop'
import { servicesDiscoveryData, navigationListData } from '../../../constants/ServicesPage'

import IconOne from '../../../../static/services/icon/discovery-business-analytics-icon.svg'
import IconTwo from '../../../../static/services/icon/discovery-feasibility-investigation-icon.svg'
import IconThree from '../../../../static/services/icon/discovery-specification-creation-icon.svg'

export const Discovery = () => {
  const breakpoints = useBreakpoint()
  const [sectionIcon, setSectionIcon] = React.useState([
    <IconOne />,
    <IconTwo/>,
    <IconThree/>
  ])

  const navigationServicesData = React.useMemo(() => ({
    ...servicesDiscoveryData,
    servicesCategoryList: servicesDiscoveryData.servicesCategoryList.map((item, index) => ({
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