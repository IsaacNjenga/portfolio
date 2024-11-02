import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import github from "../assets/icons/github.png";
import email from "../assets/icons/email.png";
import user from "../assets/icons/user.png";
import linkedin from "../assets/icons/linkedin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressCard,
  faAddressBook,
} from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  return (
    <>
      <div>
        <div className="profile">
          <img src={user} alt="_" className="profile-image" />
          <h1 style={{ color: "white" }}>Isaac Njenga</h1>
        </div>
        <div className="icons">
          <img src={email} alt="_" className="nav-icon" />
          <img src={linkedin} alt="_" className="nav-icon" />
          <img
            src={github}
            alt="_"
            className="nav-icon"
            onClick={() =>
              (window.location.href = "https://github.com/IsaacNjenga")
            }
          />
        </div>{" "}
        <br />
        <div className="links">
          <FontAwesomeIcon icon={faHouse} className="icon" />
          <Link to="/" className="nav-link">
            Home
          </Link>
          <br />
          <FontAwesomeIcon icon={faCircleInfo} className="icon" />
          <Link to="/about" className="nav-link">
            About
          </Link>{" "}
          <br />
          <FontAwesomeIcon icon={faAddressCard} className="icon" />
          <Link to="/resume" className="nav-link">
            Resume
          </Link>{" "}
          <br />
          <FontAwesomeIcon icon={faAddressBook} className="icon" />
          <Link to="/contact" className="nav-link">
            Contact
          </Link>{" "}
          <br />
          <FontAwesomeIcon icon={faBriefcase} className="icon" />
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </div>{" "}
      </div>
    </>
  );
}

export default Navbar;
