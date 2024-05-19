import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Newtok Technologies",
    position: "Full Stack Developer",
    time: "Feb 2023 - Apr 2024",
    location: "Malappuram, Kerala",
    description:
      "Create functional, high-level, dynamic and reusable components based on mock-up given using Next JS. Coordinated on team for QA, bug fixes, features and code refactoring.",
    tech: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "SQL",
      "NodeJS",
      "ExpressJS",
    ],
  },

  {
    title: "Mavani Solution",
    position: "Java Developer",
    time: "Oct 2023 - Nov 2023",
    location: "WFH",
    description:
      "Create functional, high-level, dynamic and reusable components based on mock-up given using Next JS. Coordinated on team for QA, bug fixes, features and code refactoring.",
    tech: ["Java", "Spring", "LDAP", "SQL", "Lucid chart"],
  },

  {
    title: "Brototype (Packapeer Academy Private Limited)",
    position: "Full Stack Java Development",
    time: "Aug 2022 - Feb 2023",
    location: "Kozhikode, Kerala",
    description:
      "I help build and scale core javascript functions and created test units. Also created reusable components for the front end and Azure API integrations.",
    tech: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind",
      "MUI",
      "MERN",
      "Nginx",
      "AWS",
      "EC2",
      "Route53",
      "Figma",
      "Github",
      "CI/CD",
      "UI/UX",
    ],
  },
];
