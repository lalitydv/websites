// import images

import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.png";
import next from "./assets/images/Skills/nextjs.png";
import Css from "./assets/images/Skills/css.png";
import JS from "./assets/images/Skills/JS.png";
import reactjs from "./assets/images/Skills/react.png";
import Redux from "./assets/images/Skills/redux.png";
import nodejs from "./assets/images/Skills/node.png";
import Mongo from "./assets/images/Skills/mongo.png";
import MySql from "./assets/images/Skills/MySql.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsGithub } from "react-icons/bs";

import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";

import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "LALIT ",
    LastName: "YADAV",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "8+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "Hyper Text Markup Language",
        logo: html,
        disc1: "HTML stands for Hyper Text Markup Language",
        disc2: "HTML is the standard markup language for creating Web pages",
        disc3: "HTML consists of a series of elements",
        disc4: "HTML elements tell the browser how to display the content",
      },
      {
        name: "CSS",
        para: "Cascading Style Sheets",
        logo: Css,
        disc1: "CSS stands for Cascading Style Sheets",
        disc2:
          "CSS describes how HTML elements are to be displayed on screen, paper, or in other media",
        disc3:
          "CSS saves a lot of work. It can control the layout of multiple web pages all at once",
        disc4: "External stylesheets are stored in CSS files",
      },
      {
        name: "JavaScript",
        para: "JavaScript",
        logo: JS,
        disc1: "JavaScript is the world's most popular programming language",
        disc2: "JavaScript is the programming language of the Web",
        disc3: "JavaScript is easy to learn",
        disc4: "javascript single threaded",
      },
      {
        name: "React js",
        para: "building user interfaces",
        logo: reactjs,
        disc1: "React is a JavaScript library for building user interfaces.",
        disc2: "React is used to build single-page applications.",
        disc3: "React allows us to create reusable UI components.",
        disc4: "Facebook Software Engineer, Jordan Walke, created it.",
      },
      {
        name: "Redux",
        para: "open-source JavaScript library",
        logo: Redux,
        disc1: "Redux is an open-source JavaScript library",
        disc2: "subscribes to the Redux store.",
        disc3: "check to see if the data needed by the component have changed.",
        disc4: "re-render the component",
      },

      {
        name: "Next js",
        para: "build a full-stack application",
        logo: next,
        disc1: "NextJS is a framework to build a full-stack application",
        disc2: "SEO",
        disc3: "Page Routing",
        disc4: "Server-side rendering and Single Page Application developmen",
      },
      {
        name: "Node js",
        para: "open source server environment",
        logo: nodejs,
        disc1: "Node.js is an open source server environment",
        disc2: "Node.js allows you to run JavaScript on the server",
        disc3:
          "Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)",
        disc4: "Node.js can generate dynamic page content",
      },
      {
        name: "Mongo DB",
        para: "Mongo DB Databse",
        logo: Mongo,
        disc1:
          "A dynamic change in the nature of data - i.e., nowadays data are in structured, semi-structured, nonstructured as well as polymorphic in type.",
        disc2:
          "The variety of applications and the type of data feed into them for analysis has now become more diverse and distributed and is approaching cloud-oriented",
        disc3:
          "Also, modern applications and services are serving tens of thousands of users in diverse geo-locations, ",
        disc4:
          "having diverse time zones. So data integrity needs to be there at all the time",
      },
      {
        name: "MySql",
        para: "relational database management system",
        logo: MySql,
        disc1: "MySQL is a relational database management system",
        disc2: "MySQL is open-source",
        disc3: "MySQL is free",
        disc4: "MySQL is ideal for both small and large applications",
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Front End  Developer",
        para: "A Front-End Developer is responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages",
        logo: services_logo1,
      },
      {
        title: "Back End  Developer ",
        para: "Participate in the entire application lifecycle, focusing on coding and debugging Write clean code to develop functional web applications Troubleshoot and debug applications Perform UI tests to optimize performance Manage cutting-edge technologies to improve legacy applications",
        logo: services_logo1,
      },
      {
        title: "Adobe XD DESIGNING",
        para: " I am in Beginner Adobe XD is designed and built with mobile and web experiences in mind, but the uses for it go much further. Globally, design teams are leveraging the powerful features in Adobe XD for their full experience design process and much more",
        logo: services_logo2,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Company Website",
        image: project1,
      },
      {
        title: "Admin Dashboard",
        image: project2,
      },
      {
        title: "mrs harvis organique Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "lalitydv51@gmail.com",
        icon: GrMail,
        link: "mailto:lalitydv51@gmail.com",
      },
      {
        text: "+91 9669469547",
        icon: AiOutlineWhatsApp,
        link: "https://wa.me/9669469547",
      },
      {
        text: "lalit-yadav",
        icon: GrLinkedinOption,
        link: "https://www.linkedin.com/in/lalit-yadav-8010741a5/",
      },
      {
        text: "lalitydv",
        icon: BsGithub,
        link: "https://github.com/lalitydv",
      },
      {
        text: "Lalit yadav",
        icon: BsInstagram,
        link: "https://www.instagram.com/0_y_a_d_a_v_0/",
      },

      {
        text: "Lalit yadav",
        icon: FaFacebookSquare,
        link: "https://www.facebook.com/profile.php?id=100010771231791",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
