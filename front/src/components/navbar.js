import React, { useContext, useEffect, useState } from "react";
import { useLocation, Link, Outlet } from "react-router-dom";
import { Layout, Menu, FloatButton, Button, Drawer, Typography } from "antd";
import FooterContent from "./footerContent";
import { UserContext } from "../App";
import {
  GithubOutlined,
  LinkedinFilled,
  MenuOutlined,
  XOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function Navbar() {
  const location = useLocation();
  const { isMobile } = useContext(UserContext);
  const [current, setCurrent] = useState(location.pathname);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Resume", path: "/resume" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
        <FloatButton.BackTop title="Back to top" />
      </FloatButton.Group>
      <Layout style={{ minHeight: "100vh" }}>
        <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
          <Header
            style={{
              height: "auto",
              width: "100%",
              background: scrolled
                ? "linear-gradient(180deg, #261e5c  10%, #3d339a05 100%)"
                : "#261e5c",
              padding: isMobile ? "12px 10px" : "6px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "none",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.03)",
              backdropFilter: "blur(1.2px)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {isMobile ? (
                <>
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <Title
                      level={3}
                      style={{
                        margin: 0,
                        fontSize: "1.8rem",
                        letterSpacing: "0.5px",
                        fontFamily: "Raleway",
                        fontWeight: "lighter",
                        textShadow: "0 10px 30px rgba(102, 126, 234, 0.53)",
                        background:
                          "linear-gradient(135deg, #c1c5d5ff 0%, #f1ebf6ff 50%, #a6b9dfff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          color: "rgba(255, 255, 255, 1)",
                        }}
                      >
                        ISAAC NJENGA
                      </Link>
                    </Title>
                  </div>
                </>
              ) : (
                <>
                  <div
                    style={{
                      width: "70%",
                    }}
                  >
                    <Title
                      level={2}
                      style={{
                        margin: 0,
                        fontSize: "2.3rem",
                        letterSpacing: "2px",
                        fontFamily: "Raleway",
                        fontWeight: "lighter",
                        textShadow: "0 10px 30px rgba(102, 126, 234, 0.53)",
                        background:
                          "linear-gradient(135deg, #c1c5d5ff 0%, #f1ebf6ff 50%, #a6b9dfff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      <Link
                        to="/"
                        style={{
                          textDecoration: "none",
                          color: "rgba(255, 255, 255, 1)",
                        }}
                      >
                        ISAAC NJENGA
                      </Link>
                    </Title>
                  </div>
                </>
              )}
            </div>
            {isMobile ? (
              <>
                <div
                  style={{
                    fontSize: "23px",
                    display: "flex",
                    gap: "10px",
                    color: "grey",
                  }}
                >
                  <LinkedinFilled title="LinkedIn" />
                  <GithubOutlined title="GitHub" />
                  <XOutlined title="X" />
                </div>{" "}
                <Button
                  type="text"
                  onClick={toggleDrawer}
                  icon={
                    <MenuOutlined
                      style={{ fontSize: "1.8rem", color: "#667eea" }}
                    />
                  }
                />
              </>
            ) : (
              <>
                {" "}
                <Menu
                  theme="light"
                  mode="horizontal"
                  selectedKeys={[current]}
                  onClick={handleClick}
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: "lighter",
                    background: "rgb(0,0,0,0)",
                    borderColor: "rgb(0,0,0,0)",
                    fontFamily: "Raleway",
                  }}
                >
                  {navItems.map((item) => (
                    <Menu.Item
                      key={item.path}
                      //   icon={<item.icon style={{ fontSize: "1.8rem" }} />}
                    >
                      <Link
                        to={item.path}
                        style={{
                          color: "rgba(255, 255, 255, 1)",
                          textDecoration: "none",
                        }}
                      >
                        {item.label}
                      </Link>
                    </Menu.Item>
                  ))}
                </Menu>
                <div
                  style={{
                    fontSize: "23px",
                    display: "flex",
                    gap: "10px",
                    color: "grey",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/isaacnjenga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "grey",
                    }}
                  >
                    <LinkedinFilled title="LinkedIn" />
                  </a>
                  <a
                    href="https://github.com/IsaacNjenga"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "grey",
                    }}
                  >
                    {" "}
                    <GithubOutlined title="GitHub" />
                  </a>{" "}
                  <a
                    href="https://x.com/IsaacNj95195172"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "grey",
                    }}
                  >
                    <XOutlined title="X" />
                  </a>{" "}
                </div>
              </>
            )}
          </Header>{" "}
          {/* Mobile Navigation */}
          <Drawer
            placement="right"
            width={280}
            onClose={toggleDrawer}
            open={drawerVisible}
          >
            <Menu
              mode="vertical"
              selectedKeys={[current]}
              onClick={handleClick}
              style={{
                background: "rgb(0,0,0,0)",
                borderColor: "rgb(0,0,0,0)",
                fontFamily: "Raleway",
                fontWeight: "bold",
              }}
            >
              {navItems.map((item) => (
                <Menu.Item key={item.path}>
                  <Link
                    to={item.path}
                    style={{ color: "#3c3b39", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </Drawer>
        </div>
        {/* Main Content */}
        <Content
          style={{
            padding: isMobile ? "0px 0px" : "0px 0px",
            minHeight: "calc(100vh - 64px - 70px)",
          }}
        >
          <Outlet />
        </Content>
        {/* Footer */}
        <Footer
          style={{
            padding: "0px 0px",
            margin: "0px 0px",
            background: "#eae9e7",
          }}
        >
          <FooterContent />
        </Footer>
      </Layout>
    </>
  );
}

export default Navbar;
