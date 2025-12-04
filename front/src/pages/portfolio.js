import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typography, Card, Button, Row, Image, Col, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import DetailsModal from "../components/DetailsModal";
import { portfolioData } from "../assets/data/data";

const { Title, Text } = Typography;

function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState(null);

  const viewModal = (payload) => {
    setContent(payload);
    setOpenModal(true);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -12,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Animated background elements */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(98, 126, 234, 0.3) 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          />

          {/* Header Section */}
          <div
            style={{
              padding: "0px 24px 40px",
              textAlign: "center",
              position: "relative",
              //zIndex: 1
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
                Portfolio
              </Title>
              <Text
                style={{
                  fontSize: "1.2rem",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontFamily: "Raleway, sans-serif",
                  letterSpacing: "1px",
                }}
              >
                A glance of my work
              </Text>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div
            style={{
              padding: "40px 50px 80px",
              position: "relative",
              //zIndex: 1
            }}
          >
            <Row gutter={[32, 32]} justify="center">
              {portfolioData.map((project, index) => (
                <Col key={project.key} xs={24} sm={24} md={12} lg={8}>
                  <motion.div
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    variants={cardVariants}
                  >
                    <Card
                      bordered={false}
                      style={{
                        height: "100%",
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: 20,
                        overflow: "hidden",
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
                      }}
                      bodyStyle={{ padding: 0 }}
                      hoverable
                    >
                      {/* Image with gradient overlay */}
                      <div style={{ position: "relative", overflow: "hidden" }}>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Image
                            preview={false}
                            src={project.images[0]}
                            alt={project.title}
                            style={{
                              height: 240,
                              width: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </motion.div>
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "60%",
                            background: project.gradient,
                            opacity: 0.7,
                            mixBlendMode: "multiply",
                          }}
                        />
                        <Tag
                          style={{
                            position: "absolute",
                            top: 16,
                            right: 16,
                            background: "rgba(255, 255, 255, 0.95)",
                            border: "none",
                            borderRadius: 20,
                            padding: "4px 12px",
                            fontWeight: 600,
                          }}
                        >
                          {project.category}
                        </Tag>
                      </div>

                      {/* Content */}
                      <div style={{ padding: 16 }}>
                        <Title
                          level={4}
                          style={{
                            color: "#fff",
                            fontFamily: "Raleway, sans-serif",
                            marginBottom: 4,
                            fontSize: "1.4rem",
                            fontWeight: 700,
                          }}
                        >
                          {project.title}
                        </Title>
                        <Text
                          style={{
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: "0.9rem",
                            display: "block",
                            marginBottom: 16,
                          }}
                        >
                          {project.subtitle}
                        </Text>

                        {/* Tech Tags */}
                        <div style={{ marginBottom: 20 }}>
                          {project.technologies.slice(0, 3).map((tech, i) => (
                            <Tag
                              key={i}
                              style={{
                                background: "rgba(102, 126, 234, 0.2)",
                                border: "1px solid rgba(102, 126, 234, 0.3)",
                                color: "#a5b4fc",
                                borderRadius: 12,
                                margin: "4px 4px 4px 0",
                                padding: "2px 10px",
                                fontSize: "0.75rem",
                              }}
                            >
                              {tech}
                            </Tag>
                          ))}
                          {project.technologies.length > 3 && (
                            <Tag
                              style={{
                                background: "rgba(102, 126, 234, 0.2)",
                                border: "1px solid rgba(102, 126, 234, 0.3)",
                                color: "#a5b4fc",
                                borderRadius: 12,
                              }}
                            >
                              +{project.technologies.length - 3}
                            </Tag>
                          )}
                        </div>

                        <Button
                          type="primary"
                          icon={<EyeOutlined />}
                          onClick={() => viewModal(project)}
                          style={{
                            width: "100%",
                            height: 40,
                            borderRadius: 12,
                            background: project.gradient,
                            border: "none",
                            fontWeight: 600,
                            fontSize: "1rem",
                            boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3)",
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </motion.div>

      <DetailsModal
        content={content}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
}

export default Portfolio;
