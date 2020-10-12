import React, {
  useEffect
} from 'react'

import { Player } from 'video-react'
import { string } from 'prop-types'

import LoadImage from '../../LoadImage'

import '../../../styles/components/goal-layout.scss'

const Goal = ({
  video,
  goalSmJpg,
  goalLgJpg,
  goalSmWebp,
  goalLgWebp,
  typeImage,
  children
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
    <section className="goal-redesign">
      <div className="goal__content">
        <h2 className="caption-primary">Goal</h2>
        <div className="goal__content-text">{ children }</div>
      </div>

      <div className="goal__media lazyload">
        <LoadImage
          primarySm={ goalSmWebp }
          primaryLg={ goalLgWebp }
          secondarySm={ goalSmJpg }
          secondaryLg={ goalLgJpg }
          secondaryType={ typeImage }
          alt="UI image"
          lazyLoad
        />
        { video && (
            <Player
              muted={ true }
              playsInline
              className="goal-video-container"
              controls={ false }
              loop={ true }
              src={ video }
            >
            </Player>
          )}
      </div>
    </section>
  )
}

Goal.propTypes = {
  video: string,
  typeImage: string.isRequired,
  goalSmJpg: string.isRequired,
  goalLgJpg: string.isRequired,
  goalSmWebp: string.isRequired,
  goalLgWebp: string.isRequired
}

export default Goal
