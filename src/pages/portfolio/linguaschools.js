import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit } from '../../helpers'
import '../../styles/pages/linguaschools/index.scss'

import Layout from '../../components/Layout'
import WorkLayout from '../../components/pages/portfolio/WorkLayout'
import StartLayout from '../../components/pages/portfolio/StartLayout'
import GoalLayout from '../../components/pages/portfolio/GoalLayout'
import CoreFeaturesLayout from '../../components/pages/portfolio/CoreFeaturesLayout'
import SiteGallery from '../../components/pages/portfolio/linguashcools/SiteGallery'
import MobileUiLayout from '../../components/pages/portfolio/MobileUiLayout'
// import MobileUi from '../../components/pages/portfolio/linguashcools/MobileUi'
import FeedbackLayout from '../../components/pages/portfolio/FeedbackLayout'
import HamburgerMenu from '../../components/HamburgerMenu'
import Menu from '../../components/menu'
import ContactUs from '../../components/contact-us'

/** Images */ 
import CmsLgWebp from '../../../static/images/portfolio/linguaschools/cms-large.webp'
import CmsLgJpg from '../../../static/images/portfolio/linguaschools/cms-large.jpg'
import richcontentLgWebp from '../../../static/images/portfolio/linguaschools/rich-content-large.webp'
import richcontentLgJpg from '../../../static/images/portfolio/linguaschools/rich-content-large.jpg'
import speedWebp from '../../../static/images/portfolio/linguaschools/speed-large.webp'
import speedJpg from '../../../static/images/portfolio/linguaschools/speed-large.jpg'
import review1WebpLg from '../../../static/images/portfolio/linguaschools/reviews/review-1-large.webp'
import review1JpgLg from '../../../static/images/portfolio/linguaschools/reviews/review-1-large.jpg'
import review1WebpSm from '../../../static/images/portfolio/linguaschools/reviews/review-1-small.webp'
import review1JpgSm from '../../../static/images/portfolio/linguaschools/reviews/review-1-small.jpg'
import review2WebpLg from '../../../static/images/portfolio/linguaschools/reviews/review-2-large.webp'
import review2JpgLg from '../../../static/images/portfolio/linguaschools/reviews/review-2-large.jpg'
import review2WebpSm from '../../../static/images/portfolio/linguaschools/reviews/review-2-small.webp'
import review2JpgSm from '../../../static/images/portfolio/linguaschools/reviews/review-2-small.jpg'

import Ui1SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-1-small.png'
import Ui1SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-1-small.webp'
import Ui1LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-1-large.png'
import Ui1LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-1-large.webp'

import Ui2SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-2-small.png'
import Ui2SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-2-small.webp'
import Ui2LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-2-large.png'
import Ui2LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-2-large.webp'

import Ui3SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-3-small.png'
import Ui3SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-3-small.webp'
import Ui3LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-3-large.png'
import Ui3LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-3-large.webp'

import Ui4SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-small.png'
import Ui4SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-small.webp'
import Ui4LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-large.png'
import Ui4LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-4-large.webp'

import Ui5SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-small.png'
import Ui5SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-small.webp'
import Ui5LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-large.png'
import Ui5LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/ui-5-large.webp'

/** Backgrounds */
import bg1Webp from '../../../static/backgrounds/portfolio/linguaschools/background-1-large.webp' 
import bg1Jpg from '../../../static/backgrounds/portfolio/linguaschools/background-1-large.jpg'
import bg2Webp from '../../../static/backgrounds/portfolio/linguaschools/background-2-large.webp' 
import bg2Jpg from '../../../static/backgrounds/portfolio/linguaschools/background-2-large.jpg'
import bg3Webp from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.webp'
import bg3Jpg from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.jpg'
import startSmWebp from '../../../static/backgrounds/portfolio/linguaschools/start-small.webp'
import startLgWebp from '../../../static/backgrounds/portfolio/linguaschools/start-large.webp'
import startSmJpg from '../../../static/backgrounds/portfolio/linguaschools/start-small.jpg'
import startLgJpg from '../../../static/backgrounds/portfolio/linguaschools/start-large.jpg'

/** Videos */ 
import videoMp4 from '../../../static/videos/linguaschools/video.mp4'

