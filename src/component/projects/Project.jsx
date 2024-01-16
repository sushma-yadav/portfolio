import React, { useState } from "react";

const Project = (props) => {
  const [projectDetail, setProjectDetail] = useState(false);
  return (
    <div
      className="project"
      onMouseEnter={() => setProjectDetail(true)}
      onMouseLeave={() => setProjectDetail(false)}
    >
      {!projectDetail ? (
        <div className="project_image">
          <img src={props.item.image} alt="" />
        </div>
      ) : (
        <div className="project_name">
          <p className="project_title">{props.item.name}</p>
          <p className="project_description">{props.item.description}</p>
          <a target="_blank" rel="noreferrer" href={props.item.url}>
            <button>Demo</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
