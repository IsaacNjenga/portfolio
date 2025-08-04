import { Card, Divider, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;
const titleStyle = { fontFamily: "Raleway", textAlign: "center" };

function MobileResume() {
  return (
    <div>
      <div>
        {" "}
        <Title level={3} style={titleStyle}>
          {" "}
          Summary
        </Title>
        <Card variant={false}>
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
            }}
          >
            Isaac N. Njenga
          </Title>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            A thorough and resourceful software developer with over 5 years of
            progressive record and a strong foundation in applied computer
            technology, equipped with skills in data analysis and extensive
            market research. High proficiency in leveraging software tools to
            extract insights that drive operational efficiency, alongside a
            solid understanding of teamwork and project management.
            <ul style={{ fontFamily: "Roboto" }}>
              <li>
                <Text strong>Address:</Text> Nairobi, Kenya
              </li>
              <li>
                <Text strong>Phone:</Text> +254 740 900-061
              </li>
              <li>
                <Text strong>Email:</Text>{" "}
                <a
                  href="mailto:njengaisaac789@gmail.com"
                  style={{ color: "black", textDecoration: "none" }}
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
        <Card variant={false}>
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
            }}
          >
            B.Sc in Applied Computer Technology
          </Title>
          <Text type="secondary">2021 - 2025</Text>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            <i>United States International University - Africa (USIU-A)</i>
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
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
        <Card variant={false}>
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
            }}
          >
            1. Full Stack Web Developer
          </Title>
          <Text type="secondary" style={{ fontFamily: "Roboto" }}>
            EasyDeal Furnitures | Oct 2024 - Jan 2025
          </Text>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Developed a custom-made web application system that tracks
            inventory and manages sales for a small business.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Designed and implemented a user-friendly interface using React.js
            to streamline the sales process and improve managerial experience.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Integrated real-time data synchronization between inventory and
            sales modules, reducing manual errors and optimizing stock levels.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Implemented secure authentication and role-based access control to
            protect sensitive business data and ensure compliance with privacy
            standards.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Collaborated closely with stakeholders to gather requirements,
            prioritize features, and conduct user acceptance testing, resulting
            in a highly tailored solution that met specific business needs.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Established automated backup and recovery processes to safeguard
            critical business information and minimize downtime.
          </Paragraph>
          <Divider />
          <Title
            level={4}
            style={{
              borderBottom: "2px solid #2a75d7",
              fontFamily: "Raleway",
            }}
          >
            2. Software Intern
          </Title>
          <Text type="secondary" style={{ fontFamily: "Roboto" }}>
            Opteamio LTD | Jan 2025 - March 2025
          </Text>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Collaborated with team members to gather requirements,
            troubleshoot issues, and implement effective solutions, ensuring
            alignment with project goals and deadlines.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Assisted in the development and maintenance of web applications,
            contributing to both front-end and back-end functionalities to
            enhance user experience and application performance.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Conducted software testing, debugging, and performance tuning to
            identify and resolve technical issues across multiple environments.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
            ▪ Authored and updated technical documentation, including API
            references, feature specs, and setup guides to support team
            knowledge sharing and onboarding.
          </Paragraph>
          <Paragraph style={{ fontFamily: "Roboto" }}>
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
