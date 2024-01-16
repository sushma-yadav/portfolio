import React from "react";
import "./Projects.css";
import Project from "./Project";

export default function Projects() {
  const projectDetail = [
    {
      name: "TMDB Clone",
      description:
        "A TMDB clone built using React JS, BootStap, CSS, and HTML and free API integration.",
      url: "https://tmdb-clone-su.netlify.app/",
      image: "https://i.postimg.cc/ryrnQxXN/tmdb.png",
    },
    {
      name: "Myntra Clone",
      description: "A Myntra clone built using React Js, HTML and CSS.",
      url: "https://my-myntra-clone.netlify.app/",
      image: "https://i.postimg.cc/dtmj79rD/myntra.png",
    },
    {
      name: "Todo App",
      description:
        "A todo app , implement all the CRED operations in ReactJs using react component and store the data in the local storage.",
      url: "https://sushma-todo-app.netlify.app/",
      image: "https://i.postimg.cc/Kz3PD1vH/todo.png",
    },
  ];

  return (
    <div className="project_section" id="projects">
      <div className="project_section_heading">
        <h1 className="Heading">Projects.</h1>
      </div>
      <div className="all_projects_section">
        <div className="project_section_header">
          <p>Some Featured Projects</p>
          <button style={{ display: "none" }}>View All</button>
        </div>
        <div className="project_section_content">
          {projectDetail.map((item, index) => {
            return <Project key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
