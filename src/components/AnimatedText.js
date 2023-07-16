import React from 'react'
import {motion} from 'framer-motion'


const quote = {

    initial : {
        opacity:1,
    },
    animate : {
        transition:{
            delay : 0.5,
            staggerChildren : 0.08,
        }
    }
}

const singalWord = {

    initial : {
        opacity:0,
        y : 50,
    },
    animate : {
        opacity:1,
        y:0,
        transition:{
            duration : 1,
        }
    }
}


const AnimatedText = ({text,className= ''}) => {
  return (
    <div className="w-full mx-auto flex item-center justify-center text-center overflow-hidden sm:py-0 "
    >
        <motion.h1 className = {`inline-block w-full text-dark font-bold capitalize text-3xl ${className}`}
        variants={quote}
        initial = 'initial'
        animate='animate'>
            {
                text.split(' ').map((word,index)=>
                <motion.span key={word+'-'+index} className='inline-block'
                variants={singalWord}
                >
                    {word}&nbsp;
                </motion.span>
                )

            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText