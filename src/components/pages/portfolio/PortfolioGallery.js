import React, { 
  useEffect, 
  useState,
  useRef 
} from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import { useWindowSize } from '../../../customHooks'

import PortfolioCard from './PortfolioCard'
import PortfolioCardList from './PortfolioCardList'
// import ProgrammingIcons from '../ProgrammingIcons'

// Images
import audioWebp from '../../../../static/backgrounds/portfolio/audio.webp'
import audioJpg from '../../../../static/backgrounds/portfolio/audio.jpg'
import autoWebp from '../../../../static/backgrounds/auto.webp'
import autoJpg from '../../../../static/backgrounds/auto.jpg'
import babyWebp from '../../../../static/backgrounds/portfolio/baby.webp'
import babyJpg from '../../../../static/backgrounds/portfolio/baby.jpg'
import bedroomWebp from '../../../../static/backgrounds/travel.webp'
import bedroomJpg from '../../../../static/backgrounds/travel.jpg'
import booksWebp from '../../../../static/backgrounds/portfolio/books.webp'
import booksJpg from '../../../../static/backgrounds/portfolio/books.jpg'
import cameraWebp from '../../../../static/backgrounds/portfolio/camera.webp'
import cameraJpg from '../../../../static/backgrounds/portfolio/camera.jpg'
import cardWebp from '../../../../static/backgrounds/portfolio/card.webp'
import cardJpg from '../../../../static/backgrounds/portfolio/card.jpg'
import codeWebp from '../../../../static/backgrounds/portfolio/code.webp'
import codeJpg from '../../../../static/backgrounds/portfolio/code.jpg'
import guitarWebp from '../../../../static/backgrounds/music.webp'
import guitarJpg from '../../../../static/backgrounds/music.jpg'
import linguaWebp from '../../../../static/backgrounds/portfolio/lingua.webp'
import linguaJpg from '../../../../static/backgrounds/portfolio/lingua.jpg'
import microchipWebp from '../../../../static/backgrounds/portfolio/microchip.webp'
import microchipJpg from '../../../../static/backgrounds/portfolio/microchip.jpg'
import notebookWebp from '../../../../static/backgrounds/portfolio/notebook.webp'
import notebookJpg from '../../../../static/backgrounds/portfolio/notebook.jpg'
import penWebp from '../../../../static/backgrounds/portfolio/pen.webp'
import penJpg from '../../../../static/backgrounds/portfolio/pen.jpg'

// Icons
import ApiIcon from '../../../../static/icons/programming-icons/api.svg'
import ApiIcon2 from '../../../../static/icons/programming-icons/api-2.svg'
import AwsIcon from '../../../../static/icons/programming-icons/aws.svg'
import HtmlIcon from '../../../../static/icons/programming-icons/html.svg'
import JsIcon from '../../../../static/icons/programming-icons/javascript.svg'
import NoteIcon from '../../../../static/icons/programming-icons/note.svg'
import PhpIcon from '../../../../static/icons/programming-icons/php.svg'
import ScreenIcon from '../../../../static/icons/programming-icons/screen.svg'
import SpeedIcon from '../../../../static/icons/programming-icons/speed.svg'
import SquareIcon from '../../../../static/icons/programming-icons/square.svg'
import Swanicon from '../../../../static/icons/programming-icons/swan.svg'
import SymphonyIcon from '../../../../static/icons/programming-icons/symphony.svg'
import VueIcon from '../../../../static/icons/programming-icons/vue.svg'

