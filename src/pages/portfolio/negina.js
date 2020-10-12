import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit, changeMenuColor, handleKeyNav } from '../../helpers'
import '../../styles/components/features-gallery.scss'
import '../../styles/pages/negina/index.scss'
import '../../styles/components/mobile-ui-layout.scss'

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

/* goal section */
import displaySmJpg from '../../../static/images/portfolio/monitor-sm.png'
import displaySmWebp from '../../../static/images/portfolio/monitor-sm.webp'
import displayLgJpg from '../../../static/images/portfolio/monitor-lg.png'
import displayLgWebp from '../../../static/images/portfolio/monitor-lg.webp'

/**core section gallery */
import Site1SmWebp from '../../../static/images/portfolio/negina/core-features-1-sm.webp'
import Site1SmJpg from '../../../static/images/portfolio/negina/core-features-1-sm.jpg'
import Site1LgWebp from '../../../static/images/portfolio/negina/core-features-1-lg.webp'
import Site1LgJpg from '../../../static/images/portfolio/negina/core-features-1-lg.jpg'

import Site2SmWebp from '../../../static/images/portfolio/negina/core-features-2-sm.webp'
import Site2SmJpg from '../../../static/images/portfolio/negina/core-features-2-sm.jpg'
import Site2LgWebp from '../../../static/images/portfolio/negina/core-features-2-lg.webp'
import Site2LgJpg from '../../../static/images/portfolio/negina/core-features-2-lg.jpg'

/** Images */
import learningLgWebp from '../../../static/images/portfolio/negina/negina-learning-system-lg.webp'
import learningLgJpg from '../../../static/images/portfolio/negina/negina-learning-system-lg.jpg'
import learningSmWebp from '../../../static/images/portfolio/negina/negina-learning-system-sm.webp'
import learningSmJpg from '../../../static/images/portfolio/negina/negina-learning-system-sm.jpg'

import integrationsWebp from '../../../static/images/portfolio/negina/integrations-large.webp'
import integrationsJpg from '../../../static/images/portfolio/negina/integrations-large.jpg'
import seoWebp from '../../../static/images/portfolio/negina/seo-large.webp'
import seoJpg from '../../../static/images/portfolio/negina/seo-large.jpg'
import upgradeWebp from '../../../static/images/portfolio/negina/upgrade-large.webp'
import upgradeJpg from '../../../static/images/portfolio/negina/upgrade-large.jpg'

import Ui1SmPng from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-1.png'
import Ui1SmWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-1.webp'
import Ui1LgPng from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-1.png'
import Ui1LgWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-1.webp'

import Ui2SmPng from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-2.png'
import Ui2SmWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-2.webp'
import Ui2LgPng from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-2.png'
import Ui2LgWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-2.webp'

import Ui3SmPng from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-3.png'
import Ui3SmWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-3.webp'
import Ui3LgPng from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-3.png'
import Ui3LgWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-3.webp'

import Ui4SmPng from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-4.png'
import Ui4SmWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-4.webp'
import Ui4LgPng from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-4.png'
import Ui4LgWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-4.webp'

import Ui5SmPng from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-5.png'
import Ui5SmWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-sm-5.webp'
import Ui5LgPng from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-5.png'
import Ui5LgWebp from '../../../static/images/portfolio/negina/mobile-ui/negina-lg-5.webp'

/**fedback section */
import review1WebpLg from '../../../static/images/portfolio/negina/negina-feedback-lg.webp'
import review1JpgLg from '../../../static/images/portfolio/negina/negina-feedback-lg.jpg'
import review1WebpSm from '../../../static/images/portfolio/negina/negina-feedback-sm.webp'
import review1JpgSm from '../../../static/images/portfolio/negina/negina-feedback-sm.jpg'

