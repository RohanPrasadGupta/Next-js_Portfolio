import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon} from './Icons'
import {motion} from 'framer-motion'

const CustomLink = ({href, title, className = ''})=>{

    const router = useRouter();

    return(
        <Link href = {href} className={`${className} relative group`}>
            {title}

            <span className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}


const CustomMobileLink = ({href, title, className = '', toggle})=>{

    const router = useRouter();

    const handleClick = () =>{
        toggle();
        router.push(href)
    }

    return(
        <button href = {href} className={`${className} relative group text-light my-2`} onClick={handleClick}>
            {title}

            <span className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </button>
    )
}


const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

  return (
    <header
    className='w-full px-32 py-6 font-medium flex item-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8  bg-gradient-to-tr to-green-400 from-blue-300 '>

        <button className='flex-col justify-center items-center hidden lg:flex' onClick = {handleClick}>
            <span className={`bg-light dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-light dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className= {`bg-light dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>

        <div className='w-full flex  justify-between items-center lg:hidden text-light font-semibold text-lg '>
        <nav >
            <CustomLink href='/' title = 'Home' className='mr-4'/>
            <CustomLink href='/about' title = 'About' className='mx-4' />
            <CustomLink href='/education' title = 'Education' className='mx-4'/>
            <CustomLink href='/projects' title = 'Projects' className='mx-4'/>
            <CustomLink href='/certification' title = 'Certification' className='mx-4'/>
            <CustomLink href='/contactus' title = 'Contact Me' className='ml-4'/>
        </nav>
       
        <nav className='flex item-center justify-center flex-wrap'>
            
            <motion.a href='https://github.com' target={"blank"}
            whileHover={{y:-3}}
            whileTap={{scale:0.9}}
            className='w-6 mx-3'>
                <GithubIcon/>
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/rohanprasadgupta' target={"blank"}
            whileHover={{y:-3}}
            whileTap={{scale:0.9}}
            className='w-6 mx-3'>
                <LinkedInIcon/>
            </motion.a>
            
            
        </nav>
        </div>

 {/* FOR THE SMALLER SCREENS */}

        {
            isOpen ? 
            <motion.div
             initial = {{scale:0, opacity:0, x:"-50%" , y:"-50%"}}
             animate = {{scale:1, opacity:1}}

             className='min-w-[70vw] flex z-30 flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32'>

        <nav className='flex items-center justify-center flex-col '>
            <CustomMobileLink href='/' title = 'Home' className='' toggle ={handleClick}/>
            <CustomMobileLink href='/about' title = 'About' className='' toggle ={handleClick}/>
            <CustomMobileLink href='/education' title = 'Education' className=''toggle ={handleClick}/>
            <CustomMobileLink href='/projects' title = 'Projects' className=''toggle ={handleClick}/>
            <CustomMobileLink href='/certification' title = 'Certification' className='' toggle ={handleClick}/>
            <CustomMobileLink href='/contactus' title = 'Contatc Me' className='' toggle ={handleClick}/>
        </nav>
       
        <nav className='flex item-center justify-center flex-wrap mt-2  '>
             
            <motion.a href='https://github.com' target={"blank"}
            whileHover={{y:-3}}
            whileTap={{scale:0.9}}
            className='w-6 mx-3 sm:mx-1'>
                <GithubIcon/>
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/rohanprasadgupta' target={"blank"}
            whileHover={{y:-3}}
            whileTap={{scale:0.9}}
            className='w-6 mx-3 sm:mx-1'>
                <LinkedInIcon/>
            </motion.a>
           
           
            
        </nav>
        </motion.div>

            : null
        }




       
 
    </header>
  )
}

export default NavBar