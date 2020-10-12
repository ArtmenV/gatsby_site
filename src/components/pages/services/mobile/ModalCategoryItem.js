import * as React from 'react'
import { func, object, bool } from 'prop-types'
import CloseIcon from '../../../../../static/icons/close-icon.svg'

export const ModalCategoryItem = ({
  currentOpenCategoryData,
  handleOpenCurrentCategory,
  isVisibleCategoryItemModal
}) => {
  return (
    <div className={ isVisibleCategoryItemModal ? 'category__modal category__modal-open' : 'category__modal'}>
      <div className="container__card">
        <article className="category__container-open-content">
          <button
            onClick={ handleOpenCurrentCategory }
            className='modal__btn-close'
            aria-label="Open service"
          >
            <CloseIcon className="modal__icon-close"/>
          </button>
          <h3 className="title">
            { currentOpenCategoryData && currentOpenCategoryData.title }
          </h3>
          <p>
            { currentOpenCategoryData && currentOpenCategoryData.text }
          </p>
          <span className="category__icon-open">
            { currentOpenCategoryData && currentOpenCategoryData.icon }
          </span>
        </article>
      </div>
    </div>
  )
}

ModalCategoryItem.propTypes = {
  handleOpenCurrentCategory: func.isRequired,
  isVisibleCategoryItemModal: bool.isRequired,
  currentOpenCard: object
}
