import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit, changeMenuColor, handleKeyNav } from '../../helpers'
import '../../styles/pages/bodyshops/index.scss'

import Layout from '../../components/Layout'
import StartLayout from '../../components/pages/portfolio/StartLayout'
import GoalLayout from '../../components/pages/portfolio/GoalLayout'
import CoreFeaturesLayout from '../../components/pages/portfolio/CoreFeaturesLayout'
import WorkLayout from '../../components/pages/portfolio/WorkLayout'
import FeedbackLayout from '../../components/pages/portfolio/FeedbackLayout'
import ContactUs from '../../components/contact-us'
import HamburgerMenu from '../../components/HamburgerMenu'
import Menu from '../../components/menu'

/**goal section*/
import bgWebpLg from '../../../static/images/portfolio/bodyshops/goal/goal-lg.webp'
import bgWebpSm from '../../../static/images/portfolio/bodyshops/goal/goal-sm.webp'
import bgJpgLg from '../../../static/images/portfolio/bodyshops/goal/goal-lg.jpg'
import bgJpgSm from '../../../static/images/portfolio/bodyshops/goal/goal-sm.jpg'

/* core section */
import displaySmJpg from '../../../static/images/portfolio/monitor-sm.png'
import displaySmWebp from '../../../static/images/portfolio/monitor-sm.webp'
import displayLgJpg from '../../../static/images/portfolio/monitor-lg.png'
import displayLgWebp from '../../../static/images/portfolio/monitor-lg.webp'

/** Images */
import ordersWebp from '../../../static/images/portfolio/bodyshops/orders-large.webp'
import ordersJpg from '../../../static/images/portfolio/bodyshops/orders-large.jpg'
import shopsWebp from '../../../static/images/portfolio/bodyshops/shops-large.webp'
import shopsJpg from '../../../static/images/portfolio/bodyshops/shops-large.jpg'
import automationsWebp from '../../../static/images/portfolio/bodyshops/automations-large.webp'
import automationsJpg from '../../../static/images/portfolio/bodyshops/automations-large.jpg'
import erpWebp from '../../../static/images/portfolio/bodyshops/erp-large.webp'
import erpJpg from '../../../static/images/portfolio/bodyshops/erp-large.jpg'

import review1WebpLg from '../../../static/images/portfolio/bodyshops/reviews/feedback-bodyshops-1-lg.webp'
import review1JpgLg from '../../../static/images/portfolio/bodyshops/reviews/feedback-bodyshops-1-lg.jpg'
import review1WebpSm from '../../../static/images/portfolio/bodyshops/reviews/feedback-bodyshops-1-sm.webp'
import review1JpgSm from '../../../static/images/portfolio/bodyshops/reviews/feedback-bodyshops-1-sm.jpg'
import review2WebpLg from '../../../static/images/portfolio/bodyshops/reviews/review-2-large.webp'
import review2JpgLg from '../../../static/images/portfolio/bodyshops/reviews/review-2-large.jpg'
import review2WebpSm from '../../../static/images/portfolio/bodyshops/reviews/review-2-small.webp'
import review2JpgSm from '../../../static/images/portfolio/bodyshops/reviews/review-2-small.jpg'

