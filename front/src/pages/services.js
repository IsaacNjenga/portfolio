import React from "react";
import { motion } from "framer-motion";
import { Card, Col, Divider, Row, Typography } from "antd";
import "../assets/css/services.css";
import webIcon from "../assets/icons/webDevelopment.png";
import apiIcon from "../assets/icons/api.png";
import ecommerceIcon from "../assets/icons/ecommerce.png";
import uiuxIcon from "../assets/icons/uiux.png";
import maintenanceIcon from "../assets/icons/maintenance.png";

const { Title, Text } = Typography;

const myServices = [
  {
    id: 1,
    title: "Web Development Services",
    content: (
      <ul style={{ textAlign: "left" }}>
        <li>Custom Website Development</li>
        <li>Frontend Development</li>
        <li>Backend Development</li>
        <li>Full Stack Web Applications</li>
      </ul>
    ),
    icon: webIcon,
  },
  {
    id: 2,
    title: "E-Commerce & Business Solutions",
    content: (
      <ul style={{ textAlign: "left" }}>
        <li>E-commerce Development</li>
        <li>Admin Dashboard Development</li>
        <li>Payment Integration (M-Pesa, PayPal, Stripe)</li>
      </ul>
    ),
    icon: ecommerceIcon,
  },
  {
    id: 3,
    title: "API Development & Integration",
    content: (
      <ul style={{ textAlign: "left" }}>
        <li>Third-Party API Integration</li>
        <li>Web Scraping & Automation</li>
      </ul>
    ),
    icon: apiIcon,
  },
  {
    id: 4,
    title: "UI/UX & Performance Optimization",
    content: (
      <ul style={{ textAlign: "left" }}>
        <li>UI/UX Enhancement</li>
        <li>SEO Optimization</li>
        <li>Performance Optimization</li>
      </ul>
    ),
    icon: uiuxIcon,
  },
  {
    id: 5,
    title: "Maintenance & Consulting",
    content: (
      <ul style={{ textAlign: "left" }}>
        <li>Website Maintenance & Updates</li>
        <li>Tech Consulting</li>
        <li>Code Review & Debugging</li>
      </ul>
    ),
    icon: maintenanceIcon,
  },
];

function Services() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Start hidden and to the right
      animate={{ opacity: 1, x: 0 }} // Fade in and slide in
      exit={{ opacity: 0, x: -100 }} // Fade out and slide out left
      transition={{ duration: 0.5 }} // Smooth animation
    >
      <div className="services-bg">
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
          {" "}
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
              Services
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
              My areas of expertise.
            </Text>
          </motion.div>
        </div>
        <div
          style={{
            background: "transparent",
            padding: "40px 30px",
            backdropFilter: "blur(2px)",
          }}
        >
          <Row gutter={[32, 32]} justify="center">
            {myServices.map((s) => (
              <Col xs={24} sm={12} md={8} key={s.id}>
                <Card
                  style={{
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                  }}
                  bodyStyle={{ padding: 16 }}
                  hoverable
                >
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={s.icon}
                      alt="icon"
                      style={{
                        width: "55px",
                        height: "55px",
                      }}
                    />
                    <Divider />
                    <div style={{ height: "100%", marginBottom: "12px" }}>
                      <Title level={3} style={{ fontFamily: "Raleway" }}>
                        {s.title}
                      </Title>
                    </div>
                    <Text style={{ marginBottom: 0, fontFamily: "Raleway" }}>
                      {s.content}
                    </Text>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
