import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  Tabs,
  Typography,
  Card,
  Button,
  Row,
  Image,
  Col,
  Carousel,
} from "antd";
import "../assets/css/portfolio.css";
import { UserContext } from "../App";
import easy1 from "../assets/images/easyManager/Screenshot (245).png";
import easy2 from "../assets/images/easyManager/Screenshot (246).png";
import easy3 from "../assets/images/easyManager/Screenshot (247).png";
import easy4 from "../assets/images/easyManager/Screenshot (248).png";

const { Title, Text, Paragraph } = Typography;

function Portfolio() {
  const { isMobile } = useContext(UserContext);
  const easyManagerPics = [easy1, easy2, easy3, easy4];

  const tabItems = [
    {
      label: <Text style={{ fontFamily: "Raleway" }}>Easy Manager</Text>,
      key: "1",
      children: (
        <Card>
          <Row gutter={[20, 20]} align="middle">
            <Col
              xs={24}
              sm={24}
              md={10}
              lg={10}
              style={{ textAlign: "center" }}
            >
              <Carousel autoplay autoplaySpeed={2500} fade>
                {/* <Image.PreviewGroup
                  preview={{
                    onChange: (current, prev) =>
                      console.log(
                        `current index: ${current}, prev index: ${prev}`
                      ),
                  }}
                > */}
                  {easyManagerPics.map((picSrc) => (
                    <Image
                      src={picSrc}
                      alt="easym"
                      width={isMobile ? 'auto' : 400}
                      height='auto'
                      style={{
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        objectFit: "contain",
                      }}
                    />
                  ))}
                {/* </Image.PreviewGroup> */}
              </Carousel>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14}>
              <Title level={2} style={{ fontFamily: "Raleway" }}>
                Easy Manager: Inventory and Expense Tracking System
              </Title>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                EasyManager is a project I contemplated for some time before
                deciding to bring it to life. EasyDeal Furnitures, a furniture
                shop based in Nairobi, was previously managing its bookkeeping
                using traditional pen-and-paper methods. This approach often led
                to errors and inefficiencies. To address these challenges, I
                developed a digitized inventory system that automates processes,
                requiring minimal supervision.
              </Paragraph>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                The software I created utilizes MongoDB for data storage,
                ensuring that data management is both simple and effective. I
                employed the MERN stack to develop the entire system, and I
                continue to maintain it to this day. The client is satisfied
                with the results and has successfully learned to navigate the
                system.
              </Paragraph>
              <div style={{ marginTop: "20px" }}>
                <Button
                  type="primary"
                  href="https://easymanager-gilt.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Raleway" }}
                >
                  Visit EasyManager
                </Button>
              </div>
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      label: "Uplifting Kindness Foundation",
      key: "2",
      children: "Content of editable tab 2",
    },
    {
      label: "Toto Kalezi Foundation",
      key: "3",
      children: "Content of editable tab 3",
    },
    {
      label: "Uncle Martin Cookies",
      key: "4",
      children: "Content of editable tab 3",
    },
    {
      label: "Whisper",
      key: "5",
      children: "Content of editable tab 3",
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
        <div className="portfolio-bg">
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
              Portfolio
            </Title>
            <Text
              type="secondary"
              style={{
                marginTop: 8,
                textAlign: "center",
                fontFamily: "Raleway",
              }}
            >
              A glance of my recent works
            </Text>
          </div>
          <div
            style={{
              padding: "22px 0px",
              background: "rgba(255, 255, 255, 0.8)",
            }}
          >
            {" "}
            <Tabs
              defaultActiveKey="1"
              type="card"
              size="small"
              style={{ marginBottom: 32 }}
              items={tabItems}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Portfolio;
