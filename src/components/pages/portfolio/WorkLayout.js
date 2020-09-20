import React, { 
  useEffect, 
  useRef,
  useState 
} from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { 
  string, 
  array, 
  bool 
} from 'prop-types'

import '../../../styles/components/work-layout.scss'

import LoadImage from '../../LoadImage'

const WorkLayout = ({
  title,
  subTitle,
  listItems,
  imageLgPrimary,
  imageLgSecondary,
  alt,
  bgJpg,
  bgWebp,
  className,
  isMobileBackgrounded,
  isReversed,
  children
}) => {
  const breakpoints = useBreakpoint()
  const container = useRef(null)
  const header = useRef(null)
  const [timerId, setTimerId] = useState(null)

  const background = {
    ['data-bgset']: bgJpg,
    ['data-bgset-webp']: bgWebp,
  }

  useEffect(() => {
    if (!timerId) {
      setTimerId(setTimeout(() => {
        setTimerId(null)

        if (breakpoints.md) {
          removeBackground(header.current)
        } else {
          removeBackground(container.current)
        }
      }, 700))
    }
  }, [breakpoints.md])

  function removeBackground (element) {
    element.style.background = "none"
  }

  return (
    <section
      {
        ...(isMobileBackgrounded && breakpoints.md ? 
          {
            ...background,
            ['className']: `work-layout work-layout--backgrounded lazyload`
          } : {
            ['className']: `work-layout ${isReversed ? 'work-layout--reversed' : ''} ${className ? className : ''}`
          })
      } 
      ref={ container }
    >
      <header
        {
          ...(!breakpoints.md ?
            {
              ...background,
              ['className']: "work-layout__header lazyload"
            } : {
              ['className']: "work-layout__header"
            }
          )
        }
        ref={ header }
      >
        <h2 className="caption-primary">{ title }</h2>
      </header>
      
      <section className="work-layout__content-outer">
        <div className="work-layout__content-inner">
          { subTitle && <h3 className="work-layout__subtitle">{ subTitle }</h3> }

          {
            listItems.length && (
              <ul className="work-layout__list">
                { listItems.map((item, index) => <li key={ index }>{ item }</li>) }
              </ul>
            )
          }
          
          <div className="work-layout__image">
            <LoadImage
              primaryLg={ imageLgPrimary }
              secondaryLg={ imageLgSecondary }
              alt={ alt }
              lazyLoad
            />
          </div>

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
  alt: string.isRequired,
  bgJpg: string.isRequired,
  bgWebp: string.isRequired,
  isMobileBackgrounded: bool,
  isReversed: bool,
  className: string
}

export default WorkLayout