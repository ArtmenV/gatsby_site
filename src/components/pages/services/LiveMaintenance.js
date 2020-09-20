import * as React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { ServicesMobile } from './mobile/ServicesMobile'
import { ServicesDesktop } from './desktop/ServicesDesktop'
import { servicesLiveMaintenance, navigationListData } from '../../../constants/ServicesPage'

import IconLiveMaintenanceReleasePreparations from '../../../../static/services/icon/liveAndMaintenance-release.svg'
import IconLiveMaintenanceDeployment from '../../../../static/services/icon/liveAndMaintenance-deployment.svg'
import IconLiveMaintenanceOnGoingSupport from '../../../../static/services/icon/liveAndMaintenance-ongoing-support.svg'

export const LiveMaintenance = () => {
  const breakpoints = useBreakpoint()
  const [sectionIcon, setSectionIcon] = React.useState([
    <IconLiveMaintenanceReleasePreparations />,
    <IconLiveMaintenanceDeployment />,
    <IconLiveMaintenanceOnGoingSupport />,
  ])

  const navigationServicesData = React.useMemo(() => ({
    ...servicesLiveMaintenance,
    servicesCategoryList: servicesLiveMaintenance.servicesCategoryList.map((item, index) => ({
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