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

const cardStyle = {
  height: "100%",
  background: "rgba(255, 255, 255, 0.0)",
  backdropFilter: "blur(10px)",
  border: "2px solid #4b6caf",
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
};

function Resume() {
  const { isMobile } = useContext(UserContext);
  const timelineItems = [
    {
      label: (
        <Title level={2} style={{ fontFamily: "Raleway", color: "#2a75d7" }}>
          <HistoryOutlined style={{ ...iconStyle, color: "#2a75d7" }} /> Summary
        </Title>
      ),
      children: (
        <Card
          variant={false}
          style={cardStyle}
          bodyStyle={{ padding: 16 }}
          hoverable
        >
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
              color: "#fff",
            }}
          >
            Isaac N. Njenga
          </Title>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            A thorough and resourceful software developer with over 5 years of
            progressive record and a strong foundation in applied computer
            technology, equipped with skills in data analysis and extensive
            market research. High proficiency in leveraging software tools to
            extract insights that drive operational efficiency, alongside a
            solid understanding of teamwork and project management.
            <ul style={{ fontFamily: "Roboto", color: "#fff",marginTop:10 }}>
              <li style={{ fontFamily: "Roboto", color: "#fff" }}>
                <Text strong style={{ fontFamily: "Roboto", color: "#fff" }}>
                  Address:
                </Text>{" "}
                Nairobi, Kenya
              </li>
              <li style={{ fontFamily: "Roboto", color: "#fff" }}>
                <Text strong style={{ fontFamily: "Roboto", color: "#fff" }}>
                  Phone:
                </Text>{" "}
                +254 740 900-061
              </li>
              <li style={{ fontFamily: "Roboto", color: "#fff" }}>
                <Text strong style={{ fontFamily: "Roboto", color: "#fff" }}>
                  Email:
                </Text>{" "}
                <a
                  href="mailto:njengaisaac789@gmail.com"
                  style={{ color: "#fff", textDecoration: "none" }}
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
        <Card
          variant={false}
          style={cardStyle}
          bodyStyle={{ padding: 16 }}
          hoverable
        >
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
              color: "#fff",
            }}
          >
            B.Sc in Applied Computer Technology
          </Title>
          <Text
            type="secondary"
            style={{ fontFamily: "Roboto", color: "#fff" }}
          >
            2021 - 2025
          </Text>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            <i>United States International University - Africa (USIU-A)</i>
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
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
        <Title level={2} style={{ fontFamily: "Raleway", color: "#2a75d7" }}>
          <SolutionOutlined style={{ ...iconStyle, color: "#2a75d7" }} />{" "}
          Professional Experience
        </Title>
      ),
      children: (
        <>
          <Card
            variant={false}
            style={cardStyle}
            bodyStyle={{ padding: 16 }}
            hoverable
          >
            <Title
              level={4}
              style={{
                borderBottom: "2px solid #2a75d7",
                fontFamily: "Raleway",
                color: "#fff",
              }}
            >
              Full Stack Web Developer
            </Title>
            <Text
              type="secondary"
              style={{ fontFamily: "Roboto", color: "#fff" }}
            >
              EasyDeal Furnitures | Oct 2024 - Jan 2025
            </Text>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Developed a custom-made web application system that tracks
              inventory and manages sales for a small business.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Designed and implemented a user-friendly interface using
              React.js to streamline the sales process and improve managerial
              experience.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Integrated real-time data synchronization between inventory and
              sales modules, reducing manual errors and optimizing stock levels.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Implemented secure authentication and role-based access control
              to protect sensitive business data and ensure compliance with
              privacy standards.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Collaborated closely with stakeholders to gather requirements,
              prioritize features, and conduct user acceptance testing,
              resulting in a highly tailored solution that met specific business
              needs.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Established automated backup and recovery processes to safeguard
              critical business information and minimize downtime.
            </Paragraph>
            <Divider />
            <Title
              level={4}
              style={{
                borderBottom: "2px solid #2a75d7",
                fontFamily: "Raleway",
                color: "#fff",
              }}
            >
              Software Intern
            </Title>
            <Text
              type="secondary"
              style={{ fontFamily: "Roboto", color: "#fff" }}
            >
              Opteamio LTD | Jan 2025 - March 2025
            </Text>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Collaborated with team members to gather requirements,
              troubleshoot issues, and implement effective solutions, ensuring
              alignment with project goals and deadlines.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Assisted in the development and maintenance of web applications,
              contributing to both front-end and back-end functionalities to
              enhance user experience and application performance.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Conducted software testing, debugging, and performance tuning to
              identify and resolve technical issues across multiple
              environments.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
              ▪ Authored and updated technical documentation, including API
              references, feature specs, and setup guides to support team
              knowledge sharing and onboarding.
            </Paragraph>
            <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
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
              padding: isMobile ? "10px 0px" : "18px 0px",
              background:
                "linear-gradient(180deg, #261f60ff 0%, #302b63 50%, #24243e 100%)",
              fontFamily: "Raleway",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: "center",
                //zIndex: 1
              }}
            >
              <Title
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontSize: "3.5rem",
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 16,
                  textShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
                }}
              >
                Resume
              </Title>
              <Text
                type="secondary"
                style={{
                  fontSize: "1.2rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontFamily: "Raleway, sans-serif",
                  letterSpacing: "1px",
                }}
              >
                A timeline preview of my accomplishments.
              </Text>
            </motion.div>
          </div>
          <div
            style={{
              background:
                "linear-gradient(180deg,  #24243e  0%, #302b63 50%, #261f60ff  100%)",
              padding: "20px 20px",
              backdropFilter: "blur(2px)",
            }}
          >
            {isMobile ? (
              <MobileResume cardStyle={cardStyle} />
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
