import './Skill'
import { FaReact } from 'react-icons/fa'
import { TbBrandJavascript } from 'react-icons/tb'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt } from 'react-icons/fa'
import { DiBootstrap } from 'react-icons/di'
import { BsGithub } from 'react-icons/bs'
import './Skills.css'
const Skills = () => {
    const skillList = [
        { name: "React JS", icon: <FaReact />, color: '#61DBFB' },
        { name: "JavaScript", icon: <TbBrandJavascript />, color: '#f0db4f' },
        { name: "HTML", icon: <AiFillHtml5 />, color: '#e34c26' },
        { name: "CSS", icon: <FaCss3Alt />, color: '#264de4' },
        { name: "Bootstrap", icon: <DiBootstrap />, color: '#563d7c' },
        { name: "GIT", icon: <BsGithub />, color: '#fca326' },
    ]


    return (
        <>
            <div className='skill_section'>
                <div className='skill_section_heading'>
                    <h1 className='Heading'>Skills.</h1>
                </div>
                <div className='skill_container'>
                    {
                        skillList.map((item, index) => {
                            return (
                                <div className='skill_box' key={index}>
                                    <div className='skill_name'>
                                        <div className='skill_icon' style={{ color: item.color }}>{item.icon}</div>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Skills