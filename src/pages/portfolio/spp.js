import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit, changeMenuColor, handleKeyNav } from '../../helpers'
import '../../styles/pages/re_spp/index.scss'
import '../../styles/components/contact-us.scss'

import Layout from '../../components/Layout'
import WorkLayout from '../../components/pages/portfolio/WorkLayout'
import StartLayout from '../../components/pages/portfolio/StartLayout'
import GoalLayout from '../../components/pages/portfolio/GoalLayout'
import CoreFeaturesLayout from '../../components/pages/portfolio/CoreFeaturesLayout'
import ProjectPicsLayout from '../../components/pages/portfolio/ProjectPicsLayout'
import FeedbackLayout from '../../components/pages/portfolio/FeedbackLayout'
import ContactUs from '../../components/contact-us'
import HamburgerMenu from '../../components/HamburgerMenu'
import Menu from '../../components/menu'

//goal section
import goalSmJpg from '../../../static/images/portfolio/spp/goal-spp-sm.jpg'
import goalSmWebp from '../../../static/images/portfolio/spp/goal-spp-sm.webp'
import goalLgJpg from '../../../static/images/portfolio/spp/goal-spp-lg.jpg'
import goalLgWebp from '../../../static/images/portfolio/spp/goal-spp-lg.webp'

/* core section */
import displaySmJpg from '../../../static/images/portfolio/monitor-sm.png'
import displaySmWebp from '../../../static/images/portfolio/monitor-sm.webp'
import displayLgJpg from '../../../static/images/portfolio/monitor-lg.png'
import displayLgWebp from '../../../static/images/portfolio/monitor-lg.webp'

/** Image */
import saasWebp from '../../../static/images/portfolio/spp/saas-large.webp'
import saasJpg from '../../../static/images/portfolio/spp/saas-large.jpg'
import threatlistsWebp from '../../../static/images/portfolio/spp/threatlist-lg.webp'
import threatlistsJpg from '../../../static/images/portfolio/spp/threatlist-lg.jpg'
import measureWebp from '../../../static/images/portfolio/spp/measure-large.webp'
import measureJpg from '../../../static/images/portfolio/spp/measure-large.jpg'

import review1WebpLg from '../../../static/images/portfolio/spp/reviews/feedback-spp-1-lg.webp'
import review1JpgLg from '../../../static/images/portfolio/spp/reviews/feedback-spp-1-lg.jpg'
import review1WebpSm from '../../../static/images/portfolio/spp/reviews/feedback-spp-1-sm.webp'
import review1JpgSm from '../../../static/images/portfolio/spp/reviews/feedback-spp-1-sm.jpg'

import review2WebpLg from '../../../static/images/portfolio/spp/reviews/feedback-spp-2-lg.webp'
import review2JpgLg from '../../../static/images/portfolio/spp/reviews/feedback-spp-2-lg.jpg'
import review2WebpSm from '../../../static/images/portfolio/spp/reviews/feedback-spp-2-sm.webp'
import review2JpgSm from '../../../static/images/portfolio/spp/reviews/feedback-spp-2-sm.jpg'

/**project pics */
import project1WebpLg from '../../../static/images/portfolio/spp/project-pics/project-1-lg.webp'
import project1WebpSm from '../../../static/images/portfolio/spp/project-pics/project-1-sm.webp'
import project1JpgLg from '../../../static/images/portfolio/spp/project-pics/project-1-lg.jpg'
import project1JpgpSm from '../../../static/images/portfolio/spp/project-pics/project-1-sm.jpg'

import project2WebpLg from '../../../static/images/portfolio/spp/project-pics/project-2-lg.webp'
import project2WebpSm from '../../../static/images/portfolio/spp/project-pics/project-2-sm.webp'
import project2JpgLg from '../../../static/images/portfolio/spp/project-pics/project-2-lg.jpg'
import project2JpgpSm from '../../../static/images/portfolio/spp/project-pics/project-2-sm.jpg'

