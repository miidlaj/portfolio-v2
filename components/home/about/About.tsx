import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Howdy! I&apos;m Muhammed Midlaj, and I&apos;m a Java Full Stack
              Developer.
              <br />
              <br />I have experience working in both frontend and backend
              application. I&apos;m passionate about developing and mainitaining
              scalable web applications provide a great user experience.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              My skills include Java, Spring Boot, JavaScript, TypeScript, and
              various JavaScript frameworks like React.js, Next.js, Express.js
              etc. I&apos;ve also worked with multiple databases like MySQL,
              PostgreSQL, Redis, MongoDB allowing me to build applications more
              flexible.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Other than the professional experience I have been in this field
              for a while since this is my passion. I have worked alot of
              project as a freelancer.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to
              learn and grow as a developer. If you&apos;re interested in
              working together or have any questions, please don&apos;t hesitate
              to get in touch! 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
