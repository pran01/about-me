import "../styles/navbar.scss";
import logo from "../assets/images/PS-Logo-Black.png";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#" type="button" className="resume-btn">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
