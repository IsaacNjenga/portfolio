import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../assets/css/home.css";
import { motion } from "framer-motion";
import { UserContext } from "../App";

function Home() {
  const { isMobile } = useContext(UserContext);
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start hidden and to the right
        animate={{ opacity: 1, x: 0 }} // Fade in and slide in
        exit={{ opacity: 0, x: -100 }} // Fade out and slide out left
        transition={{ duration: 0.5 }} // Smooth animation
      >
        <div className="home-bg">
          <div
            style={{
              justifyContent: "center",
              textAlign: "left",
            }}
          >
            <div style={{ padding: isMobile ? "40px 0px" : "50px 50px" }}>
              <h2
                style={{
                  fontFamily: "Raleway",
                  fontSize: "3rem",
                  fontWeight: "bolder",
                  color: "#333",
                  textShadow: "1px 0px 15px rgba(0, 0, 0, 0.4)",
                  marginBottom: 0,
                }}
              >
                Isaac Njenga
              </h2>{" "}
              <h3
                style={{
                  fontFamily: "Raleway",
                  fontSize: "2rem",
                  color: "#fff",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  marginTop: 12,
                }}
              >
                I am a Full Stack Developer
              </h3>
              <Button
                type="primary"
                style={{
                  borderRadius: "20px",
                  padding: "20px 30px",
                  fontFamily: "Raleway",
                  background: "#34b7a7",
                  fontWeight: "bold",
                  margin: "0px 20px",
                }}
              >
                <Link to="/about">ABOUT ME</Link>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
