import "./styles/App.scss";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import Particles from "react-tsparticles";
import ParticleConfig from "./config/particles-config";

const App = () => {
  return (
    <div className="container">
      <div className="combined-container">
        <Particles options={ParticleConfig} />
      </div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
