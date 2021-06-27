import "../styles/Projects.scss";

import ProjectCard from "./ProjectCard";

import AlgoVision from "../assets/images/Algovision.png";
import MnistVision from "../assets/images/MnistVision.png";
import FamilyApp from "../assets/images/FamilyApp.png";
import Portfolio from "../assets/images/Portfolio.png";
import { useState } from "react";
import { useEffect } from "react";

const Projects = () => {
  const [tag, setTag] = useState("All");

  const ProjectsData = [
    {
      name: "AlgoVision",
      image: AlgoVision,
      about:
        "An algorithm visualiser made with vanilla javascript having interesting themes",
      github: "https://github.com/pran01/AlgoVision",
      live: "http://algovision.herokuapp.com/",
      tag: "Frontend",
    },
    {
      name: "MnistVision",
      image: MnistVision,
      about:
        "Handwritten digit recognition on webcam with OpenCV and Tensorflow.",
      github: "https://github.com/pran01/MnistVision",
      live: "",
      tag: "Backend",
    },
    {
      name: "FamilyApp",
      image: FamilyApp,
      about:
        "A responsive web app personalised for and only accessible to my family.(Only my family members are registered, so no point in opening hosted link)",
      github: "https://github.com/pran01/Familyapp",
      live: "https://familyapp1.herokuapp.com/",
      tag: "Fullstack",
    },
    {
      name: "Portfolio",
      image: Portfolio,
      about: "This website that you are currently using",
      github: "https://github.com/pran01/about-me",
      live: "",
      tag: "Frontend",
    },
  ];

  useEffect(() => {
    const projectsContainer = document.querySelectorAll(
      ".projects-container"
    )[0];
    const btns = projectsContainer.querySelectorAll(".projects-button");
    for (let i = 0; i < btns.length; i += 1) {
      btns[i].addEventListener("click", function () {
        let current = projectsContainer.querySelectorAll(".active")[0];
        current.classList.remove("active");
        this.classList.add("active");
      });
    }
  }, []);

  return (
    <section id="Projects">
      <div className="projects-container">
        <p className="projects-heading">Things I have done</p>
        <button
          className="all-btn projects-button active"
          onClick={() => {
            setTag("All");
          }}>
          All
        </button>
        <button
          className="frontend-btn projects-button"
          onClick={() => setTag("Frontend")}>
          Frontend
        </button>
        <button
          className="backend-btn projects-button"
          onClick={() => setTag("Backend")}>
          Backend
        </button>
        <button
          className="fullstack-btn projects-button"
          onClick={() => setTag("Fullstack")}>
          Fullstack
        </button>
        <div className="display-projects">
          {tag === "All"
            ? ProjectsData.map((project, index) => (
                <ProjectCard
                  name={project.name}
                  image={project.image}
                  about={project.about}
                  github={project.github}
                  live={project.live}
                  key={index}
                />
              ))
            : ProjectsData.filter((item) => item.tag === tag).map(
                (project, index) => (
                  <ProjectCard
                    name={project.name}
                    image={project.image}
                    about={project.about}
                    github={project.github}
                    live={project.live}
                    key={index}
                  />
                )
              )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
