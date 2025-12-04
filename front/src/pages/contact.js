import React from "react";
import { Card, Typography, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "../assets/css/contact.css";
import { motion } from "framer-motion";

const { Title, Text } = Typography;

const myContact = [
  {
    id: 1,
    name: "Phone",
    value: "+254 740 900-061",
    icon: <PhoneOutlined style={{ fontSize: 25, color: "#1890ff" }} />,
  },
  {
    id: 2,
    name: "Email",
    value: (
      <a href="mailto:njengaisaac789@gmail.com" style={{ color: "#1890ff" }}>
        njengaisaac789@gmail.com
      </a>
    ),
    icon: <MailOutlined style={{ fontSize: 25, color: "#1890ff" }} />,
  },
  {
    id: 3,
    name: "Address",
    value: "513-00600 Nairobi, Kenya",
    icon: <EnvironmentOutlined style={{ fontSize: 25, color: "#1890ff" }} />,
  },
];

function Contact() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start hidden and to the right
        animate={{ opacity: 1, x: 0 }} // Fade in and slide in
        exit={{ opacity: 0, x: -100 }} // Fade out and slide out left
        transition={{ duration: 0.5 }} // Smooth animation
      >
        <div className="contact-bg">
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
              position: "relative",
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
              Contact
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
              Reach out to me whenever
            </Text>
          </div>

          <Card
            style={{
              background: "transparent",
              border: "none",
              boxShadow: "none",
              padding: "40px 20px",
            }}
          >
            <Row gutter={[24, 24]} justify="center">
              {myContact.map((c) => (
                <Col xs={24} sm={12} md={8} key={c.id}>
                  <Card variant={false} className="contact-item">
                    <div className="contact-icon">{c.icon}</div>
                    <Title
                      level={3}
                      style={{ fontFamily: "Raleway", color: "#fff" }}
                    >
                      {c.name}
                    </Title>
                    <Text style={{ fontFamily: "Roboto", color: "#fff" }}>
                      {c.value}
                    </Text>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
