import "../styles/Projects.scss";

import ProjectCard from "./ProjectCard";

import AlgoVision from "../assets/images/Algovision.png";
import MnistVision from "../assets/images/MnistVision.png";
import FamilyApp from "../assets/images/FamilyApp.png";
import Portfolio from "../assets/images/Portfolio.png";

const Projects = () => {
  const ProjectsData = [
    {
      name: "AlgoVision",
      image: AlgoVision,
      about:
        "An algorithm visualiser made with vanilla javascript having interesting themes",
      github: "https://github.com/pran01/AlgoVision",
      live: "http://algovision.herokuapp.com/",
    },
    {
      name: "MnistVision",
      image: MnistVision,
      about:
        "Handwritten digit recognition on webcam with OpenCV and Tensorflow.",
      github: "https://github.com/pran01/MnistVision",
      live: "",
    },
    {
      name: "FamilyApp",
      image: FamilyApp,
      about:
        "A responsive web app personalised for and only accessible to my family.(Only my family members are registered, so no point in opening hosted link)",
      github: "https://github.com/pran01/Familyapp",
      live: "https://familyapp1.herokuapp.com/",
    },
    {
      name: "Portfolio",
      image: Portfolio,
      about: "This website that you are currently using",
      github: "https://github.com/pran01/about-me",
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
