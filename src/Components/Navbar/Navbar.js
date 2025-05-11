import logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <navbar className="navbar">
      <div className="menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <a className="logo" href="#">
        <img className="logoImg" src={logo} alt="logo" />
        <span className="logoText">Tasks</span>
      </a>
      <div className="profile">
        <p>SK</p>
      </div>
    </navbar>
  );
};

export default Navbar;
