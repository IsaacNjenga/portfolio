import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import "../css/main.css";
import "../css/resume.css";
import axios from "axios";

function Resume() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get("resume");
        if (res.data.success) {
          const resume = res.data.resume;
          setData(resume);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchResume();
  }, []);

  const createOpenLink = (id) => {
    const url = `http://localhost:3001/injenga/file/${id}`;
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.blob();
            })
            .then((blob) => {
              const blobUrl = window.URL.createObjectURL(blob);
              window.open(blobUrl, "_blank");
            })
            .catch((error) => console.error("Error fetching the file:", error));
        }}
      >
        here
      </a>
    );
  };
  return (
    <>
      {" "}
      <div className="home-background">
        <div className="main-container">
          {" "}
          <div className="navbar-div">
            <Navbar />{" "}
          </div>
          <div className="main-div">
            <div className="resume-body">
              <h1>Resume</h1>{" "}
              {data.map((resume) => (
                <div key={resume._id}>
                  <p>
                    Feel free to access my resume from{" "}
                    {createOpenLink(resume._id)}
                  </p>
                </div>
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Resume;
