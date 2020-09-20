import * as React from 'react'
import { array } from 'prop-types'

import { MainContentList } from './MainContentList'

export const MainContent = ({ categoryList }) => {

  return (
    <div className="services-desktop-main__content">
      <MainContentList categoryList={ categoryList }/>
    </div>
  )
}

MainContent.propTypes = {
  categoryList: array.isRequired
}