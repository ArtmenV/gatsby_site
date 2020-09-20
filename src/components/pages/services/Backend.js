import * as React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { ServicesMobile } from './mobile/ServicesMobile'
import { ServicesDesktop } from './desktop/ServicesDesktop'
import { servicesBackEndData, navigationListData } from '../../../constants/ServicesPage'

import IconBackendModernFrameworks from '../../../../static/services/icon/backend-modern-framework.svg'
import IconBackendCleanWellStructuredCode from '../../../../static/services/icon/backend-clean-well-structure-code.svg'
import IconBackendAdvancedToolss from '../../../../static/services/icon/backend-advanced-tool.svg'

export const Backend = () => {
  const breakpoints = useBreakpoint()
  const [sectionIcon, setSectionIcon] = React.useState([
    <IconBackendModernFrameworks className="symphony-icon"/>,
    <IconBackendCleanWellStructuredCode />,
    <IconBackendAdvancedToolss />,
  ])

  const navigationServicesData = React.useMemo(() => ({
    ...servicesBackEndData,
    servicesCategoryList: servicesBackEndData.servicesCategoryList.map((item, index) => ({
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