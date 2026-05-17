export const portfolio = {
  name: "Mohit Hatzade",
  firstName: "Mohit",
  lastName: "Hatzade",
  roles: [
    "Frontend Developer",
    "React Specialist",
    "Next.js Engineer",
    "TypeScript Craftsman",
    "UI Performance Nerd",
  ],
  tagline:
    "I build fast, accessible, pixel-perfect web apps with React, Next.js & TypeScript.",
  bio: "Frontend Developer with 4+ years shipping scalable, responsive web apps. I turn Figma into production-ready component libraries, integrate REST APIs, and squeeze every millisecond out of bundles.",
  location: "Nagpur, Maharashtra, IN",
  email: "mohithatzade629@gmail.com",
  phone: "+91 83900 51169",
  availability: "Available for freelance & full-time roles",
  socials: {
    github: "https://github.com/mohithatzade",
    linkedin: "https://www.linkedin.com/in/mohit-hatzade/",
    twitter: "https://twitter.com/",
    email: "mailto:mohithatzade629@gmail.com",
  },
  stats: [
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Projects Delivered", value: 7, suffix: "+" },
    { label: "Awards Received", value: 3, suffix: "" },
    { label: "Technologies", value: 20, suffix: "+" },
  ],
  strengths: [
    { icon: "Zap", title: "Performance", desc: "25% faster apps via code-splitting & lazy loading." },
    { icon: "Palette", title: "Figma-to-Code", desc: "Pixel-perfect, reusable component libraries." },
    { icon: "Accessibility", title: "Accessibility", desc: "WCAG-compliant, keyboard-first UIs." },
    { icon: "TestTube2", title: "Tested", desc: "Jest & React Testing Library coverage." },
  ],
  experience: [
    {
      role: "Frontend Developer",
      company: "Valethi Technologies LLP",
      date: "Dec 2021 – Present",
      description:
        "Engineered 7+ production apps across React, Next.js & legacy PHP. Boosted performance 25%, set up CI/CD on Vercel/Netlify, mentored on a11y & testing practices.",
    },
  ],
  education: [
    {
      degree: "Master of Business Administration (MBA)",
      school: "Yashwantrao Chavan Maharashtra Open University",
      date: "",
      description: "Business strategy, management & analytics.",
    },
    {
      degree: "Bachelor of Arts (BA)",
      school: "Yashwantrao Chavan Maharashtra Open University",
      date: "",
      description: "Foundational liberal arts education.",
    },
    {
      degree: "Diploma in Fire Service Education",
      school: "Wainganga Polytechnic & Physical Education",
      date: "",
      description: "Specialized technical & safety training.",
    },
  ],
  certifications: [
    {
      name: "Meta Frontend Developer Professional Certificate",
      issuer: "Coursera / Meta",
      date: "",
      url: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "",
      url: "https://www.freecodecamp.org/",
    },
    {
      name: "Best Performance Award of the Quarter",
      issuer: "Valethi Technologies LLP",
      date: "",
      url: "",
    },
    {
      name: "Spot Award for Timely Delivery",
      issuer: "Valethi Technologies LLP",
      date: "",
      url: "",
    },
    {
      name: "Client Appreciation Award",
      issuer: "Valethi Technologies LLP",
      date: "",
      url: "",
    },
  ],
};

export const skills = {
  Frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "TypeScript", level: 90 },
    { name: "JavaScript (ES6+)", level: 95 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "SCSS", level: 85 },
  ],
  "UI & Styling": [
    { name: "Tailwind CSS", level: 92 },
    { name: "Material UI", level: 88 },
    { name: "React Bootstrap", level: 80 },
    { name: "Figma-to-Code", level: 90 },
  ],
  State: [
    { name: "Zustand", level: 88 },
    { name: "React Context", level: 92 },
    { name: "React Hooks", level: 95 },
  ],
  "Testing & Tools": [
    { name: "Jest", level: 80 },
    { name: "React Testing Library", level: 80 },
    { name: "Git & GitHub Actions", level: 88 },
    { name: "Vercel / Netlify", length: 90, level: 90 },
    { name: "REST APIs", level: 90 },
  ],
};

export const services = [
  { icon: "Code2", title: "Frontend Development", desc: "React, Next.js & TypeScript apps built for scale and speed." },
  { icon: "Palette", title: "Figma-to-Code", desc: "Pixel-perfect conversion of designs into reusable components." },
  { icon: "Zap", title: "Performance Audits", desc: "Code-splitting, lazy loading & bundle optimisation." },
  { icon: "Smartphone", title: "Responsive UI", desc: "Mobile-first layouts that look great on every device." },
  { icon: "TestTube2", title: "Testing & QA", desc: "Jest + RTL coverage for reliable, regression-safe releases." },
  { icon: "Rocket", title: "CI/CD & Deploy", desc: "Vercel, Netlify & GitHub Actions pipelines." },
];

