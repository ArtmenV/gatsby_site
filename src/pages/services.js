import React, {
  useEffect,
  useState
} from 'react'
import { Helmet } from 'react-helmet'
import ReactFullpage from '@fullpage/react-fullpage'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from "@reach/router"

import { setVhUnit } from '../helpers'
import { currentSectionIndex } from '../redux/actions/fullpage'

import { Main } from '../components/pages/services/Main'
import { Frontend } from '../components/pages/services/Frontend'
import { Discovery } from '../components/pages/services/Discovery'
import { UiUxDesign } from '../components/pages/services/UiUxDesign'
import { Backend } from '../components/pages/services/Backend'
import { Api } from '../components/pages/services/Api'
import { LiveMaintenance } from '../components/pages/services/LiveMaintenance'
import { Featured } from '../components/pages/services/Featured'
import { navigationListData } from '../constants/ServicesPage'

import { NavigationList } from '../components/pages/services/desktop/NavigationList'

import Layout from '../components/Layout'
import ContactUs from '../components/contact-us'
import Menu from '../components/menu'
import HamburgerMenu from '../components/HamburgerMenu'

import DiscoveryIcon from '../../static/services/icon/discovery-icon.svg'
import UiUxIcon from '../../static/services/icon/ui-ux-head-icon.svg'
import FrontendIcon from '../../static/services/icon/frontend-head.svg'
import BackendIcon from '../../static/services/icon/backend-head.svg'
import ApiIcon from '../../static/services/icon/api-head.svg'
import LiveAndMainIcon from '../../static/services/icon/liveAndMaintenance-head.svg'
import FeaturedIcon from '../../static/services/icon/featured-head.svg'

import '../styles/pages/services/index.scss'

const anchors = [
  'main',
  'Discovery',
  'UI/UX',
  'Frontend',
  'Backend',
  'API',
  'Live&Maintenance',
  'Featured',
  'contact-us'
]

export default () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [isAddClass, setIsAddClass] = useState(false)
  const [headIcon, setHeadIcon] = useState({
    iconHead: null
  })
  const [slides, setSlides] = useState({
    main: <Main />,
    discovery: <Discovery />,
    'UI/UX': <UiUxDesign />,
    Frontend: <Frontend />,
    Backend: <Backend />,
    API: <Api />,
    'Live & Maintenance': <LiveMaintenance />,
    Featured: <Featured />,
    'contact-us': <ContactUs />
  })
  const currentSection = useSelector(state => state.currentSectionIndex)

  useEffect(() => {
    dispatch(currentSectionIndex(0))
  }, [])

  useEffect(() => {
    setVhUnit()
    window.addEventListener('resize', setVhUnit)
    return () => window.removeEventListener('resize', setVhUnit)
  }, [])

  useEffect(() => {
    if (window && location.state && location.state.anchor) {
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

  useEffect(() => {
    switch(currentSection) {
      case 1: setHeadIcon(state => ({iconHead:  <DiscoveryIcon className="programming-icon"/>}))
        break
      case 2: setHeadIcon(state => ({iconHead:  <UiUxIcon className="programming-icon"/>}))
        break
      case 3: setHeadIcon(state => ({iconHead:  <FrontendIcon className="programming-icon"/>}))
        break
        case 4: setHeadIcon(state => ({iconHead:  <BackendIcon className="programming-icon"/>}))
        break
      case 5: setHeadIcon(state => ({iconHead:  <ApiIcon className="programming-icon"/>}))
        break
      case 6: setHeadIcon(state => ({iconHead:  <LiveAndMainIcon className="programming-icon"/>}))
        break
        case 7: setHeadIcon(state => ({iconHead:  <FeaturedIcon className="programming-icon"/>}))
        break
      default:
        break
    }
  }, [currentSection])

  const handleLeave = (_, destination) => {
    dispatch(currentSectionIndex(destination.index))
  }

//this effect need for add class
//for hide background fixed when component loading first tine
  useEffect(() => {
    setTimeout(() => setIsAddClass(true), 500)
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>Services</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/fullpage.js@3.0.1/dist/fullpage.min.css"
        />
      </Helmet>
      <main className={ isAddClass ? 'service-page fixed-background' : 'service-page' }>
        <div className='service-navigation'>
          <NavigationList
            headIcon={ headIcon }
            navigationListData={ navigationListData }
            key={ currentSection }
          />
        </div>
        <div className='service-container'>
          <ReactFullpage
              anchors={[...anchors]}
              lockAnchors={ true }
              onLeave={ handleLeave }
              lazyLoading={ true }
              scrollOverflow={ false }
              normalScrollElements='.menu.menu--opened'
              render={({ state, fullpageApi }) => (
                <ReactFullpage.Wrapper lazyLoading={ true }>
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
        </div>

        <HamburgerMenu />
        <Menu />
      </main>
    </Layout>
  )
}
