import React from 'react'

import '../styles/components/schedule-call-button.scss'

export default () => {

  const handleClick = () => {
    Calendly && 
    Calendly.initPopupWidget({url: 'https://calendly.com/zimalab/call'})
  }

  return (
    <button 
      onClick={ handleClick }
      className="schedule-call-btn"
    >
      Schedule a Call
    </button>
  )
}