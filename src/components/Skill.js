import React from "react";
import { CSSIcon, DataAnaIcon, GitIcon, HTMLIcon, JavaScriptIcon, NextJSIcon, PythonIcon, ReactIcon, SQLIcon, XDIcon } from "./Icons";
import {motion} from 'framer-motion'

const Skill = () => {
  return (
    <>
      <h2 className="font-bold text-8xl text-center w-full mt-32 mb-20 md:text-7xl md:mb-10 sm:mb-10 sm:text-6xl xs:text-5xl xs:mb-10 md:mt-10 xs:mt-10 sm:mt-10  text-light underline underline-offset-auto ">Skills</h2>

      <div className="border-8 border-light/75 pb-20 rounded-3xl ">
      <motion.div className="flex flex-wrap justify-center items-center text-center pt-20 md:pt-8  md:flex-col md:gap-3 sm:flex-col sm:gap-3 xs:flex-col xs:gap-3"
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:1 , type:'spring'}}>
        <div>
          <PythonIcon className={`w-20 h-20 shadow-2xl bg-light/30 rounded-2xl sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16 `} />
        </div>
        <div>
          <HTMLIcon className={`w-20 h-20 shadow-2xl bg-light/30 mx-20 rounded-2xl sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16 p-1 `} />
        </div>
        <div>
          <CSSIcon className={`w-20 h-20 shadow-2xl bg-light/30 rounded-2xl sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16 p-1`} />
        </div>
        <div>
          <JavaScriptIcon className={`w-20 h-20 shadow-2xl bg-light/30 mx-20 sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16 rounded-2xl`} />
        </div>
        <div>
          <SQLIcon className={`w-20 h-20 shadow-2xl rounded-2xl bg-light/30 sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16 `} />
        </div>
      </motion.div>

      <motion.div className="items-center flex flex-wrap justify-center pt-10 md:pt-4 sm:pt-4 xs:pt-4 text-center md:flex-col md:gap-3"
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:1 , type:'spring'}}>
        
        <div>
          <XDIcon className={`w-20 h-20 shadow-2xl bg-light/30 rounded-2xl sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16 p-2`} />
        </div>
        <div>
          <ReactIcon className={`w-20 h-20 shadow-2xl bg-light/30 rounded-2xl sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16 mx-20`} />
        </div>
        <div>
          <NextJSIcon className={`w-20 h-20 shadow-2xl bg-light/30 p-2 rounded-2xl  sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16`} />
        </div>
        <div>
          <GitIcon className={`w-20 h-20 shadow-2xl bg-light/30 rounded-2xl mx-20  sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16 p-1`} />
        </div>
        <div>
          <DataAnaIcon className={`w-20 h-20 shadow-2xl bg-light/30 rounded-2xl  sm:w-16 sm:h-16 md:w-16 md:h-16 xs:w-16 xs:h-16 p-1`} />
        </div>
      </motion.div>
      </div>
    </>
  );
};

export default Skill;
