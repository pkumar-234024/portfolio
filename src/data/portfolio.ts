// ============================================================
// Portfolio Data - Edit this file to customize your portfolio
// ============================================================

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    title: string;
    tagline: string;
    email: string;
    phone: string;
    location: string;
    about: string;
    objective: string;
    resumeUrl?: string;
    avatarUrl?: string;
  };
  socialLinks: SocialLink[];
  experience: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  navLinks: { label: string; href: string }[];
}

const portfolioData: PortfolioData = {
  personal: {
    name: "Praveen Kumar",
    firstName: "Praveen",
    lastName: "Kumar",
    title: "Full Stack Developer",
    tagline: "Building digital experiences that make a difference",
    email: "praveen@example.com",
    phone: "+91 9876543210",
    location: "Bangalore, India",
    about:
      "I'm a passionate Full Stack Developer with 4 years of experience crafting robust, scalable web applications. I specialize in React, Node.js, and cloud technologies, with a keen eye for UI/UX design. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    objective:
      "To leverage my expertise in modern web technologies and software engineering principles to deliver high-impact, user-centric digital products. I thrive in collaborative environments where innovation meets execution, and I'm driven by the pursuit of clean code and exceptional user experiences.",
    resumeUrl: "#",
    // 👇 Add your profile photo to /public/profile.jpg (or .png)
    // Then set: avatarUrl: "/profile.jpg"
    avatarUrl: "/profile.jpg",
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/praveen",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/praveen",
      icon: "linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/praveen",
      icon: "twitter",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/praveen",
      icon: "instagram",
    },
  ],

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  experience: [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "TechCorp Solutions",
      duration: "Jan 2024 – Present",
      description:
        "Leading frontend development for enterprise SaaS products, mentoring junior developers, and driving architectural decisions.",
      achievements: [
        "Architected a micro-frontend system serving 50K+ daily users",
        "Reduced page load time by 40% through code splitting and lazy loading",
        "Led migration from JavaScript to TypeScript across 15+ repositories",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "InnovateTech Pvt Ltd",
      duration: "Jun 2022 – Dec 2023",
      description:
        "Built and maintained full-stack applications using React, Node.js, and PostgreSQL for diverse client projects.",
      achievements: [
        "Developed a real-time dashboard processing 1M+ data points daily",
        "Built RESTful APIs handling 10K+ requests per minute",
        "Integrated payment gateways increasing transaction success rate by 25%",
        "Mentored 3 junior developers and conducted code reviews",
      ],
    },
    {
      id: 3,
      role: "Junior Software Developer",
      company: "StartupHub",
      duration: "Mar 2021 – May 2022",
      description:
        "Contributed to product development in an agile startup environment, working across the full stack.",
      achievements: [
        "Built responsive UI components used across 5 product modules",
        "Implemented OAuth 2.0 authentication supporting 3 providers",
        "Reduced bug count by 30% through comprehensive unit testing",
        "Collaborated with designers to implement pixel-perfect UI designs",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with real-time inventory management, payment processing, and an admin dashboard. Supports multi-vendor operations with role-based access control.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      github: "https://github.com/praveen/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
    },
    {
      id: 2,
      title: "AI Chat Application",
      description:
        "Real-time chat application powered by AI with smart suggestions, message translation, and sentiment analysis. Features end-to-end encryption and WebSocket communication.",
      techStack: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL", "Tailwind"],
      github: "https://github.com/praveen/ai-chat",
      demo: "https://ai-chat-demo.vercel.app",
    },
    {
      id: 3,
      title: "Project Management Tool",
      description:
        "A comprehensive project management tool with Kanban boards, Gantt charts, time tracking, and team collaboration features. Built for agile teams.",
      techStack: ["React", "TypeScript", "GraphQL", "Prisma", "AWS"],
      github: "https://github.com/praveen/project-mgmt",
      demo: "https://pm-tool-demo.vercel.app",
    },
    {
      id: 4,
      title: "Real-Time Analytics Dashboard",
      description:
        "Interactive analytics dashboard with real-time data visualization, custom reports, and predictive analytics powered by machine learning models.",
      techStack: ["Vue.js", "D3.js", "Python", "FastAPI", "Docker"],
      github: "https://github.com/praveen/analytics",
      demo: "https://analytics-demo.vercel.app",
    },
    {
      id: 5,
      title: "Social Media Scheduler",
      description:
        "Automated social media management platform with AI-powered content suggestions, scheduling, analytics, and multi-platform support.",
      techStack: ["React", "Node.js", "Bull MQ", "Redis", "OAuth"],
      github: "https://github.com/praveen/social-scheduler",
    },
    {
      id: 6,
      title: "DevOps Monitoring Suite",
      description:
        "Comprehensive monitoring solution for microservices with alerting, log aggregation, performance metrics, and automated incident response.",
      techStack: ["React", "Go", "Prometheus", "Grafana", "K8s"],
      github: "https://github.com/praveen/devops-monitor",
      demo: "https://monitor-demo.vercel.app",
    },
  ],

  skillCategories: [
    {
      category: "Frontend",
      icon: "frontend",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "Vue.js", level: 75 },
        { name: "Three.js", level: 65 },
      ],
    },
    {
      category: "Backend",
      icon: "backend",
      skills: [
        { name: "Node.js / Express", level: 90 },
        { name: "Python / Django", level: 78 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "GraphQL", level: 75 },
        { name: "Redis", level: 70 },
      ],
    },
    {
      category: "Tools & DevOps",
      icon: "tools",
      skills: [
        { name: "Git / GitHub", level: 92 },
        { name: "Docker", level: 80 },
        { name: "AWS / GCP", level: 75 },
        { name: "CI/CD", level: 82 },
        { name: "Linux", level: 78 },
        { name: "Figma", level: 70 },
      ],
    },
  ],
};

export default portfolioData;
