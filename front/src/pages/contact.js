import React from "react";
import { Card, Typography, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import "../assets/css/contact.css";

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
    <div className="contact-bg">
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
          Contact
        </Title>
        <Text
          type="secondary"
          style={{ marginTop: 8, textAlign: "center", fontFamily: "Raleway" }}
        >
          Reach out to me whenever
        </Text>
      </div>

      <Card className="contact-card">
        <Row gutter={[24, 24]} justify="center">
          {myContact.map((c) => (
            <Col xs={24} sm={12} md={8} key={c.id}>
              <Card variant={false} className="contact-item">
                <div className="contact-icon">{c.icon}</div>
                <Title level={4}>{c.name}</Title>
                <Text>{c.value}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
}

export default Contact;
