import React, { useState } from 'react'
import project_img1 from "../../assests/image/project_img1.avif";

const Project = () => {
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
                        <p className='project_title'>Amazon Clone</p>
                        <p className='project_description'>Lorem ipsum dolor sit amet consectetur. Pellentesque aenean orci in sagittis suspendisse. Facilisis eu tellus bibendum tempor vestibulum malesuada arcu. </p>
                        <button>Preview</button>
                    </div>
            }

        </div>
    )
}

export default Project
