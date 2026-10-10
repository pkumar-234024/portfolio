import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiServer,
  FiCode,
  FiDatabase,
  FiTool,
  FiLayers,
  FiAward,
} from "react-icons/fi";
import {
  TbBrandCSharp,
  TbApi,
  TbDatabase,
  TbArrowsSplit,
  TbPlugConnected,
  TbComponents,
  TbRefresh,
  TbSql,
  TbDatabaseSearch,
  TbLayersIntersect,
  TbBrandAzure,
} from "react-icons/tb";
import {
  SiDotnet,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiJsonwebtokens,
  SiGit,
  SiPostman,
  SiSelenium,
} from "react-icons/si";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";

import SectionHeading from "../../components/SectionHeading";
import portfolioData from "../../data/portfolio";

interface SkillMeta {
  icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
  color: string;
  bgLight: string;
  tag: string;
}

const skillMetaMap: Record<string, SkillMeta> = {
  // Backend & .NET
  "C#": {
    icon: TbBrandCSharp,
    color: "#9B4F96",
    bgLight: "rgba(155, 79, 150, 0.15)",
    tag: "Core Language",
  },
  "ASP.NET Core": {
    icon: SiDotnet,
    color: "#512BD4",
    bgLight: "rgba(81, 43, 212, 0.15)",
    tag: "Primary Framework",
  },
  "ASP.NET Web API": {
    icon: TbApi,
    color: "#7C3AED",
    bgLight: "rgba(124, 58, 237, 0.15)",
    tag: "REST Endpoints",
  },
  "ASP.NET MVC": {
    icon: SiDotnet,
    color: "#6366F1",
    bgLight: "rgba(99, 102, 241, 0.15)",
    tag: "MVC Architecture",
  },
  "Entity Framework Core / EF": {
    icon: TbDatabase,
    color: "#8B5CF6",
    bgLight: "rgba(139, 92, 246, 0.15)",
    tag: "ORM & Migrations",
  },
  "LINQ & CQRS Pattern": {
    icon: TbArrowsSplit,
    color: "#A855F7",
    bgLight: "rgba(168, 85, 247, 0.15)",
    tag: "Clean Queries",
  },
  "RESTful APIs": {
    icon: TbPlugConnected,
    color: "#3B82F6",
    bgLight: "rgba(59, 130, 246, 0.15)",
    tag: "API Contracts",
  },
  "Dependency Injection": {
    icon: TbComponents,
    color: "#EC4899",
    bgLight: "rgba(236, 72, 153, 0.15)",
    tag: "IoC & Decoupling",
  },

  // Frontend Development
  "React.js": {
    icon: SiReact,
    color: "#00D8FF",
    bgLight: "rgba(0, 216, 255, 0.15)",
    tag: "SPA & Hooks",
  },
  "TypeScript": {
    icon: SiTypescript,
    color: "#3178C6",
    bgLight: "rgba(49, 120, 198, 0.15)",
    tag: "Type Safety",
  },
  "JavaScript (ES6+)": {
    icon: SiJavascript,
    color: "#F7DF1E",
    bgLight: "rgba(247, 223, 30, 0.15)",
    tag: "Modern Scripting",
  },
  "HTML5 / CSS3": {
    icon: SiHtml5,
    color: "#E34F26",
    bgLight: "rgba(227, 79, 38, 0.15)",
    tag: "Modern Web",
  },
  "Bootstrap / Tailwind": {
    icon: SiTailwindcss,
    color: "#06B6D4",
    bgLight: "rgba(6, 182, 212, 0.15)",
    tag: "Responsive UI",
  },
  "AJAX & SyncFusion UI": {
    icon: TbRefresh,
    color: "#10B981",
    bgLight: "rgba(16, 185, 129, 0.15)",
    tag: "Data Grids & Async",
  },

  // Database & Cloud
  "Microsoft SQL Server": {
    icon: DiMsqlServer,
    color: "#CC292B",
    bgLight: "rgba(204, 41, 43, 0.15)",
    tag: "Enterprise RDBMS",
  },
  "T-SQL / Stored Procedures": {
    icon: TbSql,
    color: "#E11D48",
    bgLight: "rgba(225, 29, 72, 0.15)",
    tag: "Procedures & Logic",
  },
  "Query Optimization": {
    icon: TbDatabaseSearch,
    color: "#F59E0B",
    bgLight: "rgba(245, 158, 11, 0.15)",
    tag: "Execution Plans",
  },
  "Azure App Services": {
    icon: VscAzure,
    color: "#0078D4",
    bgLight: "rgba(0, 120, 212, 0.15)",
    tag: "Cloud Hosting",
  },
  "Azure SQL Database": {
    icon: TbBrandAzure,
    color: "#0089D6",
    bgLight: "rgba(0, 137, 214, 0.15)",
    tag: "Managed Cloud DB",
  },
  "Azure Storage & DevOps": {
    icon: VscAzureDevops,
    color: "#0078D7",
    bgLight: "rgba(0, 120, 215, 0.15)",
    tag: "CI/CD & Storage",
  },

  // Tools, Security & Practices
  "JWT & Role-Based Auth (RBAC)": {
    icon: SiJsonwebtokens,
    color: "#D63AFF",
    bgLight: "rgba(214, 58, 255, 0.15)",
    tag: "Identity & Tokens",
  },
  "Visual Studio 2022 / SSMS": {
    icon: DiVisualstudio,
    color: "#5C2D91",
    bgLight: "rgba(92, 45, 145, 0.15)",
    tag: "Primary IDE",
  },
  "Git / Bitbucket / Sourcetree": {
    icon: SiGit,
    color: "#F05032",
    bgLight: "rgba(240, 80, 50, 0.15)",
    tag: "Version Control",
  },
  "Postman / Swagger (OpenAPI)": {
    icon: SiPostman,
    color: "#FF6C37",
    bgLight: "rgba(255, 108, 55, 0.15)",
    tag: "API Testing & Docs",
  },
  "Selenium & Unit Testing": {
    icon: SiSelenium,
    color: "#43B02A",
    bgLight: "rgba(67, 176, 42, 0.15)",
    tag: "Test Automation",
  },
  "OOP / SOLID / Clean Architecture": {
    icon: TbLayersIntersect,
    color: "#3B82F6",
    bgLight: "rgba(59, 130, 246, 0.15)",
    tag: "Design Principles",
  },
};

