import React, { useEffect } from 'react'
import { array, string } from 'prop-types'
import { Player } from 'video-react'

import FeaturesGallery from './re_linguashcools/SiteGallery'
import Arrow from '../../../../static/icons/arrow.svg'
import LoadImage from '../../LoadImage'
import Link from '../../Link'

import '../../../styles/components/re_core-features-layout.scss'

const CoreFeaturesLayout = ({ 
  items,
  timeline,
  timelineData,
  video,
  displaySmJpg,
  displayLgJpg,
  displaySmWebp,
  displayLgWebp
}) => {

  useEffect(() => {
    if (('IntersectionObserver' in window) && video) {
      const observer = new IntersectionObserver(onIntersection, { threshold: 1 })
      const video = document.body.querySelector('.goal-video-container video')

      observer.observe(video)
    }
  }, [])

  function playVideo(video) {
    video.play()
  }

  function pauseVideo(video) {
    video.pause()
  }

  /**
   * On intersection
   * @param {array} entries 
   */
  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        playVideo(entry.target)
      } else {
        pauseVideo(entry.target)
      }
    })
  }

  return (
    <section className="core-features-redesign">
      <h2 className="caption-primary">Core Features</h2>

      <div className="core-features__container">
        <div>
          <ul className="core-features__list">
            { items.map((item, index) => <li key={ index }>{ item }</li>) }
          </ul>

          <div className="flex-container">
            <Link 
              to="https://www.linguaschools.com"
              svgIcon={ <Arrow className="icon--arrow" /> }
              className="core-features__link"
              external
              outlined
            >
              go to website
            </Link>
          </div>
        </div>

        <div>
          <div className="core-features__timeline">
            <span className="timeline">
              { timeline }
            </span> { timelineData }
          </div>

          {/* check we have video or not */}
          { video ? (
            <div className="goal__media lazyload">
              <LoadImage 
                primarySm={ displaySmJpg }
                primaryLg={ displayLgJpg }
                secondarySm={ displaySmWebp }
                secondaryLg={ displayLgWebp }
                lazyLoad
                secondaryType="jpg" 
                alt="UI image"
              />
              <Player
                muted={ true }
                playsInline
                className="goal-video-container"
                controls={ false }
                loop={ true }
                src={ video }
              />
            </div>
          ) : (
            <FeaturesGallery />
          )}
        </div>
      </div>
    </section>
  )
}

CoreFeaturesLayout.propTypes = {
  items: array.isRequired,
  timeline: string.isRequired,
  timelineData: string.isRequired,
  video: string,
  displaySmJpg: string,
  displayLgJpg: string,
  displaySmWebp: string,
  displayLgWebp: string,
}

export default CoreFeaturesLayout

  