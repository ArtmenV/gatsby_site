import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit } from '../../helpers'
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
import review2WebpLg from '../../../static/images/portfolio/powernapp/reviews/review-2-large.webp'
import review2JpgLg from '../../../static/images/portfolio/powernapp/reviews/review-2-large.jpg'
import review2WebpSm from '../../../static/images/portfolio/powernapp/reviews/review-2-small.webp'
import review2JpgSm from '../../../static/images/portfolio/powernapp/reviews/review-2-small.jpg'

import Ui1SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-1-small.png'
import Ui1SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-1-small.webp'
import Ui1LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-1-large.png'
import Ui1LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-1-large.webp'

import Ui2SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-2-small.png'
import Ui2SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-2-small.webp'
import Ui2LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-2-large.png'
import Ui2LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-2-large.webp'

import Ui3SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-3-small.png'
import Ui3SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-3-small.webp'
import Ui3LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-3-large.png'
import Ui3LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-3-large.webp'

import Ui4SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-4-small.png'
import Ui4SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-4-small.webp'
import Ui4LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-4-large.png'
import Ui4LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-4-large.webp'

import Ui5SmPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-5-small.png'
import Ui5SmWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-5-small.webp'
import Ui5LgPng from '../../../static/images/portfolio/powernapp/mobile-ui/ui-5-large.png'
import Ui5LgWebp from '../../../static/images/portfolio/powernapp/mobile-ui/ui-5-large.webp'

/** Backgrounds */
import startSmWebp from '../../../static/backgrounds/portfolio/powernapp/start-small.webp'
import startLgWebp from '../../../static/backgrounds/portfolio/powernapp/start-large.webp'
import startSmJpg from '../../../static/backgrounds/portfolio/powernapp/start-small.jpg'
import startLgJpg from '../../../static/backgrounds/portfolio/powernapp/start-large.jpg'
import bg3Webp from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.webp'
import bg3Jpg from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.jpg'

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

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Powernapp</title>
      </Helmet>

      <main className="powernapp-page">
        <StartLayout
          title="Powernapp"
          subTitle="Hotel booking platform for small business"
          backgroundUrlSmWebp={ startSmWebp }
          backgroundUrlLgWebp={ startLgWebp }
          backgroundUrlSmJpg={ startSmJpg }
          backgroundUrlLgJpg={ startLgJpg }
        />

        <GoalLayout video={ videoMp4 } >
          Build web application for booking hotels with special offers for SME and integrations with RezExchange, Cubilis and Smarthotels
        </GoalLayout>

        <CoreFeaturesLayout 
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
          alt="Search image"
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          imageLgPrimary={ hotelsWebp }
          imageLgSecondary={ hotelsJpg } 
          alt="Book hotel image"
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          imageLgSecondary={ backendJpg } 
          alt="Hotels backend image"
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
          className="hotels-backend"
        />

        <MobileUiLayout items={ mobileUiItems } />

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