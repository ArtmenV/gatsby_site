import React from 'react'

import CloseIcon from '../../static/icons/close-icon.svg'

import '../styles/components/modal.scss'

export default ({ visible, onClose, children }) => {
  
  return (
    <div className={ `modal ${ visible ? 'modal--opened' : '' }` }>
      <button
        onClick={ onClose }
        className="modal__btn-close"
        aria-label="Close modal"
      >
        <CloseIcon className="modal__icon-close"/>
      </button>

      { children }
    </div>
  )
}