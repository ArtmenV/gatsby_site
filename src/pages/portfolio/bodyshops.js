import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit } from '../../helpers'
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

/** Images */
import ordersWebp from '../../../static/images/portfolio/bodyshops/orders-large.webp'
import ordersJpg from '../../../static/images/portfolio/bodyshops/orders-large.jpg'  
import shopsWebp from '../../../static/images/portfolio/bodyshops/shops-large.webp'
import shopsJpg from '../../../static/images/portfolio/bodyshops/shops-large.jpg'
import automationsWebp from '../../../static/images/portfolio/bodyshops/automations-large.webp'
import automationsJpg from '../../../static/images/portfolio/bodyshops/automations-large.jpg'
import erpWebp from '../../../static/images/portfolio/bodyshops/erp-large.webp'
import erpJpg from '../../../static/images/portfolio/bodyshops/erp-large.jpg'   

import review1WebpLg from '../../../static/images/portfolio/bodyshops/reviews/review-1-large.webp'
import review1JpgLg from '../../../static/images/portfolio/bodyshops/reviews/review-1-large.jpg'
import review1WebpSm from '../../../static/images/portfolio/bodyshops/reviews/review-1-small.webp'
import review1JpgSm from '../../../static/images/portfolio/bodyshops/reviews/review-1-small.jpg'
import review2WebpLg from '../../../static/images/portfolio/bodyshops/reviews/review-2-large.webp'
import review2JpgLg from '../../../static/images/portfolio/bodyshops/reviews/review-2-large.jpg'
import review2WebpSm from '../../../static/images/portfolio/bodyshops/reviews/review-2-small.webp'
import review2JpgSm from '../../../static/images/portfolio/bodyshops/reviews/review-2-small.jpg'

/** Backgrounds */
import startSmWebp from '../../../static/backgrounds/portfolio/bodyshops/start-small.webp'
import startLgWebp from '../../../static/backgrounds/portfolio/bodyshops/start-large.webp'
import startSmJpg from '../../../static/backgrounds/portfolio/bodyshops/start-small.jpg'
import startLgJpg from '../../../static/backgrounds/portfolio/bodyshops/start-large.jpg'
import bg3Webp from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.webp'
import bg3Jpg from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.jpg'

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

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Bodyshops</title>
      </Helmet>

      <main className="bodyshops-page">
        <StartLayout
          title="Bodyshops"
          subTitle="CRM/ERP for auto bodyshops orders and supply management"
          backgroundUrlSmWebp={ startSmWebp }
          backgroundUrlLgWebp={ startLgWebp }
          backgroundUrlSmJpg={ startSmJpg }
          backgroundUrlLgJpg={ startLgJpg }
        />

        <GoalLayout video={ videoMp4 } >
          Build a CRM/ERP solution for a chain of 500+ car bodyshops. Implement orders and supply management, different access level for shop management, display statistics and generate .pdf reports.
        </GoalLayout>

        <CoreFeaturesLayout 
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
          alt="Orders image"
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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