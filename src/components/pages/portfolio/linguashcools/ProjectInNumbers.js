import React from 'react'

import ProjectCard from './ProjectCard'

export default () => {

  return (
    <section className="project-in-numbers">
      <h2 className="caption-primary">Project in numbers:</h2>
      <ul className="project-in-numbers__list">
        <ProjectCard number={ 10 }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </ProjectCard>
        <ProjectCard number={ 20 }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </ProjectCard>
        <ProjectCard number={ 30 }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </ProjectCard>
      </ul>
    </section>
  )
}