import React from 'react'
import {
  arrayOf,
  shape,
  object,
  string
} from 'prop-types'

import LoadImage from '../../../LoadImage'
import flagImageWebp from '../../../../../static/images/portfolio/spp/flag.webp'
import flagImageJpg from '../../../../../static/images/portfolio/spp/flag.jpg'

import '../../../../styles/pages/re_spp/project-pics-card.scss'

export const CompanyCard = ({
  cardData: {
    cardLogo: {
      imageWebpLg,
      imageJpgLg,
      imageWebpSm,
      imageJpgSm
    },
    itemsContent,
    title
  }
}) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__front">
          <div className="card-logo__container">
            <LoadImage
              primaryLg={ imageWebpLg }
              primarySm={ imageWebpSm }
              secondaryLg={ imageJpgLg }
              secondarySm={ imageJpgSm }
              className='card__logo'
              alt='card-logo'
              lazyLoad
            />
          </div>

        </div>
        <div className="card__back">
          <h4 className="card__back--title">
            { title }
          </h4>

          <ul className="card__list">
            {
              itemsContent.map((item, index) => (
                <li className="card__item" key={ index }>{ item }</li>
              ))
            }
          </ul>
          <div className="card__signature">
            <div className="country__container">
              <LoadImage
                primaryLg={ flagImageWebp }
                secondaryLg={ flagImageJpg }
                className='card__flag'
                alt='flag'
                lazyLoad
              />
              <span className="country">
                USA, IL, Chicago
              </span>
            </div>
            <span className="client">
              Client
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

// CompanyCard.defaultProps = {
//   title: '',
// }

CompanyCard.propTypes = {
  cardData: shape({
    itemsContent: arrayOf(string),
    title: string,
    cardLogo: object
  }),
}
