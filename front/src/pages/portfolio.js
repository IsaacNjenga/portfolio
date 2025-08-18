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

import ukf1 from "../assets/images/ukfoundation/Screenshot (249).png";
import ukf2 from "../assets/images/ukfoundation/Screenshot (250).png";
import ukf3 from "../assets/images/ukfoundation/Screenshot (251).png";
import ukf4 from "../assets/images/ukfoundation/Screenshot (252).png";
import ukf5 from "../assets/images/ukfoundation/Screenshot (253).png";

import tkf1 from "../assets/images/tkfoundation/Screenshot (254).png";
import tkf2 from "../assets/images/tkfoundation/Screenshot (255).png";
import tkf3 from "../assets/images/tkfoundation/Screenshot (256).png";

import umc1 from "../assets/images/umcookies/Screenshot (257).png";
import umc2 from "../assets/images/umcookies/Screenshot (258).png";
import umc3 from "../assets/images/umcookies/Screenshot (259).png";
import umc4 from "../assets/images/umcookies/Screenshot (260).png";

import w1 from "../assets/images/whisper/Screenshot (261).png";
import w2 from "../assets/images/whisper/Screenshot (262).png";
import w3 from "../assets/images/whisper/Screenshot (263).png";

import endo1 from "../assets/images/endocare/endocare1.png";
import endo2 from "../assets/images/endocare/endocare2.png";
import endo3 from "../assets/images/endocare/endocare3.png";
import endo4 from "../assets/images/endocare/endocare4.png";

const { Title, Text, Paragraph } = Typography;

