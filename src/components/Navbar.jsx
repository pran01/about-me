import "../styles/navbar.scss";
import logo from "../assets/images/PS-Logo-Black.png";

const Navbar = () => {
  const toggleNavbar = () => {
    const navBar = document.querySelector(".navbar-links");
    const toggleBtn = document.querySelector(".toggle-navbar");
    navBar.classList.toggle("active");
    toggleBtn.classList.toggle("active");
  };
  return (
    <nav id="navbar" className="navbar">
      <a className="logo-container" href="#Home">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <div className="toggle-navbar" onClick={toggleNavbar}>
        <span className="bar"></span>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#Skills" onClick={toggleNavbar}>
              Skills
            </a>
          </li>
          <li>
            <a href="#Projects" onClick={toggleNavbar}>
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" onClick={toggleNavbar}>
              Contact
            </a>
          </li>
          <li>
            <a href="#Home" type="button" className="resume-btn">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
