import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

// Dynamic experience data extracted from your resume
const experienceData = [
  {
    position: "Software Developer",
    company: "RV Connex Co., Ltd. [Cynclair]",
    time: "JUN 2024 - PRESENT",
    companyLink: "https://www.cynclair.com/",
    address: "Thailand",
    description: [
      "Developed scalable responsive web applications using Next.js, React, and TypeScript.",
      "Integrated GraphQL APIs for efficient data fetching, caching, and state management using React Query.",
      "Improved frontend performance and responsiveness across devices following responsive design principles.",
      "Applied modern JavaScript/TypeScript development best practices and UI/UX improvements.",
      "Collaborated in Agile teams, delivering features with high quality and on schedule.",
    ],
  },
  {
    position: "Teaching Assistant",
    company:
      "Sirindhorn International Institute of Technology (SIIT), Thammasat University",
    time: "AUG 2023",
    companyLink: "https://www.siit.tu.ac.th/",
    address: "Pathum Thani, Thailand",
    description: [
      "Collaborated closely with instructors to facilitate dynamic database programming labs.",
      "Guided students through database management systems, SQL, and C#/.NET programming.",
      "Provided personalized assistance during practical sessions ensuring strong grasp of concepts.",
      "Cultivated productive learning environment through interactive discussions and individualized support.",
    ],
  },
  {
    position: "Software Program Trainee",
    company: "Mercantile Office System Pvt. Ltd.",
    time: "JAN 2022 - JUL 2022",
    companyLink: "https://www.mos.com.np/",
    address: "Kathmandu, Nepal",
    description: [
      "Implemented CI/CD pipelines automating software integration, testing, and deployment, reducing release cycle time by 20%.",
      "Managed secure data storage, backup, and recovery aligned with Agile methodology.",
      "Carried out thorough testing and debugging to meet client requirements.",
      "Facilitated effective communication among clients and development teams to ensure project success.",
    ],
  },
  {
    position: "Microsoft Power Platform Trainee",
    company: "Leapfrog Technology Inc.",
    time: "SEP 2021 - NOV 2021",
    companyLink: "https://www.lftechnology.com/",
    address: "Kathmandu, Nepal",
    description: [
      "Gained hands-on experience with Microsoft 365 suite, specifically Power Apps, Power Automate, and Power BI.",
      "Demonstrated practical skills in building chat bots using Power Automate and Power BI.",
      "Deployed solutions on Power Apps for effective business use.",
      "Worked on various projects under senior developer guidance learning implementation, problem-solving, and optimization.",
    ],
  },
  {
    position: "Intern Web Developer",
    company: "Online Saathi Pvt. Ltd.",
    time: "FEB 2021 - MAY 2021",
    companyLink: "https://www.onlinesaathi.com/",
    address: "Kathmandu, Nepal",
    description: [
      "Converted UI/UX designs into pixel-perfect websites using HTML and CSS.",
      "Collaborated with cross-functional teams to ensure timely delivery of projects.",
      "Implemented web design concepts to create visually appealing and functional websites.",
      "Consistently delivered high-quality work in collaborative team environment.",
    ],
  },
];

const Details = ({
  position,
  company,
  time,
  companyLink,
  address,
  description,
}) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-12 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-start md:w-[85%] sm:w-[95%] xs:w-[98%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.02, y: -5 }}
        className="w-full bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-300 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] ml-8 md:ml-6 sm:ml-4 xs:ml-2 hover:border-white/40 group relative overflow-hidden"
      >
        {/* Glassmorphism background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-emerald-500/5 rounded-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/5 via-transparent to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex flex-col mb-6">
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bold text-2xl md:text-xl sm:text-lg xs:text-base text-gray-900 mb-2 drop-shadow-sm"
            >
              {position}
            </motion.h3>

            <motion.a
              initial={{ x: -20, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-base sm:text-sm xs:text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors duration-300 mb-3 inline-block hover:underline decoration-2 underline-offset-4 drop-shadow-sm"
            >
              @ {company}
            </motion.a>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              <span className="bg-white/40 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full text-sm font-medium border border-white/50 shadow-lg hover:bg-white/50 transition-all duration-300">
                {time}
              </span>
              <span className="text-gray-700 text-sm font-medium flex items-center backdrop-blur-sm bg-white/20 px-3 py-1 rounded-full border border-white/30">
                <svg
                  className="w-4 h-4 mr-2 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {address}
              </span>
            </motion.div>
          </div>

          {/* Description Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full"
          >
            {Array.isArray(description) ? (
              <div className="space-y-3">
                {description.map((item, index) => (
                  <motion.div
                    viewport={{ once: true }}
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + index * 0.1,
                    }}
                    className="flex items-start space-x-3 group/item"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-200 shadow-lg"></div>
                    <p className="text-gray-800 text-base md:text-sm sm:text-sm xs:text-xs leading-relaxed group-hover/item:text-gray-900 transition-colors duration-200 drop-shadow-sm">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-gray-800 text-base md:text-sm sm:text-sm xs:text-xs leading-relaxed drop-shadow-sm">
                {description}
              </p>
            )}
          </motion.div>
        </div>

        {/* Enhanced glassmorphism border effect */}
        <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32 md:my-28 sm:my-24 xs:my-20">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="font-bold text-8xl text-gray-900 text-center w-full mb-20 md:text-7xl sm:text-6xl xs:text-5xl md:mb-16 sm:mb-12 xs:mb-10 drop-shadow-lg"
      >
        Experience
      </motion.h2>

      <div
        ref={ref}
        className="w-[85%] mx-auto relative lg:w-[90%] md:w-[95%] sm:w-full"
      >
        {/* Enhanced glassmorphism timeline */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          viewport={{ once: true }}
          className="absolute left-9 top-0 w-[6px] h-full bg-gradient-to-b from-blue-600 via-emerald-600 to-teal-600 origin-top rounded-full md:left-6 sm:left-4 xs:left-2 shadow-lg"
        />

        {/* Timeline glass effect */}
        <motion.div
          viewport={{ once: true }}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[8px] h-full bg-gradient-to-b from-blue-400/30 via-emerald-400/30 to-teal-400/30 origin-top rounded-full blur-sm md:left-5 sm:left-3 xs:left-1"
        />

        {/* Timeline glow effect */}
        <motion.div
          viewport={{ once: true }}
          style={{ scaleY: scrollYProgress }}
          className="absolute left-7 top-0 w-[10px] h-full bg-gradient-to-b from-blue-300/20 via-emerald-300/20 to-teal-300/20 origin-top rounded-full blur-md md:left-4 sm:left-2 xs:left-0"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 md:ml-2 sm:ml-1 xs:ml-0">
          {experienceData.map((experience, index) => (
            <Details
              key={index}
              position={experience.position}
              company={experience.company}
              time={experience.time}
              companyLink={experience.companyLink}
              address={experience.address}
              description={experience.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
