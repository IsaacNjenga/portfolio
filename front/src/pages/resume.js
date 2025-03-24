import React from "react";
import {  Timeline, Typography, Card } from "antd";
import "../assets/css/resume.css";

const { Title, Text, Paragraph } = Typography;

function Resume() {
  const timelineItems = [
    {
      label: <Title level={3}>Summary</Title>,
      children: (
        <Card variant={false}>
          <Title level={4}>Isaac Njenga</Title>
          <Paragraph>
            Innovative and goal-driven Full Stack Developer with 3+ years of
            experience designing and developing user-centered web applications
            from initial concept to a final, polished product.
          </Paragraph>
          <ul>
            <li>
              <Text strong>Address:</Text> Nairobi, Kenya
            </li>
            <li>
              <Text strong>Phone:</Text> +254 740 900-061
            </li>
            <li>
              <Text strong>Email:</Text> njengaisaac789@gmail.com
            </li>
          </ul>
        </Card>
      ),
    },
    {
      label: <Title level={3}>Education</Title>,
      children: (
        <Card variant={false}>
          <Title level={4}>B.Sci in Applied Computer Technology</Title>
          <Text type="secondary">2021 - 2025</Text>
          <Paragraph>
            <i>United States International University - Africa</i>
          </Paragraph>
          <Paragraph>
            Studied core computer science concepts, specializing in full-stack
            development, cloud computing, and cybersecurity. Worked on multiple
            projects that integrated web technologies with data-driven
            solutions.
          </Paragraph>
        </Card>
      ),
    },
    {
      label: <Title level={3}>Professional Experience</Title>,
      children: (
        <>
          <Card variant={false}>
            <Title level={4}>Full Stack Developer</Title>
            <Text type="secondary">Freelance | 2024 - Present</Text>
            <Paragraph>
              Developed scalable web applications, worked with React, Node.js,
              and MongoDB, and optimized API performance for better user
              experience.
            </Paragraph>
            <Title level={4}>Software Intern</Title>
            <Text type="secondary">Opteamio LTD | Jan 2025 - March 2025</Text>
            <Paragraph>
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
            Passionate full-stack developer with experience in building dynamic
            and scalable web applications.
          </Text>
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            padding: "20px 20px",
          }}
        >
          <Timeline mode="alternate" items={timelineItems} />
        </div>
      </div>
    </>
  );
}

export default Resume;
