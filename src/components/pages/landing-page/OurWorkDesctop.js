import React from 'react'

import { workItems } from '../../../constants'

import OurWorkCard from './OurWorkCard'

export default () => {

  return (
    <>
      { 
        workItems.map((item, index) => (
          <OurWorkCard
            key={ index }  
            title={ item.title }
            content={ item.content }
            link={ item.link }
            className={ item.title }
          />
        ))
      }
    </>
  )
}