const cmsItems = [
  'Manage all dynamic and static content from one interface',
  'Support of several languages: English, German, Dutch, Spanish, French, Italian',
  'Manage all the translations'
]

const richContentItems = [
  'Integrated social stream to get lasests of FB and Instagram',
  'Pulling data from Wordpress blog with posts and events',
  'Aggregating reviews from Facebook, Google, blog',
  'Getting cources prices from quotation tool'
]

const speedItems = [
  'Images lazy load and 3rd party widgets lazy load',
  'Minified javascript, css',
  'Cache dynamic content',
  'Pre-generated cache'
]

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

  const onOrientation = () => {
    setTimeout(() => setVhUnit(), 500)
  }
  
  useEffect(() => {
    setVhUnit()

    window.addEventListener('orientationchange', onOrientation)

    return () => window.removeEventListener('orientationchange', onOrientation)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /** The handler changes color for the hamburger icon */
  const handleScroll = () => {
    const hamburgerMenu = document.querySelector('.menu-btn')

    /** These sections that have light background */
    const goalSection = document.querySelector('.goal')
    const siteGallerySection = document.querySelector('.site-gallery')
    const feedbackSection = document.querySelector('.feedback')

    const { top: goalSectionTop, bottom: goalSectionBottom } = goalSection.getBoundingClientRect()
    const { top: siteGallerySectionTop, bottom: siteGallerySectionBottom } = siteGallerySection.getBoundingClientRect()
    const { top: feedbackSectionTop, bottom: feedbackSectionBottom } = feedbackSection.getBoundingClientRect()

    if (goalSectionTop <= 50 && goalSectionBottom > 50 ||
        siteGallerySectionTop <= 50 && siteGallerySectionBottom > 50 ||
        feedbackSectionTop <= 50 && feedbackSectionBottom > 50 
      ) {
        hamburgerMenu.classList.add('menu-btn--blue')
    } else {
      hamburgerMenu.classList.remove('menu-btn--blue')
    }
  }

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Linguaschools</title>
      </Helmet>
      <main className="learning-page">
        <StartLayout 
          title="Linguaschools"
          subTitle="Linguaschools, Education, Learn Spanish with natives"
          backgroundUrlSmWebp={ startSmWebp }
          backgroundUrlLgWebp={ startLgWebp }
          backgroundUrlSmJpg={ startSmJpg }
          backgroundUrlLgJpg={ startLgJpg }
        />
        <GoalLayout video={ videoMp4 }>
          Develop multilingual site for chain of Spanish language schools with a rich custom admin to manage all static and dynamic content via CMS.
        </GoalLayout>

        <CoreFeaturesLayout 
          items={[
            'Custom built CMS to manage static and dynamic content',
            'Multi domain and multi lingual architecture',
            'Integration with quotation tool for course prices calculation',
            'Pulling media content via Integrations with wordpress blog, google and fb APIs',
            'Responsive HTML/CSS optimized for mobile',
            'Speed optimized: lazy load, minify js, caching, js scripts delay load'
          ]}
        />

        <SiteGallery />
        <WorkLayout 
          title="CMS"
          subTitle="All in one"
          listItems={ cmsItems }
          imageLgPrimary={ CmsLgWebp }
          imageLgSecondary={ CmsLgJpg } 
          alt="CMS image"
          bgWebp={ bg1Webp }
          bgJpg={ bg1Jpg }
          className="cms"
        />
        <WorkLayout
          title="Speed"
          listItems={ speedItems }
          isReversed={ true }
          isMobileBackgrounded={ true }
          imageLgPrimary={ speedWebp }
          imageLgSecondary={ speedJpg } 
          alt="Speed image"
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
          className="speed"
        />
        <WorkLayout 
          title="Rich content"
          subTitle="External sources"
          listItems={ richContentItems }
          imageLgPrimary={ richcontentLgWebp }
          imageLgSecondary={ richcontentLgJpg } 
          alt="Rich content image"
          bgWebp={ bg2Webp }
          bgJpg={ bg2Jpg }
          className="rich-content"
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
          prevProject={ '/portfolio/powernapp/' }
          nextProject={ '/portfolio/negina/' }
        />
        <HamburgerMenu />
        <Menu />
      </main>
    </Layout>
    
  )
}