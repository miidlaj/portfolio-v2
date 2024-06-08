import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { StandardButton } from "@/components/buttons/StandardButton";
import React from "react";

export const Projects = () => {
  const [loadMore, setLoadMore] = React.useState(false);

  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.slice(0, 6).map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>

      {loadMore && (
        <div className={styles.projects}>
          {projects.slice(6, projects.length).map((project) => {
            return <Project key={project.title} {...project} />;
          })}
        </div>
      )}

      {loadMore ? (
        <div className={styles.showmore}>
          <StandardButton
            onClick={() => {
              setLoadMore(false);
              document.getElementById("projects")?.scrollIntoView();
            }}
          >
            Collapse
          </StandardButton>
        </div>
      ) : (
        <div className={styles.showmore}>
          <StandardButton
            onClick={() => {
              setLoadMore(true);
            }}
          >
            Load More
          </StandardButton>
        </div>
      )}
    </section>
  );
};

const projects = [
  {
    title: "Ecommerce Application",
    imgSrc: "/project-imgs/ecommerce-app.png",
    code: "https://github.com/miidlaj/commercefox",
    projectLink: "#",
    tech: ["Spring Boot", "Thymeleaf", "MySQL", "Bootstrap", "jQuery"],
    description:
      "Developed and deployed an e-commerce application from scratch.",
    modalContent: (
      <>
        <p>
          Developed and deployed an e-commerce application from scratch using
          Spring Boot, Thymeleaf, MySQL, Bootstrap, and jQuery.
        </p>
        <p>
          The system incorporates an Admin panel with five roles (admin,
          assistant, shipper, editor, salesperson) for comprehensive management
          of products, cash-on-delivery, shipping, inventory, order processing,
          and customer information.
        </p>
        <p>
          A PayPal payment gateway facilitates secure transactions, while images
          are stored in an S3 Bucket for cloud support. OAuth2 Authorization is
          implemented for social logins with Google and Facebook, enhancing user
          authentication.
        </p>
      </>
    ),
  },
  {
    title: "Microservice Project",
    imgSrc: "/project-imgs/microservice-project.png",
    code: "#",
    projectLink: "#",
    tech: ["React", "Spring Boot", "Kafka", "Razorpay"],
    description:
      "Developed a comprehensive Resort Management and Booking system.",
    modalContent: (
      <>
        <p>
          Developed a comprehensive Resort Management and Booking system using
          React for the frontend and Spring Boot for the backend.
        </p>
        <p>
          The system utilizes a Microservices architecture, employing different
          databases for various microservices. Asynchronous email services are
          managed through Kafka, and a Razorpay payment gateway is integrated.
        </p>
        <p>
          OAuth2 Authorization facilitates social logins with Google, Facebook,
          and GitHub. The frontend is organized with a multi-module approach,
          catering to admin and user functionalities.
        </p>
      </>
    ),
  },
  {
    title: "Library API",
    imgSrc: "/project-imgs/library-api.png",
    code: "https://github.com/miidlaj/library-api",
    projectLink: "#",
    tech: ["Spring Boot"],
    description:
      "Spring Boot application providing RESTful endpoints to manage a book library.",
    modalContent: (
      <>
        <p>
          Spring Boot application that provides RESTful endpoints to manage a
          book library.
        </p>
        <p>
          The application supports CRUD operations for books, authors, and book
          rentals.
        </p>
      </>
    ),
  },
  {
    title: "Accounting Application",
    imgSrc: "/project-imgs/accounting-app.png",
    code: "https://github.com/miidlaj/jamshad-billing",
    projectLink: "#",
    tech: ["React", "Spring Boot"],
    description: "Contributed to a comprehensive Accounting web application.",
    modalContent: (
      <>
        <p>
          Contributed to a comprehensive Accounting web application, focusing on
          the front-end side.
        </p>
      </>
    ),
  },
  {
    title: "OLX Clone",
    imgSrc: "/project-imgs/olx-clone.png",
    code: "#",
    projectLink: "https://olx-clone-6m2d.onrender.com",
    tech: ["React", "Firebase"],
    description: "Developed an OLX clone using React and Firebase.",
    modalContent: (
      <>
        <p>Developed an OLX clone using ReactJS and Firebase.</p>
      </>
    ),
  },
  {
    title: "CMS Website",
    imgSrc: "/project-imgs/cms-website.png",
    code: "#",
    projectLink: "#",
    tech: ["Nest JS", "React", "MongoDB", "NodeJS"],
    description:
      "Created a CMS Website using Nest JS, React JS, MongoDB, and Node JS.",
    modalContent: (
      <>
        <p>
          Created a CMS Website using Nest JS, React JS, MongoDB, and Node JS.
        </p>
      </>
    ),
  },
  {
    title: "To-Do Application",
    imgSrc: "/project-imgs/todo-app.png",
    code: "#",
    projectLink: "#",
    tech: ["ExpressJS", "NodeJS", "React", "MongoDB"],
    description:
      "Developed a To-Do Application using ExpressJS, NodeJS, ReactJS, and MongoDB.",
    modalContent: (
      <>
        <p>
          Developed a To-Do Application using ExpressJS, NodeJS, ReactJS, and
          MongoDB.
        </p>
      </>
    ),
  },
  {
    title: "Creatures Academy",
    imgSrc: "/project-imgs/creatures-academy.png",
    code: "#",
    projectLink: "https://creatures-academy.vercel.app",
    tech: ["React"],
    description: "Worked on Creatures Academy using React.",
    modalContent: (
      <>
        <p>Worked on Creatures Academy using React.</p>
      </>
    ),
  },
  {
    title: "X Protect",
    imgSrc: "/project-imgs/xprotect.png",
    code: "#",
    projectLink: "https://xprotect.vercel.app",
    tech: ["NextJS", "Server Action"],
    description: "Developed X Protect using NextJS and Server Action.",
    modalContent: (
      <>
        <p>Developed X Protect using NextJS and Server Action.</p>
      </>
    ),
  },
  {
    title: "Newtok Tech",
    imgSrc: "/project-imgs/newtok-tech.png",
    code: "#",
    projectLink: "https://www.newtoktech.com",
    tech: ["NextJS", "RestAPI"],
    description: "Developed Newtok Tech using NextJS and RestAPI.",
    modalContent: (
      <>
        <p>Developed Newtok Tech using NextJS and RestAPI.</p>
      </>
    ),
  },
  {
    title: "Mavani Solution",
    imgSrc: "/project-imgs/mavani-solution.png",
    code: "#",
    projectLink: "https://mavanisolution.com",
    tech: ["NextJS", "RestAPI"],
    description: "Developed Mavani Solution using NextJS and RestAPI.",
    modalContent: (
      <>
        <p>Developed Mavani Solution using NextJS and RestAPI.</p>
      </>
    ),
  },
  {
    title: "Tradewave",
    imgSrc: "/project-imgs/tradewave.png",
    code: "#",
    projectLink: "https://tradewave-vendor-ui.vercel.app",
    tech: ["NextJS", "Zustand", "EdgeStore"],
    description: "Worked on Tradewave using NextJS, Zustand, and EdgeStore.",
    modalContent: (
      <>
        <p>Worked on Tradewave using NextJS, Zustand, and EdgeStore.</p>
      </>
    ),
  },
  {
    title: "Unique Stitches",
    imgSrc: "/project-imgs/unique-stitches.png",
    code: "#",
    projectLink: "https://unique-stiches.vercel.app",
    tech: ["NextJS"],
    description: "Developed Unique Stitches using NextJS.",
    modalContent: (
      <>
        <p>Developed Unique Stitches using NextJS.</p>
      </>
    ),
  },
  {
    title: "ACE Assured",
    imgSrc: "/project-imgs/ace-assured.png",
    code: "#",
    projectLink: "https://aaccee.vercel.app",
    tech: ["NextJS"],
    description: "Developed ACE Assured using NextJS.",
    modalContent: (
      <>
        <p>Developed ACE Assured using NextJS.</p>
      </>
    ),
  },

  {
    title: "MyBrandFirst",
    imgSrc: "/project-imgs/mybrandfirst.png",
    code: "#",
    projectLink: "https://www.mybrandfirst.com",
    tech: ["NextJS", "RestAPI"],
    description: "Developed MyBrandFirst using NextJS and RestAPI.",
    modalContent: (
      <>
        <p>Developed MyBrandFirst using NextJS and RestAPI.</p>
      </>
    ),
  },
];
