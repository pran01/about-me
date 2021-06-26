import "../styles/Projects.scss";

import ProjectCard from "./ProjectCard";

import AlgoVision from "../assets/images/Algovision.png";

const Projects = () => {
  const ProjectsData = [
    {
      name: "AlgoVision",
      image: AlgoVision,
      about:
        "An algorithm visualiser made with vanilla javascript having interesting themes",
      github: "",
      live: "",
    },
    {
      name: "AlgoVision",
      image: AlgoVision,
      about:
        "An algorithm visualiser made with vanilla javascript having interesting themes",
      github: "",
      live: "",
    },
    {
      name: "AlgoVision",
      image: AlgoVision,
      about:
        "An algorithm visualiser made with vanilla javascript having interesting themes",
      github: "",
      live: "",
    },
    {
      name: "AlgoVision",
      image: AlgoVision,
      about:
        "An algorithm visualiser made with vanilla javascript having interesting themes",
      github: "",
      live: "",
    },
    {
      name: "AlgoVision",
      image: AlgoVision,
      about:
        "An algorithm visualiser made with vanilla javascript having interesting themes",
      github: "",
      live: "",
    },
  ];
  return (
    <section id="Projects">
      <div className="projects-container">
        <p className="projects-heading">Things I have done</p>
        <button className="all-btn projects-button active">All</button>
        <button className="frontend-btn projects-button">Frontend</button>
        <button className="backend-btn projects-button">Backend</button>
        <button className="mobile-btn projects-button">Mobile</button>
        <div className="display-projects">
          {ProjectsData.map((project, index) => (
            <ProjectCard
              name={project.name}
              image={project.image}
              about={project.about}
              github={project.github}
              live={project.live}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