import project3WebpLg from '../../../static/images/portfolio/spp/project-pics/project-3-lg.webp'
import project3WebpSm from '../../../static/images/portfolio/spp/project-pics/project-3-sm.webp'
import project3JpgLg from '../../../static/images/portfolio/spp/project-pics/project-3-lg.jpg'
import project3JpgpSm from '../../../static/images/portfolio/spp/project-pics/project-3-sm.jpg'

import project4WebpLg from '../../../static/images/portfolio/spp/project-pics/project-4-lg.webp'
import project4WebpSm from '../../../static/images/portfolio/spp/project-pics/project-4-sm.webp'
import project4JpgLg from '../../../static/images/portfolio/spp/project-pics/project-4-lg.jpg'
import project4JpgpSm from '../../../static/images/portfolio/spp/project-pics/project-4-sm.jpg'

import project5WebpLg from '../../../static/images/portfolio/spp/project-pics/project-5-lg.webp'
import project5WebpSm from '../../../static/images/portfolio/spp/project-pics/project-5-sm.webp'
import project5JpgLg from '../../../static/images/portfolio/spp/project-pics/project-5-lg.jpg'
import project5JpgpSm from '../../../static/images/portfolio/spp/project-pics/project-5-sm.jpg'

/** Backgrounds */
import startSmWebp from '../../../static/backgrounds/portfolio/spp/start-small.webp'
import startLgWebp from '../../../static/backgrounds/portfolio/spp/start-large.webp'
import startSmJpg from '../../../static/backgrounds/portfolio/spp/start-small.jpg'
import startLgJpg from '../../../static/backgrounds/portfolio/spp/start-large.jpg'

/** Videos */
import videoMp4 from '../../../static/videos/spp/video.mp4'

import sppImagePrimaryLgWebp from '../../../static/images/portfolio/spp/spp-logo-lg.webp'
import sppImagePrimarySmWebp from '../../../static/images/portfolio/spp/spp-logo-sm.webp'
import sppImagePrimaryLgPng from '../../../static/images/portfolio/spp/spp-logo-lg.png'
import sppImagePrimarySmPng from '../../../static/images/portfolio/spp/spp-logo-sm.png'

