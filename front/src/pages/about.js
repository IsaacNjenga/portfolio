import React, { useContext } from "react";
import { Card, Col, Image, Progress, Row, Typography } from "antd";
import Pic from "../assets/images/pic.jpg";
import { RightOutlined } from "@ant-design/icons";
import "../assets/css/about.css";
import { UserContext } from "../App";
import { formatDistanceToNow } from "date-fns";
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
  { id: 1, name: "Birthday", value: "10 Dec 2001" },
  {
    id: 2,
    name: "Age",
    value: calculateAge("10 Dec 2001"),
  },
  { id: 3, name: "Website", value: "N/A" },
  { id: 4, name: "Phone", value: "(KE)+254 740 900-061" },
  {
    id: 5,
    name: "Email",
    value: (
      <a
        href="mailto:njengaisaac789@gmail.com"
        style={{ color: "black", textDecoration: "none" }}
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
  { id: 2, name: "JavaScript", value: "85" },
  { id: 3, name: "ReactJS", value: "90" },
  { id: 4, name: "MongoDB", value: "80" },
  { id: 5, name: "NodeJS", value: "80" },
  { id: 6, name: "Express", value: "70" },
  { id: 7, name: "UX/UI Design", value: "90" },
  { id: 8, name: "MERN Stack", value: "90" },
];

function About() {
  const { isMobile } = useContext(UserContext);
  return (
    <>
      <div className="about-bg" style={{ fontFamily: "Raleway" }}>
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
            About
          </Title>
          <Text
            type="secondary"
            style={{ marginTop: 8, textAlign: "center", fontFamily: "Raleway" }}
          >
            Passionate full-stack developer with experience in building dynamic
            and scalable web applications.
          </Text>
        </div>

        <Card>
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
            background: "rgba(255, 255, 255, 0.8)",
            fontFamily: "Raleway",
          }}
        >
          <Title
            style={{
              fontFamily: "Raleway",
              borderBottom: "3px solid #2a75d7",
              color: "#3c3b39",
            }}
          >
            Skills
          </Title>
          <Text
            type="secondary"
            style={{ display: "block", marginTop: 8, fontFamily: "Raleway" }}
          >
            Proficient in modern web development technologies and frameworks.
          </Text>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: isMobile ? "20px" : "30px",
            padding: "10px 50px",
            background: "rgba(255, 255, 255, 0.8)",
            fontFamily: "Raleway",
          }}
        >
          {mySkills.map((skill) => (
            <div key={skill.id}>
              <Text style={{ fontWeight: "bold" }}>{skill.name}</Text>
              <div>
                <Progress percent={skill.value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
