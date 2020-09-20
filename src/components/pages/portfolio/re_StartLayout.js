import React from 'react'
import { string } from 'prop-types'

import ButtonToNext from '../../ButtonToNext'
import HomeLink from '../../HomeLink'

import  '../../../styles/components/re_start-layout.scss'

const Start = ({
  title,
  titleTwoPart,
  subTitle,
  subTitleLast
}) => {

  return (
    <section className="start-redesign">
      <div className="background"/>

      <HomeLink />
      
      <div className="main-title__container spp-title__container">
        <h1 className="start__caption start__title--one spp__title--one">{ title }</h1>
        { titleTwoPart && (
          <h1 
            className="start__caption start__title--two spp__title--two"
          >
            { titleTwoPart }
          </h1> 
        )}
      </div>

        <div className="sub-title__container spp-sub-title__container">
          <div className="start__sub-title-text spp__sub-title">{ subTitle }</div>
          { subTitleLast && <div className="start__sub-title-text">{ subTitleLast }</div> }
        </div>

      <ButtonToNext to='goal-redesign' />
    </section>
  )
}

Start.propTypes = {
  title: string.isRequired,
  titleTwoPart: string,
  subTitle: string,
  subTitleLast: string
}

export default Start