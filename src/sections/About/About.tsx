import { motion } from "framer-motion";
import { FiCode, FiServer, FiTool, FiDatabase, FiAward, FiBookOpen } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";
import portfolioData from "../../data/portfolio";

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <FiCode className="text-indigo-500" size={24} />,
  backend: <FiServer className="text-purple-500" size={24} />,
  database: <FiDatabase className="text-blue-500" size={24} />,
  tools: <FiTool className="text-pink-500" size={24} />,
};

export default function About() {
  const { personal, skillCategories, education } = portfolioData;

  return (
    <section
      id="about"
      className="py-24 md:py-32 relative bg-slate-50/30 dark:bg-slate-900/30 backdrop-blur-[1px]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A glimpse into my professional journey, education, and technical expertise"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - About text & Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {personal.about}
              </p>

              {/* Objective */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40 border border-indigo-100 dark:border-indigo-800/30">
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Objective
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic leading-relaxed mt-2">
                  "{personal.objective}"
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Years Exp.", value: "5 Yrs" },
                { label: "Key Systems", value: "5+" },
                { label: "Performance Boost", value: "40%" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="text-center p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 shadow-sm"
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                <FiBookOpen className="text-indigo-500" size={22} />
                <h3>Education</h3>
              </div>

              <div className="space-y-3">
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-white dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-base">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800/40">
                        {edu.grade}
                      </span>
                      <span className="text-slate-400 dark:text-slate-500">{edu.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Skills overview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-2">
              <FiAward className="text-purple-500" size={22} />
              <h3>Technical Expertise</h3>
            </div>

            {skillCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.15 }}
                className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700/50">
                    {categoryIcons[cat.icon] || <FiCode size={24} />}
                  </div>
                  <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                    {cat.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 text-sm rounded-xl bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

