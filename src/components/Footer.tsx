import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiHeart } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import portfolioData from "../data/portfolio";

const socialIconMap: Record<string, React.ReactNode> = {
  github: <FiGithub size={18} />,
  linkedin: <FiLinkedin size={18} />,
  leetcode: <SiLeetcode size={18} />,
  twitter: <FiTwitter size={18} />,
  instagram: <FiInstagram size={18} />,
};

export default function Footer() {
  const { personal, socialLinks, navLinks } = portfolioData;
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            {`<${personal.firstName} />`}
          </motion.a>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label={link.name}
              >
                {socialIconMap[link.icon] || link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/50 text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
            © {year} {personal.name}. Made with{" "}
            <FiHeart className="text-red-500 inline" size={14} /> using React &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
