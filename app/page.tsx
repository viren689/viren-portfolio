"use client";

import { useEffect, useState } from "react";

/* =========================================================
   PERSONAL / SITE DATA
========================================================= */

const GITHUB = "https://github.com/viren689";
const LINKEDIN = "https://www.linkedin.com/in/viren-wankhade";
const EMAIL = "viren19271@gmail.com";
const GMAIL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=viren19271@gmail.com";
const RESUME = "/resume.pdf";
const DATAFORGE_DEMO = "https://dataforge-ai-nine.vercel.app/";

/* =========================================================
   EXPERIENCE
========================================================= */

const experience = [
  {
    role: "Data Science Intern",
    company: "The Developers Arena",
    period: "July 2026 – Present",
    type: "CURRENT",
    icon: "DS",
    description:
      "Working on practical data science projects involving Python, data analysis, statistics, machine learning, visualization, preprocessing, and end-to-end project development.",
    skills: [
      "Python",
      "Pandas",
      "Machine Learning",
      "Data Analysis",
      "Statistics",
      "Data Visualization",
    ],
  },
  {
    role: "Sales Executive / Officer",
    company: "HDB Financial Services",
    period: "December 2025 – June 2026",
    type: "6 MONTHS",
    icon: "SF",
    description:
      "Worked in a customer-focused financial environment, handling customer relationships, financial products, documentation, lead management, and sales operations.",
    skills: [
      "Customer Management",
      "Lead Generation",
      "Financial Products",
      "Sales",
      "Documentation",
      "Business Understanding",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Seven Mentor",
    period: "June 2025 – December 2025",
    type: "6 MONTHS",
    icon: "DA",
    description:
      "Gained practical experience with data analysis workflows using Python, SQL, Excel, Power BI, data cleaning, visualization, and analytical problem solving.",
    skills: [
      "Python",
      "SQL",
      "Pandas",
      "Excel",
      "Power BI",
      "Data Visualization",
    ],
  },
];

/* =========================================================
   PROJECTS

   NOTE:
   Individual repository URLs were not available in the
   current project data, so profile GitHub is used safely
   instead of inventing repository URLs.
========================================================= */

const projects = [
  {
    number: "01",
    badge: "FLAGSHIP",
    category: "DATA SCIENCE",
    title: "Comprehensive Data Science Project",
    description:
      "An end-to-end data science solution covering business problem definition, data validation, cleaning, exploratory analysis, feature engineering, machine learning, model evaluation, and business recommendations.",
    overview:
      "A complete data science workflow designed to move from a business problem and raw data toward validated insights, machine learning results, and practical recommendations.",
    objective:
      "Build a structured, reproducible workflow that demonstrates the complete data science lifecycle.",
    approach: [
      "Business problem definition",
      "Data validation and cleaning",
      "Exploratory data analysis",
      "Feature engineering",
      "Machine learning",
      "Model evaluation",
      "Business recommendations",
    ],
    results:
      "Demonstrated an end-to-end workflow covering analysis, preprocessing, modeling, evaluation, and communication.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning",
      "Data Visualization",
    ],
    icon: "⌁",
    featured: true,
    github: GITHUB,
    demo: "",
    metrics: [
      ["Workflow", "End-to-End"],
      ["Focus", "Data Science"],
      ["Output", "Recommendations"],
    ],
  },
  {
    number: "02",
    badge: "MACHINE LEARNING",
    category: "CUSTOMER ANALYTICS",
    title: "Customer Segmentation & Prediction",
    description:
      "Analyzed customer behavior using clustering techniques and prediction models to identify meaningful customer segments and generate actionable business insights.",
    overview:
      "A customer analytics project combining unsupervised clustering with prediction workflows to understand different customer groups.",
    objective:
      "Identify meaningful customer segments and use those segments to support targeted business decisions.",
    approach: [
      "Customer data preparation",
      "Exploratory analysis",
      "K-Means clustering",
      "Hierarchical clustering",
      "DBSCAN",
      "Segment analysis",
      "Random Forest prediction",
    ],
    results:
      "Compared multiple clustering approaches and translated segment characteristics into targeted business recommendations.",
    tech: [
      "Python",
      "Pandas",
      "K-Means",
      "DBSCAN",
      "Random Forest",
      "Scikit-learn",
    ],
    icon: "◌",
    featured: false,
    github: GITHUB,
    demo: "",
    metrics: [
      ["Approach", "Clustering"],
      ["Models", "K-Means + DBSCAN"],
      ["Focus", "Customer Analytics"],
    ],
  },
  {
    number: "03",
    badge: "MACHINE LEARNING",
    category: "PREDICTIVE ANALYTICS",
    title: "Customer Churn Prediction",
    description:
      "Built a machine learning workflow for predicting customer churn using preprocessing, categorical encoding, feature scaling, outlier handling, feature selection, and feature engineering.",
    overview:
      "A predictive analytics workflow focused on preparing structured customer data and creating a reusable churn prediction pipeline.",
    objective:
      "Build a reliable preprocessing and machine learning workflow for identifying customers at risk of churn.",
    approach: [
      "Data cleaning",
      "Categorical encoding",
      "Feature scaling",
      "Outlier handling",
      "Feature selection",
      "Feature engineering",
      "Model development",
    ],
    results:
      "Created a reusable preprocessing workflow and documented the reasoning behind the major transformation steps.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Feature Engineering",
      "ML Pipeline",
    ],
    icon: "↘",
    featured: false,
    github: GITHUB,
    demo: "",
    metrics: [
      ["Problem", "Churn"],
      ["Workflow", "ML Pipeline"],
      ["Focus", "Prediction"],
    ],
  },
  {
    number: "04",
    badge: "REGRESSION",
    category: "MACHINE LEARNING",
    title: "House Price Prediction",
    description:
      "Developed a regression workflow to predict house prices from property features and evaluated the model using standard regression metrics.",
    overview:
      "A supervised machine learning project focused on predicting property prices from structured housing features.",
    objective:
      "Build and evaluate a regression model capable of estimating house prices from property characteristics.",
    approach: [
      "Dataset preparation",
      "Feature analysis",
      "Train-test split",
      "Regression modeling",
      "MAE evaluation",
      "MSE evaluation",
      "R² evaluation",
      "Prediction vs actual analysis",
    ],
    results:
      "Built a complete regression workflow with model evaluation and prediction-versus-actual visualization.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Regression",
    ],
    icon: "⌂",
    featured: false,
    github: GITHUB,
    demo: "",
    metrics: [
      ["Type", "Regression"],
      ["Evaluation", "MAE / MSE / R²"],
      ["Focus", "Prediction"],
    ],
  },
  {
    number: "05",
    badge: "DATA ANALYSIS",
    category: "BUSINESS ANALYTICS",
    title: "Black Friday Data Analysis",
    description:
      "Analyzed Black Friday customer purchase data to discover spending patterns, customer behavior, product performance, and factors influencing purchasing decisions.",
    overview:
      "A business-focused exploratory analysis of Black Friday purchasing data designed to uncover customer and product-level patterns.",
    objective:
      "Understand purchasing behavior, product performance, spending patterns, and customer characteristics.",
    approach: [
      "Data loading",
      "Data cleaning",
      "Exploratory analysis",
      "Customer analysis",
      "Product analysis",
      "Spending analysis",
      "Visualization",
      "Business insights",
    ],
    results:
      "Generated customer, product, and spending insights that can support better understanding of purchasing behavior.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Data Analysis",
      "Visualization",
    ],
    icon: "◫",
    featured: false,
    github: GITHUB,
    demo: "",
    metrics: [
      ["Focus", "Customer Insights"],
      ["Analysis", "Purchasing"],
      ["Output", "Business Insights"],
    ],
  },
  {
    number: "06",
    badge: "AI / WEB",
    category: "AI APPLICATION",
    title: "DataForge AI",
    description:
      "A modern AI-focused data platform built as a production-style web application, combining a polished interface with practical AI and data capabilities.",
    overview:
      "A separate AI/web development project demonstrating modern frontend development, application structure, and AI-oriented product thinking.",
    objective:
      "Build a modern, polished AI-focused web application with a production-style user experience.",
    approach: [
      "Next.js application architecture",
      "React components",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
      "AI-oriented product design",
      "Vercel deployment",
    ],
    results:
      "Created and deployed a modern AI/web application with a responsive interface.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "AI",
      "Vercel",
    ],
    icon: "✦",
    featured: false,
    github: GITHUB,
    demo: DATAFORGE_DEMO,
    metrics: [
      ["Type", "AI / Web"],
      ["Framework", "Next.js"],
      ["Deployment", "Vercel"],
    ],
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Data Analytics",
    description:
      "Transforming raw datasets into clear insights, trends, KPIs, dashboards, and business recommendations.",
  },
  {
    number: "02",
    title: "Machine Learning",
    description:
      "Building predictive models for classification, regression, clustering, and customer-focused problems.",
  },
  {
    number: "03",
    title: "Data Visualization",
    description:
      "Creating meaningful dashboards and visual stories that make complex information easier to understand.",
  },
  {
    number: "04",
    title: "AI & Applications",
    description:
      "Building modern AI-powered applications that connect data, technology, and practical user experiences.",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const skillGroups = [
  {
    code: "DS",
    number: "01",
    title: "Data Science & ML",
    description:
      "Building predictive models and extracting meaningful insights from structured data.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Machine Learning",
      "Feature Engineering",
      "EDA",
      "Statistics",
    ],
  },
  {
    code: "DA",
    number: "02",
    title: "Data Analytics",
    description:
      "Transforming raw data into dashboards, patterns, KPIs, and actionable business insights.",
    skills: [
      "SQL",
      "Power BI",
      "Excel",
      "Data Visualization",
      "Data Cleaning",
      "Business Analysis",
      "Reporting",
    ],
  },
  {
    code: "PY",
    number: "03",
    title: "Programming",
    description:
      "Writing structured code for analysis, automation, applications, and problem solving.",
    skills: [
      "Python",
      "SQL",
      "C#",
      "JavaScript",
      "TypeScript",
      ".NET",
      "OOP",
    ],
  },
  {
    code: "WEB",
    number: "04",
    title: "Web Development",
    description:
      "Building responsive interfaces and modern web applications with a focus on usability.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    code: "DEV",
    number: "05",
    title: "Tools & Platforms",
    description:
      "Tools used for development, version control, experimentation, analytics, and deployment.",
    skills: [
      "Git",
      "GitHub",
      "Jupyter",
      "VS Code",
      "Vercel",
      "MySQL",
      "Power BI",
      "Excel",
    ],
  },
  {
    code: "↗",
    number: "06",
    title: "My Approach",
    description:
      "I focus on understanding the problem first, then using data and technology to build practical solutions.",
    skills: [
      "Understand",
      "Clean",
      "Analyze",
      "Build",
      "Evaluate",
      "Communicate",
    ],
  },
];

