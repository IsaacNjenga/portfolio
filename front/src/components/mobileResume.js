import { Card, Divider, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const titleStyle = {
  fontFamily: "Raleway",
  textAlign: "center",
  color: "#fff",
};

function MobileResume({ cardStyle }) {
  return (
    <div>
      <div>
        {" "}
        <Title level={3} style={titleStyle}>
          {" "}
          Summary
        </Title>
        <Card variant={false} style={cardStyle} bodyStyle={{ padding: 16 }}>
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
              color: "#fff",
            }}
          >
            Isaac N. Njenga
          </Title>
          <Paragraph
            style={{
              fontFamily: "Roboto",
              color: "#fff",
              textAlign: "justify",
            }}
          >
            A thorough and resourceful software developer with over 5 years of
            progressive record and a strong foundation in applied computer
            technology, equipped with skills in data analysis and extensive
            market research. High proficiency in leveraging software tools to
            extract insights that drive operational efficiency, alongside a
            solid understanding of teamwork and project management.
            <ul style={{ fontFamily: "Roboto", color: "#fff", marginTop: 10 }}>
              <li style={{ fontFamily: "Roboto", color: "#fff" }}>
                <Text strong style={{ fontFamily: "Roboto", color: "#fff" }}>
                  Address:
                </Text>{" "}
                Nairobi, Kenya
              </li>
              <li style={{ fontFamily: "Roboto", color: "#fff" }}>
                <Text strong style={{ fontFamily: "Roboto", color: "#fff" }}>
                  Phone:
                </Text>{" "}
                +254 740 900-061
              </li>
              <li style={{ fontFamily: "Roboto", color: "#fff" }}>
                <Text strong style={{ fontFamily: "Roboto", color: "#fff" }}>
                  Email:
                </Text>{" "}
                <a
                  href="mailto:njengaisaac789@gmail.com"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  njengaisaac789@gmail.com
                </a>
              </li>
            </ul>
          </Paragraph>
        </Card>
      </div>

      <div>
        <Title level={3} style={titleStyle}>
          Education
        </Title>
        <Card variant={false} style={cardStyle} bodyStyle={{ padding: 16 }}>
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
              color: "#fff",
            }}
          >
            B.Sc in Applied Computer Technology
          </Title>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: 0 }}>
              <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
                <i>United States International University - Africa (USIU-A)</i>
              </Paragraph>
            </div>
            <div style={{ marginTop: 0 }}>
              <Text type="secondary" style={{ color: "#fff" }}>
                <i>2021 - 2025</i>
              </Text>
            </div>
          </div>

          <Paragraph
            style={{
              fontFamily: "Roboto",
              color: "#fff",
              textAlign: "justify",
            }}
          >
            Studied core computer science concepts, specializing in full-stack
            development, cloud computing, and cybersecurity. Worked on multiple
            projects that integrated web technologies with data-driven
            solutions.
          </Paragraph>
        </Card>
      </div>

      <div>
        <Title level={3} style={titleStyle}>
          Professional Experience
        </Title>
        <Card variant={false} style={cardStyle} bodyStyle={{ padding: 16 }}>
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
              color: "#fff",
            }}
          >
            Full Stack Web Developer
          </Title>
          <Text
            type="secondary"
            style={{ fontFamily: "Roboto", color: "#fff" }}
          >
            EasyDeal Furnitures | Oct 2024 - Jan 2025
          </Text>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Developed a custom-made web application system that tracks
            inventory and manages sales for a small business.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Designed and implemented a user-friendly interface using React.js
            to streamline the sales process and improve managerial experience.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Integrated real-time data synchronization between inventory and
            sales modules, reducing manual errors and optimizing stock levels.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Implemented secure authentication and role-based access control to
            protect sensitive business data and ensure compliance with privacy
            standards.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Collaborated closely with stakeholders to gather requirements,
            prioritize features, and conduct user acceptance testing, resulting
            in a highly tailored solution that met specific business needs.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Established automated backup and recovery processes to safeguard
            critical business information and minimize downtime.
          </Paragraph>
          <Divider />
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
              color: "#fff",
            }}
          >
            Software Intern
          </Title>
          <Text
            type="secondary"
            style={{ fontFamily: "Roboto", color: "#fff" }}
          >
            Opteamio LTD | Jan 2025 - March 2025
          </Text>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Collaborated with team members to gather requirements,
            troubleshoot issues, and implement effective solutions, ensuring
            alignment with project goals and deadlines.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Assisted in the development and maintenance of web applications,
            contributing to both front-end and back-end functionalities to
            enhance user experience and application performance.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Conducted software testing, debugging, and performance tuning to
            identify and resolve technical issues across multiple environments.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Authored and updated technical documentation, including API
            references, feature specs, and setup guides to support team
            knowledge sharing and onboarding.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto", color: "#fff" }}>
            ▪ Engaged in daily stand-ups and sprint planning meetings as part of
            the Agile/Scrum development process, gaining experience in iterative
            development and team collaboration.
          </Paragraph>
        </Card>
      </div>
    </div>
  );
}

export default MobileResume;