const projectPics = [
  {
    imageWebpLg: project1WebpLg,
    imageJpgLg: project1JpgLg,
    imageWebpSm: project1WebpSm,
    imageJpgSm: project1JpgpSm,
  },
  {
    imageWebpLg: project2WebpLg,
    imageJpgLg: project2JpgLg,
    imageWebpSm: project2WebpSm,
    imageJpgSm: project2JpgpSm,
  },
  {
    imageWebpLg: project3WebpLg,
    imageJpgLg: project3JpgLg,
    imageWebpSm: project3WebpSm,
    imageJpgSm: project3JpgpSm,
  },
  {
    imageWebpLg: project4WebpLg,
    imageJpgLg: project4JpgLg,
    imageWebpSm: project4WebpSm,
    imageJpgSm: project4JpgpSm,
  },
  {
    imageWebpLg: project5WebpLg,
    imageJpgLg: project5JpgLg,
    imageWebpSm: project5WebpSm,
    imageJpgSm: project5JpgpSm,
  },

]
/* data for section project pics data for card */
const sppCardData = {
  cardLogo: {
    imageWebpLg: sppImagePrimaryLgWebp,
    imageWebpSm: sppImagePrimarySmWebp,
    imageJpgLg: sppImagePrimaryLgPng,
    imageJpgSm: sppImagePrimarySmPng,
  },
  title: 'Next Vector Security',
  itemsContent: [
    `
      a consulting firm who united with talented
      developers to create enterprise security software
      “Security and Privacy Plus”.
    `,
    `
      The system is designed to reduce security threats
      by filtering out unnecessary and unwanted web elements.
    `
  ]
}

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

    /**
     * function in which we are looking for white pictures
     * that will appear under the menu icon to change the color
     */
  const handleScroll = () => {
    const isMobile = window.innerWidth < 992

    const mobileClass = [
      'is-white-image-one',
      'is-white-image-two',
      'is-white-image-three',
      'card__front',
      'feedback__carousel'
    ]

    const desktopClass = [
      'is-white-image-two',
      'project__image',
      'video-react'
    ]

    changeMenuColor(isMobile ? mobileClass: desktopClass)
  }

  /**
   * this function for navigation keyboard
   */
  const handleKeyUp = React.useCallback((event) => {
    const navigationLink = {
      prevSite: '/portfolio/negina/',
      nextSite: '/portfolio/bodyshops/'
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
        <title>Portfolio | SPP</title>
      </Helmet>

      <main className="spp-page-redesign">
        <StartLayout
          title="Security and"
          titleTwoPart="Privacy plus"
          subTitle="ENTERPRISE SAAS SOFTWARE"
          subTitleLast='SECURITY'
          backgroundUrlSmWebp={ startSmWebp }
          backgroundUrlLgWebp={ startLgWebp }
          backgroundUrlSmJpg={ startSmJpg }
          backgroundUrlLgJpg={ startLgJpg }
        />

        <GoalLayout
          goalSmJpg={ goalSmJpg }
          goalLgJpg={ goalLgJpg }
          goalSmWebp={ goalSmWebp }
          goalLgWebp={ goalLgWebp }
          typeImage="jpg"
        >
          Develop a SaaS software to manage ads and threats blocking
          lists to reduce malware infection and
          <div className="goal__description-last--line">other security vulnerabilities</div>
        </GoalLayout>

        <CoreFeaturesLayout
          video={ videoMp4 }
          displaySmJpg={ displaySmJpg }
          displayLgJpg={ displayLgJpg }
          displaySmWebp={ displaySmWebp }
          displayLgWebp={ displayLgWebp }
          typeImage="png"
          items={[
            'Proxy servers and threats management',
            'Syncing threats with proxy servers',
            'Paid subscriptions with different features',
            'Integrations with Chargebee and Freshdesk',
            'Real-time graphs for monitoring security efficiency',
            'Recommended malware blocking threatlists',
            'Export reports to PDF',
            'Two-factor authentication'
          ]}
          timeline='Timeline:'
          timelineData='February 2019 - now'
        />

        <WorkLayout
          title="SaaS"
          subTitle="Subscription types"
          listItems={[
            'There are free and paid subscriptions with different functionality',
            'Each user is always able to upgrade or cancel his subscription from the dashboard',
            'The payment is automatically charged once a month from the card linked to the profile'
          ]}
          imageLgPrimary={ saasWebp }
          imageLgSecondary={ saasJpg }
          alt="Saas image"
          isWhiteImageWorkOne={ true }
          className="saas"
        />

        <WorkLayout
          title="Threatlists"
          subTitle="Manage threats"
          listItems={[
            'Threatlist is a list of domains for blocking which can be created and edited on the app',
            'One or many threatlists can be applied to the server or server group',
            'User can put domains manually or upload list of domains via .csv'
          ]}
          isReversed={ true }
          isWhiteImageWorkTwo={ true }
          isMobileBackgrounded={ true }
          imageLgPrimary={ threatlistsWebp }
          imageLgSecondary={ threatlistsJpg }
          alt="Threatlists image"
          className="threatlists"
        />

        <WorkLayout
          title="Measure efficiency"
          subTitle="Ads blocking stats"
          listItems={[
            'The graph clearly shows the number of blocked threats for chosen period (24 hours / 1 week / 1 month)',
            'Server synchronization interval can be can be set manually',
            'User can download a PDF report with ads blocking statistics'
          ]}
          imageLgPrimary={ measureWebp }
          imageLgSecondary={ measureJpg }
          isWhiteImageWorkThree={ true }
          alt="Measure efficiency image"
          className="measure"
        />

        <ProjectPicsLayout
          pictureItems={ projectPics }
          cardData={ sppCardData }
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
          prevProject={ '/portfolio/negina/' }
          nextProject={ '/portfolio/bodyshops/' }
        />
        <HamburgerMenu />
        <Menu />
      </main>
    </Layout>
  )
}
