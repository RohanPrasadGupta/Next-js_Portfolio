import AnimatedText from '@/components/AnimatedText'
import { GithubIcon, LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import textproj from "../../public/images/projects/textproject.png";
import Opencv from "../../public/images/projects/Opencv.png";
import spotify from "../../public/images/projects/spotifyclone.png";
import { motion } from 'framer-motion'
import Transitions from '@/components/Transitions'


const Projects = () => {

  const FramerImage = motion(Image);

  const FeatureProject = ({ title, date, summary, link, linkGH,img }) => {
    return (

      <div>
       
        <div className='content-center border-2 border-solid border-black/80 rounded-3xl p-3 relative bg-light'>

        <div className='absolute top-1 -right-3 -z-10  w-[101%] h-[102%] rounded-[1rem] bg-dark/60' />
                        
        <FramerImage src = {img} alt={title} className='w-full h-full border-solid border-2 border-dark/75 rounded-2xl p-1 shadow-2xl '
        whileHover={{scale:1.05}}
        transition={{duration:0.2}}
        priority
              sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw'></FramerImage>

        <div className=' flex flex-col items-start justify-between pl-6'>
        <h3 className='font-bold mt-8 text-primary md:text-sm xs:text-sm sm:text-sm '>
          {title} &nbsp;&nbsp;<span className='text-sm text-black/75 md:text-xs xs:text-xs sm:text-xs'>{date}</span>
        </h3>
        <p className='md:text-xs xs:text-xs sm:text-xs'>{summary}</p>
        <div className='flex my-4 items-center'>
          <Link href={linkGH} target='_blank'>
            <GithubIcon className=' h-[40px] w-[40px] mr-4 hover:scale-90  md:h-[30px] md:w-[30px] sm:h-[25px] sm:w-[25px] xs:h-[25px] xs:w-[25px]' />
          </Link>
          <Link href={link} target='_blank' className='flex item-center bg-dark text-light p-2 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:underline hover:text-dark border-2 border-solid border-transparent hover:border-dark md:text-sm xs:text-xs sm:text-sm'>
            View-Project<LinkArrow className='ml-4 w-3.5 h-4.5 sm:w-3 sm:h-3 md:w-3 md:h-3 xs:w-3 xs:h-3' />
          </Link>
        </div>
        </div>
      </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>ROHAN PRASAD GUPTA | Projects page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className='w-full mb-16 flex flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText text="Projects" className='text-[50px] h-10 md:text-[40px] sm:text-[35px] xs:text-[35px]' />

          <div className='grid grid-cols-12 gap-24 mt-20 md:flex-col md:flex sm:flex-col sm:flex xs:flex-col xs:flex'>
            <div className='col-span-6'>
              <FeatureProject
              img={textproj}
                title='WORDS AND CHARACTER COUNTER WITH THEME CHANGING WEBSITE USING REACT JS'
                date='[ Aug-2021 ]'
                summary='A small project using React-JS. Words and character counter with various features like upper and lower case, copy modified text and speak the input text of the sentence. Can change the normal to dark theme'
                link='https://rohanprasadgupta-react-text-project.netlify.app/'
                linkGH='https://github.com/RohanPrasdGupta/React-TEXT_PROJECT-'
              />
            </div>
            <div className='col-span-6'>
            <FeatureProject
                img={Opencv}
                title='FACE RECOGNITION ATTENDANCE SYSTEM'
                date='[ 2023 ]'
                summary="The system captures live video, detects and compares faces to mark attendance. Attendance data is and profile pictures are stored on Firebase in real time. Python, OpenCV, and MediaPipe were used for development."
                link='https://github.com/RohanPrasdGupta/HW_PROJECT-TU-'
                linkGH='https://github.com/RohanPrasdGupta/HW_PROJECT-TU-'
              />
            </div>
          </div>

          <div className='grid grid-cols-12 gap-24 mt-20 md:flex-col md:flex sm:flex-col sm:flex xs:flex-col xs:flex '>
            <div className='col-span-6 '>
            <FeatureProject
                img={spotify}
                title='SIMPLE SPOTIFY CLONE'
                date='[ 2023 ]'
                summary="Spotify clone using HTML, CSS, and JavaScript. The clone provides a user-friendly interface where users can browse and listen to their favorite music tracks."
                link='https://silly-malasada-5f0583.netlify.app/'
                linkGH='https://github.com/RohanPrasdGupta/Simple_Spotify_CLONE/tree/main'
              />

            </div>
            <div className='col-span-6'>
                Here project-4
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects
