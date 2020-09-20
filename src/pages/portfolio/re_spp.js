import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { setVhUnit } from '../../helpers'
import '../../styles/pages/re_spp/index.scss'
import '../../styles/components/re_contact-us.scss'

import Layout from '../../components/Layout'
import WorkLayout from '../../components/pages/portfolio/re_WorkLayout'
import StartLayout from '../../components/pages/portfolio/re_StartLayout'
import GoalLayout from '../../components/pages/portfolio/re_GoalLayout'
import CoreFeaturesLayout from '../../components/pages/portfolio/re_CoreFeaturesLayout'
import ProjectPicsLayout from '../../components/pages/portfolio/re_ProjectPicsLayout'
import FeedbackLayout from '../../components/pages/portfolio/re_FeedbackLayout'
import ContactUs from '../../components/contact-us'
import HamburgerMenu from '../../components/HamburgerMenu'
import Menu from '../../components/menu'

//goal section
import goalSmJpg from '../../../static/images/portfolio/spp/spp-goal_sm.jpg'
import goalSmWebp from '../../../static/images/portfolio/spp/spp-goal_lg.jpg'
import goalLgJpg from '../../../static/images/portfolio/spp/spp-goal_sm.webp'
import goalLgWebp from '../../../static/images/portfolio/spp/spp-goal_lg.webp'

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

import review1WebpLg from '../../../static/images/portfolio/spp/reviews/review-1-large.webp'
import review1JpgLg from '../../../static/images/portfolio/spp/reviews/review-1-large.jpg'
import review1WebpSm from '../../../static/images/portfolio/spp/reviews/review-1-small.webp'
import review1JpgSm from '../../../static/images/portfolio/spp/reviews/review-1-small.jpg'

import review2WebpLg from '../../../static/images/portfolio/spp/reviews/review-2-large.webp'
import review2JpgLg from '../../../static/images/portfolio/spp/reviews/review-2-large.jpg'
import review2WebpSm from '../../../static/images/portfolio/spp/reviews/review-2-small.webp'
import review2JpgSm from '../../../static/images/portfolio/spp/reviews/review-2-small.jpg'

import project1WebpLg from '../../../static/images/portfolio/spp/project-pics/project-1-large.webp'
import project1WebpSm from '../../../static/images/portfolio/spp/project-pics/project-1-small.webp'
import project1JpgLg from '../../../static/images/portfolio/spp/project-pics/project-1-large.jpg'
import project1JpgpSm from '../../../static/images/portfolio/spp/project-pics/project-1-small.jpg'

import project2WebpLg from '../../../static/images/portfolio/spp/project-pics/project-2-large.webp'
import project2WebpSm from '../../../static/images/portfolio/spp/project-pics/project-2-small.webp'
import project2JpgLg from '../../../static/images/portfolio/spp/project-pics/project-2-large.jpg'
import project2JpgpSm from '../../../static/images/portfolio/spp/project-pics/project-2-small.jpg'

/** Backgrounds */
import startSmWebp from '../../../static/backgrounds/portfolio/spp/start-small.webp'
import startLgWebp from '../../../static/backgrounds/portfolio/spp/start-large.webp'
import startSmJpg from '../../../static/backgrounds/portfolio/spp/start-small.jpg'
import startLgJpg from '../../../static/backgrounds/portfolio/spp/start-large.jpg'

import bg3Webp from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.webp'
import bg3Jpg from '../../../static/backgrounds/portfolio/linguaschools/background-3-large.jpg'

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
  }
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
    const hamburgerMenu = document.querySelector('.menu-btn')

    if (isMobile) {
      const whiteImageWorkOne = document.body.querySelector('.is-white-image-one')
      const whiteImageWorkTwo = document.body.querySelector('.is-white-image-two')
      const whiteImageWorkThree = document.body.querySelector('.is-white-image-three')
      const feedbackSection = document.body.querySelector('.feedback__carousel')

      const { top: whiteImageWorkOneTop, bottom: whiteImageWorkOneBottom } = whiteImageWorkOne.getBoundingClientRect()
      const { top: whiteImageWorkTwoTop, bottom: whiteImageWorkTwoBottom } = whiteImageWorkTwo.getBoundingClientRect()
      const { top: whiteImageWorkThreeTop, bottom: whiteImageWorkThreeBottom } = whiteImageWorkThree.getBoundingClientRect()
      const { top: feedbackSectionTop, bottom: feedbackSectionBottom } = feedbackSection.getBoundingClientRect()

      if (
        whiteImageWorkTwoTop <= 40   && whiteImageWorkTwoBottom > 40   ||
        whiteImageWorkOneTop <= 40   && whiteImageWorkOneBottom > 40   ||
        whiteImageWorkThreeTop <= 40 && whiteImageWorkThreeBottom > 40 ||
        feedbackSectionTop <= 40     && feedbackSectionBottom > 40
      ) {
        hamburgerMenu.classList.add('menu-btn--blue')
    } else hamburgerMenu.classList.remove('menu-btn--blue')

  } else {
    const whiteImageWorkTwo = document.querySelector('.is-white-image-two')
    const projectWhiteImage = document.body.querySelector('.project__image')

    const { top: whiteImageWorkTwoTop, bottom: whiteImageWorkTwoBottom } = whiteImageWorkTwo.getBoundingClientRect()
    const { top: projectWhiteTop, bottom: projectWhiteBottom } = projectWhiteImage.getBoundingClientRect()
    if (
        whiteImageWorkTwoTop <= 40 && whiteImageWorkTwoBottom > 40 ||
        projectWhiteTop <= 40      && projectWhiteBottom > 40
      ) {
      hamburgerMenu.classList.add('menu-btn--blue')
    }
    else {
      hamburgerMenu.classList.remove('menu-btn--blue')
    }
  }
  }

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | SPP</title>
      </Helmet>

      <main className="spp-page-redesign">
        <StartLayout
          title="Security and"
          titleTwoPart="Privacy plus"
          subTitle="Enterprise security software"
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
        >
          Develop a SaaS solution to manage ads and threats blocking lists to reduce malware infection and
          <div className="goal__description-last--line">other security vulnerabilities</div>
        </GoalLayout>

        <CoreFeaturesLayout
          video={ videoMp4 }
          displaySmJpg={ displaySmJpg }
          displayLgJpg={ displayLgJpg }
          displaySmWebp={ displaySmWebp }
          displayLgWebp={ displayLgWebp }
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
          timeline={ 'Timeline:' }
          timelineData={ '2016 - now' }
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
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
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
          prevProject={ '/portfolio/re_linguaschools/' }
          nextProject={ '/portfolio/re_linguaschools/' }
        />
        <HamburgerMenu />
        <Menu />
      </main>
    </Layout>
  )
}
