import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCheckCircle, FiLayers } from "react-icons/fi";
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
          title="Featured Projects"
          subtitle="Real-world enterprise & full-stack web applications built across my career"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex"
            >
              <div className="w-full p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  {/* Top bar with badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-black text-slate-200 dark:text-slate-700 select-none group-hover:text-indigo-500/30 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    {project.badge && (
                      <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>

                  {project.subtitle && (
                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-3 line-clamp-1 opacity-90">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights / Achievements */}
                  {project.achievements && project.achievements.length > 0 && (
                    <div className="mb-6 space-y-2 bg-slate-50/80 dark:bg-slate-900/40 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                      <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <FiLayers size={12} /> Key Achievements
                      </div>
                      {project.achievements.slice(0, 3).map((ach, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300"
                        >
                          <FiCheckCircle className="text-indigo-500 mt-0.5 flex-shrink-0" size={12} />
                          <span className="line-clamp-2">{ach}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                    {project.github ? (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiGithub size={15} />
                        Source Code
                      </motion.a>
                    ) : null}
                    {project.demo ? (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink size={15} />
                        Live Preview
                      </motion.a>
                    ) : (
                      <span className="text-xs text-slate-400 dark:text-slate-500 italic">
                        Enterprise Internal Application
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

