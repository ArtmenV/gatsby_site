import React, { 
  useEffect
} from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { Player } from 'video-react'
import { string } from 'prop-types'

import '../../../styles/components/goal-layout.scss'

import LoadImage from '../../LoadImage'

import displaySmJpg from '../../../../static/images/portfolio/monitor-small.jpg'
import displaySmWebp from '../../../../static/images/portfolio/monitor-small.webp'
import displayLgJpg from '../../../../static/images/portfolio/monitor-large.jpg'
import displayLgWebp from '../../../../static/images/portfolio/monitor-large.webp'

// import displayWebp from '../../../../static/backgrounds/portfolio/monitor.webp'
// import displayPng from '../../../../static/backgrounds/portfolio/monitor.png'

const Goal = ({
  video,
  // videoSmWebm,
  // videoLgWebm,
  // videoSmMp4,
  // videoLgMp4,
  children
}) => {
  const breakpoint = useBreakpoint()

  useEffect(() => {
    if (('IntersectionObserver' in window)) {
      const observer = new IntersectionObserver(onIntersection, { threshold: 1 })
      const video = document.body.querySelector('.goal-video-container video')

      observer.observe(video)
    }

    // return () => observer.unobserve(video)
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
    <section className="goal">
      <div className="goal__content">
        <h2 className="caption-primary">Goal:</h2>
        <div className="goal__content-text">{ children }</div>
      </div>
      
      <div 
        // data-bgset={ `${displaySmJpg} [(max-width: 992px)] | ${displayLgJpg}` } 
        // data-bgset-webp={ `${displaySmWebp} [(max-width: 992px)] | ${displayLgWebp}` }
        // data-bgset={ displayPng } 
        // data-bgset-webp={ displayWebp }
        className="goal__media"
      > 
        <LoadImage 
          primarySm={ displaySmWebp }
          primaryLg={ displayLgWebp }
          secondarySm={ displaySmJpg }
          secondaryLg={ displayLgJpg }
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
        >
          {/* <source src={ breakpoint.md ? videoSmMp4 : videoLgMp4 } />
          <source src={ breakpoint.md ? videoSmWebm : videoLgWebm } /> */}
        </Player>
      </div>

    </section>
  )
}

Goal.propTypes = {
  // videoSmWebm: string.isRequired,
  // videoLgWebm: string.isRequired,
  // videoSmMp4: string.isRequired,
  // videoLgMp4: string.isRequired,
}

export default Goal