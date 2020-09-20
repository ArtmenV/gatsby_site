import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { useDispatch } from 'react-redux'
import { currentSectionIndex } from '../../redux/actions/fullpage'

import { setVhUnit } from '../../helpers'
import '../../styles/pages/spp/index.scss'

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

/** Image */
import saasWebp from '../../../static/images/portfolio/spp/saas-large.webp' 
import saasJpg from '../../../static/images/portfolio/spp/saas-large.jpg' 
import threatlistsWebp from '../../../static/images/portfolio/spp/threatlists-large.webp'
import threatlistsJpg from '../../../static/images/portfolio/spp/threatlists-large.jpg'
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
]

export default () => {
  const dispatch = useDispatch()
  const breakpoint = useBreakpoint()

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
        <title>Portfolio | SPP</title>
      </Helmet>

      <main className="spp-page">
        <StartLayout
          // title="Security and Privacy Plus"
          // title="Security and Privacy <br> Plus"
          title={
            breakpoint.md ? 
            'Security and Privacy Plus' :
            'Security and Privacy <br> Plus'
          }
          subTitle="Enterprise security software"
          backgroundUrlSmWebp={ startSmWebp }
          backgroundUrlLgWebp={ startLgWebp }
          backgroundUrlSmJpg={ startSmJpg }
          backgroundUrlLgJpg={ startLgJpg }
        />

        <GoalLayout video={ videoMp4 } >
          Develop a SaaS solution to manage ads and threats blocking lists to reduce malware infection and other security vulnerabilities
        </GoalLayout>

        <CoreFeaturesLayout 
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
          alt="Measure efficiency image"
          bgWebp={ bg3Webp }
          bgJpg={ bg3Jpg }
          className="measure"
        />

        <ProjectPicsLayout 
          pictureItems={ projectPics }
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