import React from 'react'
import Style from './Projects.module.css'
import ComingSoon from '../ComingSoon/ComingSoon'

const Projects = () => {
    return (
        <div id="projects" className={Style['projects']}>
            <ComingSoon />
        </div>
    )
}

export default Projects;