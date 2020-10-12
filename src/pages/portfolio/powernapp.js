import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit, changeMenuColor, handleKeyNav } from '../../helpers'
import '../../styles/pages/powernapp/index.scss'

import Layout from '../../components/Layout'
import StartLayout from '../../components/pages/portfolio/StartLayout'
import WorkLayout from '../../components/pages/portfolio/WorkLayout'
import GoalLayout from '../../components/pages/portfolio/GoalLayout'
import CoreFeaturesLayout from '../../components/pages/portfolio/CoreFeaturesLayout'
import FeedbackLayout from '../../components/pages/portfolio/FeedbackLayout'
import MobileUiLayout from '../../components/pages/portfolio/MobileUiLayout'
import ContactUs from '../../components/contact-us'
import HamburgerMenu from '../../components/HamburgerMenu'
import Menu from '../../components/menu'

//core goal
import bgWebpLg from '../../../static/images/portfolio/powernapp/goal-powernapp-lg.webp'
import bgWebpSm from '../../../static/images/portfolio/powernapp/goal-powernapp-sm.webp'
import bgJpgLg from '../../../static/images/portfolio/powernapp/goal-powernapp-lg.jpg'
import bgJpgSm from '../../../static/images/portfolio/powernapp/goal-powernapp-sm.jpg'

/* core section */
import displaySmJpg from '../../../static/images/portfolio/monitor-sm.png'
import displaySmWebp from '../../../static/images/portfolio/monitor-sm.webp'
import displayLgJpg from '../../../static/images/portfolio/monitor-lg.png'
import displayLgWebp from '../../../static/images/portfolio/monitor-lg.webp'

/** Images */
import hotelsWebp from '../../../static/images/portfolio/powernapp/hotels-large.webp'
import hotelsJpg from '../../../static/images/portfolio/powernapp/hotels-large.jpg'
import searchWebp from '../../../static/images/portfolio/powernapp/search-large.webp'
import searchJpg from '../../../static/images/portfolio/powernapp/search-large.jpg'
import backendWebp from '../../../static/images/portfolio/powernapp/backend-large.webp'
import backendJpg from '../../../static/images/portfolio/powernapp/backend-large.jpg'

import review1WebpLg from '../../../static/images/portfolio/powernapp/reviews/review-1-large.webp'
import review1JpgLg from '../../../static/images/portfolio/powernapp/reviews/review-1-large.jpg'
import review1WebpSm from '../../../static/images/portfolio/powernapp/reviews/review-1-small.webp'
import review1JpgSm from '../../../static/images/portfolio/powernapp/reviews/review-1-small.jpg'
import review2WebpLg from '../../../static/images/portfolio/powernapp/reviews/feedback-powernapp-2-lg.webp'
import review2JpgLg from '../../../static/images/portfolio/powernapp/reviews/feedback-powernapp-2-lg.jpg'
import review2WebpSm from '../../../static/images/portfolio/powernapp/reviews/feedback-powernapp-2-sm.webp'
import review2JpgSm from '../../../static/images/portfolio/powernapp/reviews/feedback-powernapp-2-sm.jpg'

/**for mobile ui */
import Ui1SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-sm-1.png'
import Ui1SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-sm-1.webp'
import Ui1LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-1.png'
import Ui1LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-1.webp'

import Ui2SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-sm-2.png'
import Ui2SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-sm-2.webp'
import Ui2LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-2.png'
import Ui2LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-2.webp'

import Ui3SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-3.png'
import Ui3SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-3.webp'
import Ui3LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-3.png'
import Ui3LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-3.webp'

import Ui4SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-4.png'
import Ui4SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-4.webp'
import Ui4LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-4.png'
import Ui4LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-4.webp'

import Ui5SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-5.png'
import Ui5SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-5.webp'
import Ui5LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-5.png'
import Ui5LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/powernapp-lg-5.webp'
/** Videos */
import videoMp4 from '../../../static/videos/powernapp/video.mp4'

