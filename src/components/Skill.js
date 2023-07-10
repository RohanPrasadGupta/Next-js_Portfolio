import React from "react";
import { CSSIcon, DataAnaIcon, GitIcon, HTMLIcon, JavaScriptIcon, NextJSIcon, PythonIcon, ReactIcon, SQLIcon, XDIcon } from "./Icons";
import {motion} from 'framer-motion'

const Skill = () => {
  return (
    <>
      <h2 className="font-bold text-8xl text-center w-full mt-40 mb-20">Skills</h2>

      <div className="border-8 border-dark/75 pb-20 rounded-3xl ">
      <motion.div className=" text-4xl flex flex-wrap justify-center items-center text-center pt-20"
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:1 , type:'spring'}}>
        <div>
          <PythonIcon className={`w-20 h-20 shadow-2xl rounded-2xl`} />
        </div>
        <div>
          <HTMLIcon className={`w-20 h-20 shadow-2xl mx-20 rounded-2xl p-1`} />
        </div>
        <div>
          <CSSIcon className={`w-20 h-20 shadow-2xl  rounded-2xl p-1`} />
        </div>
        <div>
          <JavaScriptIcon className={`w-20 h-20 shadow-2xl mx-20 rounded-2xl`} />
        </div>
        <div>
          <SQLIcon className={`w-20 h-20 shadow-2xl rounded-2xl `} />
        </div>
      </motion.div>

      <motion.div className="items-center text-4xl flex flex-wrap justify-center pt-10 text-center"
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:1 , type:'spring'}}>
        
        <div>
          <XDIcon className={`w-20 h-20 shadow-2xl rounded-2xl p-2`} />
        </div>
        <div>
          <ReactIcon className={`w-20 h-20 shadow-2xl rounded-2xl mx-20`} />
        </div>
        <div>
          <NextJSIcon className={`w-20 h-20 shadow-2xl p-2 rounded-2xl `} />
        </div>
        <div>
          <GitIcon className={`w-20 h-20 shadow-2xl rounded-2xl mx-20 p-1`} />
        </div>
        <div>
          <DataAnaIcon className={`w-20 h-20 shadow-2xl rounded-2xl p-1`} />
        </div>
      </motion.div>
      </div>
    </>
  );
};

export default Skill;
