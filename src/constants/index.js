import { Ebslon, logo3 } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  x,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Ebslon Infotech",
    icon: Ebslon,
    iconBg: "#accbe1",
    date: "May 2024 - Nov 2024",
    points: [
      " Developed both frontend and backend for a comprehensive admin project enabling users to modify frontend elements directly from an admin panel.",
      "Implemented NextAuth for enhanced security, ensuring secure user authentication and authorization.",
      "Designed and developed multiple features for Excel download, import, and bulk upload, improving data handling efficiency.",
      " Created and managed CRUD functionalities for various features, including dynamic graphs and user-specific filters, enhancing user experience and data visualization.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "J K Webcom",
    icon: logo3,
    iconBg: "#fbc3bc",
    date: "Feb 2022 - Dec 2022",
    points: [
      "Utilized React.js to develop dynamic and responsive user interfaces, enhancing overall user experience.",
      "Demonstrated proficiency in DOM manipulation techniques to efficiently manage and update webpage content.",
      " Gained hands-on experience with RESTful API integration, facilitating seamless communication between client and server-side components.",
      " Successfully contributed to debugging efforts, identifying and resolving issues to ensure smooth functioning of web applications.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Vivekkumar0412",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/vivek-kumar59/",
  },
  {
    name: "X",
    iconUrl: x,
    link: "https://x.com/vivek_sing49959",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "3-D Website ",
    description:
      "Developed portfolio website that showcases a sleek and responsive design with modern UI/UX elements. It features smooth animations, interactive project showcases, and a well-structured tech stack overview, making it visually appealing and easy to navigate.",
    link: "https://vivek-kumar-portfolio-phi.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Swoosh UI",
    description:
      "Developed a responsive Nike-themed landing page using React.js and Tailwind CSS, ensuring a modern and user-friendly experience. Implemented smooth animations and optimized performance for a seamless UI/UX.",
    link: "https://nike-frontend-green.vercel.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "SecureVote API",
    description:
      "Developed a secure backend for a voting application with authentication, authorization, and role-based access control. Implemented admin privileges for candidate management and enforced token-based voting restrictions to ensure one vote per user.",
    link: "https://github.com/Vivekkumar0412/Voting_Backend",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "NeoPay",
    description:
      "Developed a Paytm clone with secure transaction handling, ensuring seamless money transfers. Implemented full authentication, authorization, and tested all routes for reliability and security.",
    link: "https://github.com/Vivekkumar0412/Paytm_Backend",
  },

  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "HashKey Generator",
    description:
      "Developed a random password generator with customizable options for length, numbers, and special characters. Implemented a copy-to-clipboard feature for user convenience and seamless usability.",
    link: "https://random-password-generator-kohl.vercel.app/",
  }
];
