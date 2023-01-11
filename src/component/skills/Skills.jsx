import './Skill'
import { FaReact } from 'react-icons/fa'
import './Skills.css'
const Skills = () => {
    return (
        <>
            <div className='skill_section'>
                <div className='skill_section_heading'>
                    <h1 className='Heading'>Skills.</h1>
                </div>
                <div className='skill_box'>
                    <div className='skill_name'>
                        <FaReact />
                        <p>ReactJS</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills