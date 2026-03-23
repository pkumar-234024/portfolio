import { motion } from "framer-motion";
import { FiCode, FiServer, FiTool, FiDownload } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";
import portfolioData from "../../data/portfolio";

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <FiCode className="text-indigo-500" size={24} />,
  backend: <FiServer className="text-purple-500" size={24} />,
  tools: <FiTool className="text-pink-500" size={24} />,
};

export default function About() {
  const { personal, skillCategories } = portfolioData;

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-slate-50/50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A glimpse into my professional journey and what drives me"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - About text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
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
                { label: "Years Exp.", value: "4+" },
                { label: "Projects", value: "20+" },
                { label: "Clients", value: "15+" },
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
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Resume download */}
            {personal.resumeUrl && (
              <motion.a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload size={18} />
                Download Resume
              </motion.a>
            )}
          </motion.div>

          {/* Right - Skills overview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
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
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                    {cat.category}
                  </h3>
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
