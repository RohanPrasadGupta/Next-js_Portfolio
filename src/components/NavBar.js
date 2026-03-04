import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { GithubIcon, LinkedInIcon, LeetCodeIcon } from './Icons'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Desktop Nav Link ─────────────────────────────────────────────────────────

const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    const isActive = router.asPath === href;

    return (
        <Link href={href} className={`${className} relative group px-3 py-1.5 rounded-lg transition-colors duration-200 ${isActive ? 'text-white' : 'text-white/80 hover:text-white'}`}>
            {isActive && (
                <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
            )}
            <span className="relative z-10 font-semibold tracking-wide text-sm">{title}</span>
            {!isActive && (
                <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] bg-white/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
            )}
        </Link>
    );
};

// ─── Mobile Nav Link ──────────────────────────────────────────────────────────

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
    const router = useRouter();
    const isActive = router.asPath === href;

    const handleClick = () => {
        toggle();
        router.push(href);
    };

    return (
        <motion.button
            whileHover={{ x: 6 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleClick}
            className={`${className} relative flex items-center gap-2 py-2.5 px-5 rounded-xl w-full text-left transition-colors duration-200 ${isActive ? 'bg-white/20 text-white border border-white/30' : 'text-white/75 hover:text-white hover:bg-white/10'}`}
        >
            {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
            )}
            <span className="font-semibold text-base tracking-wide">{title}</span>
        </motion.button>
    );
};

// ─── Social Icon Button ───────────────────────────────────────────────────────

const SocialLink = ({ href, children, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-6 h-6 mx-2.5 opacity-80 hover:opacity-100 transition-opacity duration-200 drop-shadow-md"
    >
        {children}
    </motion.a>
);

// ─── NavBar ───────────────────────────────────────────────────────────────────

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    return (
        <header className="w-full px-10 py-4 flex items-center justify-between relative z-10
            bg-gradient-to-r from-blue-500/80 via-teal-500/70 to-green-500/80
            backdrop-blur-xl border-b border-white/20 shadow-lg
            lg:px-8 md:px-6 sm:px-4">

            {/* ── Logo / Brand ── */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 flex-shrink-0"
            >
                <Link href="/" className="text-white font-extrabold text-xl tracking-tight drop-shadow hover:opacity-90 transition-opacity">
                    RPG<span className="text-emerald-300">.</span>
                </Link>
            </motion.div>

            {/* ── Desktop Nav ── */}
            <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-1 lg:hidden"
            >
                <CustomLink href="/"            title="Home" />
                <CustomLink href="/about"       title="About" />
                <CustomLink href="/education"   title="Education" />
                <CustomLink href="/projects"    title="Projects" />
                <CustomLink href="/certification" title="Certification" />
                <CustomLink href="/ContactMe"   title="Contact" />
            </motion.nav>

            {/* ── Desktop Social Icons ── */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center lg:hidden"
            >
                <div className="w-px h-5 bg-white/30 mx-2" />
                <SocialLink href="https://github.com/RohanPrasadGupta" label="GitHub">
                    <GithubIcon />
                </SocialLink>
                <SocialLink href="https://www.linkedin.com/in/rohanprasadgupta" label="LinkedIn">
                    <LinkedInIcon />
                </SocialLink>
                <SocialLink href="https://leetcode.com/u/rohg505/" label="LeetCode">
                    <LeetCodeIcon />
                </SocialLink>
            </motion.div>

            {/* ── Hamburger Button ── */}
            <button
                onClick={handleClick}
                aria-label="Toggle menu"
                className="hidden lg:flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200"
            >
                <span className={`bg-white block transition-all duration-300 h-0.5 w-5 rounded-full ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`bg-white block transition-all duration-300 h-0.5 w-5 rounded-full ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`bg-white block transition-all duration-300 h-0.5 w-5 rounded-full ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* ── Mobile Drawer ── */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={handleClick}
                            className="fixed inset-0 z-20 bg-black/40 backdrop-blur-sm"
                        />

                        {/* Drawer panel */}
                        <motion.div
                            key="drawer"
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-72 z-30 flex flex-col
                                bg-gradient-to-b from-blue-600/95 via-teal-600/95 to-green-600/95
                                backdrop-blur-2xl border-l border-white/20 shadow-2xl
                                sm:w-[85vw]"
                        >
                            {/* Drawer header */}
                            <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
                                <span className="text-white font-extrabold text-lg tracking-tight">
                                    RPG<span className="text-emerald-300">.</span>
                                </span>
                                <button
                                    onClick={handleClick}
                                    className="text-white/70 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-all"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Nav links */}
                            <nav className="flex flex-col gap-1 px-4 pt-6 flex-1">
                                {[
                                    { href: '/',              title: 'Home' },
                                    { href: '/about',         title: 'About' },
                                    { href: '/education',     title: 'Education' },
                                    { href: '/projects',      title: 'Projects' },
                                    { href: '/certification', title: 'Certification' },
                                    { href: '/ContactMe',     title: 'Contact Me' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                    >
                                        <CustomMobileLink
                                            href={item.href}
                                            title={item.title}
                                            toggle={handleClick}
                                        />
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Social icons in drawer */}
                            <div className="px-6 py-6 border-t border-white/20">
                                <p className="text-white/50 text-xs uppercase tracking-widest mb-3 font-semibold">Find me on</p>
                                <div className="flex items-center gap-4">
                                    <SocialLink href="https://github.com/RohanPrasadGupta" label="GitHub">
                                        <GithubIcon />
                                    </SocialLink>
                                    <SocialLink href="https://www.linkedin.com/in/rohanprasadgupta" label="LinkedIn">
                                        <LinkedInIcon />
                                    </SocialLink>
                                    <SocialLink href="https://leetcode.com/u/rohg505/" label="LeetCode">
                                        <LeetCodeIcon />
                                    </SocialLink>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default NavBar;
