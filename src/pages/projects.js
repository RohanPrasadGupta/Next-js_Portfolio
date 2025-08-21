import AnimatedText from "@/components/AnimatedText";
import { GithubIcon, LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Transitions from "@/components/Transitions";
import { projects as projectData } from "@/data/projectsData";

const Projects = () => {
  const FramerImage = useMemo(() => motion(Image), []);
  const [filter, setFilter] = useState("all");
  const stacks = useMemo(() => {
    const set = new Set();
    projectData.forEach((p) => p.stack.forEach((s) => set.add(s)));
    return Array.from(set).sort();
  }, []);

  const filtered =
    filter === "all"
      ? projectData
      : projectData.filter((p) => p.stack.includes(filter));

  return (
    <>
      <SEO
        title="Projects | Rohan Prasad Gupta"
        description="Selected software, AI, web and systems projects."
      />
      <Transitions />
      <main className="w-full flex flex-col items-center justify-center pb-24">
        <Layout className="pt-12">
          <AnimatedText
            text="Projects"
            className="mb-10 text-6xl text-dark dark:text-light md:text-4xl"
          />

          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-medium">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-full border px-4 py-1 backdrop-blur transition ${
                filter === "all"
                  ? "bg-dark text-light dark:bg-light dark:text-dark"
                  : "bg-white/60 dark:bg-dark/60 text-dark dark:text-light hover:bg-white/80 dark:hover:bg-dark/80"
              }`}
            >
              All
            </button>
            {stacks.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`rounded-full border px-3 py-1 transition backdrop-blur ${
                  filter === tag
                    ? "bg-primary text-light border-primary"
                    : "bg-white/50 dark:bg-dark/50 text-dark dark:text-light hover:bg-white/70 dark:hover:bg-dark/70"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid w-full gap-5 sm:gap-5 md:gap-6 grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2">
            {filtered.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative flex flex-col overflow-hidden rounded-lg border border-black/10 dark:border-light/10 bg-white/60 dark:bg-dark/60 shadow-sm hover:shadow-md transition-all backdrop-blur-sm max-w-[250px] w-full"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <FramerImage
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 250px"
                    priority={i < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60" />
                  <div className="absolute left-1.5 top-1.5 flex flex-wrap gap-1">
                    {p.stack.slice(0, 2).map((s) => (
                      <span
                        key={s}
                        className="rounded bg-black/50 px-1.5 py-0.5 text-[9px] font-medium text-light backdrop-blur-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="absolute bottom-1.5 right-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-semibold text-light backdrop-blur-sm">
                    {p.year}
                  </span>
                  {/* Hover overlay description */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="line-clamp-4 rounded-md bg-black/60 px-2 py-1 text-[10px] leading-snug text-light backdrop-blur-sm">
                      {p.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-3">
                  <h3 className="text-[12px] font-semibold text-dark dark:text-light line-clamp-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2">
                    <Link
                      href={p.repo}
                      target="_blank"
                      aria-label={`${p.title} repository`}
                      className="text-dark/70 hover:text-primary dark:text-light/70 dark:hover:text-primary"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </Link>
                    <Link
                      href={p.demo}
                      target="_blank"
                      className="group/button inline-flex items-center gap-1 rounded-md border border-transparent bg-dark px-2.5 py-1 text-[10px] font-medium text-light shadow-sm transition-colors hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
                    >
                      View <LinkArrow className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
