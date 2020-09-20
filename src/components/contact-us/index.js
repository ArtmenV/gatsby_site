import React, { useState } from 'react'
import { bool, string } from 'prop-types'
import { useLocation } from "@reach/router"
import { useBreakpoint } from 'gatsby-plugin-breakpoints'

import '../../styles/components/contact-us.scss'

import ContactForm from './ContactForm'
import SuccessMessage from './SuccessMessage'
import ErrorMessage from './ErrorMessage'
import CompanyInfo from '../CompanyInfo'
import ReviewLinks from '../ReviewLinks'
import Copyright from '../Copyright'
import Link from '../Link'

import Arrow from '../../../static/icons/arrow.svg'

import roadSmJpg from '../../../static/backgrounds/road-small.jpg'
import roadSmWebp from '../../../static/backgrounds/road-small.webp'
import roadLgJpg from '../../../static/backgrounds/road-large.jpg'
import roadLgWebp from '../../../static/backgrounds/road-large.webp'


const ContactUs = ({
  hasCopyright,
  hasNavigation,
  prevProject,
  nextProject,
  children
}) => {
  const [submitted, setSubmitted] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [dataForm, setDataForm] = useState(null)
  const location = useLocation()
  const breakpoints = useBreakpoint()

  const onSubmit = val => {
    setSubmitted(val)
  }

  const onError = val => {
    setHasError(val)
  }

  const saveDataForm = data => {
    setDataForm(data)
  }

  const message = hasError ?
    <ErrorMessage
      onSubmit={ onSubmit }
      onError={ onError }
    /> :
    <SuccessMessage />

  return (
    <section
      data-bgset={ `${roadSmJpg} [(max-width: 992px)] | ${roadLgJpg}` }
      data-bgset-webp={ `${roadSmWebp} [(max-width: 992px)] | ${roadLgWebp}` }
      className="section contact-us lazyload"
    >
      <h2 className="caption-primary">Contact Us</h2>

      <div className="contact-us-container">
        {
          submitted ?
            message :
            <ContactForm
              data={ dataForm }
              saveDataForm={ saveDataForm }
              onSubmit={ onSubmit }
              onError={ onError }
            />
        }

        <div>
          <CompanyInfo />
          <ReviewLinks />
        </div>

      </div>
      { hasCopyright && <Copyright /> }

      {
        hasNavigation && (location.pathname !== '/portfolio/re_linguaschools/' &&
          location.pathname !== '/portfolio/re_spp/') && (
          <div className="contact-us__navigation">
            <Link
              to={ prevProject }
              svgIcon={ <Arrow className="icon--arrow" /> }
              className="link-to-project link-to-project--prev"
            >
              previous project
            </Link>

            <Link
              to={ nextProject }
              svgIcon={ <Arrow className="icon--arrow" /> }
              className="link-to-project link-to-project--next"
            >
              next project
            </Link>

          </div>
        )
      }

      {/* //this for redesign page */}
      {
        hasNavigation && (location.pathname === '/portfolio/re_linguaschools/' ||
          location.pathname === '/portfolio/re_spp/') && (
          <>
            <div className="contact-us__navigation">
              <div className="contact-us__navigation-button">
                <Link
                  to={ prevProject }
                  svgIcon={ <Arrow className="icon--arrow" /> }
                  className="link-to-project link-to-project--prev"
                >
                  {
                    breakpoints.md ? 'prev' : 'previous project'
                  }
                </Link>

                <Link
                  to={ nextProject }
                  svgIcon={ <Arrow className="icon--arrow" /> }
                  className="link-to-project link-to-project--next"
                >
                  {
                    breakpoints.md ? 'next' : 'next project'
                  }
                </Link>
              </div>
              {
                breakpoints.md &&  (
                  <div className="footer-container">
                    <div className="footer-description">
                      projects
                    </div>
                  </div>
                )
              }
            </div>
          </>
        )
      }
      { children }
    </section>
  )
}

ContactUs.defaultProps = {
  hasCopyright: false
}

ContactUs.propTypes = {
  hasCopyright: bool,
  hasNavigation: bool,
  prevProject: string,
  nextProject: string
}

export default ContactUs