const categoryIconMap: Record<string, React.ReactNode> = {
  backend: <FiServer className="text-purple-500" size={24} />,
  frontend: <FiCode className="text-indigo-500" size={24} />,
  database: <FiDatabase className="text-blue-500" size={24} />,
  tools: <FiTool className="text-pink-500" size={24} />,
};

const categoryBadgeGradients: Record<string, string> = {
  backend: "from-purple-500/10 to-violet-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  frontend: "from-indigo-500/10 to-blue-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
  database: "from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  tools: "from-pink-500/10 to-rose-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
};

const filterTabs = [
  { id: "all", label: "All Technologies", icon: FiLayers },
  { id: "backend", label: "Backend & .NET", icon: FiServer },
  { id: "frontend", label: "Frontend", icon: FiCode },
  { id: "database", label: "Database & Cloud", icon: FiDatabase },
  { id: "tools", label: "Tools & Architecture", icon: FiTool },
];

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedCategories =
    activeTab === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.icon === activeTab);

  const totalSkillsCount = skillCategories.reduce(
    (acc, cat) => acc + cat.skills.length,
    0
  );

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Technical Skills & Stack"
          subtitle="Enterprise-grade proficiency across modern .NET ecosystem, cloud infrastructure, and full-stack engineering"
        />

        {/* Experience banner / Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-purple-500/5 via-indigo-500/5 to-blue-500/5 dark:from-purple-500/10 dark:via-indigo-500/10 dark:to-blue-500/10 border border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
              <FiAward size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-white">
                Full-Stack .NET Ecosystem Specialist
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Almost 5 years crafting resilient REST APIs, Clean Architecture & high-throughput SQL solutions
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {totalSkillsCount} Production Tools & Technologies
            </span>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillFilterTab"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-md"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <TabIcon size={16} />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Categories Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`grid gap-8 ${
              displayedCategories.length === 1
                ? "grid-cols-1 max-w-4xl mx-auto"
                : "grid-cols-1 lg:grid-cols-2"
            }`}
          >
            {displayedCategories.map((cat, catIndex) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="group rounded-3xl bg-white/80 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-200/80 dark:border-slate-700/60 p-6 sm:p-8 shadow-sm hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-indigo-500/5 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-3.5">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-700/60 group-hover:scale-105 transition-transform">
                      {categoryIconMap[cat.icon] || <FiCode size={24} />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cat.skills.length} core technologies
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border bg-gradient-to-r ${
                      categoryBadgeGradients[cat.icon] || "text-indigo-500"
                    }`}
                  >
                    Verified Stack
                  </span>
                </div>

                {/* Skill Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {cat.skills.map((skill, skillIndex) => {
                    const meta = skillMetaMap[skill.name] || {
                      icon: FiCode,
                      color: "#6366F1",
                      bgLight: "rgba(99, 102, 241, 0.12)",
                      tag: "Tech",
                    };
                    const IconComponent = meta.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: catIndex * 0.08 + skillIndex * 0.03,
                        }}
                        whileHover={{ y: -3 }}
                        className="group/item relative p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-900/40 hover:bg-white dark:hover:bg-slate-800/80 border border-slate-200/60 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 shadow-none hover:shadow-md cursor-default flex flex-col justify-between"
                        style={
                          {
                            "--brand-color": meta.color,
                          } as React.CSSProperties
                        }
                      >
                        {/* Top row: Brand Icon + Title + Percentage */}
                        <div className="flex items-center gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover/item:scale-110 shadow-xs"
                            style={{
                              backgroundColor: meta.bgLight,
                              color: meta.color,
                            }}
                          >
                            <IconComponent size={22} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <h4 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 truncate group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors">
                                {skill.name}
                              </h4>
                              <span
                                className="text-xs font-bold font-mono shrink-0 px-1.5 py-0.5 rounded-md"
                                style={{
                                  color: meta.color,
                                  backgroundColor: meta.bgLight,
                                }}
                              >
                                {skill.level}%
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                              {meta.tag}
                            </p>
                          </div>
                        </div>

                        {/* Micro Progress Bar with Brand Accent */}
                        <div className="mt-3">
                          <div className="h-1.5 w-full rounded-full bg-slate-200/70 dark:bg-slate-800 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.9,
                                delay: 0.1 + skillIndex * 0.04,
                                ease: "easeOut",
                              }}
                              className="h-full rounded-full transition-all duration-300"
                              style={{
                                backgroundColor: meta.color,
                                boxShadow: `0 0 8px ${meta.color}66`,
                              }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
