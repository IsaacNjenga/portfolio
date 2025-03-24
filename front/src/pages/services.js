import React from "react";
import { Card, Divider, Typography } from "antd";
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
        <li>Full Stack Web Applications </li>
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
    <>
      <div className="services-bg">
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
            Services
          </Title>
          <Text
            type="secondary"
            style={{ marginTop: 8, textAlign: "center", fontFamily: "Raleway" }}
          >
            My areas of expertise.
          </Text>
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            padding: "10px 20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "10px",
            }}
          >
            {myServices.map((s) => (
              <Card hoverable>
                <div
                  key={s.id}
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
                  <h2>{s.title}</h2>
                  <p>{s.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
