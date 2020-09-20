import React, { useEffect } from 'react'

import { clients } from '../../../constants'

import ClientBox from './ClientBox'

import map from '../../../../static/images/landing/map-large.png'

export default () => {
  const setNextAnimation = () => {
    const londonLine = document.querySelector('.desctop .london .client-box__line')
    const londonContent = document.querySelector('.desctop .london .client-box__content')
    const wollongongLine = document.querySelector('.desctop .wollongong .client-box__line')
    const wollongongContent = document.querySelector('.desctop .wollongong .client-box__content')
    const chicagoLine = document.querySelector('.desctop .chicago .client-box__line')
    const chicagoContent = document.querySelector('.desctop .chicago .client-box__content')

    const lineElems = [londonLine, wollongongLine, chicagoLine]
    lineElems.forEach(elem => {
      elem.addEventListener('animationend', setAnimate({
        elem: elem,
        animationName: 'scaleInLineDesctop',
        duration: '28.8s',
        delay: '19.2s',
        count: 'infinite',
      }), {
        once: true
      })
    })

    const contentElems = [londonContent, wollongongContent, chicagoContent]
    contentElems.forEach(elem => {
      elem.addEventListener('animationend', setAnimate({
        elem: elem,
        animationName: 'fadeInDownContentDesctop',
        duration: '28.8s',
        delay: '19.6s',
        count: 'infinite',
      }), {
        once: true
      })
    })
  }

  function setAnimate({ 
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

  useEffect(() => {
    setNextAnimation()
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