export const techStack = [
  { name: "React", category: "Framework" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Material UI", category: "Styling" },
  { name: "Zustand", category: "State" },
  { name: "Jest", category: "Testing" },
  { name: "React Testing Library", category: "Testing" },
  { name: "Git", category: "Tooling" },
  { name: "GitHub Actions", category: "Tooling" },
  { name: "Vercel", category: "Hosting" },
  { name: "Netlify", category: "Hosting" },
  { name: "Figma", category: "Design" },
  { name: "PHP", category: "Language" },
  { name: "jQuery", category: "Library" },
];

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  category: "web" | "tool" | "internal";
  featured: boolean;
  date: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "monitor-easy",
    title: "Monitor Easy",
    subtitle: "Website Monitoring Tool",
    description:
      "Real-time website health monitoring dashboard surfacing bugs, warnings and optimisation suggestions per site.",
    features: [
      "Reusable React components wired to REST APIs",
      "Global UI state with Zustand — no prop drilling",
      "Pixel-perfect Figma-to-Tailwind conversion",
      "Live status indicators & alerts",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zustand", "REST APIs"],
    category: "tool",
    featured: true,
    date: "Mar 2026 – Present",
    gradient: "from-indigo-500 via-blue-500 to-cyan-400",
  },
  {
    id: "vmmt",
    title: "VMMT",
    subtitle: "Database Metadata Comparison Tool",
    description:
      "Multi-instance database comparison platform enabling line-by-line diff of dev, QA, and multi-tenant schemas.",
    features: [
      "Visualise missing tables & structural diffs",
      "Row-level comparison across environments",
      "Reusable components with React Context",
      "Responsive Material UI layouts",
    ],
    tech: ["React", "Next.js", "TypeScript", "Material UI", "Context API", "REST APIs"],
    category: "tool",
    featured: true,
    date: "Jan 2025 – Feb 2026",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  {
    id: "hive-connect",
    title: "Hive Connect",
    subtitle: "Role-Based E-Commerce Admin Panel",
    description:
      "Multi-role web application (Admin / Seller / Buyer) with fine-grained access control and cross-site publishing.",
    features: [
      "Role-based access via React Context",
      "Product add / edit / cross-site publishing",
      "Material UI components, fully responsive",
      "Scoped admin interfaces per role",
    ],
    tech: ["React", "Next.js", "TypeScript", "Material UI", "Context API", "REST APIs"],
    category: "web",
    featured: true,
    date: "Jul 2023 – Dec 2024",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    id: "vit-portal",
    title: "VIT Portal",
    subtitle: "IT Department Internal Tool",
    description:
      "Device and user information management system with a white-label Super Admin configuration panel.",
    features: [
      "Dynamic theming via CSS variables",
      "Editable HTML zones + custom CSS input",
      "Activity log viewer for audit & compliance",
      "Full white-label control for super admins",
    ],
    tech: ["PHP", "JavaScript", "jQuery", "HTML5", "CSS3"],
    category: "internal",
    featured: false,
    date: "Jan 2022 – Present",
    gradient: "from-amber-500 via-orange-500 to-red-500",
  },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "Valethi Technologies",
    quote:
      "Mohit consistently turns ambiguous Figma flows into production code faster than any frontend dev I've worked with. He owns the details.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Backend Lead",
    company: "Valethi Technologies",
    quote:
      "Reliable, communicative, and obsessive about performance. His 25% perf win on our flagship app was a turning point for the team.",
    rating: 5,
  },
  {
    name: "Anita Deshmukh",
    role: "UI/UX Designer",
    company: "Freelance Client",
    quote:
      "Pixel-perfect doesn't begin to describe it. Mohit treats design specs as contracts and somehow makes the result even better.",
    rating: 5,
  },
  {
    name: "James Carter",
    role: "Engineering Manager",
    company: "Hive Connect",
    quote:
      "Strong React fundamentals, excellent state-management instincts, and a teammate who lifts everyone around him.",
    rating: 5,
  },
];

export const faqs = [
  {
    q: "What's your typical project turnaround?",
    a: "Most landing pages ship in 1–2 weeks. Full apps with auth, dashboards and integrations take 4–8 weeks depending on scope.",
  },
  {
    q: "Do you work with existing teams or solo?",
    a: "Both. I integrate smoothly into Agile sprints with backend engineers and designers, or take a project end-to-end on my own.",
  },
  {
    q: "Which stacks do you specialise in?",
    a: "React, Next.js, TypeScript and Tailwind are my daily drivers. I'm equally comfortable with Material UI, Zustand and REST integrations.",
  },
  {
    q: "Can you optimise an existing slow app?",
    a: "Yes. I've delivered 25%+ performance gains via code-splitting, lazy loading, image optimisation and bundle analysis.",
  },
  {
    q: "Do you write tests?",
    a: "Always. Jest + React Testing Library for unit and integration coverage, with a focus on critical user paths.",
  },
  {
    q: "What's the best way to start?",
    a: "Drop me an email with a short brief — I'll reply within 24 hours with questions, a rough estimate, and next steps.",
  },
];

export const blog = [
  {
    title: "Squeezing 25% More Performance Out of a React App",
    excerpt: "Code-splitting, lazy loading, and the bundle-analysis routine that finally moved our Lighthouse score above 90.",
    date: "2025-09-12",
    readTime: "8 min",
    tags: ["React", "Performance"],
    url: "#",
    gradient: "from-indigo-500 to-cyan-400",
  },
  {
    title: "Figma to Production: A Component-Library Workflow",
    excerpt: "How I structure shared design tokens, primitives, and composed components so design hand-offs stop hurting.",
    date: "2025-07-04",
    readTime: "6 min",
    tags: ["Design Systems", "React"],
    url: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Zustand vs Context: Picking the Right State Tool",
    excerpt: "A practical decision tree for choosing between Zustand and React Context — with real production examples.",
    date: "2025-05-21",
    readTime: "5 min",
    tags: ["State Management"],
    url: "#",
    gradient: "from-emerald-500 to-teal-500",
  },
];
