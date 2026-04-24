import React, { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import GoogleDA from "../../public/images/projects/GoogleDA.png";
import Appofai from "../../public/images/projects/TaiwanAI.jpg";
import AiPowChatbot from "../../public/images/projects/AiPowChatbot.jpg";
import IntroToAi from "../../public/images/projects/IntroToAi.jpg";
import PythonForDS from "../../public/images/projects/PythonForDS.jpg";
import udemyPY from "../../public/images/projects/udemyPY.jpg";
import UiUx from "../../public/images/projects/UiUx.jpg";
import AwsCert from "../../public/images/projects/AwsCert.png";
import ClaudeCert from "../../public/images/projects/AnthropicAPI.png";
import UAWAUdemy from "../../public/images/projects/UAWAUdemy.jpg";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import Link from "next/link";
import Transitions from "@/components/Transitions";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

// ─── Data ────────────────────────────────────────────────────────────────────

const sliderCertificates = [
  {
    title: "AWS Certified Developer – Associate",
    date: "Nov 2025",
    img: AwsCert,
    issuer: "Amazon Web Services",
  },
  {
    title: "Claude with the Anthropic API - Anthropic",
    date: "April 2026",
    img: ClaudeCert,
    issuer: "Anthropic",
  },
  {
    title: "Ultimate AWS Certified Developer Associate 2025 DVA-C02",
    date: "Oct 2025",
    img: UAWAUdemy,
    issuer: "Udemy",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    date: "Dec 2022",
    img: GoogleDA,
    issuer: "Google Career Certificate",
  },
  {
    title: "Application of AI, Machine Vision & Robotics",
    date: "Jul–Aug 2021",
    img: Appofai,
    issuer: "Taiwan AI Academy",
  },
  {
    title: "Building AI Powered Chatbots – IBM Watson",
    date: "Jul 2020",
    img: AiPowChatbot,
    issuer: "Coursera",
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    date: "Jul 2020",
    img: IntroToAi,
    issuer: "Coursera",
  },
  {
    title: "Python for Data Science and AI",
    date: "Jul 2020",
    img: udemyPY,
    issuer: "Coursera",
  },
  {
    title: "Learn to Code in Python 3",
    date: "Mar 2020",
    img: PythonForDS,
    issuer: "Udemy",
  },
  {
    title: "Adobe XD UI/UX Design",
    date: "Jan 2020",
    img: UiUx,
    issuer: "Udemy",
  },
];

const allCertiLines = [
  {
    title:
      "AWS Certified Developer Associate - Amazon Web Services Training and Certification",
    date: "[Nov 2025]",
    img: AwsCert,
    link: "/",
  },
  {
    title: "Ultimate AWS Certified Developer Associate 2025 DVA-C02",
    date: "[Oct 2025]",
    img: UAWAUdemy,
    link: "/",
  },
  {
    title: "Google / Data Analytics Professional Certificate",
    date: "[Dec 2022]",
    img: GoogleDA,
    link: "/",
  },
  {
    title: "Application of AI, Machine Vision and Robotics",
    date: "[Jul 2021 – Aug 2021]",
    img: Appofai,
    link: "/",
  },
  {
    title: "Certificate of Participation – Codegoda 2023",
    date: "[2023]",
    img: AiPowChatbot,
    link: "/",
  },
  {
    title: '"Building AI Powered Chatbots using IBM Watson" – COURSERA',
    date: "[Jul 2020]",
    img: AiPowChatbot,
    link: "/",
  },
  {
    title: '"Introduction to Artificial Intelligence (AI)" – COURSERA',
    date: "[Jul 2020]",
    img: IntroToAi,
    link: "/",
  },
  {
    title: '"Python for Data Science and AI" – COURSERA',
    date: "[Jul 2020]",
    img: udemyPY,
    link: "/",
  },
  {
    title: '"Learn to Code in Python 3" – UDEMY',
    date: "[Mar 2020]",
    img: PythonForDS,
    link: "/",
  },
  {
    title: '"Adobe XD UI/UX Design" – UDEMY',
    date: "[Jan 2020]",
    img: UiUx,
    link: "/",
  },
];

// ─── Infinite Auto-Scroll Slider (MUI styled) ────────────────────────────────

const CARD_WIDTH = 300;
const CARD_HEIGHT = 220;
const GAP = 16;
const CARD_STEP = CARD_WIDTH + GAP;
const SPEED = 0.6; // px per frame

const CertSlider = () => {
  const items = [
    ...sliderCertificates,
    ...sliderCertificates,
    ...sliderCertificates,
  ];
  const totalWidth = sliderCertificates.length * CARD_STEP;
  const xRef = useRef(0);
  const [x, setX] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tooltip, setTooltip] = useState(null); // index of card showing tooltip

  useAnimationFrame(() => {
    if (paused) return;
    xRef.current -= SPEED;
    if (Math.abs(xRef.current) >= totalWidth) {
      xRef.current += totalWidth;
    }
    setX(xRef.current);
  });

  return (
    <div
      className="relative w-full overflow-hidden py-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setTooltip(null); }}
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-green-400/70 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-blue-400/70 to-transparent" />

      {/* Scrolling row */}
      <div
        className="flex"
        style={{
          gap: GAP,
          transform: `translateX(${x}px)`,
          willChange: "transform",
        }}
      >
        {items.map((cert, i) => (
          <div
            key={i}
            style={{ minWidth: CARD_WIDTH, width: CARD_WIDTH }}
            className="relative rounded-2xl overflow-hidden shadow-xl border border-white/30 bg-white/10 backdrop-blur-md hover:scale-105 transition-transform duration-300 cursor-default"
          >
            {/* ── MUI-style image area ── */}
            <div style={{ position: "relative", width: CARD_WIDTH, height: CARD_HEIGHT }}>
              <Image
                src={cert.img}
                alt={cert.title}
                fill
                className="object-cover"
                sizes={`${CARD_WIDTH}px`}
                loading="lazy"
              />

              {/* MUI ImageListItemBar — title + subtitle + action icon */}
              <ImageListItemBar
                title={cert.title}
                subtitle={cert.issuer}
                position="bottom"
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.75)" }}
                    aria-label={`info about ${cert.title}`}
                    size="small"
                    onClick={() => setTooltip(tooltip === i ? null : i)}
                  >
                    <InfoIcon fontSize="small" />
                  </IconButton>
                }
                sx={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 70%, transparent 100%)",
                  "& .MuiImageListItemBar-title": {
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    whiteSpace: "normal",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  },
                  "& .MuiImageListItemBar-subtitle": {
                    fontSize: "0.68rem",
                    color: "rgba(180,220,255,0.95)",
                    fontWeight: 500,
                  },
                }}
              />

              {/* Info tooltip popup on icon click */}
              {tooltip === i && (
                <div className="absolute inset-0 bg-black/75 backdrop-blur-sm flex flex-col items-center justify-center p-4 z-20">
                  <p className="text-white text-xs font-semibold text-center leading-snug mb-2">
                    {cert.title}
                  </p>
                  <span className="text-blue-300 text-xs font-medium">{cert.issuer}</span>
                  <span className="text-emerald-300 text-xs mt-1">{cert.date}</span>
                </div>
              )}
            </div>

            {/* Date strip below image */}
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 flex justify-between items-center border-t border-white/20">
              <span className="text-blue-900 text-xs font-bold">{cert.date}</span>
              <span className="text-[10px] text-gray-700 font-medium truncate max-w-[160px]">{cert.issuer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Moving Image (hover preview) ────────────────────────────────────────────

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave() {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize font-semibold hover:underline">{title}</h2>
      <FramerImage
        style={{ x, y }}
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10"
        priority
        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
      />
    </Link>
  );
};

// ─── CertiLine ────────────────────────────────────────────────────────────────

const CertiLine = ({ title, date, img, link }) => {
  return (
    <motion.li
      initial={{ y: 60, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-4 mt-4 rounded-xl flex items-center justify-between bg-light/50 text-primary/80 first:mt-0 border border-solid border-light/50 border-r-4 border-b-4 md:text-sm xs:text-sm sm:text-sm"
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-dark/80 font-semibold pl-4 whitespace-nowrap md:text-xs xs:text-xs sm:text-xs">
        {date}
      </span>
    </motion.li>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

const certification = () => {
  return (
    <>
      <Head>
        <title>ROHAN PRASAD GUPTA | Certification page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Transitions />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout
          className={"pt-16 bg-gradient-to-tr from-green-400 to-blue-400"}
        >
          <AnimatedText
            text="Certification"
            className="text-6xl h-20 md:text-[35px] sm:text-[30px] xs:text-[30px] text-light"
          />

          {/* ── Continuous Image Slider ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 w-full"
          >
            <CertSlider />
          </motion.div>

          {/* ── All Certificates List ── */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-bold text-4xl w-full text-center mt-20 mb-10 md:text-3xl sm:text-2xl xs:text-2xl text-light"
          >
            All Certificates
          </motion.h2>

          <ul className="w-full mb-16">
            {allCertiLines.map((cert, index) => (
              <CertiLine
                key={index}
                title={cert.title}
                date={cert.date}
                img={cert.img}
                link={cert.link}
              />
            ))}
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default certification;
