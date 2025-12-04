import React, { useContext } from "react";
import { Card, Col, Image, Progress, Row, Typography } from "antd";
import Pic from "../assets/images/pic.jpg";
import { RightOutlined } from "@ant-design/icons";
import "../assets/css/about.css";
import { UserContext } from "../App";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const calculateAge = (birthday) => {
  const dob = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
};

const myDetails = [
  { id: 1, name: "Date of Birth", value: "10th Dec 2001" },
  {
    id: 2,
    name: "Age",
    value: calculateAge("10 Dec 2001"),
  },
  { id: 4, name: "Phone", value: "(KE) +254 740 900-061" },
  {
    id: 5,
    name: "Email",
    value: (
      <a
        href="mailto:njengaisaac789@gmail.com"
        style={{ color: "#1890ff", textDecoration: "none" }}
      >
        njengaisaac789@gmail.com
      </a>
    ),
  },
  { id: 6, name: "City", value: "Nairobi, Kenya" },
  { id: 7, name: "Status", value: "Open To Work" },
];

const mySkills = [
  { id: 1, name: "HTML/CSS", value: "99" },
  { id: 10, name: "Tailwind/Material UI", value: "99" },
  { id: 2, name: "JavaScript", value: "85" },
  { id: 3, name: "ReactJS", value: "90" },
  { id: 4, name: "MongoDB", value: "95" },
  { id: 5, name: "NodeJS", value: "90" },
  { id: 6, name: "Express", value: "80" },
  { id: 7, name: "UX/UI Design", value: "99" },
  { id: 8, name: "MERN Stack", value: "95" },
  { id: 9, name: "Flask/Django", value: "95" },
  { id: 11, name: "Deployment/Hosting", value: "99" },
];

function About() {
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
        <div className="about-bg" style={{ fontFamily: "Raleway" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "18px 0px",
              //background: "rgba(255, 255, 255, 0.8)",
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
                About
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
                Passionate full-stack developer with experience in building
                dynamic and scalable web applications.
              </Text>
            </motion.div>
          </div>

          <Card
            style={{
              height: "100%",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 0,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
            bodyStyle={{ padding: 16 }}
          >
            <Row gutter={[20, 20]} align="middle">
              <Col
                xs={24}
                sm={24}
                md={10}
                lg={10}
                style={{ textAlign: "center" }}
              >
                <Image
                  src={Pic}
                  alt="Profile"
                  width={isMobile ? 300 : 380}
                  height={400}
                  style={{
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    objectFit: "cover",
                    borderRadius: 50,
                    border: "3px solid #2a75d7",
                    padding: 2,
                  }}
                />
              </Col>
              <Col xs={24} sm={24} md={14} lg={14}>
                <Title
                  level={3}
                  style={{
                    fontSize: "2rem",
                    fontFamily: "Raleway",
                    borderBottom: "2px solid #2a75d7",
                  }}
                >
                  Full Stack Web Developer
                </Title>
                <Text type="secondary" style={{ fontFamily: "Raleway" }}>
                  I am an enthusiastic developer skilled in frontend and backend
                  technologies, passionate about creating seamless user
                  experiences.
                </Text>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  {myDetails.map((detail) => (
                    <Text
                      key={detail.id}
                      style={{ fontSize: "1rem", fontFamily: "Raleway" }}
                    >
                      <RightOutlined style={{ marginRight: "8px" }} />
                      <strong>{detail.name}:</strong> {detail.value}
                    </Text>
                  ))}
                </div>
              </Col>
            </Row>
          </Card>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 10px",
              background:
                "linear-gradient(180deg, #261f60ff 0%, #302b63 50%, #24243e 100%)",
              fontFamily: "Raleway",
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
              Skills
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
              Proficient in modern web development technologies and frameworks.
            </Text>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: isMobile ? "25px" : "35px",
              background: "rgba(255, 255, 255, 0.97)",
              padding: "40px 50px",
              fontFamily: "Raleway",
              margin: "0px 30px",
              borderRadius: 0,
              backdropFilter: "blur(3px)",
            }}
          >
            {mySkills.map((skill) => (
              <div key={skill.id} style={{ marginBottom: 5 }}>
                <Text style={{ fontWeight: "bold" }}>{skill.name}</Text>
                <div>
                  <Progress percent={skill.value} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
