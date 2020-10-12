import React, {
  useState,
  useCallback,
  useRef
} from 'react'
import {
  shape,
  string,
  array,
} from 'prop-types'

import { Switch } from '../Switch'
import { CategoryList } from './CategoryList'
import { ModalCategoryItem } from './ModalCategoryItem'

import { CardCarouselComponent } from './card-carousel/CardCarousel'
import IconT from '../../../../../static/services/icon/t-icon.svg'
import IconFrame from '../../../../../static/services/icon/frame-icon.svg'

//css for mobile
import '../../../../styles/pages/services/mobile/_services.scss';

export const ServicesMobile = ({
  navigationServicesData: {
    headerData: {
      title,
      description
    },
    servicesCategoryList,
    portfolioCardList
  }
  }) => {
  const [isVisibleItemCard, setIsVisibleItemCard] = useState(false)
  const [currentOpenCategoryData, setCurrentOpenCategoryData] = useState({})
  const [isSwitchOpenCard, setIsSwitchOpenCard] = useState(false)
  const [isCategoryHidden, setIsCategoryHidden] = useState(false)
  const [isSeeDetailBtn, setIsDetailBtn] = useState(false)
  const expandRef = useRef(null)

  //this function open car with animation
  // if we close card indexlist will become not number
  const handleOpenCurrentCategory = useCallback((indexList) => {
    if (typeof indexList !== 'number') {
      setTimeout(() => setCurrentOpenCategoryData(servicesCategoryList[indexList]), 300)
    } else {
      setCurrentOpenCategoryData(servicesCategoryList[indexList])
    }
    setIsVisibleItemCard(isVisibleItemCard => !isVisibleItemCard)
  }, [servicesCategoryList])

  const handleOpenCard = useCallback(() => {
    const data = expandRef.current.className.includes('expand')
    if (!data) expandRef.current.classList.add('expand')
    else expandRef.current.classList.remove('expand')
    setIsDetailBtn(isSeeDetailBtn => !isSeeDetailBtn)
  }, [])

  const handleToggleSwitch = useCallback(() => {
    setIsSwitchOpenCard(isSwitchOpenCard => !isSwitchOpenCard)
    setIsCategoryHidden(isCategoryHidden => !isCategoryHidden)
  }, [])

  return (
    <div className="services-mobile" ref={ expandRef }>

      <h2 className="caption-primary">
        { title }
      </h2>

        <div className="services__content">
          <div className="description">
            { description }
          </div>

          {/* current section category */}
          { !isCategoryHidden && (
            <CategoryList
              categoryList={ servicesCategoryList }
              handleOpenCurrentCategory={ handleOpenCurrentCategory }
            />
          )}
        </div>

          {/* modal current category */}
          <ModalCategoryItem
            isVisibleCategoryItemModal={ isVisibleItemCard }
            currentOpenCategoryData={ currentOpenCategoryData }
            handleOpenCurrentCategory={ handleOpenCurrentCategory }
          />

      { isSwitchOpenCard && isCategoryHidden && (
        <CardCarouselComponent
        //--------------------------------------------
        // this settings need for right work click slide carousel in section
        // if just use UI/UX get error becouse / is not valid selector
        // look carefully
        //---------------------------------------------
          titleSection={ title.split(' ')[0] === 'UI/UX'
            ? 'ui-ux-design'
            : title.split(' ')[0]
          }
          navigationServicesData={ portfolioCardList }
          isSeeDetailBtn={ isSeeDetailBtn }
          handleOpenCard={ handleOpenCard }
        />
      )}

      {/* open current item card */}
      { !isVisibleItemCard && (
        <div className="services__frame">
          <IconT />
          <Switch handleToggleSwitch={ handleToggleSwitch } />
          <IconFrame />
        </div>
      )}
    </div>
  )
}

ServicesMobile.propTypes = {
  navigationServicesData: shape({
    headerData: shape({
      title: string.isRequired,
      description: string.isRequired,
    }),
    servicesCategoryList: array,
    portfolioCardList: array
  })
}
