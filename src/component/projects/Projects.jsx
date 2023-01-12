import React from 'react'
import './Projects.css'

import Project from './Project';

export default function Projects() {
    return (
        <div className='project_section' id='projects'>
            <div className='project_section_heading'>
                <h1 className='Heading'>Projects.</h1>
            </div>
            <div className="all_projects_section">
                <div className='project_section_header'>
                    <p>Some Featured Projects</p>
                    <button>View All</button>
                </div>
                <div className="project_section_content">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>

        </div>
    )
}
