import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import textproj from "../../public/images/projects/textproject.png";
import ecommerce from "../../public/images/projects/e-commerce.jpeg";
import resmgr from "../../public/images/projects/resmgr.jpeg";
import bpizza from "../../public/images/projects/bpizza.jpg";
import Opencv from "../../public/images/projects/Opencv.png";
import spotify from "../../public/images/projects/spotifyclone.png";
import mergedProj from "../../public/images/projects/mergerd-proj.png";
import NewsPanda from "../../public/images/projects/NewsPanda.png";
import OldPortfolio from "../../public/images/projects/OldPortfolio.png";
import { motion } from "framer-motion";
import Transitions from "@/components/Transitions";

const Projects = () => {
  const FramerImage = motion(Image);

  const FeatureProject = ({ title, date, summary, link, linkGH, img }) => {
    return (
      <div className="relative group">
        {/* White Modern Card */}
        <div className="rounded-3xl border border-gray-200 bg-white shadow-lg p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
          {/* Project Image */}
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-96 object-cover rounded-2xl border border-gray-200 shadow-md transition-transform duration-300 group-hover:scale-[1.02]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            priority
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
          />

          {/* Text Content */}
          <div className="flex flex-col items-start mt-6 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 md:text-lg sm:text-base">
              {title}
              <span className="ml-3 text-sm font-medium text-gray-500">
                {date}
              </span>
            </h3>

            <p className="text-gray-700 leading-relaxed text-justify text-base md:text-sm sm:text-xs">
              {summary}
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mt-4">
              {/* GitHub */}
              <Link href={linkGH} target="_blank" aria-label="View on GitHub">
                <GithubIcon className="h-[40px] w-[40px] text-gray-700 hover:text-primary hover:scale-110 transition-transform duration-200 md:h-[30px] md:w-[30px]" />
              </Link>

              {/* Live Demo */}
              <Link
                href={link}
                target="_blank"
                className="flex whitespace-nowrap items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-gray-900 border border-transparent md:text-sm sm:text-xs"
              >
                View Project
                <LinkArrow className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // const FeatureProject = ({ title, date, summary, link, linkGH, img }) => {
  //   return (
  //     <div className="relative group">
  //       {/* Outer Glassmorphism Card */}
  //       <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
  //         {/* Project Image */}
  //         <FramerImage
  //           src={img}
  //           alt={title}
  //           className="w-full h-56 object-cover rounded-2xl border border-white/20 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
  //           whileHover={{ scale: 1.05 }}
  //           transition={{ duration: 0.3 }}
  //           priority
  //           sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
  //         />

  //         {/* Text Content */}
  //         <div className="flex flex-col items-start mt-6 space-y-4">
  //           <h3 className="text-2xl font-bold text-dark/90 md:text-lg sm:text-base">
  //             {title}
  //             <span className="ml-3 text-sm font-medium text-dark/60">
  //               {date}
  //             </span>
  //           </h3>

  //           <p className="text-dark/80 leading-relaxed text-justify text-base md:text-sm sm:text-xs">
  //             {summary}
  //           </p>

  //           {/* Buttons */}
  //           <div className="flex items-center gap-4 mt-4">
  //             {/* GitHub */}
  //             <Link href={linkGH} target="_blank" aria-label="View on GitHub">
  //               <GithubIcon className="h-[40px] w-[40px] text-dark/80 hover:text-primary hover:scale-110 transition-transform duration-200 md:h-[30px] md:w-[30px]" />
  //             </Link>

  //             {/* Live Demo */}
  //             <Link
  //               href={link}
  //               target="_blank"
  //               className="flex items-center gap-2 bg-gradient-to-r from-dark to-primary text-light px-5 py-2 rounded-xl text-base font-semibold transition-all duration-300 hover:from-light hover:to-light hover:text-dark hover:border-dark border border-transparent md:text-sm sm:text-xs"
  //             >
  //               View Project
  //               <LinkArrow className="w-4 h-4" />
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  return (
    <>
      <Head>
        <title>ROHAN PRASAD GUPTA | Projects page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 bg-gradient-to-tr from-green-400 to-blue-400">
          <AnimatedText
            text="Projects"
            className="text-6xl h-20 md:text-[40px] sm:text-[35px] xs:text-[35px] text-light"
          />

          <div className="grid grid-flow-col gap-24 mt-20 md:flex-col md:flex sm:flex-col sm:flex xs:flex-col xs:flex">
            <FeatureProject
              img={resmgr}
              title="Real-Time Restaurant Management System"
              date="[ Freelance Project - 2024 ]"
              summary="Designed and developed a full-stack real-time restaurant management platform using Next.js, React, Node.js, Express, and MongoDB. Implemented real-time order processing with Socket.IO, dynamic menu management with CRUD operations, and secure authentication with JWT tokens. Built interactive analytics dashboard with React Query, Material UI, and Chart.js/High charts for revenue insights."
              link="https://mgr-frontend.netlify.app/pages/home"
              linkGH="https://github.com/RohanPrasadGupta/resturant_mgr_frontend"
            />

            <FeatureProject
              img={ecommerce}
              title="E-Commerce Platform: Full-Stack Web Application [ THE CART ]"
              date="[ 2024 ]"
              summary="Developed a full-stack e-commerce platform using Next.js, Redux, and MongoDB with dynamic product search, advanced filtering, and JWT-based authentication. Integrated RESTful APIs with TanStack Query for efficient data fetching and state management. Designed responsive UI with Material UI & Tailwind CSS, added Framer Motion animations, and deployed on Netlify and Render."
              link="https://rpg-ecommerce.netlify.app/pages/dashboard"
              linkGH="https://github.com/RohanPrasadGupta/ecommerce-proj"
            />
          </div>

          <div className="grid grid-flow-col gap-24 mt-20 md:flex-col md:flex sm:flex-col sm:flex xs:flex-col xs:flex">
            <FeatureProject
              img={bpizza}
              title="B.Pizza Co. – Pizza ordering website"
              date="[ 2024 ]"
              summary="Developed a responsive B.Pizza Co. ordering website using JavaScript, React.js, react-router, and Redux. Designed with Tailwind CSS focusing on responsive and mobile-first design principles. Features include customizable pizza selection, priority orders, order tracking, and cross-browser compatibility testing."
              link="https://bpizza-rpg.netlify.app/"
              linkGH="https://github.com/RohanPrasadGupta/B.pizzaCo"
            />

            <FeatureProject
              img={Opencv}
              title="Face Recognition Attendance System"
              date="[ 2023 ]"
              summary="Developed using Python, OpenCV, and MediaPipe. The system captures live video from camera, detects faces, compares them to a database of known faces, and marks attendance of recognized students. Attendance data is stored in Firebase Realtime Database with profile pictures stored in Firebase Storage."
              link="https://github.com/RohanPrasadGupta/HW_PROJECT-TU-"
              linkGH="https://github.com/RohanPrasadGupta/HW_PROJECT-TU-"
            />
          </div>

          <div className="grid grid-flow-col gap-24 mt-20 md:flex-col md:flex sm:flex-col sm:flex xs:flex-col xs:flex">
            <FeatureProject
              img={mergedProj}
              title="Combined React Projects"
              date="[ 2023 ]"
              summary="Explored ReactJS fundamentals including APIs, useState, useEffect, and modern JavaScript features. Created a multifaceted project integrating ToDo app, Weather app, Expenses Tracker, and interactive features. Demonstrates proficiency in API integration, state management, and component-based architecture."
              link="https://rpg-merged-projects.netlify.app/"
              linkGH="https://github.com/RohanPrasadGupta/Combined_Small_Project"
            />

            <FeatureProject
              img={textproj}
              title="Text Utility Application"
              date="[ 2021 ]"
              summary="React-JS application for text manipulation with features including word/character counting, case conversion, text copying, and text-to-speech functionality. Includes theme switching capability (light/dark mode) and responsive design for enhanced user experience."
              link="https://rohanprasadgupta-react-text-project.netlify.app/"
              linkGH="https://github.com/RohanPrasadGupta/React-TEXT_PROJECT-"
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