function Portfolio() {
  const { isMobile } = useContext(UserContext);

  const easyManagerPics = [easy1, easy2, easy3, easy4];
  const ukfPics = [ukf1, ukf2, ukf3, ukf4, ukf5];
  const tkfPics = [tkf1, tkf2, tkf3];
  const umcPics = [umc1, umc2, umc3, umc4];
  const whisperPics = [w1, w2, w3];
  const endocarePics = [endo1, endo2, endo3, endo4];

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
                    width={isMobile ? "auto" : 400}
                    height="auto"
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
      label: (
        <Text style={{ fontFamily: "Raleway" }}>
          Uplifting Kindness Foundation
        </Text>
      ),
      key: "2",
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
                {ukfPics.map((picSrc) => (
                  <Image
                    src={picSrc}
                    alt="easym"
                    width={isMobile ? "auto" : 400}
                    height="auto"
                    style={{
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      objectFit: "contain",
                    }}
                  />
                ))}
              </Carousel>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14}>
              <Title level={2} style={{ fontFamily: "Raleway" }}>
                The Uplifting Kindness Foundation
              </Title>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                The Uplifting Kindness Foundation is an organisation that is
                dedicated to making a positive impact on the lives of children
                and communities. Their mission is fueled by compassion,
                collaboration, and the unwavering belief that every child
                deserves a chance to thrive. This project that was brought to me
                with the aim of facilitating how the organisation would receive
                their donations by means of a paywall. The organisation also
                needed a way to showcase themselves and so they asked me to
                develop the website on their behalf. I opted to go for Stripe
                and PayPal but it had some trouble getting their documents
                verified for them to receive donations. In the end, we decided
                to go with the KCB Bank account and Binance so that they can
                also receive crypto donations as well
              </Paragraph>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                The organisation also has access to the admin dashboard and
                section which I also designed and developed myself. From there,
                they can view donations and track volunteers and messages sent
                to them
              </Paragraph>
              <dupiv style={{ marginTop: "20px" }}>
                <Button
                  type="primary"
                  href="https://www.upliftingkindnessfoundation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Raleway" }}
                >
                  Visit The Uplifting Kindess Foundation
                </Button>
              </dupiv>
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      label: (
        <Text style={{ fontFamily: "Raleway" }}>Toto Kalezi Foundation</Text>
      ),
      key: "3",
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
                {tkfPics.map((picSrc) => (
                  <Image
                    src={picSrc}
                    alt="easym"
                    width={isMobile ? "auto" : 400}
                    height="auto"
                    style={{
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      objectFit: "contain",
                    }}
                  />
                ))}
              </Carousel>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14}>
              <Title level={2} style={{ fontFamily: "Raleway" }}>
                Toto Kalezi Foundation
              </Title>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                The Toto Kalezi Foundation is a non-governmental and non-profit
                organization dedicated to empowering the lives of street
                children and vulnerable communities. Similar to the Uplifting
                Kindness Foundation, this project was brought to me with the aim
                of facilitating how the organization would receive their
                donations through a paywall.
              </Paragraph>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                To create a seamless and user-friendly experience, I developed
                the website using ReactJS. Its component-based architecture
                allowed me to create reusable UI components, which significantly
                streamlined the development process. For the user interface, I
                utilized Ant Design (antd), a comprehensive design system that
                provides a set of high-quality React components. This enabled me
                to implement a visually appealing and responsive layout,
                ensuring that users could easily navigate the donation process.
              </Paragraph>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                The integration of payment gateways, such as Stripe and PayPal,
                was also facilitated through React, allowing for secure and
                efficient transactions. The combination of ReactJS and Ant
                Design not only enhanced the overall functionality of the
                website but also ensured that it aligned with the foundation's
                mission of making a positive impact in the community.
              </Paragraph>
              <dupiv style={{ marginTop: "20px" }}>
                <Button
                  type="primary"
                  href="https://toto-kalezi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Raleway" }}
                >
                  Visit Toto Kalezi Foundation
                </Button>
              </dupiv>
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      label: (
        <Text style={{ fontFamily: "Raleway" }}>Uncle Martin Cookies</Text>
      ),
      key: "4",
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
                {umcPics.map((picSrc) => (
                  <Image
                    src={picSrc}
                    alt="easym"
                    width={isMobile ? "auto" : 400}
                    height="auto"
                    style={{
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      objectFit: "contain",
                    }}
                  />
                ))}
              </Carousel>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14}>
              <Title level={2} style={{ fontFamily: "Raleway" }}>
                Uncle Martin Cookies
              </Title>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                Uncle Martin's Cookies specializes in freshly baked cookies made
                from all-natural ingredients, offering a delightful treat for
                any occasion. With a diverse range of cookie offerings, each
                batch is crafted with care, reminiscent of homemade delights.
                These cookies are perfect for gifts or personal indulgence,
                ensuring that every bite is a moment of joy. To enhance the
                customer experience, the cookies are delivered fresh from the
                oven directly to the customer's doorstep.
              </Paragraph>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                The website for Uncle Martin's Cookies was developed using the
                MERN stack, which includes MongoDB, Express.js, ReactJS, and
                Node.js. This powerful combination allows for a robust and
                scalable application. The front-end was built with ReactJS,
                utilizing Ant Design (antd) for a sleek and responsive user
                interface. Ant Design's pre-built components enabled me to
                create an intuitive shopping experience, making it easy for
                customers to browse cookie offerings and place orders
                seamlessly. The integration of the MERN stack not only ensures
                efficient data management but also provides a smooth and
                enjoyable experience for users. Although the web application is
                completed, it is yet to be released for use as some legal
                aspects have to be ironed out first.
              </Paragraph>
              <dupiv style={{ marginTop: "20px" }}>
                <Button
                  type="primary"
                  href="https://unclemartinscookies.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Raleway" }}
                >
                  Visit Uncle Martin Cookies
                </Button>
              </dupiv>
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      label: <Text style={{ fontFamily: "Raleway" }}>Whisper</Text>,
      key: "5",
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
                {whisperPics.map((picSrc) => (
                  <Image
                    src={picSrc}
                    alt="easym"
                    width={isMobile ? "auto" : 400}
                    height="auto"
                    style={{
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      objectFit: "contain",
                    }}
                  />
                ))}
              </Carousel>
            </Col>
            <Col xs={24} sm={24} md={14} lg={14}>
              <Title level={2} style={{ fontFamily: "Raleway" }}>
                Whisper
              </Title>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                In my latest project, I developed a messaging app that leverages
                the Stream Chat API to facilitate seamless two-way communication
                between users. This powerful API provides a robust framework for
                building real-time chat applications, allowing users to send and
                receive messages instantly. One of the standout features of the
                app is its ability to create group messages, enabling users to
                engage in conversations with multiple participants
                simultaneously. This functionality is particularly valuable for
                team collaboration, social interactions, and community building.
              </Paragraph>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                The integration of the Stream Chat API not only simplifies the
                implementation of messaging features but also enhances the
                overall user experience with its rich set of functionalities,
                such as message threading, reactions, and user presence
                indicators. These features contribute to a dynamic and
                interactive environment, making the app a promising addition to
                various projects. By incorporating real-time messaging
                capabilities, I have created a platform that fosters
                communication and connection, which is essential in today’s
                digital landscape.
              </Paragraph>
              <dupiv style={{ marginTop: "20px" }}>
                <Button
                  type="primary"
                  href="https://whisper-plum-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Raleway" }}
                >
                  Visit Whisper
                </Button>
              </dupiv>
            </Col>
          </Row>
        </Card>
      ),
    },
    {
      label: <Text style={{ fontFamily: "Raleway" }}>EndoCare</Text>,
      key: "6",
      children: (
        <Card>
          <Row gutter={[20, 20]}>
            <Col
              xs={24}
              sm={24}
              md={10}
              lg={10}
              style={{ textAlign: "center" }}
            >
              <Carousel autoplay autoplaySpeed={2500} fade>
                {endocarePics.map((picSrc) => (
                  <Image
                    src={picSrc}
                    alt="easym"
                    width={isMobile ? "auto" : 400}
                    height="auto"
                    style={{
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      objectFit: "contain",
                    }}
                  />
                ))}
              </Carousel>
            </Col>

            <Col xs={24} sm={24} md={14} lg={14}>
              <Title level={2} style={{ fontFamily: "Raleway" }}>
                EndoCare
              </Title>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                This project is a web-based AI tool designed to assist in the
                early detection of diabetic and endocrine-related illnesses
                using medical images. By leveraging machine learning,
                specifically through Google’s Teachable Machine, the system can
                analyze uploaded images and provide predictions about possible
                conditions. The process is simple and accessible: a user uploads
                an image, the model processes it directly in the browser using
                TensorFlow.js, and an instant prediction is displayed. This
                eliminates the need for a heavy backend, making it lightweight,
                private, and fast. The design ensures that sensitive medical
                data stays on the user’s device while still providing meaningful
                insights.
              </Paragraph>
              <Paragraph style={{ fontFamily: "Roboto" }}>
                The problem it addresses is the limited access to early
                diagnostic tools for diabetes and endocrine disorders,
                particularly in regions where healthcare resources and
                specialists may be scarce. By making predictive AI models
                available through a simple web application, the project
                demonstrates how artificial intelligence can lower barriers to
                medical assistance, empower individuals with accessible
                self-screening, and potentially aid healthcare workers in
                triaging cases. While it is not a replacement for professional
                diagnosis, the system shows strong potential to support
                preventive healthcare, raise awareness, and pave the way for
                more advanced AI-driven health solutions in the future.
              </Paragraph>
              <dupiv style={{ marginTop: "20px" }}>
                <Button
                  type="primary"
                  href="https://endocare-kappa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "Raleway" }}
                >
                  Visit EndoCare
                </Button>
              </dupiv>
            </Col>
          </Row>
        </Card>
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
        <div className="portfolio-bg">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px 0px",
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
              padding: "10px 0px",
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
