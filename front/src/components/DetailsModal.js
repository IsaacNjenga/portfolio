import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, Modal, Tag, Carousel } from "antd";
import { RocketOutlined, CloseOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

function DetailsModal({ content, openModal, setOpenModal }) {
  return (
    <AnimatePresence>
      {openModal && content && (
        <Modal
          open={openModal}
          onCancel={() => setOpenModal(false)}
          footer={null}
          width={800}
          style={{ top: "50px" }}
          closeIcon={
            <CloseOutlined style={{ color: "#fff", fontSize: "1.2rem" }} />
          }
          styles={{
            mask: { backdropFilter: "blur(8px)" },
            content: {
              background: "linear-gradient(135deg, #1e1e2e 0%, #2d2d44 100%)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: 24,
              overflow: "hidden",
              padding: 0,
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div style={{ position: "relative" }}>
              <Carousel autoplay autoplaySpeed={4000}>
                {content.images.map((img, i) => (
                  <div key={i}>
                    <div
                      style={{
                        height: 350,
                        background: `url(${img}) center/cover`,
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "50%",
                          background:
                            "linear-gradient(to top, rgba(30, 30, 46, 0.95), transparent)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 32,
                  zIndex: 1,
                }}
              >
                <Title
                  level={2}
                  style={{
                    color: "#fff",
                    marginBottom: 4,
                    fontFamily: "Raleway, sans-serif",
                    fontWeight: 800,
                  }}
                >
                  {content.title}
                </Title>
                <Text
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "1.1rem",
                  }}
                >
                  {content.subtitle}
                </Text>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: "32px 32px 40px" }}>
              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  marginBottom: 32,
                }}
              >
                {content.description}
              </Paragraph>

              {/* Technologies */}
              <div style={{ marginBottom: 32 }}>
                <Title
                  level={5}
                  style={{
                    color: "#fff",
                    marginBottom: 16,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <RocketOutlined /> Technologies
                </Title>
                <div>
                  {content.technologies.map((tech, i) => (
                    <Tag
                      key={i}
                      style={{
                        background: content.gradient,
                        border: "none",
                        color: "#fff",
                        borderRadius: 16,
                        padding: "6px 16px",
                        margin: "4px 8px 4px 0",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                      }}
                    >
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <Title level={5} style={{ color: "#fff", marginBottom: 16 }}>
                  Key Features
                </Title>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 12 }}
                >
                  {content.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      style={{
                        background: "rgba(102, 126, 234, 0.1)",
                        border: "1px solid rgba(102, 126, 234, 0.2)",
                        borderRadius: 12,
                        padding: "12px 16px",
                        color: "rgba(255, 255, 255, 0.9)",
                        fontSize: "0.95rem",
                      }}
                    >
                      • {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default DetailsModal;
