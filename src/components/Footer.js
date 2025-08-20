import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-black/5 dark:border-light/10 font-medium text-sm sm:text-xs bg-light/80 dark:bg-dark/80 backdrop-blur-md supports-[backdrop-filter]:bg-light/60 dark:supports-[backdrop-filter]:bg-dark/60">
      <Layout className="py-4 flex items-center justify-center">
        {/* <span>
                {new Date().getFullYear()}&nbsp; &copy; All rights reserved.
            </span> */}
        <div className="flex items-center text-dark/70 dark:text-light/70">
          Built with <span className=" text-red-500 text-lg px-1">&#9825;</span>{" "}
          <Link
            href="https://rohanportfoliowebsite.netlify.app/"
            className="underline underline-offset-2 hover:text-dark dark:hover:text-light"
            target={"_blank"}
          >
            Rohan pd. Gupta
          </Link>
        </div>
        {/* <Link href="https://rohanprasadgupta.w3spaces.com/" className='underline underline-offset-2' target={'_blank'}>Another link</Link> */}
      </Layout>
    </footer>
  );
};

export default Footer;
