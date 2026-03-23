import { Suspense } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import portfolioData from "../../data/portfolio";
import HeroScene from "../../components/HeroScene";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <FiGithub size={20} />,
  linkedin: <FiLinkedin size={20} />,
  twitter: <FiTwitter size={20} />,
  instagram: <FiInstagram size={20} />,
};

export default function Hero() {
  const { personal, socialLinks } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 dark:from-slate-950/60 dark:via-slate-950/30 dark:to-slate-950/80 -z-[5]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-indigo-100/80 dark:bg-indigo-900/40 backdrop-blur-sm border border-indigo-200/50 dark:border-indigo-700/50"
          >
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
          >
            <span className="text-slate-800 dark:text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {personal.firstName}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300 mb-4"
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 rounded-2xl border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex items-center justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.name}
              >
                {socialIconMap[link.icon] || link.name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
