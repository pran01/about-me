import "../styles/ProjectCard.scss";

import { FaGithub, FaChrome } from "react-icons/fa";

const ProjectCard = ({ name, image, about, github, live }) => {
  return (
    <div className="project-card-container">
      <div className="project-card-main">
        <img src={image} alt={name} className="project-card-image" />
        <div className="project-card-overlay">
          <p>{about}</p>
          {github ? (
            <a href={github} target="_blank" rel="noreferrer">
              <div className="project-card-link">
                <FaGithub className="project-card-link-logo" />
                <span className="project-card-link-name">Github</span>
              </div>
            </a>
          ) : (
            <></>
          )}
          {live ? (
            <a href={live} target="_blank" rel="noreferrer">
              <div className="project-card-link">
                <FaChrome className="project-card-link-logo" />
                <span className="project-card-link-name">Live</span>
              </div>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="project-card-name">{name}</div>
    </div>
  );
};

export default ProjectCard;
