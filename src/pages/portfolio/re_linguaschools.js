import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { setVhUnit } from '../../helpers'
import '../../styles/pages/re_linguaschools/index.scss'
import '../../styles/components/re_contact-us.scss'

import Layout from '../../components/Layout'
import WorkLayout from '../../components/pages/portfolio/re_WorkLayout'
import StartLayout from '../../components/pages/portfolio/re_StartLayout'
import GoalLayout from '../../components/pages/portfolio/re_GoalLayout'
import CoreFeaturesLayout from '../../components/pages/portfolio/re_CoreFeaturesLayout'
import MobileUi from '../../components/pages/portfolio/re_linguashcools/MobileUi'
import FeedbackLayout from '../../components/pages/portfolio/re_FeedbackLayout'
import HamburgerMenu from '../../components/HamburgerMenu'
import Menu from '../../components/menu'
import ContactUs from '../../components/contact-us'

//goal section
import displaySmJpg from '../../../static/images/portfolio/monitor-sm.png'
import displaySmWebp from '../../../static/images/portfolio/monitor-sm.webp'
import displayLgJpg from '../../../static/images/portfolio/monitor-lg.png'
import displayLgWebp from '../../../static/images/portfolio/monitor-lg.webp'

/** Images */
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

import review1WebpLg from '../../../static/images/portfolio/linguaschools/reviews/review-1-large.webp'
import review1JpgLg from '../../../static/images/portfolio/linguaschools/reviews/review-1-large.jpg'
import review1WebpSm from '../../../static/images/portfolio/linguaschools/reviews/review-1-small.webp'
import review1JpgSm from '../../../static/images/portfolio/linguaschools/reviews/review-1-small.jpg'
import review2WebpLg from '../../../static/images/portfolio/linguaschools/reviews/review-2-large.webp'
import review2JpgLg from '../../../static/images/portfolio/linguaschools/reviews/review-2-large.jpg'
import review2WebpSm from '../../../static/images/portfolio/linguaschools/reviews/review-2-small.webp'
import review2JpgSm from '../../../static/images/portfolio/linguaschools/reviews/review-2-small.jpg'

