import { motion } from "framer-motion";
import { FiCode, FiServer, FiTool, FiDatabase } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";
import portfolioData from "../../data/portfolio";

const categoryIcons: Record<string, React.ReactNode> = {
  backend: <FiServer className="text-purple-500" size={28} />,
  frontend: <FiCode className="text-indigo-500" size={28} />,
  database: <FiDatabase className="text-blue-500" size={28} />,
  tools: <FiTool className="text-pink-500" size={28} />,
};

const categoryGradients: Record<string, string> = {
  backend: "from-purple-500 to-violet-500",
  frontend: "from-indigo-500 to-blue-500",
  database: "from-blue-500 to-cyan-500",
  tools: "from-pink-500 to-rose-500",
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills"
          subtitle="Proficiency across backend architecture, databases, cloud, and modern frontend tools"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.12 }}
              className="group"
            >
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 shadow-sm hover:shadow-xl transition-all h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-700/50 group-hover:scale-110 transition-transform">
                    {categoryIcons[cat.icon] || <FiCode size={28} />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                    {cat.category}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-5">
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.12 + skillIndex * 0.05,
                      }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-100 dark:bg-slate-700/50 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.12 + skillIndex * 0.08,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            categoryGradients[cat.icon] || "from-indigo-500 to-purple-500"
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

