import React, { useContext } from "react";
import { Timeline, Typography, Card, Divider } from "antd";
import { motion } from "framer-motion";
import "../assets/css/resume.css";
import { UserContext } from "../App";
import {
  BookOutlined,
  HistoryOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import MobileResume from "../components/mobileResume";

const { Title, Text, Paragraph } = Typography;

const iconStyle = { fontSize: "30px", marginRight: 5 };

function Resume() {
  const { isMobile } = useContext(UserContext);
  const timelineItems = [
    {
      label: (
        <Title level={2} style={{ fontFamily: "Raleway", color: "green" }}>
          <HistoryOutlined style={{ ...iconStyle, color: "green" }} /> Summary
        </Title>
      ),
      children: (
        <Card variant={false}>
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
            }}
          >
            Isaac N. Njenga
          </Title>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            A thorough and resourceful software developer with over 5 years of
            progressive record and a strong foundation in applied computer
            technology, equipped with skills in data analysis and extensive
            market research. High proficiency in leveraging software tools to
            extract insights that drive operational efficiency, alongside a
            solid understanding of teamwork and project management.
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
        <Title level={2} style={{ fontFamily: "Raleway", color: "#2a75d7" }}>
          Education <BookOutlined style={{ ...iconStyle, color: "#2a75d7" }} />
        </Title>
      ),
      children: (
        <Card variant={false}>
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
            }}
          >
            B.Sc in Applied Computer Technology
          </Title>
          <Text type="secondary">2021 - 2025</Text>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            <i>United States International University - Africa (USIU-A)</i>
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
        <Title level={2} style={{ fontFamily: "Raleway", color: "purple" }}>
          <SolutionOutlined style={{ ...iconStyle, color: "purple" }} />{" "}
          Professional Experience
        </Title>
      ),
      children: (
        <>
          <Card variant={false}>
            <Title
              level={4}
              style={{
                borderBottom: "2px solid #2a75d7",
                fontFamily: "Raleway",
              }}
            >
              Full Stack Web Developer
            </Title>
            <Text type="secondary" style={{ fontFamily: "Roboto" }}>
              EasyDeal Furnitures | Oct 2024 - Jan 2025
            </Text>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Developed a custom-made web application system that tracks
              inventory and manages sales for a small business.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Designed and implemented a user-friendly interface using
              React.js to streamline the sales process and improve managerial
              experience.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Integrated real-time data synchronization between inventory and
              sales modules, reducing manual errors and optimizing stock levels.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Implemented secure authentication and role-based access control
              to protect sensitive business data and ensure compliance with
              privacy standards.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Collaborated closely with stakeholders to gather requirements,
              prioritize features, and conduct user acceptance testing,
              resulting in a highly tailored solution that met specific business
              needs.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Established automated backup and recovery processes to safeguard
              critical business information and minimize downtime.
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
              ▪ Collaborated with team members to gather requirements,
              troubleshoot issues, and implement effective solutions, ensuring
              alignment with project goals and deadlines.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Assisted in the development and maintenance of web applications,
              contributing to both front-end and back-end functionalities to
              enhance user experience and application performance.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Conducted software testing, debugging, and performance tuning to
              identify and resolve technical issues across multiple
              environments.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Authored and updated technical documentation, including API
              references, feature specs, and setup guides to support team
              knowledge sharing and onboarding.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto" }}>
              ▪ Engaged in daily stand-ups and sprint planning meetings as part
              of the Agile/Scrum development process, gaining experience in
              iterative development and team collaboration.
            </Paragraph>
          </Card>
        </>
      ),
    },
  ];
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start hidden and to the right
        animate={{ opacity: 1, x: 0 }} // Fade in and slide in
        exit={{ opacity: 0, x: -100 }} // Fade out and slide out left
        transition={{ duration: 0.5 }} // Smooth animation
      >
        <div className="resume-bg">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: isMobile ? "10px 0px" : "22px 0px",
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
              style={{
                marginTop: 8,
                textAlign: "center",
                fontFamily: "Raleway",
              }}
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
            {isMobile ? (
              <MobileResume />
            ) : (
              <Timeline
                mode={isMobile ? "alternate" : "alternate"}
                items={timelineItems}
              />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Resume;
