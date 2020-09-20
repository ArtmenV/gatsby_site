import React from 'react'

import SadSvg from '../../../static/icons/sad.svg'
import { func } from 'prop-types'

const ErrorMessage = ({ 
  onSubmit,
  onError 
}) => {

  const onClick = () => {
    onSubmit(false)
    onError(false)
  }

  return (
    <div className="message">
      <div>
        <SadSvg className="message__icon" />
        <p className="message__text">sorry,</p>
      </div>
      
      <p>Your message hasn’t been sent. Please <button onClick={ onClick } className="message__btn">try again</button> later. </p>
    </div>
  )
}

ErrorMessage.propTypes = {
  onSubmit: func.isRequired,
  onError: func.isRequired
}

export default ErrorMessage