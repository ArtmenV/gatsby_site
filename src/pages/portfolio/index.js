import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { setVhUnit } from '../../helpers'

import Layout from '../../components/Layout'
import PortfolioStart from '../../components/pages/portfolio/PortfolioStart'
import PortfolioGallery from '../../components/pages/portfolio/PortfolioGallery'
import ContactUs from '../../components/contact-us'
import HamburgerMenu from '../../components/HamburgerMenu'
import Menu from '../../components/menu'

import '../../styles/pages/portfolio/index.scss'

export default () => {
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
        <title>Our work</title>
      </Helmet>
      <main className="portfolio-page">
        <PortfolioStart />
        <PortfolioGallery />
        <ContactUs />       
        <HamburgerMenu />
        <Menu />        
      </main>
    </Layout>
  )
}