// ============================================================
// Portfolio Data - Updated from Resume and Cover Letter
// ============================================================

export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  achievements?: string[];
  techStack: string[];
  github?: string;
  demo?: string;
  image?: string;
  badge?: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location?: string;
  duration: string;
  description: string;
  achievements: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  grade: string;
  year: string;
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

export interface CoverLetterData {
  salutation: string;
  paragraphs: string[];
  signOff: string;
  name: string;
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
  education: Education[];
  projects: Project[];
  skillCategories: SkillCategory[];
  coverLetter: CoverLetterData;
  navLinks: { label: string; href: string }[];
}

const portfolioData: PortfolioData = {
  personal: {
    name: "Praveen Kumar",
    firstName: "Praveen",
    lastName: "Kumar",
    title: "Full-Stack .NET Developer",
    tagline: "Innovative Full-Stack .NET Developer with almost 5 years of experience building scalable, secure, and high-performing web applications.",
    email: "praveen991210@gmail.com",
    phone: "800-524-1110",
    location: "Noida, UP, India",
    about:
      "Innovative Full-Stack .NET Developer with almost 5 years of experience delivering scalable, secure, and high-performing web solutions across diverse projects. Expertise in front-end and back-end development, system architecture, RESTful API development using Entity Framework and LINQ, and database optimization. Known for writing clean, maintainable code and driving efficient development practices to deliver impactful digital experiences.",
    objective:
      "To design and build secure REST APIs, optimize database performance, and collaborate with cross-functional teams to deliver quality software solutions, leveraging Clean Architecture, object-oriented programming, and clean coding practices to drive impactful digital experiences.",
    resumeUrl: "#",
    avatarUrl: "/profile.jpg",
  },

  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "github",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com",
      icon: "leetcode",
    },
  ],

  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Cover Letter", href: "#cover-letter" },
    { label: "Contact", href: "#contact" },
  ],

  experience: [
    {
      id: 1,
      role: "Software Developer",
      company: "Intellisoft Technologies",
      location: "Noida, UP",
      duration: "Sep 2021 – Aug 2026",
      description:
        "Engineered scalable, maintainable full-stack solutions using ASP.NET Core, MVC, Web API, and C#, leveraging Clean Architecture, Code-First, and Database-First approaches to meet diverse client needs.",
      achievements: [
        "Spearheaded process improvements that increased project delivery efficiency by 40% and shortened development cycle times by 20%, delivering projects faster and with higher quality.",
        "Optimized complex SQL queries and back-end logic to deliver a 20% boost in database performance and a 25% overall increase in system responsiveness.",
        "Engineered scalable, maintainable solutions using ASP.NET, MVC, Web API, and C#, leveraging Clean Architecture, Code-First, and Database-First approaches.",
        "Championed best coding practices and code reviews to maintain high-quality standards across the team.",
        "Mentored and trained interns, leading to a 30% improvement in their technical skills, confidence, and contribution to project success.",
        "Collaborated cross-functionally with front-end developers, QA teams, and project managers to ensure seamless integration and on-time delivery.",
      ],
    },
  ],

  education: [
    {
      id: 1,
      degree: "B.Tech (Computer Science & Engineering)",
      institution: "Bundelkhand University",
      grade: "CGPA — 7.5 / 10.0",
      year: "2017 – 2021",
    },
    {
      id: 2,
      degree: "Intermediate (12th Grade)",
      institution: "Board Of High and Intermediate Education (U.P)",
      grade: "Percentage — 79%",
      year: "March 2016",
    },
    {
      id: 3,
      degree: "High School (10th Grade)",
      institution: "Board Of High and Intermediate Education (U.P)",
      grade: "Percentage — 85%",
      year: "March 2014",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Sonora Construction",
      subtitle: ".NET Core MVC, C#, Entity Framework, SQL Server, SyncFusion, AJAX, JavaScript, RDLC, SMTP, QuickBooks",
      description:
        "Enterprise construction management platform modernization. Migrated legacy MS Access system to a modernized .NET Core MVC application using Database-First approach and SQL Server stored procedures.",
      techStack: [
        ".NET Core MVC",
        "C#",
        "Entity Framework",
        "SQL Server",
        "SyncFusion",
        "AJAX",
        "RDLC Reports",
        "QuickBooks API",
      ],
      achievements: [
        "Migrated legacy MS Access database to .NET Core MVC using Database-First approach & SQL Server stored procedures, improving maintainability & scalability.",
        "Consolidated multiple websites into a single multi-tenant platform, delivering a unified user experience.",
        "Implemented role-based authentication and authorization with full dependency injection for clean, testable code.",
        "Integrated SYNCFUSION UI components to accelerate frontend development, reducing UI dev time & cost by 35%.",
        "Developed dynamic RDLC reports, SMTP transactional alert engine, and custom QuickBooks timesheet sync console.",
        "Boosted user experience & performance by 40% through AJAX-based seamless rendering.",
      ],
    },
    {
      id: 2,
      title: "eco On Site",
      subtitle: "Smart Waste Monitoring System | ASP.NET Core Web API, Entity Framework, SQL Server, Flutter, React",
      description:
        "Full-stack waste collection platform powering a Flutter mobile application and React admin dashboard with real-time pickup tracking and analytics.",
      techStack: [
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "SQL Server",
        "React.js",
        "Flutter",
        "JWT & RBAC",
      ],
      achievements: [
        "Designed and developed secure RESTful APIs using ASP.NET Core Web API and Entity Framework Core.",
        "Implemented JWT authentication and Role-Based Access Control (RBAC) to secure API endpoints across mobile and web clients.",
        "Built real-time collection tracking endpoints to log and update waste pickup status across late, missed, and successful events.",
        "Developed backend analytics dashboards aggregating collection event data to surface actionable operational insights.",
        "Optimized database schema and queries in SQL Server to efficiently handle collection event logging at scale.",
      ],
    },
    {
      id: 3,
      title: "Bar-Patrol",
      subtitle: "C#, .NET Core Web API, React, SQL Server, Azure, SendGrid, CQRS",
      description:
        "High-availability venue inventory and management platform. Applied CQRS pattern to separate read and write operations, optimized SQL stored procedures (40% query latency reduction), and deployed on Azure.",
      techStack: [
        ".NET Core Web API",
        "C#",
        "React.js",
        "SQL Server",
        "CQRS Pattern",
        "Azure",
        "SendGrid",
      ],
      badge: "Live Site",
      achievements: [
        "Developed secure RESTful APIs with authentication, role-based authorization, advanced filtering, and custom middleware.",
        "Applied CQRS (Command Query Responsibility Segregation) pattern to separate read and write operations.",
        "Optimized data access with SQL Server stored procedures, reducing query latency by 40%.",
        "Deployed application on Azure for high availability and integrated SendGrid for transactional email delivery.",
      ],
    },
    {
      id: 4,
      title: "BullDog",
      subtitle: "C#, Console Application, SQL Server, Selenium, Salesforce API, Windows Services",
      description:
        "Automated real estate web scraping engine built in C# using Selenium. Scheduled continuous updates via Windows Service and pushed transformed data directly into Salesforce REST API.",
      techStack: [
        "C#",
        "Console Application",
        "Selenium",
        "Windows Services",
        "Salesforce REST API",
        "SQL Server",
      ],
      achievements: [
        "Built a C# console application to automate web scraping from Redfin and Redfin Agent websites using Selenium.",
        "Developed a Windows Service scheduler to run the scraping engine at predefined intervals for continuous data updates.",
        "Parsed and transformed scraped data, pushing it directly to Salesforce via Salesforce REST API for seamless CRM integration.",
        "Stored and transformed data in SQL Server for logging, reporting, and backup with zero manual intervention.",
      ],
    },
    {
      id: 5,
      title: "Security Trax",
      subtitle: "React, .NET Core Web API, C#, Bootstrap, SQL Server, Entity Framework",
      description:
        "Modern security service dashboard and report generation engine built with React.js and ASP.NET Core Web API, achieving a 30% improvement in data retrieval speed.",
      techStack: [
        "React.js",
        "ASP.NET Core Web API",
        "C#",
        "Entity Framework",
        "SQL Server",
        "Bootstrap",
      ],
      achievements: [
        "Developed a modern, responsive React.js dashboard to schedule appointments and generate detailed security service reports.",
        "Designed and deployed scalable RESTful APIs with .NET Core and Entity Framework, achieving a 30% improvement in data retrieval speed.",
        "Implemented robust authentication & authorization workflows to secure API endpoints.",
        "Integrated middleware for logging, error handling, and request validation for a maintainable backend architecture.",
      ],
    },
  ],

  skillCategories: [
    {
      category: "Backend & .NET",
      icon: "backend",
      skills: [
        { name: "C#", level: 95 },
        { name: "ASP.NET Core", level: 95 },
        { name: "ASP.NET Web API", level: 92 },
        { name: "ASP.NET MVC", level: 90 },
        { name: "Entity Framework Core / EF", level: 92 },
        { name: "LINQ & CQRS Pattern", level: 88 },
        { name: "RESTful APIs", level: 95 },
        { name: "Dependency Injection", level: 90 },
      ],
    },
    {
      category: "Frontend Development",
      icon: "frontend",
      skills: [
        { name: "React.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML5 / CSS3", level: 92 },
        { name: "Bootstrap / Tailwind", level: 88 },
        { name: "AJAX & SyncFusion UI", level: 85 },
      ],
    },
    {
      category: "Database & Cloud",
      icon: "database",
      skills: [
        { name: "Microsoft SQL Server", level: 92 },
        { name: "T-SQL / Stored Procedures", level: 95 },
        { name: "Query Optimization", level: 90 },
        { name: "Azure App Services", level: 85 },
        { name: "Azure SQL Database", level: 85 },
        { name: "Azure Storage & DevOps", level: 80 },
      ],
    },
    {
      category: "Tools, Security & Practices",
      icon: "tools",
      skills: [
        { name: "JWT & Role-Based Auth (RBAC)", level: 90 },
        { name: "Visual Studio 2022 / SSMS", level: 95 },
        { name: "Git / Bitbucket / Sourcetree", level: 90 },
        { name: "Postman / Swagger (OpenAPI)", level: 92 },
        { name: "Selenium & Unit Testing", level: 82 },
        { name: "OOP / SOLID / Clean Architecture", level: 92 },
      ],
    },
  ],

  coverLetter: {
    salutation: "Dear Hiring Manager,",
    paragraphs: [
      "I am excited to apply for the C# Developer position. With almost 5 years of experience in C#, ASP.NET Core, Web API, Entity Framework, and SQL Server, I have developed and maintained scalable, high-performance applications across various domains.",
      "In my current role, I design and build secure REST APIs, optimize database performance, and collaborate with cross-functional teams to deliver quality software solutions. My strong understanding of object-oriented programming, clean coding practices, and problem-solving skills makes me confident in contributing effectively to your team.",
      "I would welcome the opportunity to discuss how my skills and experience align with your requirements. Thank you for your time and consideration.",
    ],
    signOff: "Sincerely,",
    name: "Praveen Kumar",
  },
};

export default portfolioData;

