import { Suspense } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiUser,
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

      {/* Gradient overlays - stronger to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90 dark:from-slate-950/70 dark:via-slate-950/40 dark:to-slate-950/90 -z-[5]" />

      {/* Extra radial glow behind text for readability */}
      <div className="absolute inset-0 -z-[4] flex items-center justify-center">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-white/50 dark:bg-slate-950/50 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              type: "spring",
              stiffness: 150,
            }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              {/* Animated gradient ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-[spin_6s_linear_infinite]" />

              {/* Image container */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 shadow-2xl shadow-indigo-500/20">
                {personal.avatarUrl ? (
                  <img
                    src={personal.avatarUrl}
                    alt={personal.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (
                        e.target as HTMLImageElement
                      ).nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                ) : null}
                <div
                  className={`${
                    personal.avatarUrl ? "hidden" : ""
                  } absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white`}
                >
                  <FiUser size={40} className="mb-1" />
                  <span className="text-[10px] font-medium opacity-75">
                    Add Photo
                  </span>
                </div>
              </div>

              {/* Status dot */}
              <div className="absolute bottom-1 right-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500 border-3 border-white dark:border-slate-900 shadow-lg" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-indigo-100/90 dark:bg-indigo-900/50 backdrop-blur-md border border-indigo-200/60 dark:border-indigo-700/50"
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
            <span className="text-slate-900 dark:text-white drop-shadow-sm">
              Hi, I'm{" "}
            </span>
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
              {personal.firstName}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-200 mb-4"
          >
            {personal.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto font-medium"
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
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:brightness-110 transition-all"
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
              className="px-8 py-3.5 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 font-semibold hover:border-indigo-500 dark:hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all shadow-sm"
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
                className="p-3 rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-slate-200/60 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all shadow-sm"
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
          className="flex flex-col items-center gap-2 text-slate-500 dark:text-slate-400"
        >
          <span className="text-xs font-semibold tracking-widest uppercase">
            Scroll
          </span>
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
