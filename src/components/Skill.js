import React from "react";
import {
  CSSIcon,
  DataAnaIcon,
  GitIcon,
  HTMLIcon,
  JavaScriptIcon,
  NextJSIcon,
  PythonIcon,
  ReactIcon,
  SQLIcon,
  XDIcon,
  TypeScriptIcon,
  TailwindIcon,
  NodeIcon,
  AWSIcon,
  MongoIcon,
  ReduxIcon,
  GraphQLIcon,
  DockerIcon,
  FramerMotionIcon,
} from "./Icons";
import { motion } from "framer-motion";

const skills = [
  { name: "Python", Icon: PythonIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextJSIcon },
  { name: "Node.js", Icon: NodeIcon },
  { name: "Tailwind", Icon: TailwindIcon },
  { name: "CSS", Icon: CSSIcon },
  { name: "HTML", Icon: HTMLIcon },
  { name: "SQL", Icon: SQLIcon },
  { name: "MongoDB", Icon: MongoIcon },
  { name: "Redux", Icon: ReduxIcon },
  { name: "GraphQL", Icon: GraphQLIcon },
  { name: "AWS", Icon: AWSIcon },
  { name: "Docker", Icon: DockerIcon },
  { name: "Framer Motion", Icon: FramerMotionIcon },
  { name: "Git", Icon: GitIcon },
  { name: "Data Analytics", Icon: DataAnaIcon },
  { name: "UI/UX (XD)", Icon: XDIcon },
];

const Skill = () => {
  return (
    <section className="mt-32 md:mt-24">
      <h2 className="font-bold text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-center w-full mb-14 md:mb-10 text-dark dark:text-light">
        Skills
      </h2>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
        }}
        className="grid gap-6 sm:gap-5 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 justify-items-center"
      >
        {skills.map(({ name, Icon }, i) => (
          <motion.li
            key={name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6, scale: 1.04 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative rounded-xl p-3 bg-white/60 dark:bg-dark/60 backdrop-blur shadow-sm ring-1 ring-black/10 dark:ring-light/10 w-20 h-20 sm:w-16 sm:h-16 flex items-center justify-center">
              <Icon className="w-12 h-12 sm:w-10 sm:h-10" />
              <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition" />
            </div>
            <p className="text-xs font-medium text-dark/70 dark:text-light/70 text-center line-clamp-2">
              {name}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skill;
