import React, { useContext } from "react";
import { Timeline, Typography, Card, Divider } from "antd";
import "../assets/css/resume.css";
import { UserContext } from "../App";

const { Title, Text, Paragraph } = Typography;

function Resume() {
  const { isMobile } = useContext(UserContext);
  const timelineItems = [
    {
      label: (
        <Title level={isMobile ? 4 : 3} style={{ fontFamily: "Raleway" }}>
          Summary
        </Title>
      ),
      children: (
        <Card variant={false}>
          <Title
            level={isMobile ? 5 : 4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
            }}
          >
            Isaac N. Njenga
          </Title>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            Innovative and goal-driven Full Stack Developer with 3+ years of
            experience designing and developing user-centered web applications
            from initial concept to a final, polished product.{" "}
            <ul style={{ fontFamily: "Roboto" }}>
              <li>
                <Text strong>Address:</Text> Nairobi, Kenya
              </li>
              <li>
                <Text strong>Phone:</Text> +254 740 900-061
              </li>
              <li>
                <Text strong>Email:</Text>{" "}
                <a
                  href="mailto:njengaisaac789@gmail.com"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  njengaisaac789@gmail.com
                </a>
              </li>
            </ul>
          </Paragraph>
        </Card>
      ),
    },
    {
      label: (
        <Title level={isMobile ? 4 : 3} style={{ fontFamily: "Raleway" }}>
          Education
        </Title>
      ),
      children: (
        <Card variant={false}>
          <Title
            level={isMobile ? 5 : 4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
            }}
          >
            B.Sci in Applied Computer Technology
          </Title>
          <Text type="secondary">2021 - 2025</Text>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            <i>United States International University - Africa</i>
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            Studied core computer science concepts, specializing in full-stack
            development, cloud computing, and cybersecurity. Worked on multiple
            projects that integrated web technologies with data-driven
            solutions.
          </Paragraph>
        </Card>
      ),
    },
    {
      label: (
        <Title level={isMobile ? 4 : 3} style={{ fontFamily: "Raleway" }}>
          Professional Experience
        </Title>
      ),
      children: (
        <>
          <Card variant={false}>
            <Title
              level={isMobile ? 5 : 4}
              style={{
                borderBottom: "2px solid #2a75d7",
                fontFamily: "Raleway",
              }}
            >
              Full Stack Developer
            </Title>
            <Text type="secondary" style={{ fontFamily: "Roboto" }}>
              Freelance | 2024 - Present
            </Text>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              Developed scalable web applications, worked with React, Node.js,
              and MongoDB, and optimized API performance for better user
              experience.
            </Paragraph>
            <Divider />
            <Title
              level={4}
              style={{
                borderBottom: "2px solid #2a75d7",
                fontFamily: "Raleway",
              }}
            >
              Software Intern
            </Title>
            <Text type="secondary" style={{ fontFamily: "Roboto" }}>
              Opteamio LTD | Jan 2025 - March 2025
            </Text>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              Developed scalable web applications, worked with React, Node.js,
              and MongoDB, and optimized API performance for better user
              experience.
            </Paragraph>
          </Card>
        </>
      ),
    },
  ];
  return (
    <>
      <div className="resume-bg">
        {" "}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "22px 0px",
            background: "rgba(255, 255, 255, 0.8)",
            fontFamily: "Raleway",
          }}
        >
          <Title
            style={{
              textShadow: "10px 10px 15px rgba(0, 0, 0, 0.4)",
              fontFamily: "Raleway",
              borderBottom: "3px solid #2a75d7",
              color: "#3c3b39",
            }}
          >
            Resume
          </Title>
          <Text
            type="secondary"
            style={{ marginTop: 8, textAlign: "center", fontFamily: "Raleway" }}
          >
            A timeline preview of my accomplishments.
          </Text>
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            padding: "10px 20px",
          }}
        >
          <Timeline
            mode={isMobile ? "left" : "alternate"}
            items={timelineItems}
          />
        </div>
      </div>
    </>
  );
}

export default Resume;
