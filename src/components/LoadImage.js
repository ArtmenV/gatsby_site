import React from 'react'
import { 
  string, 
  bool 
} from 'prop-types'

//Primary - webp
// Secondary - other 
const LoadImage = ({
  primarySm,
  primaryLg,
  secondarySm,
  secondaryLg,
  secondaryType,
  lazyLoad, 
  alt,
  className
}) => {
  let classResult = ''

  // Result class calculation
  // if (lazyLoad) {
  //   classResult += 'lazyLoad'
  // }
  // if (className) {
  //   classResult += ' ' + className
  // }
  // console.log(classResult)

  // console.log('primaryLg', primaryLg)
  // console.log('secondaryLg', secondaryLg)
  
  return (
    <picture>
      {/* Small */}
      {
        primarySm && (
          <source
            { 
              ...(lazyLoad ? 
              {['data-srcset']: primarySm} : 
              { 'srcset': primarySm }) 
            }  
            media="(max-width: 991px)"
            type="image/webp" 
          />
        )
      }

      {
        secondarySm && (
          <source 
            { 
              ...(lazyLoad ? 
                {['data-srcset']: secondarySm} : 
                { 'srcset': secondarySm }) 
            } 
            media="(max-width: 991px)"
            type={ `image/${secondaryType}` }
          />
        )
      }

      {/* Large */}
      {
        primaryLg && (
          <source 
            { 
              ...(lazyLoad ? 
                {['data-srcset']: primaryLg} : 
                { 'srcset': primaryLg }) 
            } 
            type="image/webp" 
          />
        )
      }

      {
        secondaryLg && (
          <source
          { 
            ...(lazyLoad ? 
              {['data-srcset']: secondaryLg} : 
              { 'srcset': secondaryLg }) 
            } 
            type={ `image/${secondaryType}` }
          />
        )
      }
    
      {/* <img 
        { ...(lazyLoad ? {['data-src']: secondaryLg} : { 'src': secondaryLg }) }
        className={ classResult }
        alt={ alt } 
      /> */}
      <img 
        data-src={ secondaryLg }
        className={ `lazyload ${ className ? className : ''}` }

        // className={ classResult }
        // className={ `lazyLoad` }
        alt={ alt } 
      />
    </picture>
  )
}

LoadImage.defaultProps = {
  secondaryType: 'jpg'
}

LoadImage.propTypes = {
  primarySm: string,
  primaryLg: string,
  secondarySm: string,
  secondaryLg: string,
  secondaryType: string,
  alt: string.isRequired,
  className: string,
  lazyLoad: bool
}

export default LoadImage

    
 



