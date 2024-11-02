import React from "react";
import Navbar from "../components/navbar";
import "../css/main.css";
import "../css/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-background">
        <div className="main-container">
          <div className="navbar-div">
            <Navbar />
          </div>
          <div className="main-div">
            <div className="body">
              <h1>Hey there!</h1>
              <h3>
                I am Isaac Njenga, a software developer with much enthusiasm for
                web development. I am very passionate about all things to do
                with web technology.
              </h3>
              <h3>
                I have been advancing myself as a full-stack developer and I am
                more than ready to thrive in this fascinating field. More on me{" "}
                <Link to="/about">here.</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
