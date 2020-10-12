import React, { useEffect } from 'react'

import { clients } from '../../../constants'

import ClientBox from './ClientBox'

import map from '../../../../static/images/landing/map.png'

export default () => {
  function setAnimation({ 
    elem, 
    animationName, 
    duration,
    delay, 
    count
  }) {
    return () => {
      elem.style.animationName = animationName
      elem.style.animationDuration = duration
      elem.style.animationDelay = delay
      elem.style.animationIterationCount = count
    }
  }

  const cities = [
    'london',
    'brisbane',
    'chicago',
    'breda',
    'wollongong',
    'lewiston',
    'barcelona',
    'brisbane-2',
    'san-diego',
    'carpentras',
    'melbourne',
    'redwood',
    'lausanne',
    'newcastle',
    'rockville',
    'rehovot',
    'melbourne-2',
    'san-diego-2'
  ]

  /**
   * It does the following:
   * 
   *  - sets up a separate animation for the first three cities with a different
   *    animation's name and duration for the one cycle only
   *  - when the animations for the first three cities happened, sets up a new
   *    animation for it equal to others cities via 'animationend' event
   *  - sets up a animation for rest cities. They differ delay
   * 
   * @param {Array<string>} cities - list of cities classnames
   * @param {number} lineFadeInAnimationDuration
   * @param {number} contentFadeInAnimationDuration
   * @param {number} stayingDuration - duration during which line and content 
   *   are shown
   * @param {number} fadeOutAnimationDuration - animation duration for both line 
   *   and content since they disappear at the same time
   * @param {number} initialDelay - initial delay for city's line and content. 
   *   In this case it is equal to the NSK animation duration
   */
  const setDesktopClientAnimation = (
    cities,
    lineFadeInAnimationDuration,
    contentFadeInAnimationDuration,
    stayingDuration,
    fadeOutAnimationDuration,
    initialDelay
  ) => {
    const cityVisibleDuration = 
      lineFadeInAnimationDuration + contentFadeInAnimationDuration +
      stayingDuration + fadeOutAnimationDuration
    const resAnimationDuration = cities.length * cityVisibleDuration + 's'
    const lineAnimation = {
      animationName: 'scaleInLineDesctop',
      duration: resAnimationDuration,
      count: 'infinite'
    }
    const contentAnimation = {
      animationName: 'fadeInDownContentDesctop',
      duration: resAnimationDuration,
      count: 'infinite'
    }

    // Used for cities from the fourth only
    let initialLineDelay = cityVisibleDuration + initialDelay
    let initialContentDelay = initialLineDelay + 0.4

    // Used for the first three cities only
    let lineAnimationDuration = cityVisibleDuration
    let contentAnimationDuration = lineAnimationDuration - 0.4

    for (let i = 0; i < cities.length; i++) {
      const cityLine = 
          document.body.querySelector(`.${cities[i]} .client-box__line`)
      const cityContent = 
          document.body.querySelector(`.${cities[i]} .client-box__content`)
      
      // Creating animation for the first three cities
      // After the animation has happened, sets up a new animation equal to  
      // others cities
      if (
        i === 0 || 
        i === 1 ||
        i === 2) {
          const lineDelay = (cities.length - 3) * cityVisibleDuration
          const contentDelay = lineDelay + 0.4
          let lineAnimationName
          let contentAnimationName
          
          switch (i) {
            case 0:
              lineAnimationName = 'scaleInFirstCityLine'
              contentAnimationName = 'fadeInDownFirstCityContent'
              break;
            case 1:
              lineAnimationName = 'scaleInLineSecondCityLine'
              contentAnimationName = 'fadeInDownSecondCityContent'
              break;
            case 2:
              lineAnimationName = 'scaleInLineThirdCityLine'
              contentAnimationName = 'fadeInDownThirdCityContent'
              break;
            default:
              break;
          }

          cityLine.addEventListener('animationend', setAnimation({
            ...lineAnimation,
            elem: cityLine,
            delay: lineDelay + 's'
          }), {
            once: true
          })

          cityContent.addEventListener('animationend', setAnimation({
            ...contentAnimation,
            elem: cityContent,
            delay: contentDelay + 's'
          }), {
            once: true
          })
          
          // Animation for the one cycle
          setAnimation({
            elem: cityLine,
            animationName: lineAnimationName,
            duration: lineAnimationDuration + 's',
            delay: '1.1s',
            count: '1'
          })()

          setAnimation({
            elem: cityContent,
            animationName: contentAnimationName,
            duration: contentAnimationDuration + 's',
            delay: '1.5s',
            count: '1'
          })()

          lineAnimationDuration += cityVisibleDuration
          contentAnimationDuration += cityVisibleDuration

      } else {
        setAnimation({
          ...lineAnimation,
          elem: cityLine,
          delay: initialLineDelay + 's'
        })()

        setAnimation({
          ...contentAnimation,
          elem: cityContent,
          delay: initialContentDelay + 's'
        })()

        initialLineDelay += cityVisibleDuration
        initialContentDelay += cityVisibleDuration
      } 
      
      
    }
  }

  useEffect(() => {
    setDesktopClientAnimation(
      cities,
      0.4,
      0.4,
      2,
      0.4,
      1.1
    )
  }, [])

  return (
    <div className="map-client desctop">
      <img 
        data-src={ map } 
        className="map-client__image lazyload" 
        alt="client map"
      />
      
      <ClientBox 
        className="novosibirsk"
        location="Russia, Novosibirsk"
      >
        <div className="company-title">Zimalab here</div> 
      </ClientBox>

      {
        clients.map((client, index) => (
          <ClientBox 
            projectName={ client.projectName }
            projectBranch={ client.projectBranch }
            location={ client.location }
            className={ client.city }
            key={ index }
          />
        ))
      }
    </div>
  )
}