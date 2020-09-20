import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit } from '../../helpers'
import '../../styles/pages/negina/index.scss'

import Layout from '../../components/Layout'
import StartLayout from '../../components/pages/portfolio/StartLayout'
import WorkLayout from '../../components/pages/portfolio/WorkLayout'
import GoalLayout from '../../components/pages/portfolio/GoalLayout'
import CoreFeaturesLayout from '../../components/pages/portfolio/CoreFeaturesLayout'
import MobileUiLayout from '../../components/pages/portfolio/MobileUiLayout'
import ContactUs from '../../components/contact-us'
import HamburgerMenu from '../../components/HamburgerMenu'
import Menu from '../../components/menu'

/** Images */
import learningWebp from '../../../static/images/portfolio/negina/learning-system-large.webp'
import learningJpg from '../../../static/images/portfolio/negina/learning-system-large.jpg'
import integrationsWebp from '../../../static/images/portfolio/negina/integrations-large.webp'
import integrationsJpg from '../../../static/images/portfolio/negina/integrations-large.jpg'
import seoWebp from '../../../static/images/portfolio/negina/seo-large.webp'
import seoJpg from '../../../static/images/portfolio/negina/seo-large.jpg'
import upgradeWebp from '../../../static/images/portfolio/negina/upgrade-large.webp'
import upgradeJpg from '../../../static/images/portfolio/negina/upgrade-large.jpg'

import Ui1SmPng from '../../../static/images/portfolio/negina/mobile-ui/ui-1-small.png'
import Ui1SmWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-1-small.webp'
import Ui1LgPng from '../../../static/images/portfolio/negina/mobile-ui/ui-1-large.png'
import Ui1LgWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-1-large.webp'

import Ui2SmPng from '../../../static/images/portfolio/negina/mobile-ui/ui-2-small.png'
import Ui2SmWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-2-small.webp'
import Ui2LgPng from '../../../static/images/portfolio/negina/mobile-ui/ui-2-large.png'
import Ui2LgWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-2-large.webp'

import Ui3SmPng from '../../../static/images/portfolio/negina/mobile-ui/ui-3-small.png'
import Ui3SmWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-3-small.webp'
import Ui3LgPng from '../../../static/images/portfolio/negina/mobile-ui/ui-3-large.png'
import Ui3LgWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-3-large.webp'

import Ui4SmPng from '../../../static/images/portfolio/negina/mobile-ui/ui-4-small.png'
import Ui4SmWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-4-small.webp'
import Ui4LgPng from '../../../static/images/portfolio/negina/mobile-ui/ui-4-large.png'
import Ui4LgWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-4-large.webp'

import Ui5SmPng from '../../../static/images/portfolio/negina/mobile-ui/ui-5-small.png'
import Ui5SmWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-5-small.webp'
import Ui5LgPng from '../../../static/images/portfolio/negina/mobile-ui/ui-5-large.png'
import Ui5LgWebp from '../../../static/images/portfolio/negina/mobile-ui/ui-5-large.webp'

/** Backgrounds */
import startSmWebp from '../../../static/backgrounds/portfolio/negina/start-small.webp'
import startLgWebp from '../../../static/backgrounds/portfolio/negina/start-large.webp'
import startSmJpg from '../../../static/backgrounds/portfolio/negina/start-small.jpg'
import startLgJpg from '../../../static/backgrounds/portfolio/negina/start-large.jpg'
import bg3Webp from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.webp'
import bg3Jpg from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.jpg'

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

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Negina</title>
      </Helmet>

      <main className="negina-page">
        <StartLayout
          title="Negina"
          subTitle="Musical portal for learning piano lessons with paid membership"
          backgroundUrlSmWebp={ startSmWebp }
          backgroundUrlLgWebp={ startLgWebp }
          backgroundUrlSmJpg={ startSmJpg }
          backgroundUrlLgJpg={ startLgJpg }
        />

        <GoalLayout
          video={ videoMp4 }
        >
          Rebuild musical portal for learning piano lessons and implement paid subscription access to the courses. Implement new bran design and do SEO and speed optimisations according to marketing strategy.
        </GoalLayout>

        <CoreFeaturesLayout 
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
        />

        <WorkLayout
          title="Learning system"
          subTitle="Music lessons"
          listItems={[
            'Find a song or an artist in catalog',
            'Learn how to play songs with piano tool and guitar videos',
            'Guitar and piano courses for beginners'
          ]}
          imageLgPrimary={ learningWebp }
          imageLgSecondary={ learningJpg }
          alt="Learning system image"
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          imageLgPrimary={ integrationsWebp }
          imageLgSecondary={ integrationsJpg }
          alt="Integrations image"
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          alt="Speed & SEO image"
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
          className="upgrade"
        />

        <MobileUiLayout items={ mobileUiItems } />

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