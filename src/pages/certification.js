import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Transitions from "@/components/Transitions";
import { certifications } from "@/data/certificationsData";

const MotionImage = motion(Image);

const FeaturedCard = ({ cert, i }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="group relative flex flex-col overflow-hidden rounded-lg border border-black/10 dark:border-light/10 bg-white/60 dark:bg-dark/60 backdrop-blur-sm shadow-sm hover:shadow-md transition max-w-[230px] w-full"
  >
    <div className="relative aspect-[16/10] w-full overflow-hidden">
      <MotionImage
        src={cert.image}
        alt={cert.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        priority={i < 2}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60" />
      <span className="absolute top-2 left-2 rounded bg-black/50 px-2 py-0.5 text-[10px] font-medium text-light backdrop-blur-sm">
        {cert.provider}
      </span>
      <span className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-light backdrop-blur-sm">
        {cert.date}
      </span>
    </div>
    <div className="flex flex-col p-3">
      <h3 className="text-[12px] font-semibold text-dark dark:text-light group-hover:text-primary transition-colors line-clamp-2">
        {cert.title}
      </h3>
    </div>
  </motion.article>
);

const ListItem = ({ cert, i }) => (
  <motion.li
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.4, delay: i * 0.04 }}
    className="group relative flex items-start gap-3 rounded-md border border-black/5 dark:border-light/10 bg-white/40 dark:bg-dark/40 backdrop-blur-sm px-4 py-3 hover:bg-white/60 dark:hover:bg-dark/60 transition"
  >
    <div className="flex flex-col min-w-0">
      <h4 className="text-xs font-semibold text-dark dark:text-light group-hover:text-primary transition-colors line-clamp-2">
        {cert.title}
      </h4>
      <p className="mt-1 text-[10px] text-dark/60 dark:text-light/60 font-medium flex items-center gap-2">
        <span>{cert.provider}</span>
        <span className="inline-block h-1 w-1 rounded-full bg-dark/30 dark:bg-light/40" />
        <span>{cert.date}</span>
      </p>
    </div>
  </motion.li>
);

const CertificationPage = () => {
  const featured = certifications.filter((c) => c.featured);
  const others = certifications.filter((c) => !c.featured);

  return (
    <>
      <Head>
        <title>Certifications | Rohan Prasad Gupta</title>
        <meta
          name="description"
          content="Professional certifications in data analytics, AI, Python, UI/UX and more."
        />
      </Head>
      <Transitions />
      <main className="flex w-full flex-col items-center justify-center pb-24">
        <Layout className="pt-14">
          <AnimatedText
            text="Certifications"
            className="mb-12 text-6xl text-dark dark:text-light md:text-5xl sm:text-4xl"
          />

          {!!featured.length && (
            <section>
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-dark/60 dark:text-light/60">
                Featured
              </h2>
              <div className="flex  sm:flex-row flex-wrap items-stretch justify-center sm:justify-start gap-6 sm:gap-6">
                {featured.map((c, i) => (
                  <FeaturedCard key={c.slug} cert={c} i={i} />
                ))}
              </div>
            </section>
          )}

          {!!others.length && (
            <section className="mt-14">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-dark/60 dark:text-light/60">
                Additional Certificates
              </h2>
              <ul className="flex flex-col gap-3">
                {others.map((c, i) => (
                  <ListItem key={c.slug} cert={c} i={i} />
                ))}
              </ul>
            </section>
          )}
        </Layout>
      </main>
    </>
  );
};

export default CertificationPage;
