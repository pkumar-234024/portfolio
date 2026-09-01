import { motion } from "framer-motion";
import { FiBriefcase, FiCheckCircle } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";
import portfolioData from "../../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and career milestones"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30" />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/30"
                  >
                    <FiBriefcase size={14} className="text-white" />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-2">
                          {exp.company}
                          {exp.location && (
                            <span className="text-xs text-slate-400 dark:text-slate-500 font-normal">
                              • {exp.location}
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
                      {exp.duration}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <FiCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" size={14} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
