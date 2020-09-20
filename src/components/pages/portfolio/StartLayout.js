import React from 'react'
import { string } from 'prop-types'

import  '../../../styles/components/start-layout.scss'

import ButtonToNext from '../../ButtonToNext'
import HomeLink from '../../HomeLink'

const Start = ({
  title,
  subTitle,
  backgroundUrlSmWebp,
  backgroundUrlLgWebp,
  backgroundUrlSmJpg,
  backgroundUrlLgJpg,
}) => {

  return (
    <section className="start">
      <div 
        data-bgset={ `${backgroundUrlSmJpg} [(max-width: 992px)] | ${backgroundUrlLgJpg}` } 
        data-bgset-webp={ `${backgroundUrlSmWebp} [(max-width: 992px)] | ${backgroundUrlLgWebp}` }
        className="background lazyload"
      />

      <HomeLink />
      
      <div className="kek">
        <div className="upper-block" />

        <h1 className="start__caption" dangerouslySetInnerHTML={{__html: title}}></h1>

        <div className="lower-block">
          <div className="lower-block__inner">
            <div className="lower-block__inner-text">{ subTitle }</div>
          </div>
        </div>
      </div>

      <ButtonToNext to='goal' />
    </section>
  )
}

Start.propTypes = {
  title: string.isRequired,
  subTitle: string,
  backgroundUrlSmWebp: string.isRequired,
  backgroundUrlLgWebp: string.isRequired,
  backgroundUrlSmJpg: string.isRequired,
  backgroundUrlLgJpg: string.isRequired
}

export default Start