import "../styles/Home.scss";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section id="Home">
      <div className="content">
        <p className="greeting">HELLO,</p>
        <p className="name">I’M Pranav Sinha</p>
        <p className="intro">A Full-Stack Developer</p>
        <p className="about">
          I am a student based in India pursuing Bachelors in Technology in
          Computer Science, interested in building things for the internet
        </p>
        <hr />
        <a
          href="https://www.linkedin.com/in/pranav-sinha/"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin className="logo" />
        </a>
        <a href="https://github.com/pran01" target="_blank" rel="noreferrer">
          <FaGithub className="logo" />
        </a>
      </div>
    </section>
  );
};

export default Home;
