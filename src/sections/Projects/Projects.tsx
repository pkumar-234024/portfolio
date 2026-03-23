import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";
import portfolioData from "../../data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-[1px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="A selection of projects I've built and contributed to"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                {/* Gradient top bar */}
                <div className="h-1 w-full rounded-t-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -mt-6 -mx-6 mb-5" style={{ width: "calc(100% + 3rem)", marginLeft: "-1.5rem", marginTop: "-1.5rem", borderRadius: "1rem 1rem 0 0" }} />

                {/* Project number */}
                <div className="text-6xl font-black text-slate-100 dark:text-slate-800 select-none -mb-4 -mt-1 transition-colors group-hover:text-indigo-100 dark:group-hover:text-indigo-900/30">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={16} />
                      Code
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
