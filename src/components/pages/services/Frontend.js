import * as React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { ServicesMobile } from './mobile/ServicesMobile'
import { ServicesDesktop } from './desktop/ServicesDesktop'
import { servicesFrontEndData, navigationListData } from '../../../constants/ServicesPage'

import IconFrontendResponsive from '../../../../static/services/icon/frontend-responsive.svg'
import IconFrontendModernFramework from '../../../../static/services/icon/frontend-modern-framework.svg'
import IconFrontendSpaPWA from '../../../../static/services/icon/frontend-spa-pwa.svg'
import IconFrontendTemplateUIKit from '../../../../static/services/icon/frontend-templates-ui-kit.svg'

export const Frontend = () => {
  const breakpoints = useBreakpoint()
  const [sectionIcon, setSectionIcon] = React.useState([
    <IconFrontendResponsive />,
    <IconFrontendModernFramework />,
    <IconFrontendSpaPWA />,
    <IconFrontendTemplateUIKit />
  ])

  const navigationServicesData = React.useMemo(() => ({
    ...servicesFrontEndData,
    servicesCategoryList: servicesFrontEndData.servicesCategoryList.map((item, index) => ({
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