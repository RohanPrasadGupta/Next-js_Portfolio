import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilepic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Transitions from "@/components/Transitions";

export default function Home() {
  return (
    <>
      <Head>
        <title>ROHAN PRASAD GUPTA</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions/>
      <main className="flex item-center text-dark  w-full min-h-hscreen">
        <Layout className="pt-0 md:pt-16 sm:pt-8  bg-gradient-to-tr from-green-400 to-blue-400 ">
          <div className="flex item-center justify-between w-full lg:flex-col mt-6">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilepic}
                alt="ROHAN"
                className=" w-auto h-auto lg:hidden md:inline-block md:w-full border-solid border-2 border-light/75 rounded-2xl shadow-2xl border-b-4 border-r-4  "
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 50vw"
              />
            </div>

            <div className="w-1/2 felx felx-col items-center self-center lg:w-full lg:text-center mx-4">
              <AnimatedText
                text="[ AI and IoT ] Master's Degree student | Software Developer"
                className="text-light/90 !text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl md:mt-4 sm:!text-3xl"
              />

              <p className="my-4 text-base font-medium md:!text-sm sm:!text-xs text-justify text-light/80">
                I am a computer science engineer currently pursuing a Master's
                degree in AI and IoT. With a strong foundation in programming
                languages like Python, SQL, and C , I have developed expertise in
                data analytics, visualization, and database management.
                Additionally, I have acquired skills in software programming,
                Microsoft Power Platform, and web development. I am also
                actively engaged in expanding my knowledge through online
                courses in artificial intelligence, data science, and machine
                learning. I am looking for an opportunity to work in a
                challenging environment that will help me grow as a professional
                and utilize my skills and abilities to the fullest.
              </p>

              <div className="flex content-between m-[25%]  self-start mt-2 lg:self-center ">
                <Link
                  href="/dummyCV.pdf"
                  target={"_blank"}
                  className="flex item-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={`w-6 ml-1`} />
                </Link>

                <Link
                  href="mailto:rohanprasadgupta4@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-light/80 text-lg my-2 font-medium capitalize text-dark underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