const mobileUiItems = [
  {
    imageSmWebp: Ui1SmWebp,
    imageLgWebp: Ui1LgWebp,
    imageSmPng: Ui1SmPng,
    imageLgPng: Ui1LgPng
  },
  {
    imageSmWebp: Ui2SmWebp,
    imageLgWebp: Ui2LgWebp,
    imageSmPng: Ui2SmPng,
    imageLgPng: Ui2LgPng
  },
  {
    imageSmWebp: Ui3SmWebp,
    imageLgWebp: Ui3LgWebp,
    imageSmPng: Ui3SmPng,
    imageLgPng: Ui3LgPng
  },
  {
    imageSmWebp: Ui4SmWebp,
    imageLgWebp: Ui4LgWebp,
    imageSmPng: Ui4SmPng,
    imageLgPng: Ui4LgPng
  },
  {
    imageSmWebp: Ui5SmWebp,
    imageLgWebp: Ui5LgWebp,
    imageSmPng: Ui5SmPng,
    imageLgPng: Ui5LgPng
  }
]

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
      'is-white-image-two',
      'is-white-image-three',
      'feedback__carousel',
      'mobile-ui__card'
    ]

    const desktopClass = [
      'is-white-image-two',
      'mobile-ui__card',
      'video-react'
    ]

    changeMenuColor(isMobile ? mobileClass: desktopClass)
}

  /**
   * this function for navigation keyboard
   */
  const handleKeyUp = React.useCallback((event) => {
    const navigationLink = {
      prevSite: '/portfolio/bodyshops/',
      nextSite: '/portfolio/linguaschools/'
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
        <title>Portfolio | Powernapp</title>
      </Helmet>

      <main className="powernapp-page-redesign">
        <StartLayout
          title="Power"
          titleTwoPart="napp"
          subTitle="HOTEL BOOKING PLATFORM"
          subTitleLast='TRAVEL'
        />

        <GoalLayout
          goalSmJpg={ bgJpgSm }
          goalLgJpg={ bgJpgLg }
          goalSmWebp={ bgWebpSm }
          goalLgWebp={ bgWebpLg }
          typeImage="jpg"
        >
          Develop a web application for booking hotels with special
          offers for SME and integrations
          <div className="goal__description-last--line">with RezExchange, Cubilis and Smarthotels</div>
        </GoalLayout>

        <CoreFeaturesLayout
          video={ videoMp4 }
          displaySmJpg={ displaySmJpg }
          displayLgJpg={ displayLgJpg }
          displaySmWebp={ displaySmWebp }
          displayLgWebp={ displayLgWebp }
          typeImage='png'
          timeline='Timeline:'
          timelineData='September 2016 - now'
          items={[
            'Search engine of hotel offers',
            'Real-time availability and price updates',
            'Booking statistics and reports',
            'Dashboards for hotel managers and booking customers',
            'Hotel & room management',
            'Content management system ',
            'Invoice management system',
            'Certified API integrations with RezExchange, Cubilis and Smarthotels'
          ]}
          link='https://powernapp.com/'
        />

        <WorkLayout
          title="Search"
          subTitle="Custom Search Engine"
          listItems={[
            'Results from internal hotel database and integrated Channels (RezExchange, Cubilis and Smarthotels)',
            'Search by city or hotel name, dates range and rooms number',
            'Real-time prices and availability'
          ]}
          imageLgPrimary={ searchWebp }
          imageLgSecondary={ searchJpg }
          isWhiteImageWorkOne={ true }
          alt="Search image"
          className="search"
        />

        <WorkLayout
          title="Book hotels"
          subTitle="Checkout and cart"
          listItems={[
            'View property: photos, amenities and options',
            'Select rooms and amount of guests',
            'Finalize booking, pay and add guests'
          ]}
          isReversed={ true }
          isMobileBackgrounded={ true }
          isWhiteImageWorkTwo={ true }
          imageLgPrimary={ hotelsWebp }
          imageLgSecondary={ hotelsJpg }
          alt="Book hotel image"
          className="book-hotels"
        />

        <WorkLayout
          title="Hotels backend"
          subTitle="Dashboard"
          listItems={[
            'Add hotel or chain of hotels via special dashboard',
            'Manage rooms, rate types and prices',
            'Connect Channel Management Software',
            'View reports and bookings stats on graphs'
          ]}
          imageLgPrimary={ backendWebp }
          isWhiteImageWorkThree={ true }
          imageLgSecondary={ backendJpg }
          alt="Hotels backend image"
          className="hotels-backend"
        />

        <MobileUiLayout
          items={ mobileUiItems }
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
          prevProject={ '/portfolio/bodyshops/' }
          nextProject={ '/portfolio/linguaschools/' }
        />
        <HamburgerMenu />
        <Menu />
      </main>
    </Layout>
  )
}