import videoMp4 from '../../../static/videos/linguaschools/video.mp4'

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
  const breakpoints = useBreakpoint()
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
    const hamburgerMenu = document.querySelector('.menu-btn')

    if (isMobile) {
      const siteGallerySection = document.body.querySelector('.features-gallery')
      const whiteImageWorkOne = document.body.querySelector('.is-white-image-one')
      const whiteImageWorkTwo = document.body.querySelector('.is-white-image-two')
      const whiteImageWorkThree = document.body.querySelector('.is-white-image-three')
      const feedbackSection = document.body.querySelector('.feedback__carousel')
      const mobileSection = document.body.querySelector('.mobile-ui-card')

      const { top: whiteImageWorkOneTop, bottom: whiteImageWorkOneBottom } = whiteImageWorkOne.getBoundingClientRect()
      const { top: whiteImageWorkTwoTop, bottom: whiteImageWorkTwoBottom } = whiteImageWorkTwo.getBoundingClientRect()
      const { top: whiteImageWorkThreeTop, bottom: whiteImageWorkThreeBottom } = whiteImageWorkThree.getBoundingClientRect()
      const { top: siteGallerySectionTop, bottom: siteGallerySectionBottom } = siteGallerySection.getBoundingClientRect()
      const { top: feedbackSectionTop, bottom: feedbackSectionBottom } = feedbackSection.getBoundingClientRect()
      const { top: mobileImageTop, bottom: mobileImageBottom } = mobileSection.getBoundingClientRect()

      if (
        whiteImageWorkTwoTop <= 40   && whiteImageWorkTwoBottom > 40   ||
        whiteImageWorkOneTop <= 40   && whiteImageWorkOneBottom > 40   ||
        whiteImageWorkThreeTop <= 40 && whiteImageWorkThreeBottom > 40 ||
        siteGallerySectionTop <= 40  && siteGallerySectionBottom > 40  ||
        mobileImageTop <= 40         && mobileImageBottom > 40         ||
        feedbackSectionTop <= 40     && feedbackSectionBottom > 40
      ) {
        hamburgerMenu.classList.add('menu-btn--blue')
    } else hamburgerMenu.classList.remove('menu-btn--blue')

  } else {
    const whiteImageWorkTwo = document.querySelector('.is-white-image-two')
    const { top: whiteImageWorkTwoTop, bottom: whiteImageWorkTwoBottom } = whiteImageWorkTwo.getBoundingClientRect()
    if ( whiteImageWorkTwoTop <= 40 && whiteImageWorkTwoBottom > 40 ) {
      hamburgerMenu.classList.add('menu-btn--blue')
    }
    else {
      hamburgerMenu.classList.remove('menu-btn--blue')
    }
  }

    /** These sections that have light background */
    // const siteGallerySection = document.querySelector('.features-gallery')
    // const whiteImageWorkOne = document.querySelector('.is-white-image-one')
    // const whiteImageWorkTwo = document.querySelector('.is-white-image-two')
    // const whiteImageWorkThree = document.querySelector('.is-white-image-three')
    // const feedbackSection = document.querySelector('.feedback-lingua')
    // const mobileSection = document.querySelector('.mobile-ui-card')

    // const { top: whiteImageWorkOneTop, bottom: whiteImageWorkOneBottom } = whiteImageWorkOne.getBoundingClientRect()
    // const { top: whiteImageWorkTwoTop, bottom: whiteImageWorkTwoBottom } = whiteImageWorkTwo.getBoundingClientRect()
    // const { top: whiteImageWorkThreeTop, bottom: whiteImageWorkThreeBottom } = whiteImageWorkThree.getBoundingClientRect()
    // const { top: siteGallerySectionTop, bottom: siteGallerySectionBottom } = siteGallerySection.getBoundingClientRect()
    // const { top: feedbackSectionTop, bottom: feedbackSectionBottom } = feedbackSection.getBoundingClientRect()
    // const { top: mobileImageTop, bottom: mobileImageBottom } = mobileSection.getBoundingClientRect()

    // if (
    //     whiteImageWorkTwoTop <= 40 && whiteImageWorkTwoBottom > 40 ||
    //     isMobile && whiteImageWorkOneTop <= 40 && isMobile && whiteImageWorkOneBottom > 40 ||
    //     isMobile && whiteImageWorkThreeTop <= 40 && isMobile && whiteImageWorkThreeBottom > 40 ||
    //     isMobile && siteGallerySectionTop <= 40 && isMobile && siteGallerySectionBottom > 40 ||
    //     isMobile && mobileImageTop <= 40 && isMobile && mobileImageBottom > 40 ||
    //     isMobile && feedbackSectionTop <= 40 && isMobile && feedbackSectionBottom > 40
    //   ) {
    //     hamburgerMenu.classList.add('menu-btn--blue')
    // } else {
    //   hamburgerMenu.classList.remove('menu-btn--blue')
    // }
  }

  return (
    <Layout>
      <Helmet>
        <title>Portfolio | Linguaschools</title>
      </Helmet>
      <main className="lingua-page-redesign">
        <StartLayout
          title="Lingua"
          titleTwoPart="schools"
          subTitle='Learn Spanish with natives Linguaschools'
          subTitleLast='Education'
        />
        <GoalLayout
          video={ videoMp4 }
          goalSmJpg={ displaySmJpg }
          goalLgJpg={ displayLgJpg }
          goalSmWebp={ displaySmWebp }
          goalLgWebp={ displayLgWebp }
        >
          Develop multilingual site for chain of Spanish
          language schools with a rich custom admin to
          <div className="goal__description-last--line">manage all static and dynamic content via CMS </div>
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
          timeline={ 'Timeline' }
          timelineData={ 'July 2018 - now' }
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

        <MobileUi />

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
          prevProject={ '/portfolio/re_spp/' }
          nextProject={ '/portfolio/re_spp/' }
        />
        <HamburgerMenu />
        <Menu />
      </main>
    </Layout>

  )
}
