import React from 'react'
import { number, node } from 'prop-types'

const ProjectCard = ({ number, children }) => (
  <li>
    <div className="number">
      { number }
    </div>
    <div className="content">
      { children }
    </div>
  </li>
)

ProjectCard.propTypes = {
  number: number.isRequired,
  children: node.isRequired
}

export default ProjectCard



