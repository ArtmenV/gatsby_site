import React from 'react'
// import {
//   arrayOf,
//   objectOf,
//   shape,
//   string,
// } from 'prop-types'

import LoadImage from '../../../LoadImage'

import '../../../../styles/pages/re_spp/project-pics-card.scss'

export const CompanyCard = ({
  cardData: {
    cardLogo,
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
              primaryLg={ cardLogo.imageWebpLg }
              primarySm={ cardLogo.imageWebpSm }
              secondaryLg={ cardLogo.imageJpgLg }
              secondarySm={ cardLogo.imageJpgSm }
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
          <span className="client">
            Client
          </span>
        </div>
      </div>
    </div>
  )
}

// CompanyCard.defaultProps = {
//   title: '',
// }

// CompanyCard.propTypes = {
//   cardData: objectOf(shape({
//     cardLogo:  objectOf(shape({
//       imageWebpLg: string.isRequired,
//       imageJpgLg: string.isRequired,
//       imageWebpSm: string.isRequired,
//       imageJpgSm: string.isRequired,
//     })),
//     title: string,
//     itemsContent: arrayOf.string,
//   }))
// }
