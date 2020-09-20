import React, {
  useRef,
} from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import {
  string,
  array,
  bool
} from 'prop-types'

import '../../../styles/components/re_work-layout.scss'

import LoadImage from '../../LoadImage'

const WorkLayout = ({
  title,
  subTitle,
  listItems,
  imageLgPrimary,
  imageLgSecondary,
  imageSmPrimary,
  imageSmSecondary,
  alt,
  className,
  isReversed,
  isWhiteImageWorkOne,
  isWhiteImageWorkTwo,
  isWhiteImageWorkThree,
  children
}) => {
  const breakpoints = useBreakpoint()
  const container = useRef(null)

  console.log('isWhiteImageWorkThree', isWhiteImageWorkThree)

  return (
    <section className={  `work-layout-redesign ${isReversed ? 'work-layout--reversed' : ''} ${className ? className : ''}`}
      ref={ container }
    >
      <header className="header__container">
        { className !== 'speed' && className !== 'threatlists' && <h2 className="caption-primary">{ title }</h2>}
        { className === 'cms' && breakpoints.md && <h3 className="caption-primary subtitle">{ subTitle }</h3>}
      </header>

      <section className="work-layout__content">
        <div className={
          isWhiteImageWorkOne ? 'work-layout__image is-white-image-one' :
          isWhiteImageWorkTwo ? 'work-layout__image is-white-image-two' :
          isWhiteImageWorkThree ? 'work-layout__image is-white-image-three' :
          'work-layout__image'
      }>
          <LoadImage
            primaryLg={ imageLgPrimary }
            secondaryLg={ imageLgSecondary }
            primarySm={ imageSmPrimary }
            secondarySm={ imageSmSecondary }
            alt={ alt }
            lazyLoad
          />
        </div>
        <div className="work-layout__content-inner">
          { (className === 'speed' || className === 'threatlists') && <h2 className="caption-primary">{ title }</h2>}
          { subTitle && <h3 className="work-layout__subtitle">{ subTitle }</h3>}
          {
            listItems.length && (
              <ul className="work-layout__list">
                { listItems.map((item, index) => <li key={ index }>{ item }</li>) }
              </ul>
            )
          }
          { children }
        </div>
      </section>
    </section>
  )
}

WorkLayout.propTypes = {
  title: string.isRequired,
  subTitle: string,
  listItems: array,
  imageLgPrimary: string.isRequired,
  imageLgSecondary: string.isRequired,
  imageSmPrimary: string,
  imageSmSecondary: string,
  alt: string.isRequired,
  isReversed: bool,
  isWhiteImageWorkOne: bool,
  isWhiteImageWorkTwo: bool,
  isWhiteImageWorkThree: bool,
  className: string
}

export default WorkLayout
