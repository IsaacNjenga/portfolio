import easy1 from "../images/easyManager/em1.png";
import easy2 from "../images/easyManager/em2.png";
import easy3 from "../images/easyManager/em3.png";
import easy4 from "../images/easyManager/em4.png";

import ukf1 from "../images/ukfoundation/ukf1.png";
import ukf2 from "../images/ukfoundation/ukf2.png";
import ukf3 from "../images/ukfoundation/ukf3.png";
import ukf4 from "../images/ukfoundation/ukf4.png";
import ukf5 from "../images/ukfoundation/ukf5.png";

import tkf1 from "../images/tkfoundation/tkf1.png";
import tkf2 from "../images/tkfoundation/tkf2.png";
import tkf3 from "../images/tkfoundation/tkf3.png";

import endo1 from "../images/endocare/endocare1.png";
import endo2 from "../images/endocare/endocare2.png";
import endo3 from "../images/endocare/endocare3.png";
import endo4 from "../images/endocare/endocare4.png";

import sekani1 from "../images/sekani/sekani.png";
import sekani2 from "../images/sekani/sekani2.png";
import sekani3 from "../images/sekani/sekani3.png";

export const portfolioData = [
  {
    key: "easyManager",
    title: "Easy Manager System",
    subtitle: "Inventory & Expense Tracking",
    description:
      "A comprehensive management system designed to streamline business operations, enhance productivity, and facilitate efficient resource management.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Ant Design"],
    features: [
      "User Authentication: Secure login and registration system.",
      "Dashboard: Overview of key metrics and performance indicators.",
      "Inventory Management: Track and manage stock levels, orders, and suppliers.",
      "Employee Management: Manage employee records, roles, and permissions.",
      "Reporting: Generate detailed reports on sales, inventory, and employee performance.",
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
      //"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
      easy1,
      easy2,
      easy3,
      easy4,
    ],
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    category: "Web App",
  },

  {
    key: "ukf",
    title: "The Uplifting Kindness Foundation",
    subtitle: "Charity & Donation Platform",
    description:
      "A dynamic website for a non-profit organization dedicated to uplifting communities through kindness, support, and charitable initiatives.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Ant Design"],
    features: [
      "Donation Management: Secure payment gateway integration for donations.",
      "Volunteer Coordination: Tools for managing volunteer sign-ups and schedules.",
      "Event Management: Create and promote fundraising events.",
      "Multimedia Content: Access to exclusive videos, images and articles.",
      "Responsive Design: Optimized for both desktop and mobile devices.",
    ],
    images: [
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900",
      ukf1,
      ukf2,
      ukf3,
      ukf4,
      ukf5,
    ],
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    category: "Website",
  },
  {
    key: "tkf",
    title: "Toto Kalezi Foundation",
    subtitle: "Charity & Donation Platform",
    description:
      "A dedicated platform for the Toto Kalezi Foundation, focusing on empowering street children and vulnerable communities through donations and support.",
    technologies: ["React", "Ant Design", "Tailwind CSS"],
    features: [
      "Donation Management: Secure payment gateway integration for donations.",
      "Volunteer Coordination: Tools for managing volunteer sign-ups and schedules.",
      "Event Management: Create and promote fundraising events.",
      "Multimedia Content: Access to exclusive videos, images and articles.",
      "Responsive Design: Optimized for both desktop and mobile devices.",
    ],
    images: [tkf1, tkf2, tkf3],
    gradient: "linear-gradient(135deg, #f5576c 0%,  #f093fb 100%)",
    category: "Website",
  },
  {
    key: "sre",
    title: "Sekani Real Estate",
    subtitle: "Real Estate Listings & Property Management",
    description:
      "A user-friendly website that simplifies the process of managing real estate listings, property details, and client interactions.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    features: [
      "Property Listings: View, like, and schedule property listings with ease.",
      "Client Interaction: Viewing requests and inquiries management.",
      "Image Gallery: Showcases property images.",
      "Search & Filter: Advanced search and filtering options for properties.",
      "Responsive Design: Optimized for both desktop and mobile devices.",
    ],
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=900",
      sekani1,
      sekani2,
      sekani3,
    ],
    gradient: "linear-gradient(135deg, #57f5f0ff 0%,  #44a5e6ff 100%)",
    category: "Website",
  },
  {
    key: "endo",
    title: "Endocare",
    subtitle: "Medical Appointment & Health Records App",
    description:
      "A user-friendly mobile application that simplifies the process of managing medical appointments, accessing health records, and communicating with healthcare providers. Utilizes AI for early detection of diabetic and endocrine-related illnesses through medical image analysis.",
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    features: [
      "Appointment Scheduling: Book, reschedule, or cancel medical appointments easily.",
      "Health Records Access: View and manage personal health records securely.",
      "Medication Reminders: Set up reminders for medications and prescriptions.",
    ],
    images: [endo1, endo2, endo3, endo4],
    gradient: "linear-gradient(135deg, #57f5f0ff 0%,  #44a5e6ff 100%)",
    category: "Web App",
  },
];

