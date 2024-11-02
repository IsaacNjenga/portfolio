import React from "react";
import Navbar from "../components/navbar";
import "../css/main.css";
import "../css/about.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      {" "}
      <div className="home-background">
        <div className="main-container">
          <div className="navbar-div">
            <Navbar />
          </div>
          <div className="main-div">
            <div className="about-body">
              <h1>About me</h1>
              <p>
                I have established myself as a software developer since 2021. I
                have plenty of experience and projects done in the following
                languages and libraries:
              </p>{" "}
              <div className="container">
                <div className="stack-1">
                  <div className="front">
                    {" "}
                    <ul>
                      <h4>Front-end Technologies</h4>
                      <li>Html5/Css3</li>
                      <li>JavaScript</li>
                      <li>Python</li>
                      <li>React</li>
                      <li>Next.Js</li>
                    </ul>
                  </div>
                  <div className="db">
                    <ul>
                      <h4>Databases</h4>

                      <li>MongoDB</li>
                      <li>MySQL</li>
                    </ul>
                  </div>
                </div>
                <div className="stack-2">
                  {" "}
                  <div className="back">
                    <ul>
                      <h4>Backend technologies</h4>
                      <li>Node.Js</li>
                      <li>Express.js</li>
                    </ul>
                  </div>
                  <div className="cloud">
                    <ul>
                      <h4>Cloud infrastructure</h4>
                      <li>Vercel</li>
                      <li>Netlify</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p>
                My current strength lies in full-stack development, more
                specifically the MERN stack, as seen from this website which is
                developed and maintained by myself. More on my personal projects{" "}
                <Link to="/portfolio">here</Link>.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
