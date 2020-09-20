import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { useDispatch } from 'react-redux'
import { useLocation } from "@reach/router"
import { currentSectionIndex } from '../redux/actions/fullpage'

import Layout from '../components/Layout'
import Main from '../components/pages/landing-page/Main'
import OurWork from '../components/pages/landing-page/OurWork'
import OurServices from '../components/pages/landing-page/OurServices'
import OurClients from '../components/pages/landing-page/OurClients'
import ContactUs from '../components/contact-us'
import Reviews from '../components/pages/landing-page/Reviews'
import Menu from '../components/menu'
import HamburgerMenu from '../components/HamburgerMenu'

import { setVhUnit } from '../helpers'

import '../styles/pages/landing-page/index.scss'

const anchors = [
  'home', 
  'our-work', 
  'our-services', 
  'reviews', 
  'our-clients', 
  'contact-us', 
]

export default () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [slides, setSlides] = useState({
    main: <Main />,
    outWork: <OurWork />,
    ourServices: <OurServices />,
    reviews: <Reviews />,
    ourClients: <OurClients />,
    contactUs: <ContactUs hasCopyright={ true } />
  })

  useEffect(() => {
    setVhUnit()
    window.addEventListener('resize', setVhUnit)

    return () => window.removeEventListener('resize', setVhUnit)
  }, [])

  // Jump to anchor if it exists
  useEffect(() => {  
    if (window && location.state && location.state.anchor ) {
      setTimeout(() => window.fullpage_api.moveTo(location.state.anchor), 100)
    }
  },[])

  useEffect(() => {
    document.addEventListener('lazybeforeunveil', function(e){
      var bg = e.target.getAttribute('data-bg');
      if(bg){
          e.target.style.backgroundImage = 'url(' + bg + ')';
      }
    });
  }, [])
  
  const handleLeave = (_, destination) => {
    dispatch(currentSectionIndex(destination.index))
  }

  return (
    <Layout>
      <Helmet>
        <title>Zimalab</title>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/fullpage.js@3.0.1/dist/fullpage.min.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
      </Helmet>
      <main className="home-page">
        <ReactFullpage
          anchors={[...anchors]}
          lockAnchors={true}
          onLeave={ handleLeave }
          lazyLoading={ false }
          normalScrollElements='.menu.menu--opened, .contact-form__textarea'
          render={({ state, fullpageApi }) => (
            <ReactFullpage.Wrapper lazyLoading={ false }>
              {
                Object.keys(slides).map((title, index) => (
                  <React.Fragment key={ index }>
                    { slides[title] }
                  </React.Fragment>
                ))
              }
            </ReactFullpage.Wrapper>
          )}
        />
        <HamburgerMenu />
        <Menu />
      </main>
    </Layout>
  )
}