import React from 'react'
import { Helmet } from 'react-helmet'

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title> { 'Not found page' } </title>
    </Helmet>
    <h1>Page not found</h1> 
  </div>
)

export default NotFoundPage