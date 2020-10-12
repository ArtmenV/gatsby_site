import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit, changeMenuColor, handleKeyNav } from '../../helpers'
import '../../styles/components/features-gallery.scss'
import '../../styles/components/contact-us.scss'

import Layout from '../../components/Layout'
import WorkLayout from '../../components/pages/portfolio/WorkLayout'
import StartLayout from '../../components/pages/portfolio/StartLayout'
import GoalLayout from '../../components/pages/portfolio/GoalLayout'
import CoreFeaturesLayout from '../../components/pages/portfolio/CoreFeaturesLayout'
import MobileUi from '../../components/pages/portfolio/MobileUiLayout'
import FeedbackLayout from '../../components/pages/portfolio/FeedbackLayout'
import HamburgerMenu from '../../components/HamburgerMenu'
import Menu from '../../components/menu'
import ContactUs from '../../components/contact-us'

//goal section
import displaySmJpg from '../../../static/images/portfolio/monitor-sm.png'
import displaySmWebp from '../../../static/images/portfolio/monitor-sm.webp'
import displayLgJpg from '../../../static/images/portfolio/monitor-lg.png'
import displayLgWebp from '../../../static/images/portfolio/monitor-lg.webp'

/**core section gallery */
import Site1SmWebp from '../../../static/backgrounds/portfolio/linguaschools/site-1-small.webp'
import Site1SmJpg from '../../../static/backgrounds/portfolio/linguaschools/site-1-small.jpg'
import Site1LgWebp from '../../../static/backgrounds/portfolio/linguaschools/site-1-large.webp'
import Site1LgJpg from '../../../static/backgrounds/portfolio/linguaschools/site-1-large.jpg'

import Site2SmWebp from '../../../static/backgrounds/portfolio/linguaschools/site-2-small.webp'
import Site2SmJpg from '../../../static/backgrounds/portfolio/linguaschools/site-2-small.jpg'
import Site2LgWebp from '../../../static/backgrounds/portfolio/linguaschools/site-2-large.webp'
import Site2LgJpg from '../../../static/backgrounds/portfolio/linguaschools/site-2-large.jpg'

/** Images fow work section */
import CmsLgWebp from '../../../static/images/portfolio/linguaschools/lingua-cms-lg.webp'
import CmsLgJpg from '../../../static/images/portfolio/linguaschools/lingua-cms-lg.jpg'
import CmsSmWebp from '../../../static/images/portfolio/linguaschools/lingua-cms-sm.webp'
import CmsSmJpg from '../../../static/images/portfolio/linguaschools/lingua-cms-sm.jpg'

import richcontentLgWebp from '../../../static/images/portfolio/linguaschools/lingua-rich-content-lg.webp'
import richcontentLgJpg from '../../../static/images/portfolio/linguaschools/lingua-rich-content-lg.jpg'
import richcontentSmWebp from '../../../static/images/portfolio/linguaschools/lingua-rich-content-sm.webp'
import richcontentSmJpg from '../../../static/images/portfolio/linguaschools/lingua-rich-content-sm.jpg'

import speedLgWebp from '../../../static/images/portfolio/linguaschools/lingua-speed-lg.webp'
import speedLgJpg from '../../../static/images/portfolio/linguaschools/lingua-speed-lg.jpg'
import speedSmWebp from '../../../static/images/portfolio/linguaschools/lingua-speed-sm.webp'
import speedSmJpg from '../../../static/images/portfolio/linguaschools/lingua-speed-sm.jpg'

/**fedback section */
import review1WebpLg from '../../../static/images/portfolio/linguaschools/reviews/feedback-lingua-lg.webp'
import review1JpgLg from '../../../static/images/portfolio/linguaschools/reviews/feedback-lingua-lg.jpg'
import review1WebpSm from '../../../static/images/portfolio/linguaschools/reviews/feedback-lingua-sm.webp'
import review1JpgSm from '../../../static/images/portfolio/linguaschools/reviews/feedback-lingua-sm.jpg'
import review2WebpLg from '../../../static/images/portfolio/linguaschools/reviews/review-2-large.webp'
import review2JpgLg from '../../../static/images/portfolio/linguaschools/reviews/review-2-large.jpg'
import review2WebpSm from '../../../static/images/portfolio/linguaschools/reviews/review-2-small.webp'
import review2JpgSm from '../../../static/images/portfolio/linguaschools/reviews/review-2-small.jpg'

