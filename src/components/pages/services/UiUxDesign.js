import * as React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { ServicesMobile } from './mobile/ServicesMobile'
import { ServicesDesktop } from './desktop/ServicesDesktop'
import { UiUxDesignData, navigationListData } from '../../../constants/ServicesPage'

//icon ui section
import IconUIWireframes from '../../../../static/services/icon/ui-ux-wireframes-desktop.svg'
import IconUIGraphicalDesign from '../../../../static/services/icon/ui-ux-graphic-design.svg'
import IconInteractiveUIprototype from '../../../../static/services/icon/ui-ux-interactive-ui.svg'

export const UiUxDesign = () => {
  const breakpoints = useBreakpoint()
  const [sectionIcon, setSectionIcon] = React.useState([
    <IconUIWireframes className="wireframe-icon"/>, 
    <IconUIGraphicalDesign/>, 
    <IconInteractiveUIprototype/>
  ])

  const navigationServicesData = React.useMemo(() => ({
    ...UiUxDesignData,
    headerData: {
      ...UiUxDesignData.headerData,
    },
    servicesCategoryList: UiUxDesignData.servicesCategoryList.map((item, index) => ({
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