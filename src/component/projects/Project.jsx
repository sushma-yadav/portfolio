import React, { useState } from 'react'
import project_img1 from "../../assests/image/project_img1.avif";

const Project = (props) => {

    const [projectDetail, setProjectDetail] = useState(false)
    return (
        <div className='project' onMouseEnter={() => setProjectDetail(true)} onMouseLeave={() => setProjectDetail(false)}>
            {
                !projectDetail ?
                    <div className='project_image'>
                        <img src={project_img1} alt="" />
                    </div>
                    :
                    <div className='project_name'>
                        <p className='project_title'>{props.item.name}</p>
                        <p className='project_description'>{props.item.description}</p>
                        <a target="_blank" href={props.item.url}>
                            <button>Preview</button>
                        </a>
                    </div>
            }

        </div>
    )
}

export default Project
