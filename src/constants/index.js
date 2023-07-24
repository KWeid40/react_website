import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  opennetworks,
  website,
  basic_apps,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Junior Developer",
    icon: mobile,
  },
  {
    title: "Backend Junior Developer",
    icon: backend,
  },
  {
    title: "Enthusiastic Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Account Manager",
    company_name: "Opennetworks",
    icon: opennetworks,
    iconBg: "#383E56",
    date: "March 2020 - Now",
    points: [
      "Developing and maintaining scripts and other related technologies.",
      "Collaborating with cross-functional teams including.",
      "Providing clients with Support related matters.",
      "Maintaining Support systems.",
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
    name: "Portfolio Website",
    description:
      "My first portfolio website with a minimalist design created as a learning opertunity",
    tags: [
      {
        name: "nodeJS",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "Rest API",
        color: "pink-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/KWeid40/Node_Website",
  },
  {
    name: "Basic Applications",
    description:
      "The Basic_Apps repository contains applications used to explore and learn new technologies in my endevours to learn",
    tags: [
      {
        name: "Canvas",
        color: "blue-text-gradient",
      },
      {
        name: "Rest API",
        color: "green-text-gradient",
      },
      {
        name: "HTML, CSS",
        color: "pink-text-gradient",
      },
    ],
    image: basic_apps,
    source_code_link: "https://github.com/KWeid40/Basic_Apps/tree/main",
  },
];

export { services, technologies, experiences, testimonials, projects };
