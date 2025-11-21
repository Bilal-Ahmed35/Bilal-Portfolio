import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
  hydrafoxLogo,
  rentacar,
  collabTodo,
  nbx,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Hydrafox Designs",
    icon: hydrafoxLogo, // Hydrafox logo
    iconBg: "#0188E3",
    date: "Jan 2025 - Present",
    points: [
      "Delivering full-stack marketing and portfolio websites for Hydrafox Designs using the MERN stack.",
      "Building reusable React.js and Tailwind CSS components connected to Node.js and Express.js APIs.",
      "Implementing secure forms, authentication, and smooth animations to create fast and modern user experiences.",
      "Translating Figma and Adobe XD designs into pixel-perfect, responsive interfaces for client projects.",
    ],
  },
  {
    title: "SEO & Full Stack Developer",
    company_name: "Client Projects",
    icon: backend,
    iconBg: "#ffff",
    date: "Aug 2025 - Present",
    points: [
      "Optimising websites for search engines with clean semantic HTML, structured content, and performance tuning.",
      "Implementing technical SEO best practices in React and Node.js applications, including meta tags and sitemap setups.",
      "Integrating analytics tools to track traffic, user behaviour, and conversion funnels for client sites.",
      "Combining SEO strategy with full-stack development to ship high-performing, discoverable web experiences.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Rent a Car",
    description:
      "A modern car rental web app where users can explore cars, view details, and submit booking requests through a clean and responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: rentacar,
    source_code_link: "https://github.com/Bilal-Ahmed35/Rent-A-Car-FrontEnd",
    live_website_link: "https://rents-a-cars.vercel.app/",
  },
  {
    name: "Collab Todo",
    description:
      "A collaborative todo web app where multiple users can manage tasks together in real time with a clean React and Tailwind UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: collabTodo,
    source_code_link: "https://github.com/Bilal-Ahmed35/Collaborative-frontend",
    live_website_link: "https://collaborative-frontend-ten.vercel.app/",
  },
  {
    name: "NBX Real Estate",
    description:
      "A real estate investment website for NBX Capitals where users can explore properties, view key details, and learn about investment opportunities in a modern landing page experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: nbx,
    // github link ⬇️
    source_code_link: "https://github.com/Bilal-Ahmed35/NBX-Capital-Investment",
    // project link ⬇️
    live_website_link: "https://nbx-capitals-investments.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
