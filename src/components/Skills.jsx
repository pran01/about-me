import "../styles/Skills.scss";

import Cpp from "../assets/icons/C++.png";
import CSS from "../assets/icons/CSS.png";
import Flask from "../assets/icons/Flask.png";
import Git from "../assets/icons/Git.png";
import HTML from "../assets/icons/HTML.png";
import JS from "../assets/icons/JS.png";
import Python from "../assets/icons/Python.png";
import ReactLogo from "../assets/icons/React.png";
import ReactNative from "../assets/icons/ReactNative.png";
import Sass from "../assets/icons/sass.png";
import SQLite from "../assets/icons/SQLite.png";

const Skills = () => {
  const languages = [HTML, CSS, JS, Python, Cpp];
  const libraries = [Flask, ReactLogo, ReactNative, SQLite, Sass, Git];
  return (
    <section id="Skills">
      <div className="content">
        <p>What I can work with</p>
        {/* <hr align="left" size="0" /> */}
        <div className="languages">
          <p>Languages</p>
          <div className="language-logos">
            {languages.map((item) => (
              <img src={item} alt={`${item}`} className="skill-logo" />
            ))}
          </div>
        </div>
        <div className="libraries">
          <p>Libraries/Frameworks/Tools</p>
          <div className="libraries-logos">
            {libraries.map((item) => (
              <img src={item} alt={`${item}`} className="skill-logo" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
