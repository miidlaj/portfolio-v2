import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Java</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">Tailwind</span>
            <span className="chip">React.js</span>
            <span className="chip">Next.js</span>
            <span className="chip">Shadcn/ui</span>
            <span className="chip">Redux</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Express</span>
            <span className="chip">Postgres</span>
            <span className="chip">MongoDB</span>
            <span className="chip">GitHub</span>
            <span className="chip">Supabase</span>
            <span className="chip">MySQK</span>
            <span className="chip">Redis</span>
            <span className="chip">Microservices</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Firebase</span>
            <span className="chip">NestJS</span>
            <span className="chip">Gatsby</span>
            <span className="chip">SHadcn/ui</span>
            <span className="chip">MedusaJS</span>
            <span className="chip">Tailwind</span>
            <span className="chip">Figma</span>
            <span className="chip">GraphQL</span>
            <span className="chip">Firebase</span>
            <span className="chip">Supabase</span>
            <span className="chip">Vercel</span>
            <span className="chip">Laravel</span>
            <span className="chip">Next.js</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