/** Videos */
import videoMp4 from '../../../static/videos/negina/video.mp4'

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
      'mobile-ui__card'
    ]

    const desktopClass = [
      'is-white-image-two',
      'mobile-ui__card',
      // 'monitor__image'
    ]

    changeMenuColor(isMobile ? mobileClass: desktopClass)
  }

  /**
   * this function for navigation keyboard
   */
  const handleKeyUp = React.useCallback((event) => {
    const navigationLink = {
      prevSite: '/portfolio/linguaschools/',
      nextSite: '/portfolio/spp/'
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
        <title>Portfolio | Negina</title>
      </Helmet>

      <main className="negina-page-redesign">
        <StartLayout
          title="Negina"
          subTitle="PIANO LESSONS ONLINE"
          subTitleLast='MUSIC'
        />

        <GoalLayout
          video={ videoMp4 }
          goalSmJpg={ displaySmJpg }
          goalLgJpg={ displayLgJpg }
          goalSmWebp={ displaySmWebp }
          goalLgWebp={ displayLgWebp }
          typeImage="png"
        >
          Rebuild a portal for learning how to play
          music instruments with paid subscriptions,
          <div className="goal__description-last--line">
            songs and artists catalog
          </div>
        </GoalLayout>

        <CoreFeaturesLayout
          timeline='Timeline:'
          timelineData='August 2018 - now'
          link='https://negina.co.il/'
          items={[
            'Catalog of songs, artists and lessons',
            'Online cources to learn piano, guitar, ukulele',
            'Subscription based access',
            'Promotional banners and coupons',
            'Integated tool to learn piano play',
            'Payment gateway integrations (Paypal, Pelicard)',
            'Support of RTL and Hebrew',
            'Speed and SEO optimisation'
          ]}
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
          title="Learning system"
          subTitle="Music lessons"
          listItems={[
            'Find a song or an artist in catalog',
            'Learn how to play songs with piano tool and guitar videos',
            'Guitar and piano courses for beginners'
          ]}
          imageLgPrimary={ learningLgWebp }
          imageLgSecondary={ learningLgJpg }
          imageSmPrimary={ learningSmWebp }
          imageSmSecondary={ learningSmJpg }
          isWhiteImageWorkOne={ true }
          alt="Learning system image"
          className="learning-system"
        />

        <WorkLayout
          title="Integrations"
          subTitle="Automated system"
          listItems={[
            'Sign up free via email, google or FB',
            'Pay subscriptions via Paypal or Pelicard',
            'Invoice management via Invoice4u',
            'Marketing capmaigns via sendinblue'
          ]}
          isReversed={ true }
          isMobileBackgrounded={ true }
          isWhiteImageWorkTwo={ true }
          imageLgPrimary={ integrationsWebp }
          imageLgSecondary={ integrationsJpg }
          alt="Integrations image"
          className="integrations"
        />

        <WorkLayout
          title="Speed & SEO"
          subTitle="High scores"
          listItems={[
            'Images lazy load and 3rd party widgets lazy load',
            'Minified javascript, css',
            'Google tag and Enhanced ecommerce'
          ]}
          imageLgPrimary={ seoWebp }
          imageLgSecondary={ seoJpg }
          isWhiteImageWorkThree={ true }
          alt="Speed & SEO image"
          className="seo"
        />

        <WorkLayout
          title="Upgrade"
          subTitle="Rebuild from scratch"
          listItems={[
            'Clean code, easy to maintain and expand',
            'Backend on modern PHP framework - Symfony 4+',
            'Enhanced design and optimised UI/UX',
            'Data migration'
          ]}
          isReversed={ true }
          isMobileBackgrounded={ true }
          imageLgPrimary={ upgradeWebp }
          imageLgSecondary={ upgradeJpg }
          alt="Upgrade image"
          className="upgrade"
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
          ]}
          reviewImagesLg={[
            {
              imageWebp: review1WebpLg,
              imageJpg: review1JpgLg
            }
          ]}
        />

        <ContactUs
          hasNavigation
          prevProject={ '/portfolio/linguaschools/' }
          nextProject={ '/portfolio/spp/' }
        />
        <HamburgerMenu />
        <Menu />
      </main>
    </Layout>
  )
}