/* =========================================================
   ICONS
========================================================= */

function ArrowUpRight() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.35-3.87-1.35-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.18v3.23c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

/* =========================================================
   EXPERIENCE FLIP CARD
========================================================= */

function ExperienceCard({
  item,
}: {
  item: (typeof experience)[number];
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      aria-label={`View details for ${item.role} at ${item.company}`}
      className="group h-[440px] w-full cursor-pointer text-left [perspective:1200px]"
      onClick={() => setFlipped((value) => !value)}
    >
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-white/[0.055] to-white/[0.015] p-7 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/30 group-hover:shadow-[0_20px_80px_rgba(37,99,235,0.10)] sm:p-8">
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.07] blur-[90px]" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/[0.08] text-sm font-bold text-blue-400">
                  {item.icon}
                </div>

                <span
                  className={`rounded-full border px-3 py-1.5 text-[9px] font-semibold tracking-[0.15em] ${
                    item.type === "CURRENT"
                      ? "border-emerald-400/20 bg-emerald-400/[0.08] text-emerald-400"
                      : "border-white/10 bg-white/[0.03] text-zinc-500"
                  }`}
                >
                  {item.type}
                </span>
              </div>

              <p className="mt-12 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                {item.period}
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                {item.role}
              </h3>

              <p className="mt-3 text-sm font-medium text-blue-400">
                {item.company}
              </p>
            </div>

            <div className="relative flex items-center justify-between border-t border-white/[0.06] pt-5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                Click to explore
              </span>

              <span className="text-sm text-zinc-600 transition group-hover:rotate-180 group-hover:text-blue-400">
                ↻
              </span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="relative flex h-full flex-col overflow-hidden rounded-[32px] border border-blue-400/20 bg-[#0a0b0d] p-7 sm:p-8">
            <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-blue-500/[0.07] blur-[90px]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                  Experience
                </span>

                <span className="text-xs text-zinc-700">{item.icon}</span>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-white">
                {item.role}
              </h3>

              <p className="mt-1 text-sm text-blue-400">{item.company}</p>

              <p className="mt-6 text-sm leading-7 text-zinc-500">
                {item.description}
              </p>

              <div className="mt-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
                  Focus Areas
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-5">
              <span className="text-[10px] text-zinc-700">{item.period}</span>

              <span className="text-[10px] uppercase tracking-[0.18em] text-blue-400">
                Click to flip
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({
  project,
  onDetails,
}: {
  project: (typeof projects)[number];
  onDetails: () => void;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[30px] border p-7 transition-all duration-500 hover:-translate-y-2 sm:p-8 ${
        project.featured
          ? "border-blue-400/25 bg-gradient-to-br from-blue-500/[0.08] via-[#090a0c] to-[#090909] hover:border-blue-400/50"
          : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.16]"
      }`}
    >
      <div
        className={`absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[100px] transition-all duration-500 ${
          project.featured
            ? "bg-blue-500/[0.10] group-hover:bg-blue-500/[0.18]"
            : "bg-white/[0.03] group-hover:bg-blue-500/[0.07]"
        }`}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={`rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] ${
              project.featured
                ? "border-blue-400/25 bg-blue-400/[0.08] text-blue-400"
                : "border-white/[0.08] bg-white/[0.025] text-zinc-500"
            }`}
          >
            {project.badge}
          </span>

          <span className="text-xs text-zinc-700">{project.number}</span>
        </div>

        <div className="mt-9 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] text-xl text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-400/30">
          {project.icon}
        </div>

        <p className="mt-7 text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-700">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-4 min-h-[96px] text-sm leading-7 text-zinc-500">
          {project.description}
        </p>

        {/* METRICS */}
        <div className="mt-6 grid grid-cols-3 gap-2">
          {project.metrics.map(([value, label]) => (
            <div
              key={label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 transition group-hover:border-blue-400/10"
            >
              <p className="truncate text-[11px] font-semibold text-white">
                {value}
              </p>
              <p className="mt-1 truncate text-[8px] uppercase tracking-[0.12em] text-zinc-700">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex min-h-[62px] flex-wrap content-start gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[10px] text-zinc-400 transition hover:border-blue-400/25 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.06] pt-6">
          <button
            type="button"
            onClick={onDetails}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-zinc-950 transition hover:bg-blue-400"
          >
            Project Details
            <ArrowUpRight />
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] px-4 py-2.5 text-xs font-semibold text-zinc-300 transition hover:border-blue-400/40 hover:text-blue-400"
          >
            <GithubIcon />
            GitHub
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-full border border-white/[0.09] px-4 py-2.5 text-xs font-semibold text-zinc-300 transition hover:border-blue-400/40 hover:text-blue-400"
            >
              Live Demo
              <ArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PROJECT MODAL
========================================================= */

function ProjectModal({
  project,
  onClose,
}: {
  project: (typeof projects)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[32px] border border-white/[0.10] bg-[#0b0c0e] shadow-[0_30px_120px_rgba(0,0,0,0.65)]">
        <div className="sticky right-0 top-0 z-10 flex justify-end p-5">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-zinc-400 backdrop-blur transition hover:border-blue-400/30 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="px-7 pb-9 sm:px-10 sm:pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-400">
              {project.badge}
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-700">
              {project.category}
            </span>
          </div>

          <div className="mt-6 flex items-start gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/[0.06] text-2xl text-blue-400">
              {project.icon}
            </div>

            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.title}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
                {project.description}
              </p>
            </div>
          </div>

          {/* METRICS */}
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {project.metrics.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5"
              >
                <p className="text-xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-zinc-700">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                Overview
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-400">
                {project.overview}
              </p>

              <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                Objective
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-500">
                {project.objective}
              </p>

              <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                Key Outcome
              </p>

              <p className="mt-4 text-sm leading-8 text-zinc-500">
                {project.results}
              </p>
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                Approach
              </p>

              <div className="mt-4 space-y-2">
                {project.approach.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                  >
                    <span className="text-[9px] text-blue-400/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs text-zinc-500">{step}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-400">
                Technologies
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 border-t border-white/[0.06] pt-7">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-zinc-950 transition hover:bg-blue-400"
            >
              <GithubIcon />
              View GitHub
            </a>

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-xs font-semibold text-zinc-300 transition hover:border-blue-400/40 hover:text-blue-400"
              >
                Live Demo
                <ArrowUpRight />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   HOME
========================================================= */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  const navigation = [
    ["About", "about"],
    ["What I Build", "services"],
    ["Skills", "skills"],
    ["Experience", "experience"],
    ["Projects", "projects"],
    ["Hire Me", "contact"],
  ];

  /* =======================================================
     SEO
  ======================================================= */

  useEffect(() => {
    document.title =
      "Viren Wankhade | Data Analyst & Data Scientist";

    const description =
      "Viren Wankhade — Data Analyst and Data Scientist specializing in Python, SQL, Power BI, machine learning, data visualization, and business analytics.";

    const setMeta = (
      name: string,
      content: string,
      property = false
    ) => {
      const attribute = property ? "property" : "name";

      let element = document.head.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("author", "Viren Wankhade");
    setMeta(
      "keywords",
      "Viren Wankhade, Data Analyst, Data Scientist, Python, SQL, Power BI, Machine Learning, Pune"
    );

    setMeta("og:title", "Viren Wankhade | Data Analyst & Data Scientist", true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", "https://viren-wankhade.vercel.app/", true);

    setMeta(
      "twitter:card",
      "summary_large_image"
    );
    setMeta(
      "twitter:title",
      "Viren Wankhade | Data Analyst & Data Scientist"
    );
    setMeta("twitter:description", description);
  }, []);

  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "skills",
      "experience",
      "projects",
      "contact",
    ];

    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-30% 0px -55% 0px",
          threshold: 0,
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      <main
        id="home"
        className="min-h-screen overflow-hidden bg-[#080808] text-white selection:bg-blue-400 selection:text-black"
      >
        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#080808]/80 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <a
              href="#home"
              onClick={() => setActiveSection("home")}
              className="text-xl font-bold tracking-tighter"
            >
              VW<span className="text-blue-400">.</span>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              {navigation.map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`relative text-[13px] transition ${
                    activeSection === id
                      ? "text-white"
                      : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {label}

                  {activeSection === id && (
                    <span className="absolute -bottom-2 left-0 right-0 mx-auto h-px bg-blue-400" />
                  )}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="hidden rounded-full border border-blue-400/20 bg-blue-400/[0.05] px-5 py-2.5 text-xs font-medium text-blue-400 transition hover:border-blue-400/40 hover:bg-blue-400/[0.10] md:block"
            >
              Hire Me
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className="rounded-full border border-white/10 px-4 py-2 text-xs md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-white/[0.06] bg-[#080808] px-6 py-6 md:hidden">
              <div className="flex flex-col gap-5">
                {navigation.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => {
                      setMenuOpen(false);
                      setActiveSection(id);
                    }}
                    className={`text-sm transition ${
                      activeSection === id
                        ? "text-blue-400"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative flex min-h-screen items-center px-6 pt-24">
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/[0.07] blur-[150px]" />

          <div className="mx-auto w-full max-w-7xl">
            <div className="max-w-5xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-xs text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
                Available for opportunities
              </div>

              <p className="text-sm font-medium uppercase tracking-[0.35em] text-blue-400">
                Data Analyst • Data Scientist
              </p>

              <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Turning data
                <br />
                into{" "}
                <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                  intelligence.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                I&apos;m Viren Wankhade, a data-focused professional building
                analytical solutions, machine learning models, dashboards, and
                practical applications that turn complex data into meaningful
                outcomes.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-blue-400"
                >
                  Explore My Work
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-zinc-300 transition hover:border-white/30 hover:text-white"
                >
                  Hire Me
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6 text-sm text-zinc-600">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  GitHub ↗
                </a>

                <span className="h-4 w-px bg-white/10" />

                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-zinc-700 sm:flex">
            Scroll
            <div className="h-10 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
          </div>
        </section>

        {/* =================================================
            ABOUT
        ================================================= */}

        <section
          id="about"
          className="border-t border-white/[0.06] px-6 py-28 scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
                  01 / About
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Data curious.
                  <br />
                  Problem focused.
                </h2>
              </div>

              <div>
                <p className="text-lg leading-9 text-zinc-400">
                  I&apos;m passionate about using data to understand problems,
                  discover patterns, build predictive solutions, and communicate
                  insights clearly.
                </p>

                <p className="mt-6 leading-8 text-zinc-600">
                  My background combines data analytics, machine learning,
                  Python, SQL, visualization, statistics, and business
                  operations. I enjoy taking a problem from raw data through
                  analysis and modeling to an understandable result that can
                  support better decisions.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {[
                    ["12+", "Data Projects"],
                    ["3+", "Professional Experiences"],
                    ["Python", "Core Language"],
                    ["ML", "Technical Focus"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition hover:-translate-y-1 hover:border-blue-400/20"
                    >
                      <p className="text-2xl font-semibold">{value}</p>
                      <p className="mt-1 text-xs text-zinc-600">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            WHAT I BUILD
        ================================================= */}

        <section
          id="services"
          className="border-y border-white/[0.06] bg-white/[0.015] px-6 py-28 scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
                  02 / What I Build
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  From raw data
                  <br />
                  <span className="text-zinc-600">
                    to useful solutions.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-zinc-600">
                I combine analytical thinking, machine learning, visualization,
                statistics, and application development to solve practical
                problems.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.number}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#090909] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 sm:p-8"
                >
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/[0.035] blur-[80px] transition group-hover:bg-blue-500/[0.08]" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-blue-400">
                        {service.number}
                      </span>

                      <span className="text-xs text-zinc-800 transition group-hover:text-blue-400">
                        ↗
                      </span>
                    </div>

                    <h3 className="mt-12 text-2xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            SKILLS
        ================================================= */}

        <section
          id="skills"
          className="px-6 py-28 scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
                  03 / Technical Skills
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Tools I use to
                  <br />
                  <span className="text-zinc-600">
                    turn data into solutions.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-zinc-600">
                A practical toolkit built around data analysis, machine
                learning, programming, visualization, business intelligence,
                and modern development.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#090909] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 sm:p-8"
                >
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-400/[0.04] text-[10px] font-bold text-blue-400">
                        {group.code}
                      </div>

                      <span className="text-xs text-zinc-800">
                        {group.number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold text-white">
                      {group.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                      {group.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] text-zinc-400 transition hover:border-blue-400/25 hover:text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            EXPERIENCE
        ================================================= */}

        <section
          id="experience"
          className="border-y border-white/[0.06] bg-white/[0.015] px-6 py-28 scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
                  04 / Experience
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                  Experience
                  <br />
                  <span className="text-zinc-600">
                    and growth.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-zinc-600">
                Click any card to explore the role, responsibilities, and
                technologies involved.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-3">
              {experience.map((item) => (
                <ExperienceCard
                  key={item.company}
                  item={item}
                />
              ))}
            </div>
          </div>
        </section>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <section
          id="projects"
          className="px-6 py-28 scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
                  05 / Selected Projects
                </p>

                <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Data, models,
                  <br />
                  <span className="text-zinc-600">
                    and real solutions.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-zinc-600">
                A selection of data science, machine learning, analytics, and
                AI application projects.
              </p>
            </div>

            {/* FEATURED PROJECT */}
            <div className="group relative mt-14 overflow-hidden rounded-[34px] border border-blue-400/20 bg-[#08090b]">
              <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[120px] transition group-hover:bg-blue-500/[0.13]" />

              <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 sm:p-12 lg:p-14">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-blue-400/20 bg-blue-400/[0.06] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                      Featured · Data Science
                    </span>

                    <span className="text-xs text-zinc-700">01</span>
                  </div>

                  <h3 className="mt-10 max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                    Comprehensive
                    <br />
                    Data Science Project
                  </h3>

                  <p className="mt-6 max-w-2xl text-sm leading-8 text-zinc-500 sm:text-base">
                    An end-to-end data science solution covering data
                    validation, cleaning, exploratory analysis, feature
                    engineering, machine learning, model evaluation, and
                    business recommendations.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {projects[0].tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[10px] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(projects[0])}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold text-zinc-950 transition hover:bg-blue-400"
                    >
                      Explore Project
                      <ArrowUpRight />
                    </button>

                    <a
                      href={projects[0].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-xs font-semibold text-zinc-300 transition hover:border-blue-400/40 hover:text-blue-400"
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* PIPELINE */}
                <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden border-t border-white/[0.06] p-8 lg:border-l lg:border-t-0">
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />

                  <div className="relative w-full max-w-sm">
                    <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-700">
                      End-to-End Workflow
                    </p>

                    <div className="space-y-2">
                      {projects[0].approach.map((step, index) => (
                        <div key={step}>
                          <div className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 transition hover:border-blue-400/20 hover:bg-blue-400/[0.04]">
                            <span className="text-[9px] text-blue-400/60">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-xs text-zinc-500">
                              {step}
                            </span>

                            <span className="ml-auto text-[10px] text-zinc-800">
                              →
                            </span>
                          </div>

                          {index < projects[0].approach.length - 1 && (
                            <div className="ml-[21px] h-2 w-px bg-white/[0.05]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* OTHER PROJECTS */}
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
              {projects.slice(1).map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  onDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>

            <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center">
              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-700">
                Analyze → Build → Evaluate → Improve
              </p>

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-xs text-zinc-500 transition hover:text-white"
              >
                Explore GitHub
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* =================================================
            HIRE ME
        ================================================= */}

        <section
          id="contact"
          className="border-t border-white/[0.06] px-6 py-28 scroll-mt-24"
        >
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[36px] border border-blue-400/20 bg-gradient-to-br from-blue-500/[0.09] via-[#0a0b0d] to-[#080808] p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-500/[0.10] blur-[120px]" />

              <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-blue-400">
                    06 / Hire Me
                  </p>

                  <h2 className="mt-6 max-w-3xl text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
                    Let&apos;s build something
                    <br />
                    <span className="text-zinc-600">
                      meaningful with data.
                    </span>
                  </h2>

                  <p className="mt-7 max-w-2xl text-sm leading-8 text-zinc-500 sm:text-base">
                    I&apos;m open to opportunities in Data Analytics, Data
                    Science, Machine Learning, and related data-focused roles.
                    If you&apos;re looking for someone who combines technical
                    skills with practical business understanding, let&apos;s
                    talk.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {[
                      "Data Analyst",
                      "Data Scientist",
                      "Machine Learning",
                      "Business Analytics",
                    ].map((role) => (
                      <span
                        key={role}
                        className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[10px] text-zinc-400"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-[280px]">
                  <div className="rounded-3xl border border-white/[0.08] bg-black/20 p-5 backdrop-blur">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-zinc-700">
                      Get in touch
                    </p>

                    <div className="mt-5 space-y-3">
                      <a
                        href={GMAIL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 text-xs font-semibold text-zinc-950 transition hover:bg-blue-400"
                      >
                        <span className="flex items-center gap-3">
                          <MailIcon />
                          Email Me
                        </span>
                        <ArrowUpRight />
                      </a>

                      <a
                        href={LINKEDIN}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-between rounded-2xl border border-white/10 px-5 py-4 text-xs font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:text-blue-400"
                      >
                        LinkedIn
                        <ArrowUpRight />
                      </a>

                      <a
                        href={GITHUB}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-full items-center justify-between rounded-2xl border border-white/10 px-5 py-4 text-xs font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:text-blue-400"
                      >
                        <span className="flex items-center gap-3">
                          <GithubIcon />
                          GitHub
                        </span>
                        <ArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* RESUME AREA */}
              <div className="relative mt-12 grid gap-4 border-t border-white/[0.07] pt-8 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Want to know more about my background?
                  </p>

                  <p className="mt-2 text-xs leading-6 text-zinc-600">
                    View my resume for experience, education, skills, and
                    professional projects.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={RESUME}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs font-semibold text-zinc-300 transition hover:border-blue-400/30 hover:text-blue-400"
                  >
                    View Resume
                    <ArrowUpRight />
                  </a>

                  <a
                    href={RESUME}
                    download="Viren_Wankhade_Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold text-zinc-950 transition hover:bg-blue-400"
                  >
                    Download Resume
                    ↓
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="border-t border-white/[0.06] px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.12em] text-zinc-700 sm:flex-row">
            <p>© 2026 Viren Wankhade</p>

            <p>Data • Analytics • ML • AI</p>

            <div className="flex gap-5">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-400"
              >
                LinkedIn
              </a>

              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-zinc-400"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* ===================================================
          PROJECT DETAIL MODAL
      =================================================== */}

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}