import React from 'react'

import '../styles/components/copyright.scss'

export default () => {
  const getYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className="copyright">
      2014-{ getYear() } &copy; All rights reserved. Zimalab
    </div>
  )
}