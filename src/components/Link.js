import React from 'react'
import { Link as LinkGatsby } from 'gatsby'
import { 
  bool,
  string,
  object
 } from 'prop-types'

 import '../styles/components/link.scss'

const Link = ({
  to,
  external,
  outlined,
  dark,
  bold,
  svgIcon,
  className,
  children
}) => {
  let classResult = 'link-app'

  // Calculating result class
  if (className) {
    classResult = classResult + ' ' + className
  }
  if (outlined) {
    classResult += ' link-app--outlined'
  }
  if (dark) {
    classResult += ' link-app--dark'
  } else {
    classResult +=' link-app--light'
  }
  if (bold) {
    classResult += ' link-app--bold'
  }

  return (
    <>
      {
        external ? (
          <a
            href={ to }
            className={ classResult }
          >
            { children }

            {/* Icon */}
            { 
              svgIcon && (
                <span className="link-app__svg-icon">{ svgIcon }</span>
              )
            }
          </a>
        ) : (
          <LinkGatsby
            to={ to }
            className={ classResult }
          >
            { children }

            {/* Icon */}
            { 
              svgIcon && (
                <span className="link-app__svg-icon">{ svgIcon }</span>
              )
            }
          </LinkGatsby>
        )
      }
    </>
  )
}

Link.propTypes = {
  to: string.isRequired,
  className: string,
  external: bool,
  outlined: bool,
  dark: bool,
  bold: bool,
  svgIcon: object
}

export default Link