import { useState, useRef, useEffect, type MouseEvent } from "react";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCopy,
  FiCheck,
  FiServer,
  FiCode,
  FiCloud,
  FiCpu,
  FiClock,
  FiMapPin,
  FiDownload,
  FiZap,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import portfolioData from "../data/portfolio";

// ============================================================================
// Bento Card Spotlight Wrapper (Linear / Vercel Glow Effect)
// ============================================================================
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function BentoCard({
  children,
  className = "",
  glowColor = "rgba(255, 255, 255, 0.08)",
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl bg-[#121215]/90 border border-[#27272a] p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#3f3f46] hover:shadow-2xl hover:shadow-black/60 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent ${className}`}
    >
      {/* Radial Hover Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

// ============================================================================
// Main Responsive Bento Grid Component
// ============================================================================
export default function BentoGridPortfolio() {
  const { personal, experience, projects } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const featuredProject = projects[2] || projects[0]; // Bar-Patrol or Sonora Construction

  // Live India Time (IST - UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section
      id="bento"
      className="relative min-h-screen bg-[#09090b] text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 selection:bg-indigo-500/30 selection:text-indigo-200"
    >
      {/* Background Subtle Grid Texture */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#27272a]/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SYSTEM_STATUS: OPERATIONAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono">
              Engineering Matrix
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span>[BENTO_VIEW]</span>
            <span className="text-zinc-600">•</span>
            <span>VERCEL / LINEAR DESIGN SYSTEM</span>
          </div>
        </div>

        {/* 12-Column Responsive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          {/* ============================================================== */}
          {/* 1. HERO / ELEVATOR PITCH CARD (col-span-12 lg:col-span-8) */}
          {/* ============================================================== */}
          <BentoCard
            className="md:col-span-12 lg:col-span-8"
            glowColor="rgba(99, 102, 241, 0.12)"
          >
            <div>
              {/* Top Tag & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  Available for High-Impact Engineering Roles
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  SDE I @ Momentum (Urban Harvest)
                </span>
              </div>

              {/* Identity & Pitch */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-indigo-400 mb-4 font-mono">
                {personal.title}
              </p>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl mb-8">
                Innovative Full-Stack Software Engineer with 5+ years of experience
                architecting scalable .NET Core microservices, high-throughput REST APIs,
                and high-volume SQL Server architectures. Championing agentic AI-accelerated
                delivery (Cursor, Claude Code, Antigravity, Codex) to build resilient systems.
              </p>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-zinc-800/80 mb-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono">
                    5+
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono">
                    35%
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Latency Reduction
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-400 font-mono">
                    99.9%
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    Production Uptime
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>Explore Projects</span>
                <FiArrowUpRight size={16} />
              </a>

              {personal.resumeUrl && (
                <a
                  href={personal.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-200 text-xs sm:text-sm font-medium transition-colors"
                >
                  <FiDownload size={15} />
                  <span>Download CV</span>
                </a>
              )}

              <div className="flex items-center gap-2 ml-auto">
                <a
                  href="https://github.com/pkumar-234024"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white transition-colors"
                >
                  <FiGithub size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/praveen991210/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white transition-colors"
                >
                  <FiLinkedin size={17} />
                </a>
                <a
                  href="https://leetcode.com/u/praveen991210/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LeetCode Profile"
                  className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white transition-colors"
                >
                  <SiLeetcode size={17} />
                </a>
              </div>
            </div>
          </BentoCard>

          {/* ============================================================== */}
          {/* 2. FEATURED PROJECT CARD (col-span-12 lg:col-span-4) */}
          {/* ============================================================== */}
          <BentoCard
            className="md:col-span-12 lg:col-span-4"
            glowColor="rgba(16, 185, 129, 0.12)"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                  <FiZap size={14} /> Featured System
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {featuredProject.badge || "Live Site"}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {featuredProject.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                {featuredProject.description}
              </p>

              {/* Key Metrics Highlight Box */}
              <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 mb-5">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  System Benchmarks
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60">
                    <span className="block text-lg font-bold text-emerald-400 font-mono">
                      -40%
                    </span>
                    <span className="text-[10px] text-zinc-400">
                      Query Latency (CQRS)
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-950/60 border border-zinc-800/60">
                    <span className="block text-lg font-bold text-indigo-400 font-mono">
                      Azure
                    </span>
                    <span className="text-[10px] text-zinc-400">
                      High Availability
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech stack badge pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {featuredProject.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-zinc-800/70 text-zinc-300 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Demo Link */}
            <a
              href="https://bar-patrol.net/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-500/50 hover:bg-zinc-800/80 transition-all text-xs font-mono font-medium text-zinc-200 group/link"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Visit Live Platform</span>
              </span>
              <FiArrowUpRight
                size={16}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform text-emerald-400"
              />
            </a>
          </BentoCard>

          {/* ============================================================== */}
          {/* 3. TECH STACK SHOWCASE (col-span-12 md:col-span-6) */}
          {/* ============================================================== */}
          <BentoCard
            className="md:col-span-12 lg:col-span-6"
            glowColor="rgba(56, 189, 248, 0.12)"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                  <FiCpu className="text-cyan-400" size={18} />
                  <span>Technical Arsenal</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  Full-Stack Architecture
                </span>
              </div>

              <div className="space-y-4">
                {/* Backend Stack */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                    <FiServer size={13} className="text-purple-400" />
                    <span>Backend & Data Pipeline</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "C#",
                      ".NET Core",
                      "Web API",
                      "Entity Framework",
                      "SQL Server",
                      "CQRS Pattern",
                      "Clean Architecture",
                      "LINQ",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-purple-500/10 text-purple-300 border border-purple-500/20 hover:border-purple-500/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Frontend Stack */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                    <FiCode size={13} className="text-indigo-400" />
                    <span>Frontend & Web Systems</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "React.js",
                      "TypeScript",
                      "JavaScript ES6+",
                      "Tailwind CSS",
                      "Bootstrap",
                      "HTML5/CSS3",
                      "AJAX & SyncFusion",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:border-indigo-500/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cloud & AI Tools */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                    <FiCloud size={13} className="text-cyan-400" />
                    <span>Cloud, DevOps & Agentic AI Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Azure App Services",
                      "Azure SQL",
                      "Git / CI-CD",
                      "Postman / Swagger",
                      "Cursor",
                      "Claude Code",
                      "Antigravity",
                      "OpenAI Codex",
                    ].map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs font-mono rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Standard: Clean Architecture</span>
              <span className="text-cyan-400">OOP & SOLID Compliant</span>
            </div>
          </BentoCard>

          {/* ============================================================== */}
          {/* 4. EXPERIENCE & CAREER TIMELINE (col-span-12 md:col-span-6) */}
          {/* ============================================================== */}
          <BentoCard
            className="md:col-span-12 lg:col-span-6"
            glowColor="rgba(244, 63, 94, 0.12)"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                  <FiClock className="text-rose-400" size={18} />
                  <span>Career Trajectory</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400">
                  5+ Years Progressive Journey
                </span>
              </div>

              <div className="space-y-4 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-zinc-800">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-8 group/item">
                    {/* Glowing Node */}
                    <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-zinc-900 border-2 border-indigo-500 group-hover/item:border-rose-400 group-hover/item:scale-125 transition-all" />

                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <h4 className="text-sm font-bold text-white group-hover/item:text-indigo-300 transition-colors">
                        {exp.role}{" "}
                        <span className="text-zinc-400 font-normal">@</span>{" "}
                        {exp.companyLink ? (
                          <a
                            href={exp.companyLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-indigo-400 hover:underline"
                          >
                            {exp.company}
                          </a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                      </h4>
                      <span className="text-xs font-mono text-zinc-400 px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-2">
                      {exp.description}
                    </p>

                    {/* Tech Pills */}
                    {exp.techStack && (
                      <div className="flex flex-wrap gap-1">
                        {exp.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-400 border border-zinc-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <FiMapPin size={13} className="text-rose-400" />
                <span>Noida, UP / Delhi NCR</span>
              </span>
              <a
                href="#experience"
                className="text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
              >
                <span>Full Timeline</span>
                <FiArrowUpRight size={13} />
              </a>
            </div>
          </BentoCard>

          {/* ============================================================== */}
          {/* 5. DIRECT CONTACT & CONNECT CARD (col-span-12) */}
          {/* ============================================================== */}
          <BentoCard
            className="col-span-12"
            glowColor="rgba(168, 85, 247, 0.12)"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Column: Connect Pitch */}
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
                  <FiMail size={13} />
                  <span>DIRECT TRANSMISSION</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-mono">
                  Let's Build Something Resilient.
                </h3>
                <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
                  Open for software engineering opportunities, enterprise architecture,
                  and technical consulting. Reach out directly or copy my email below.
                </p>
              </div>

              {/* Right Column: Interactive Email Pill & Quick Action */}
              <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-end">
                {/* One-Click Copy Pill */}
                <button
                  onClick={copyEmail}
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-purple-500/60 hover:bg-zinc-800/80 transition-all text-xs sm:text-sm font-mono text-zinc-200 group/btn cursor-pointer"
                >
                  <span className="flex items-center gap-2 truncate">
                    <FiMail className="text-purple-400 shrink-0" size={16} />
                    <span className="truncate">{personal.email}</span>
                  </span>
                  <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-800 text-[11px] text-zinc-400 group-hover/btn:text-white shrink-0">
                    {copied ? (
                      <>
                        <FiCheck className="text-emerald-400" size={13} />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <FiCopy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </span>
                </button>

                {/* Location & Local Clock info bar */}
                <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={13} className="text-zinc-500" />
                    <span>IST (UTC+5:30)</span>
                  </span>
                  <span className="text-zinc-300">
                    {currentTime || "19:46:00 IST"}
                  </span>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