export default () => {
  const { width } = useWindowSize()
  const breakpoint = useBreakpoint()
  const [resizeTimeout, _setResizeTimeout] = useState(null)
  const resizeTimeoutRef = useRef(resizeTimeout)

  const setResizeTimeout = data => {
    resizeTimeoutRef.current = data
    _setResizeTimeout(data)
  }

  useEffect(() => {
    setTimeout(() => setContentTopPosition(), 500)
    // setContentTopPosition() 
  }, [])

  useEffect(() => {
    window.addEventListener('resize', resizeThrottler)

    return () => window.removeEventListener('resize', resizeThrottler)
  }, [])

  useEffect(() => {
    breakpoint.md ? 
      window.addEventListener('scroll',onScroll) :
      window.removeEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [breakpoint.md])

  // Remove active and open classes for card when breakpoint change from mobile to desktop
  useEffect(() => {
    if (!breakpoint.md) {
      const activeCard = document.body.querySelector('.portfolio-card--active')
      const openedCards = document.body.querySelectorAll('.portfolio-card--opened')
 
      activeCard && activeCard.classList.remove('portfolio-card--active')
      openedCards.forEach(card => card.classList.remove('portfolio-card--opened'))
    }
  }, [breakpoint.md])

  function onScroll() {
    const cardItems = document.querySelectorAll('.portfolio-card')
    const centerViewport = window.innerHeight / 2

    cardItems.forEach(card => {
      const isOpened = card.classList.contains('portfolio-card--opened')
      const {
        top,
        bottom
      } = card.getBoundingClientRect()

      if (top <= centerViewport && bottom >= centerViewport) {
        card.classList.add('portfolio-card--active')
      } else {
        !isOpened && card.classList.remove('portfolio-card--active')
        // card.classList.remove('portfolio-card--active')
        // card.classList.remove('portfolio-card--opened')
      }
    })
  }

  function resizeThrottler () {
    setResizeTimeout(setTimeout(() => {
      setResizeTimeout(null)
      setContentTopPosition()
    }, 66))
  }

  function setContentTopPosition () {
    const cards = document.querySelectorAll('.portfolio-card')

    cards.forEach(card => {
      let offset

      const title = card.querySelector('.portfolio-card__title')
      const isSmallCard = title.parentElement.classList.contains('portfolio-card--small')
      const isLongCard = title.parentElement.classList.contains('portfolio-card--long')
      const content = card.querySelector('.portfolio-card__content')

      if (isLongCard) {
        offset = "15%"
      } else if (isSmallCard) {
        offset = "17%"
      } else {
        offset = "12%"
      }

      if (width >= 992) {
        content.style.top = `calc(${offset} + ${title.offsetHeight}px)`
        content.style.paddingTop = '0px'
      } else {
        content.style.paddingTop = 57 + title.offsetHeight + 'px'
        content.style.top = '0px'
      }
    })
  }

  return (
    <section className="portfolio-container">
      {/* Music Courses */}
      <PortfolioCard
        title="Music lessons"
        category="music"
        primaryLg={ guitarWebp }
        secondaryLg={ guitarJpg }
        to="/portfolio/negina/"
        isFeatured
        lazyLoad
      >
        <p>
          A portal for learning how to play music instruments with paid subscriptions, songs and artists catalog
        </p>
        <PortfolioCardList 
          items={[
            'Online directory',
            'Interactive piano tool',
            'Subscriptions',
            'RTL support',
            'Speed optimization'
          ]}
        />
        {/* <ProgrammingIcons
          isLaravel={ false }
          isHtml={ false }
        /> */}
        <div className="programming-icons-container">
          <SymphonyIcon className="programming-icon icon--symphony" />
          <JsIcon className="programming-icon icon--js" />
          <ApiIcon className="programming-icon icon--api" />
          <HtmlIcon className="programming-icon icon--html" />
          <SpeedIcon className="programming-icon icon--speed" />
        </div>
      </PortfolioCard>
      
      {/* Schools Directory */}
      <PortfolioCard
        title="Schools Directory"
        category="education"
        primaryLg={ booksWebp }
        secondaryLg={ booksJpg }
        lazyLoad
        isSmall
      >
        <p>
          A portal for students and parents to discover and compare private schools. Implemented in 2 languages — English and Arabic.
        </p>
        {/* <ProgrammingIcons
          isLaravel={ false }
          isAws={ false }
        /> */}
        <div className="programming-icons-container">
          <SymphonyIcon className="programming-icon icon--symphony" />
          <JsIcon className="programming-icon icon--js" />
          <HtmlIcon className="programming-icon icon--html" />
          <AwsIcon className="programming-icon icon--aws" />
        </div>
      </PortfolioCard>

      {/* Online Store */}
      <PortfolioCard
        title="Online Store"
        category="ecommerce"
        primaryLg={ cardWebp }
        secondaryLg={ cardJpg }
        lazyLoad
      >
        <p>
          An eCommerce solution for large Australian home appliance retailer with custom backend system to manage inventory, products, brands, taxonomy, promotions.
        </p>
        <PortfolioCardList 
          items={[
            'Products catalog',
            'Custom checkout',
            'Promotions & coupons',
            'Inventory management',
            'Sylius based backend'
          ]}
        />
        {/* <ProgrammingIcons
          isLaravel={ false }
          isAws={ false }
          isVue={ false }
        /> */}
        <div className="programming-icons-container">
          <SymphonyIcon className="programming-icon icon--symphony" />
          <JsIcon className="programming-icon icon--js" />
          <HtmlIcon className="programming-icon icon--html" />
          <Swanicon className="programming-icon icon--swan" />
          <ApiIcon className="programming-icon icon--api" />
        </div>
      </PortfolioCard>

      {/* eBay Integration */}
      <PortfolioCard
        title="eBay Integration"
        category="retail"
        primaryLg={ notebookWebp }
        secondaryLg={ notebookJpg }
        lazyLoad
        isSmall
      >
        <p>
          Automatically publish items on eBay from Pawn marketplace database. Monitor sales status and retreive info about sold items.
        </p>
        {/* <ProgrammingIcons
          isHtml={ false }
        /> */}
        <div className="programming-icons-container">
          <PhpIcon className="programming-icon icon--php" />
          <ApiIcon className="programming-icon icon--api" />
        </div>
      </PortfolioCard>

      {/* Auto Repair ERP */}
      <PortfolioCard
        title="Auto Repair ERP"
        category="auto"
        primaryLg={ autoWebp }
        secondaryLg={ autoJpg }
        to="/portfolio/bodyshops/"
        isFeatured
        lazyLoad
      >
        <p>
          A CRM/ERP solution for a chain of 500+ car bodyshops. Dashboard for orders and supply management, different access level for shops, statistics module and generation .pdf reports.
        </p>
        <PortfolioCardList 
          items={[
            'Orders & Supply',
            'Roles management',
            'Production dashboard',
            'Work load calendar',
            'SMS & email alerts'
          ]}
        />
        {/* <ProgrammingIcons
          isHtml={ false }
          isAws={ false }
        /> */}
        <div className="programming-icons-container">
          <SymphonyIcon className="programming-icon icon--symphony" />
          <JsIcon className="programming-icon icon--js" />
          <HtmlIcon className="programming-icon icon--html" />
          <SquareIcon className="programming-icon icon--square" />
          <NoteIcon className="programming-icon icon--note" />
        </div>
      </PortfolioCard>

      {/* Baby Gift List */}
      <PortfolioCard
        title="Baby Gift List"
        category="Lifestyle"
        primaryLg={ babyWebp }
        secondaryLg={ babyJpg }
        lazyLoad
        isSmall
      >
        <p>
          A website for baby gift lists creation by adding items using special browser bookmarklet. Share lists and reserve items. 
        </p>
        {/* <ProgrammingIcons
          isHtml={ false }
        /> */}
        <div className="programming-icons-container">
          <SymphonyIcon className="programming-icon icon--symphony" />
          <JsIcon className="programming-icon icon--js" />
          <HtmlIcon className="programming-icon icon--html" />
          <ScreenIcon className="programming-icon icon--screen" />
        </div>
      </PortfolioCard>

      {/* Language Schools Website */}
      <PortfolioCard
        title="Language Schools"
        category="education"
        primaryLg={ linguaWebp }
        secondaryLg={ linguaJpg }
        to="/portfolio/linguaschools/"
        isFeatured
        isLong
        lazyLoad
      >
        <p>
          A new brand website for chain of Spanish language schools with custom CMS to manage courses, destinations and all dynamic info. Support of several languages (English, German, Dutch, Spanish, French, Italian) with own domains (.com, .de, .nl, .es, .de, .fr, .it) for SEO purposes.
        </p>
        <PortfolioCardList 
          items={[
            'Custom built CMS Pulling media content from external sources',
            'Multi domain and multi lingual architecture',
            'Integration with quotation tool',
          ]}
        />
        {/* <ProgrammingIcons
          isLaravel={ false }
          isAws={ false }
        /> */}
        <div className="programming-icons-container">
          <SymphonyIcon className="programming-icon icon--symphony" />
          <JsIcon className="programming-icon icon--js" />
          <HtmlIcon className="programming-icon icon--html" />
          <ApiIcon className="programming-icon icon--api" />
          <ScreenIcon className="programming-icon icon--speed" />
        </div>
      </PortfolioCard>

      {/* ERP Product API */}
      <PortfolioCard
        title="ERP Product API"
        category="retail"
        primaryLg={ penWebp }
        secondaryLg={ penJpg }
        lazyLoad
      >
        <p>
          A product search API of large promotional products distributor. Collaboration with Product Data team and IT Architect to setup the requirements and transform xml data files into a well-structured, normalised, fast, secure, developer-friendly and stateless RESTful API.
        </p>
        <PortfolioCardList 
          items={[
            '18+ API methods',
            'Automatic sync data with AWS S3',
            'Parsing products data from XML',
            'Architecture for REST API and Database'
          ]}
        />
        {/* <ProgrammingIcons
          isLaravel={ false }
          isHtml={ false }
          isVue={ false }
          isJs={ false }
        /> */}
        <div className="programming-icons-container">
          <SymphonyIcon className="programming-icon icon--symphony" />
          <AwsIcon className="programming-icon icon--aws" />
          <ApiIcon2 className="programming-icon icon--api-2" />
        </div>
      </PortfolioCard>

      {/* Video Stock Website */}
      <PortfolioCard
        title="Video Stock Website"
        category="media"
        primaryLg={ cameraWebp }
        secondaryLg={ cameraJpg }
        isLong
        lazyLoad
      >
        <p>
          A video stock BTB platform which allows to find and order collections of video clips. Elastic Search Engine for smart keywords search.
        </p>
        <PortfolioCardList 
          items={[
            'Smart keywords search ',
            'Automatical FFmpeg thumbnails generation',
            'Mass video clips import'
          ]}
        />
        {/* <ProgrammingIcons
          isLaravel={ false }
          isHtml={ false }
          isVue={ false }
        /> */}
        <div className="programming-icons-container">
          <SymphonyIcon className="programming-icon icon--symphony" />
          <JsIcon className="programming-icon icon--js" />
          <AwsIcon className="programming-icon icon--aws" />
        </div>
      </PortfolioCard>

      {/* Vocalists Social Network */}
      <PortfolioCard
        title="Vocalists Social Network"
        category="music"
        primaryLg={ audioWebp }
        secondaryLg={ audioJpg }
        lazyLoad
        isSmall
      >
        <p>
          A music collaborative workspace which connects producers and vocalists. Dedicated developers for on-going work (2+ years).
        </p>
        {/* <ProgrammingIcons
          isHtml={ false }
        /> */}
        <div className="programming-icons-container">
          <SymphonyIcon className="programming-icon icon--symphony" />
          <JsIcon className="programming-icon icon--js" />
          <HtmlIcon className="programming-icon icon--html" />
          <ApiIcon className="programming-icon icon--api" />
        </div>
      </PortfolioCard>

      {/* Hotel Booking */}
      <PortfolioCard
        title="Hotel Booking"
        category="travel"
        primaryLg={ bedroomWebp }
        secondaryLg={ bedroomJpg }
        to="/portfolio/powernapp"
        isFeatured
        lazyLoad
      >
        <p>
          A web application for booking hotels with special offers for SME and integrations with popular hotel channels. Real-time availability and prices updates based on certified integrations with RezExchange, Smarthotels and Cubilis.
        </p>
        <PortfolioCardList 
          items={[
            'Hotels & Bookers dashboard',
            'Channel API integrations',
            'Real-time reservations sync',
            'Custom hotel search engine'
          ]}
        />
        {/* <ProgrammingIcons
          isLaravel={ false }
          isAws={ false }
          isVue={ false }
        /> */}
        <div className="programming-icons-container">
          <ScreenIcon className="programming-icon icon--screen" />
          <NoteIcon className="programming-icon icon--note" />
          <SymphonyIcon className="programming-icon icon--symphony" />
          <JsIcon className="programming-icon icon--js" />
          <HtmlIcon className="programming-icon icon--html" />
          <ApiIcon className="programming-icon icon--api" />
        </div>
      </PortfolioCard>

      {/* Monitoring Dashboard */}
      <PortfolioCard
        title="Monitoring Dashboard"
        category="engineering"
        primaryLg={ microchipWebp }
        secondaryLg={ microchipJpg }
        lazyLoad
      >
        <p>
          A system for remote control and monitoring of transformer rectifiers. Private dashboard for customers of Corrosion Electronics to access data in real-time, receive alerts and export reports.
        </p>
        <PortfolioCardList 
          items={[
            'Real-time data access',
            'Background export into xls',
            'Wizard to connect new stations',
            'Separate DBs for each station'
          ]}
        />
        {/* <ProgrammingIcons
          isLaravel={ false }
          isAws={ false }
        /> */}
        <div className="programming-icons-container">
          <NoteIcon className="programming-icon icon--note" />
          <SymphonyIcon className="programming-icon icon--symphony" />
          <VueIcon className="programming-icon icon--vue" />
          <ApiIcon2 className="programming-icon icon--api-2" />
          <SquareIcon className="programming-icon icon--square" />
        </div>
      </PortfolioCard>

      {/* Security platform */}
      <PortfolioCard
        title="Security SaaS software"
        category="security"
        primaryLg={ codeWebp }
        secondaryLg={ codeJpg }
        to="/portfolio/spp/"
        isFeatured
        isLong
        lazyLoad
      >
        <p>
          A SaaS software to manage ads and threats block lists to reduce malware infection and other security vulnerabilities. Syncing block lists with Privoxy based proxy servers.
        </p>
        <PortfolioCardList 
          items={[
            'Threats management',
            'Paid subscriptions',
            'Syncing threats with proxy servers',
            'Real-time graphs for monitoring security efficiency Chargebee and Freshdesk integrations'
          ]}
        />
        {/* <ProgrammingIcons
          isLaravel={ false }
        /> */}
        <div className="programming-icons-container">
          <NoteIcon className="programming-icon icon--note" />
          <SymphonyIcon className="programming-icon icon--symphony" />
          <VueIcon className="programming-icon icon--vue" />
          <SquareIcon className="programming-icon icon--square" />
          <ApiIcon2 className="programming-icon icon--api-2" />
        </div>
      </PortfolioCard>
    </section>
  )
}