//mobile ui
import Ui1SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-1-sm.png'
import Ui1SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-1-sm.webp'
import Ui1LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-1-lg.png'
import Ui1LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-1-lg.webp'

import Ui2SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-2-sm.png'
import Ui2SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-2-sm.webp'
import Ui2LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-2-lg.png'
import Ui2LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-2-lg.webp'

import Ui3SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-3-sm.png'
import Ui3SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-3-sm.webp'
import Ui3LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-3-lg.png'
import Ui3LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-3-lg.webp'

import Ui4SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-4-sm.png'
import Ui4SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-4-sm.webp'
import Ui4LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-4-lg.png'
import Ui4LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-4-lg.webp'

import Ui5SmPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-5-sm.png'
import Ui5SmWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-5-sm.webp'
import Ui5LgPng from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-5-lg.png'
import Ui5LgWebp from '../../../static/images/portfolio/linguaschools/mobile-ui/lingua-mobile-5-lg.webp'

import videoMp4 from '../../../static/videos/linguaschools/video.mp4'


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

const cmsItems = [
  'Support of several languages: English, German, Dutch, Spanish, French, Italian',
  'Manage all the translations',
  'Manage all dynamic and static content from one interface'
]

const richContentItems = [
  'Integrated social stream to get lasests of FB and Instagram ',
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

    /**
     * function in which we are looking for white pictures
     * that will appear under the menu icon to change the color
     */
  const handleScroll = () => {
    const isMobile = window.innerWidth < 992

    const mobileClass = [
      'features-gallery',
      'is-white-image-one',
      'is-white-image-two',
      'is-white-image-three',
      'feedback__carousel',
      'mobile-ui__card'
    ]

    const desktopClass = [
      'is-white-image-two',
    ]

    changeMenuColor(isMobile ? mobileClass: desktopClass)
  }

  /**
   * this function for navigation keyboard
   */
  const handleKeyUp = React.useCallback((event) => {
    const navigationLink = {
      prevSite: '/portfolio/powernapp/',
      nextSite: '/portfolio/negina/'
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
        <title>Portfolio | Linguaschools</title>
      </Helmet>
      <main className="lingua-page-redesign">
        <StartLayout
          title="Lingua"
          titleTwoPart="schools"
          subTitle='Learn Spanish with natives'
          subTitleLast='Education'
        />
        <GoalLayout
          video={ videoMp4 }
          goalSmJpg={ displaySmJpg }
          goalLgJpg={ displayLgJpg }
          goalSmWebp={ displaySmWebp }
          goalLgWebp={ displayLgWebp }
          typeImage="png"
        >
          Develop a multilingual site for chain of
          Spanish language schools with a rich custom CMS
          <div className="goal__description-last--line">to manage all static and dynamic content</div>
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
          timeline='Timeline:'
          timelineData='July 2018 - now'
          const coreFeaturesGallery = {{
            Site1SmWebp,
            Site1SmJpg,
            Site1LgWebp,
            Site1LgJpg,

            Site2SmWebp,
            Site2SmJpg,
            Site2LgWebp,
            Site2LgJpg
          }}
          typeImage='jpg'
        />

        <WorkLayout
          title="CMS"
          subTitle="All in one"
          listItems={ cmsItems }
          imageLgPrimary={ CmsLgWebp }
          imageLgSecondary={ CmsLgJpg }
          imageSmPrimary={ CmsSmWebp }
          imageSmSecondary={ CmsSmJpg }
          isWhiteImageWorkOne={ true }
          alt="CMS image"
          className="cms"
        />

        <WorkLayout
          title="Speed"
          listItems={ speedItems }
          isReversed={ true }
          imageLgPrimary={ speedLgWebp }
          imageLgSecondary={ speedLgJpg }
          imageSmPrimary={ speedSmWebp }
          imageSmSecondary={ speedSmJpg }
          isWhiteImageWorkTwo={ true }
          alt="Speed image"
          className="speed"
        />

        <WorkLayout
          title="Rich content"
          subTitle="External sources"
          listItems={ richContentItems }
          imageLgPrimary={ richcontentLgWebp }
          imageLgSecondary={ richcontentLgJpg }
          imageSmPrimary={ richcontentSmWebp }
          imageSmSecondary={ richcontentSmJpg }
          isWhiteImageWorkThree={ true }
          alt="Rich content image"
          className="rich-content"
        />

        <MobileUi
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
            },
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