/** Videos */
import videoMp4 from '../../../static/videos/bodyshops/video.mp4'

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(currentSectionIndex(0))
  }, [])

  const onOrientationChange = () => {
    setTimeout(() => setVhUnit(), 500)
  }

  useEffect(() => {
    setVhUnit()

    window.addEventListener('orientationchange', onOrientationChange)

    return () => window.removeEventListener('orientationchange', onOrientationChange)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const isMobile = window.innerWidth < 992

    const mobileClass = [
      'is-white-image-one',
      'feedback__carousel'
    ]

    const desktopClass = [
      'video-react'
    ]

    changeMenuColor(isMobile ? mobileClass: desktopClass)
  }

  /**
   * this function for navigation keyboard
   */
  const handleKeyUp = React.useCallback((event) => {
    const navigationLink = {
      prevSite: '/portfolio/spp/',
      nextSite: '/portfolio/powernapp/'
    }

    handleKeyNav(event.key, navigationLink)
  }, [])

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [handleKeyUp])

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Bodyshops</title>
      </Helmet>

      <main className="bodyshops-page-redesign">
        <StartLayout
          title="Body"
          titleTwoPart="shops"
          subTitle="CAR REPAIR ERP"
          subTitleLast='AUTO'
        />

        <GoalLayout
          goalSmJpg={ bgJpgSm }
          goalLgJpg={ bgJpgLg }
          goalSmWebp={ bgWebpSm }
          goalLgWebp={ bgWebpLg }
          typeImage="jpg"
        >
          Develop a CRM/ERP solution for a chain of 500+ car
          bodyshops with dashboard for orders
          <div className="goal__description-last--line">
            and supply management
          </div>
        </GoalLayout>

        <CoreFeaturesLayout
          video={ videoMp4 }
          displaySmJpg={ displaySmJpg }
          displayLgJpg={ displayLgJpg }
          displaySmWebp={ displaySmWebp }
          displayLgWebp={ displayLgWebp }
          typeImage='png'
          timeline='Timeline:'
          timelineData='August 2017 - now'
          items={[
            'Custom order creation process',
            'Interactive car models for visual indication of repair request',
            'Production board to track order stages',
            'Appointments and work calendar',
            'Role-based user dashboards with different access level (shop manager, area manager)',
            'Automated supply order system',
            'Sales, profit and costs analytics per shop',
            'Email and SMS notifications'
          ]}
        />

        <WorkLayout
          title="Orders"
          subTitle="Easy and fast"
          listItems={[
            'All customer information in place: vehicle, serivces, KPI, payments, files, notes',
            'Search, filter and sort order by 20+ parameters',
            'Monitor bodyshops perfomance: sales, load, costs'
          ]}
          imageLgPrimary={ ordersWebp }
          imageLgSecondary={ ordersJpg }
          isWhiteImageWorkOne={ true }
          alt="Orders image"
          className="orders"
        />

        <WorkLayout
          title="Shops & supply"
          subTitle="Manage shops & supply"
          listItems={[
            'Setup bodyshops and managers access',
            'Manage stuff, services and record expenses',
            'Control supply level and make new orders quickly',
          ]}
          isReversed={ true }
          isMobileBackgrounded={ true }
          imageLgPrimary={ shopsWebp }
          imageLgSecondary={ shopsJpg }
          alt="Shops & supply image"
          className="shops"
        />

        <WorkLayout
          title="Automations"
          subTitle="For clients and staff"
          listItems={[
            'Production board displaying repair orders and stages in bodyshops offices',
            'Automatic reminders to managers and customers about appointments via SMS',
            'Daily and monthly repair work calendar'
          ]}
          imageLgPrimary={ automationsWebp }
          imageLgSecondary={ automationsJpg }
          alt="Automations image"
          className="automations"
        />

        <WorkLayout
          title="Custom tailored ERP"
          subTitle="Optimized for business"
          listItems={[
            'Designing functional requirements based on existing Filemaker database',
            'Ongoing improvements of ERP according to feedback and business changes',
            'Creating functional dashboard UI/UX based on HTML template to speed up the development and focus on backend',
          ]}
          isReversed={ true }
          isMobileBackgrounded={ true }
          imageLgPrimary={ erpWebp }
          imageLgSecondary={ erpJpg }
          alt="Custom tailored ERP image"
          className="erp"
        />

        <FeedbackLayout
          reviewImagesSm={[
            {
              imageWebp: review1WebpSm,
              imageJpg: review1JpgSm
            },
            {
              imageWebp: review2WebpSm,
              imageJpg: review2JpgSm
            }
          ]}
          reviewImagesLg={[
            {
              imageWebp: review1WebpLg,
              imageJpg: review1JpgLg
            },
            {
              imageWebp: review2WebpLg,
              imageJpg: review2JpgLg
            }
          ]}
        />

        <ContactUs
          hasNavigation
          prevProject={ '/portfolio/spp/' }
          nextProject={ '/portfolio/powernapp/' }
        />
        <HamburgerMenu />
        <Menu />
      </main>
    </Layout>
  )
}
