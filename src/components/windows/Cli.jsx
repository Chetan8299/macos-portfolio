import React from "react";
import MacWindows from "./MacWindows";
import Terminal from "react-console-emulator";
import "./cli.scss";

const welcomeMessage = [
  "Welcome to my portfolio terminal!",
  "Explore my work — type 'help' for commands.",
  "",
  "Hello! You're in the portfolio CLI. Try: about, skills, projects, contact.",
  "",
];

const commands = {
  about: {
    description: "Learn more about me",
    usage: "about",
    fn: () =>
      [
        "Hi, I'm Chetan Singh.",
        "Based in Lucknow, Uttar Pradesh, India.",
        "Full-stack developer — React, Node.js, and building for the web.",
      ].join("\n"),
  },
  skills: {
    description: "List my technical skills",
    usage: "skills",
    fn: () =>
      [
        "Languages: C/C++, JavaScript, TypeScript, Python, Java",
        "Frontend: HTML, CSS, SCSS, React, Next.js, Tailwind, GSAP, Redux, Three.js, Framer Motion",
        "Backend: Node.js, Express, Web Sockets, RestAPI, RabbitMQ, Redis",
        "Database: MongoDB, MySQL, PostgreSQL",
        "Additional: AWS, Generative AI, Git, Figma, Docker",
      ].join("\n"),
  },
  projects: {
    description: "Show my projects",
    usage: "projects",
    fn: () =>
      [
        "• Stay Heaven — Multi-vendor hotel management (React, Node, MongoDB, GenAI, Razorpay)",
        "• Browse-Bazaar — E-commerce (React, Redux, Strapi, Stripe)",
        "• macos-portfolio — This site (React + Vite)",
      ].join("\n"),
  },
  contact: {
    description: "Get in touch",
    usage: "contact",
    fn: () =>
      [
        "Email: chetan738090@gmail.com",
        "Phone: (+91) 8299310028",
        "Location: Lucknow, Uttar Pradesh, India",
        "Feel free to reach out!",
      ].join("\n"),
  },
  whoami: {
    description: "Display current user",
    usage: "whoami",
    fn: () => "chetansingh",
  },
  experience: {
    description: "Show work experience",
    usage: "experience",
    fn: () =>
      [
        "SDE-1 | Persist Ventures — Jan 2024 - Aug 2025 (React, Node, MongoDB, GenAI, GCP)",
        "FullStack Intern | MP Police HQ — Dec 2024 - Feb 2025",
        "FullStack Intern | BSNL India — Oct 2024 - Dec 2024",
        "FullStack Intern | SimplySecure — Aug 2024 - Oct 2024",
      ].join("\n"),
  },
  education: {
    description: "Show education",
    usage: "education",
    fn: () =>
      [
        "Bachelor's in Computer Science — VIT Bhopal University (CGPA 7.78, 2022-2026)",
        "12th — City Montessori School, Lucknow (92.75%)",
        "10th — City Montessori School, Lucknow (94%)",
      ].join("\n"),
  },
  socials: {
    description: "List social links",
    usage: "socials",
    fn: () =>
      [
        "GitHub:   github.com/chetan8299",
        "LinkedIn: linkedin.com/in/chetansingh8299",
      ].join("\n"),
  },
};

const Cli = ({ windowName, setWindowState }) => {
  return (
    <MacWindows windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"chetansingh:~$"}
          promptLabelStyle={{ color: "#00ff00" }}
        />
      </div>
    </MacWindows>
  );
};

export default Cli;
