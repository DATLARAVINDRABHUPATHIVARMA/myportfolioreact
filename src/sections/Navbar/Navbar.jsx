import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header id="home">
      <a href="#home"><img src={logo} className="logo" /></a>
      <nav ref={navRef}>
        <a href="#hero">Home</a>
        <a href="#h1">About Me</a>
        <a href="#projects">My Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact Me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
