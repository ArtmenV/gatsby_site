import React from 'react'
import { 
  string, 
  node 
} from 'prop-types'

const ClientBox = ({
  projectName,
  projectBranch,
  location,
  className,
  children
}) => (
  <section className={ `client-box ${className}` }>
    <div className="client-box__content">
      {
        projectName && <div className="project-name">{ projectName }</div>
      }
      {
        projectBranch && <div className="project-branch">{ projectBranch }</div>
      }
      <div className="client-location">{ location }</div>
      { children }
    </div>
    <div className="client-box__line" />
  </section> 
)

ClientBox.propTypes = {
  projectName: string,
  projectBranch: string,
  location: string.isRequired,
  className: string.isRequired,
  children: node
}

export default ClientBox

