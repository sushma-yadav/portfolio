import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import "./Skills.css";
const Skills = () => {
  const skillList = [
    { name: "React JS", icon: <FaReact />, color: "#61DBFB" },
    { name: "Next JS", icon: <TbBrandNextjs />, color: "#ffffff" },
    { name: "JavaScript", icon: <TbBrandJavascript />, color: "#f0db4f" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#2f74c0" },
    { name: "HTML", icon: <AiFillHtml5 />, color: "#e34c26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "Bootstrap", icon: <DiBootstrap />, color: "#563d7c" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#36b6f2" },
    // { name: "Material UI", icon: <SiMui />, color: "#cccccc" },
    { name: "GIT", icon: <BsGithub />, color: "#fca326" },
  ];

  return (
    <>
      <div className="skill_section" id="skills">
        <div className="skill_section_heading">
          <h1 className="Heading">Skills.</h1>
        </div>
        <div className="skill_container">
          {skillList.map((item, index) => {
            return (
              <div className="skill_box" key={index}>
                <div className="skill_name">
                  <div className="skill_icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <p>{item.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
