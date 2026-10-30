import React, { useState, useEffect, useRef } from 'react';
import {
  Terminal as TerminalIcon,
  Code2,
  Database,
  Server,
  Globe,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Search,
  Command,
  Sparkles,
  Cpu,
  Layers,
  Briefcase,
  GraduationCap,
  Clock,
  ChevronRight,
  Send,
  X,
  ArrowUpRight,
  FolderGit2,
  ShieldCheck,
  Zap,
  LayoutGrid,
  Award
} from 'lucide-react';

// ==========================================
// DATA DEFINITIONS
// ==========================================
const PERSONAL_INFO = {
  name: 'Dhaval Vinodbhai Dangar',
  shortName: 'Dhaval Dangar',
  role: 'Full-Stack Web Developer',
  subRole: 'React • Next.js • Python • PHP • MySQL',
  location: 'Paras Nagar, Ahmedabad, Gujarat 380006',
  email: 'dhavaldangar6115@gmail.com',
  phones: ['+91 9313781128', '+91 9313781120'],
  status: 'Available for Full-Stack & Frontend Opportunities',
  bio: 'Full-Stack Developer combining hands-on engineering in React, Next.js, Python, and PHP/MySQL with real-world retail & enterprise operations insight. Passionate about building fast POS systems, automated workflows, and scalable web applications.'
};

const TECH_STACK = {
  Frontend: [
    { name: 'React.js', level: 'Advanced', color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
    { name: 'Next.js', level: 'Advanced', color: 'text-white border-zinc-500/30 bg-zinc-500/10' },
    { name: 'JavaScript (ES6+)', level: 'Advanced', color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
    { name: 'Tailwind CSS', level: 'Advanced', color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
    { name: 'Bootstrap', level: 'Proficient', color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
    { name: 'HTML5 & CSS3', level: 'Advanced', color: 'text-orange-400 border-orange-500/30 bg-orange-500/10' },
    { name: 'Vite', level: 'Proficient', color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' }
  ],
  'Backend & APIs': [
    { name: 'Python', level: 'Advanced', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
    { name: 'Flask', level: 'Proficient', color: 'text-teal-400 border-teal-500/30 bg-teal-500/10' },
    { name: 'Node.js', level: 'Proficient', color: 'text-green-400 border-green-500/30 bg-green-500/10' },
    { name: 'PHP', level: 'Advanced', color: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/10' },
    { name: 'RESTful APIs', level: 'Advanced', color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
    { name: 'Gmail SMTP', level: 'Proficient', color: 'text-rose-400 border-rose-500/30 bg-rose-500/10' }
  ],
  'Database & Cloud': [
    { name: 'MySQL', level: 'Advanced', color: 'text-blue-300 border-blue-400/30 bg-blue-500/10' },
    { name: 'XAMPP', level: 'Advanced', color: 'text-orange-300 border-orange-400/30 bg-orange-500/10' },
    { name: 'Vercel', level: 'Proficient', color: 'text-zinc-200 border-zinc-400/30 bg-zinc-500/10' },
    { name: 'Render', level: 'Proficient', color: 'text-emerald-300 border-emerald-400/30 bg-emerald-500/10' }
  ]
};

const PROJECTS = [
  {
    id: 'quickbill',
    title: 'QuickBill — Retail Billing Software',
    subtitle: 'Flagship High-Speed POS & Inventory Suite',
    category: 'React & Next.js',
    badge: 'Flagship Build',
    stack: ['React', 'Vite', 'MySQL', 'REST API', 'Tailwind CSS'],
    description:
      'Engineered a lightning-fast Point of Sale (POS) billing application informed by real-world retail cashier operations. Designed for zero-latency barcode/item lookup, instant GST invoice calculation, and live stock deduction.',
    highlights: [
      'High-speed keyboard-first POS billing workflow for rapid customer checkout',
      'Real-time inventory tracking with low-stock threshold alerts',
      'Automated GST tax slab calculation & printable thermal/A4 invoice generation',
      'Daily sales analytics dashboard tracking revenue, top SKU velocity, and payment modes'
    ],
    architecture: {
      frontend: 'React + Vite SPA with optimistic UI state updates',
      backend: 'RESTful API layer handling transactional billing commits',
      database: 'MySQL relational schema (Products, Invoices, LineItems, StockLedger)'
    },
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    borderGlow: 'group-hover:border-emerald-500/50'
  },
  {
    id: 'task-manager',
    title: 'Full-Stack Task Manager & Notification Engine',
    subtitle: 'Cloud-Deployed Workflow & Automated Alert System',
    category: 'React & Next.js',
    badge: 'Cloud Deployed',
    stack: ['Next.js', 'Flask', 'Node.js', 'MySQL', 'Gmail SMTP', 'Vercel', 'Render'],
    description:
      'End-to-end task scheduling and team productivity platform featuring role-based state transitions and automated real-time email notifications via Gmail SMTP.',
    highlights: [
      'Full-stack architecture bridging Next.js frontend on Vercel with backend services on Render',
      'Automated Gmail SMTP integration sending instant task assignment & deadline alerts',
      'Role-based task state workflows (Backlog, In Progress, Review, Completed)',
      'Persistent MySQL storage with indexed queries for fast filtering and status reporting'
    ],
    architecture: {
      frontend: 'Next.js (Hosted on Vercel) with responsive dashboard views',
      backend: 'Flask / Node.js API microservices (Hosted on Render) + SMTP Worker',
      database: 'MySQL database storing user roles, tasks, and notification audit logs'
    },
    accent: 'from-blue-500/20 via-indigo-500/10 to-transparent',
    borderGlow: 'group-hover:border-blue-500/50'
  },
  {
    id: 'rto-system',
    title: 'Web-Based RTO Management System',
    subtitle: 'Citizen Vehicle & License Workflow Portal',
    category: 'Python',
    badge: 'Internship Project',
    stack: ['Python', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    description:
      'Developed during the Software Development Internship at Native Infotech. Digitizes Regional Transport Office operations including learner/driving license applications and vehicle registration.',
    highlights: [
      'Streamlined digital workflows for Learner License (LL) and Permanent Driving License (DL)',
      'Automated vehicle registration lookup and document verification state tracking',
      'Admin verification portal reducing manual paperwork bottlenecks',
      'Structured relational MySQL tables ensuring strict data integrity for citizen records'
    ],
    architecture: {
      frontend: 'Responsive HTML5, CSS3 & Interactive JavaScript Form Validators',
      backend: 'Python backend controllers managing application lifecycle & verification rules',
      database: 'MySQL schema for Citizen Profiles, Registrations, Licenses & Officer Audits'
    },
    accent: 'from-violet-500/20 via-purple-500/10 to-transparent',
    borderGlow: 'group-hover:border-violet-500/50'
  },
  {
    id: 'grocery-store',
    title: 'Full-Stack E-Commerce Grocery Store',
    subtitle: 'Dynamic Online Retail & Inventory Platform',
    category: 'PHP & MySQL',
    badge: 'Full-Stack E-Com',
    stack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML/CSS'],
    description:
      'Complete online grocery shopping platform featuring dynamic category browsing, persistent shopping cart, order checkout workflows, and a full admin inventory control center.',
    highlights: [
      'Dynamic product catalog with category filtering, search, and real-time stock badges',
      'Interactive shopping cart and multi-step customer checkout system',
      'Order tracking workflow from placement to dispatch and delivery confirmation',
      'Dedicated Admin Dashboard for CRUD product management, pricing updates, and order fulfillment'
    ],
    architecture: {
      frontend: 'Bootstrap responsive grid + Vanilla JS cart state interactions',
      backend: 'Server-side PHP modules for session management, authentication, and order processing',
      database: 'MySQL relational database managing Users, Categories, Products, and Orders'
    },
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
    borderGlow: 'group-hover:border-amber-500/50'
  }
];

const TIMELINE = [
  {
    type: 'experience',
    role: 'Software Development Intern',
    organization: 'Native Infotech',
    period: 'Internship',
    location: 'Gujarat, India',
    description:
      'Designed and developed a comprehensive Web-Based RTO Management System using Python and MySQL. Collaborated on database schema modeling, backend business logic, and responsive front-end validation forms.',
    tags: ['Python', 'MySQL', 'JavaScript', 'HTML/CSS', 'System Design']
  },
  {
    type: 'education',
    role: 'Master of Computer Applications (MCA)',
    organization: 'School of Computer Science, Dr. Babasaheb Ambedkar Open University',
    period: 'Enrolled • GEETA Entrance Exam Qualified',
    location: 'Ahmedabad, Gujarat',
    description:
      'Pursuing advanced postgraduate studies in software engineering, full-stack architecture, database management systems, and enterprise application development after qualifying the GEETA Entrance Exam.',
    tags: ['MCA', 'GEETA Qualified', 'Advanced Computing', 'Software Architecture']
  },
  {
    type: 'experience',
    role: 'Cashier & Sales Associate',
    organization: 'Reliance Retail / Reliance Digital',
    period: '6 Months Experience',
    location: 'Gujarat, India',
    description:
      'Managed high-volume POS billing counters, reconciliations, and customer tech consultations. This direct frontline experience inspired the UX and speed optimizations built into the QuickBill POS software.',
    tags: ['POS Systems', 'Retail Billing', 'Customer Operations', 'Inventory Flow']
  },
  {
    type: 'experience',
    role: 'Industry Operations & Field Experience',
    organization: 'Blue Star & Godrej',
    period: '2 Years Total Experience',
    location: 'Gujarat, India',
    description:
      'Gained strong foundational discipline, process coordination, and enterprise service workflows across two leading Indian consumer and engineering brands.',
    tags: ['Enterprise Operations', 'Process Coordination', 'Problem Solving']
  },
  {
    type: 'education',
    role: 'Bachelor of Computer Applications (BCA)',
    organization: 'Vidyasagar Infotech College / H.J. Doshi College (Saurashtra University)',
    period: 'Graduated',
    location: 'Jamnagar / Saurashtra, Gujarat',
    description:
      'Completed undergraduate degree in Computer Applications with focus on programming fundamentals, relational databases (MySQL), web technologies (PHP, JavaScript), and software project development.',
    tags: ['BCA', 'Saurashtra University', 'Web Development', 'DBMS']
  }
];

// ==========================================
// SPOTLIGHT CARD COMPONENT
// ==========================================
const SpotlightCard = ({ children, className = '', accentColor = 'rgba(16, 185, 129, 0.13)' }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-[#11111a]/80 backdrop-blur-xl border border-white/10 transition-all duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, ${accentColor}, transparent 45%)`
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

// ==========================================
// MAIN PORTFOLIO COMPONENT
// ==========================================
export default function App() {
  // Theme Accent State ('emerald' | 'blue' | 'violet')
  const [accentTheme, setAccentTheme] = useState('emerald');
  const [projectFilter, setProjectFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [cmdOpen, setCmdOpen] = useState(false);
  const [cmdQuery, setCmdQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);
  const [istTime, setIstTime] = useState('');
  const [activeTechTab, setActiveTechTab] = useState('All');

  // Interactive Terminal State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    {
      type: 'system',
      content: 'DhavalOS v2.5.0 — Interactive Developer Shell initialized.'
    },
    {
      type: 'system',
      content: 'Type "help" or click a quick command chip below to inspect Dhaval\'s profile.'
    }
  ]);
  const terminalEndRef = useRef(null);

  // Contact Composer State
  const [senderName, setSenderName] = useState('');
  const [senderCompany, setSenderCompany] = useState('');
  const [inquiryType, setInquiryType] = useState('Full-Stack Developer Role');
  const [customNote, setCustomNote] = useState('');

  // Accent theme dictionary
  const themeStyles = {
    emerald: {
      primary: 'text-emerald-400',
      bg: 'bg-emerald-500',
      bgSoft: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      glow: 'rgba(16, 185, 129, 0.14)',
      gradientText: 'from-emerald-400 via-teal-200 to-cyan-400'
    },
    blue: {
      primary: 'text-blue-400',
      bg: 'bg-blue-500',
      bgSoft: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      glow: 'rgba(59, 130, 246, 0.14)',
      gradientText: 'from-blue-400 via-sky-200 to-indigo-400'
    },
    violet: {
      primary: 'text-violet-400',
      bg: 'bg-violet-500',
      bgSoft: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      glow: 'rgba(139, 92, 246, 0.14)',
      gradientText: 'from-violet-400 via-fuchsia-200 to-indigo-400'
    }
  };
  const currentTheme = themeStyles[accentTheme];

  // Live IST Clock (Ahmedabad, India)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setIstTime(formatter.format(now));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard Shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setCmdOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-scroll terminal inside its container
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollTop = terminalEndRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  // Helper: Show Toast
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Helper: Copy to clipboard
  const copyToClipboard = (text, label = 'Copied to clipboard!') => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        triggerToast(label);
      });
    } else {
      const tempInput = document.createElement('textarea');
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      triggerToast(label);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    setCmdOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Execute CLI Terminal Command
  const runCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newEntries = [{ type: 'input', content: `dhaval@ahmedabad:~$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newEntries.push({
          type: 'output',
          content: `Available commands:
  whoami       — Display developer summary & status
  about        — Background & education overview
  skills       — List full-stack technical arsenal
  projects     — Inspect featured engineering builds
  experience   — View internship & industry history
  contact      — Show email, phone & location details
  copy email   — Copy dhavaldangar6115@gmail.com to clipboard
  clear        — Clear terminal output`
        });
        break;
      case 'whoami':
        newEntries.push({
          type: 'output',
          content: `${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role} (${PERSONAL_INFO.subRole})
Base: ${PERSONAL_INFO.location}
Status: 🟢 ${PERSONAL_INFO.status}`
        });
        break;
      case 'about':
        newEntries.push({
          type: 'output',
          content: `${PERSONAL_INFO.bio}
Education:
- MCA (Enrolled, GEETA Exam Qualified) — Dr. Babasaheb Ambedkar Open University
- BCA — Vidyasagar Infotech College / H.J. Doshi College (Saurashtra University)`
        });
        break;
      case 'skills':
        newEntries.push({
          type: 'output',
          content: `FRONTEND : React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Vite
BACKEND  : Python, Flask, Node.js, PHP, RESTful APIs, Gmail SMTP
DATABASE : MySQL, XAMPP, Vercel, Render`
        });
        break;
      case 'projects':
        newEntries.push({
          type: 'output',
          content: `1. QuickBill — Retail Billing Software [React, Vite, MySQL, REST API]
2. Task Manager & Notification Engine [Next.js, Flask/Node.js, MySQL, Gmail SMTP]
3. Web-Based RTO Management System [Python, MySQL, JS] (Native Infotech Internship)
4. Full-Stack E-Commerce Grocery Store [PHP, MySQL, Bootstrap]`
        });
        break;
      case 'experience':
        newEntries.push({
          type: 'output',
          content: `• Software Development Intern @ Native Infotech (Python & MySQL RTO System)
- Cashier & Sales Associate @ Reliance Retail / Reliance Digital (6 Months)
- Industry Operations Experience @ Blue Star & Godrej (2 Years)`
        });
        break;
      case 'contact':
        newEntries.push({
          type: 'output',
          content: `Email   : ${PERSONAL_INFO.email}
Phone 1 : ${PERSONAL_INFO.phones[0]}
Phone 2 : ${PERSONAL_INFO.phones[1]}
Address : ${PERSONAL_INFO.location}`
        });
        break;
      case 'copy email':
        copyToClipboard(PERSONAL_INFO.email, 'Email copied from terminal!');
        newEntries.push({
          type: 'output',
          content: `✔ Copied ${PERSONAL_INFO.email} to clipboard!`
        });
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        newEntries.push({
          type: 'error',
          content: `Command not recognized: "${rawCmd}". Type "help" for available commands.`
        });
    }

    setTerminalHistory((prev) => [...prev, ...newEntries]);
    setTerminalInput('');
  };

  // Filtered Projects
  const filteredProjects =
    projectFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === projectFilter);

  // Command Palette Actions
  const commandActions = [
    {
      label: 'Jump to Featured Projects',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => scrollToSection('projects')
    },
    {
      label: 'Open Interactive Terminal (DhavalOS)',
      category: 'Navigation',
      icon: TerminalIcon,
      action: () => scrollToSection('terminal')
    },
    {
      label: 'Jump to Experience & Education Timeline',
      category: 'Navigation',
      icon: Briefcase,
      action: () => scrollToSection('experience')
    },
    {
      label: 'Jump to Contact & Inquiry Composer',
      category: 'Navigation',
      icon: Mail,
      action: () => scrollToSection('contact')
    },
    {
      label: `Copy Email (${PERSONAL_INFO.email})`,
      category: 'Quick Action',
      icon: Copy,
      action: () => {
        copyToClipboard(PERSONAL_INFO.email, 'Email copied to clipboard!');
        setCmdOpen(false);
      }
    },
    {
      label: `Copy Primary Phone (${PERSONAL_INFO.phones[0]})`,
      category: 'Quick Action',
      icon: Phone,
      action: () => {
        copyToClipboard(PERSONAL_INFO.phones[0], 'Phone number copied!');
        setCmdOpen(false);
      }
    },
    {
      label: 'Inspect QuickBill POS Architecture',
      category: 'Projects',
      icon: Cpu,
      action: () => {
        setCmdOpen(false);
        setSelectedProject(PROJECTS[0]);
      }
    },
    {
      label: 'Switch Accent Theme: Emerald Cyber',
      category: 'Appearance',
      icon: Sparkles,
      action: () => {
        setAccentTheme('emerald');
        setCmdOpen(false);
        triggerToast('Theme switched to Emerald Cyber');
      }
    },
    {
      label: 'Switch Accent Theme: Electric Blue',
      category: 'Appearance',
      icon: Sparkles,
      action: () => {
        setAccentTheme('blue');
        setCmdOpen(false);
        triggerToast('Theme switched to Electric Blue');
      }
    },
    {
      label: 'Switch Accent Theme: Neon Violet',
      category: 'Appearance',
      icon: Sparkles,
      action: () => {
        setAccentTheme('violet');
        setCmdOpen(false);
        triggerToast('Theme switched to Neon Violet');
      }
    }
  ].filter(
    (item) =>
      item.label.toLowerCase().includes(cmdQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(cmdQuery.toLowerCase())
  );

  // Format Recruiter Inquiry Message
  const generatedMessage = `Hi Dhaval,\n\nI came across your portfolio${
    senderName ? ` — I'm ${senderName}` : ''
  }${
    senderCompany ? ` from ${senderCompany}` : ''
  }. We are looking for a ${inquiryType} and were impressed by your projects like QuickBill POS and your Next.js/Python stack.\n\n${
    customNote ? `${customNote}\n\n` : ''
  }Let's connect at your earliest convenience!`;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans relative overflow-x-hidden">
      {/* Ambient Mesh Background Glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-emerald-500/40 bg-[#12131f]/95 px-4 py-3 text-sm font-medium text-emerald-300 shadow-2xl shadow-emerald-950/50 backdrop-blur-md animate-bounce">
          <Check className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Sticky Glassmorphic Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-9 w-9 items-center justify-center rounded-xl border ${currentTheme.border} ${currentTheme.bgSoft} font-mono text-sm font-bold ${currentTheme.primary}`}
            >
              DD
            </div>
            <div>
              <span className="font-semibold tracking-tight text-white">
                {PERSONAL_INFO.shortName}
              </span>
              <span className="hidden sm:inline-block ml-2 rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-mono text-zinc-400 border border-white/5">
                Full-Stack Dev
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-400">
            <button
              onClick={() => scrollToSection('bento')}
              className="hover:text-white transition-colors"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('terminal')}
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <TerminalIcon className="h-3.5 w-3.5 text-emerald-400" />
              Terminal
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="hover:text-white transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2.5">
            {/* Accent Color Switcher Pills */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1.5">
              {['emerald', 'blue', 'violet'].map((t) => (
                <button
                  key={t}
                  onClick={() => setAccentTheme(t)}
                  title={`Switch to ${t} accent`}
                  className={`h-3 w-3 rounded-full transition-transform ${
                    t === 'emerald'
                      ? 'bg-emerald-400'
                      : t === 'blue'
                      ? 'bg-blue-400'
                      : 'bg-violet-400'
                  } ${accentTheme === t ? 'scale-125 ring-2 ring-white/60' : 'opacity-50 hover:opacity-90'}`}
                />
              ))}
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={() => setCmdOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300 hover:border-white/20 hover:bg-white/[0.08] transition-all"
            >
              <Search className="h-3.5 w-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Quick Jump</span>
              <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-zinc-300">
                Ctrl K
              </kbd>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-20">
        {/* ==========================================
            SECTION 1: HERO & BENTO OVERVIEW GRID
        ========================================== */}
        <section id="bento" className="space-y-6">
          {/* Status Banner */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{PERSONAL_INFO.status}</span>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Tile 1: Main Hero Introduction (8 cols) */}
            <SpotlightCard
              accentColor={currentTheme.glow}
              className="md:col-span-8 p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                  <span className={currentTheme.primary}>Full-Stack Engineer</span>
                  <span>•</span>
                  <span>POS & Web Systems</span>
                  <span>•</span>
                  <span>Ahmedabad, IN</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
                  Hi, I&apos;m{' '}
                  <span
                    className={`bg-gradient-to-r ${currentTheme.gradientText} bg-clip-text text-transparent`}
                  >
                    {PERSONAL_INFO.name}
                  </span>
                </h1>

                <p className="max-w-2xl text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`flex items-center gap-2 rounded-xl ${currentTheme.bg} px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg hover:opacity-95 transition-all`}
                >
                  <LayoutGrid className="h-4 w-4" />
                  <span>Explore Projects</span>
                </button>

                <button
                  onClick={() => scrollToSection('terminal')}
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-white hover:bg-white/[0.1] transition-all"
                >
                  <TerminalIcon className={`h-4 w-4 ${currentTheme.primary}`} />
                  <span>Open Terminal</span>
                </button>

                <button
                  onClick={() =>
                    copyToClipboard(
                      PERSONAL_INFO.email,
                      'Email dhavaldangar6115@gmail.com copied!'
                    )
                  }
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-mono text-zinc-300 hover:border-white/25 hover:text-white transition-all"
                >
                  <Copy className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Copy Email</span>
                </button>
              </div>
            </SpotlightCard>

            {/* Tile 2: Location & Live IST Time Widget (4 cols) */}
            <SpotlightCard
              accentColor={currentTheme.glow}
              className="md:col-span-4 p-6 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Base Operations
                  </span>
                  <h2 className="mt-1 text-lg font-bold text-white flex items-center gap-1.5">
                    <MapPin className={`h-4 w-4 ${currentTheme.primary}`} />
                    Ahmedabad, Gujarat
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Paras Nagar • PIN 380006
                  </p>
                </div>
                <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300">
                  IST (UTC+5:30)
                </span>
              </div>

              {/* Stylized Radar / Coordinate Visual */}
              <div className="my-5 rounded-xl border border-white/5 bg-black/40 p-4 font-mono">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className={`h-3.5 w-3.5 ${currentTheme.primary}`} />
                    Local Time
                  </span>
                  <span className="text-emerald-400">● Online</span>
                </div>
                <div className="mt-2 text-2xl sm:text-3xl font-bold tracking-wider text-white">
                  {istTime || '09:30:00 PM'}
                </div>
                <div className="mt-1 text-[11px] text-zinc-500">
                  23.0225° N, 72.5714° E • India
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-zinc-300">
                <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2">
                  <span className="text-zinc-400">Primary Phone</span>
                  <button
                    onClick={() =>
                      copyToClipboard(PERSONAL_INFO.phones[0], 'Primary phone copied!')
                    }
                    className="font-mono hover:text-emerald-400 transition-colors"
                  >
                    {PERSONAL_INFO.phones[0]}
                  </button>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2">
                  <span className="text-zinc-400">Alt Phone</span>
                  <button
                    onClick={() =>
                      copyToClipboard(PERSONAL_INFO.phones[1], 'Alternate phone copied!')
                    }
                    className="font-mono hover:text-emerald-400 transition-colors"
                  >
                    {PERSONAL_INFO.phones[1]}
                  </button>
                </div>
              </div>
            </SpotlightCard>

            {/* Tile 3: Interactive Tech Stack Arsenal (7 cols) */}
            <SpotlightCard
              accentColor={currentTheme.glow}
              className="md:col-span-7 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Technical Arsenal
                    </span>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Layers className={`h-4 w-4 ${currentTheme.primary}`} />
                      Full-Stack Capabilities
                    </h2>
                  </div>

                  {/* Category Filter Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {['All', 'Frontend', 'Backend & APIs', 'Database & Cloud'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTechTab(tab)}
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                          activeTechTab === tab
                            ? `${currentTheme.bg} text-slate-950 font-semibold`
                            : 'bg-white/5 text-zinc-400 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stack Pills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-3">
                  {Object.entries(TECH_STACK)
                    .filter(([cat]) => activeTechTab === 'All' || activeTechTab === cat)
                    .flatMap(([, skills]) =>
                      skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`flex items-center justify-between rounded-xl border px-3 py-2 text-xs font-medium transition-transform hover:-translate-y-0.5 ${skill.color}`}
                        >
                          <span className="truncate">{skill.name}</span>
                          <span className="ml-1.5 text-[10px] opacity-75 font-mono">
                            {skill.level}
                          </span>
                        </div>
                      ))
                    )}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2">
                <span>End-to-End Architecture: UI → REST API → Relational MySQL → Cloud</span>
                <span className="font-mono text-zinc-300">17+ Core Technologies</span>
              </div>
            </SpotlightCard>

            {/* Tile 4: Academic & Domain Advantage (5 cols) */}
            <SpotlightCard
              accentColor={currentTheme.glow}
              className="md:col-span-5 p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                    Credentials & Edge
                  </span>
                  <Award className={`h-4 w-4 ${currentTheme.primary}`} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                    <div className="text-xl font-extrabold text-white">MCA + BCA</div>
                    <div className="text-xs text-emerald-400 font-medium mt-0.5">
                      GEETA Exam Qualified
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1">
                      BAOU Ahmedabad & Saurashtra Univ.
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
                    <div className="text-xl font-extrabold text-white">4+ Systems</div>
                    <div className="text-xs text-blue-400 font-medium mt-0.5">
                      Production-Ready Builds
                    </div>
                    <div className="text-[11px] text-zinc-400 mt-1">
                      POS, RTO, Cloud Task & E-Com
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-gradient-to-r from-emerald-500/10 via-blue-500/5 to-transparent p-3.5">
                  <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-amber-400" />
                    Real-World Retail + Engineering Synergy
                  </div>
                  <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                    Combines Software Internship at <strong>Native Infotech</strong> with frontline POS & operations experience at <strong>Reliance Digital, Blue Star & Godrej</strong>.
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-zinc-400 pt-3 border-t border-white/5">
                <span>Direct Contact</span>
                <button
                  onClick={() =>
                    copyToClipboard(PERSONAL_INFO.email, 'Email copied to clipboard!')
                  }
                  className={`font-mono ${currentTheme.primary} hover:underline`}
                >
                  {PERSONAL_INFO.email}
                </button>
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: FEATURED PROJECTS
        ========================================== */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <Code2 className="h-4 w-4" />
                <span>Engineering Portfolio</span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
                Featured Full-Stack Projects
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                Filter by technology stack or click any build to inspect its system architecture.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {['All', 'React & Next.js', 'Python', 'PHP & MySQL'].map((category) => (
                <button
                  key={category}
                  onClick={() => setProjectFilter(category)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    projectFilter === category
                      ? `${currentTheme.bg} text-slate-950 shadow-md`
                      : 'border border-white/10 bg-white/[0.03] text-zinc-300 hover:bg-white/[0.08]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredProjects.map((project) => (
              <SpotlightCard
                key={project.id}
                accentColor={currentTheme.glow}
                className={`group p-6 flex flex-col justify-between transition-all ${project.borderGlow}`}
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-mono text-zinc-300">
                      <Sparkles className="h-3 w-3 text-emerald-400" />
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-zinc-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <ul className="mt-4 space-y-2">
                    {project.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-zinc-300"
                      >
                        <ChevronRight
                          className={`h-4 w-4 shrink-0 mt-0.5 ${currentTheme.primary}`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack Badges & Architecture Modal Button */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/[0.06] border border-white/10 px-2.5 py-1 font-mono text-[11px] text-zinc-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-white hover:bg-white/15 transition-all shrink-0"
                  >
                    <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Inspect Architecture</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECTION 3: INTERACTIVE DEVELOPER TERMINAL
        ========================================== */}
        <section id="terminal" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
                <TerminalIcon className="h-4 w-4" />
                <span>Interactive CLI Environment</span>
              </div>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
                DhavalOS Developer Terminal
              </h2>
              <p className="text-sm text-zinc-400">
                Type commands or click any quick-execute chip below to query skills, projects, and contact info in real time.
              </p>
            </div>

            {/* Quick Command Chips */}
            <div className="flex flex-wrap gap-1.5">
              {['help', 'whoami', 'skills', 'projects', 'experience', 'contact', 'copy email', 'clear'].map(
                (cmd) => (
                  <button
                    key={cmd}
                    onClick={() => runCommand(cmd)}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-zinc-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all"
                  >
                    $ {cmd}
                  </button>
                )
              )}
            </div>
          </div>

          <SpotlightCard className="border-white/15 bg-[#08090f]/95 shadow-2xl">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-zinc-400">
                  dhaval@ahmedabad: ~/portfolio (zsh)
                </span>
              </div>
              <span className="font-mono text-[11px] text-zinc-500">
                Interactive Shell
              </span>
            </div>

            {/* Terminal Output Body */}
            <div
              ref={terminalEndRef}
              className="h-72 overflow-y-auto p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-3"
            >
              {terminalHistory.map((item, index) => (
                <div key={index} className="leading-relaxed whitespace-pre-wrap">
                  {item.type === 'system' && (
                    <span className="text-zinc-400">{item.content}</span>
                  )}
                  {item.type === 'input' && (
                    <span className="text-emerald-400 font-semibold">
                      {item.content}
                    </span>
                  )}
                  {item.type === 'output' && (
                    <div className="pl-3 border-l-2 border-emerald-500/40 text-zinc-200 mt-1">
                      {item.content}
                    </div>
                  )}
                  {item.type === 'error' && (
                    <span className="text-rose-400">{item.content}</span>
                  )}
                </div>
              ))}

              {/* Active Prompt Line */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  runCommand(terminalInput);
                }}
                className="flex items-center gap-2 pt-2"
              >
                <span className="text-emerald-400 font-semibold shrink-0">
                  dhaval@ahmedabad:~$
                </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type a command (e.g., skills, projects, contact)..."
                  className="w-full bg-transparent text-white placeholder-zinc-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 text-xs text-emerald-300 hover:bg-emerald-500/30"
                >
                  Run
                </button>
              </form>
            </div>
          </SpotlightCard>
        </section>

        {/* ==========================================
            SECTION 4: EXPERIENCE & EDUCATION TIMELINE
        ========================================== */}
        <section id="experience" className="space-y-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <Briefcase className="h-4 w-4" />
              <span>Career & Academic Journey</span>
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
              Experience & Education
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Combining academic depth in Computer Applications with software development and enterprise retail operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Timeline Column (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              {TIMELINE.map((item, idx) => (
                <SpotlightCard
                  key={idx}
                  accentColor={currentTheme.glow}
                  className="p-5 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${
                          item.type === 'education'
                            ? 'border-blue-500/30 bg-blue-500/10 text-blue-400'
                            : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                        }`}
                      >
                        {item.type === 'education' ? (
                          <GraduationCap className="h-4 w-4" />
                        ) : (
                          <Briefcase className="h-4 w-4" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {item.role}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-zinc-300">
                          {item.organization}
                        </p>
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <span className="inline-block rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-emerald-300">
                        {item.period}
                      </span>
                      <div className="text-[11px] text-zinc-500 mt-1">
                        {item.location}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/[0.04] border border-white/10 px-2.5 py-0.5 font-mono text-[11px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Side Summary Column (4 cols) */}
            <div className="lg:col-span-4 space-y-4">
              <SpotlightCard accentColor={currentTheme.glow} className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <ShieldCheck className={`h-5 w-5 ${currentTheme.primary}`} />
                  Why Hire Dhaval?
                </h3>

                <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <div className="font-semibold text-white">
                      1. Full-Stack Versatility
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      Comfortable building modern SPAs in React/Next.js and connecting them to Python (Flask), Node.js, or PHP backends with MySQL.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <div className="font-semibold text-white">
                      2. Domain-Driven Product Sense
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      Having worked with POS billing systems at Reliance Digital and operations at Blue Star & Godrej, Dhaval builds software that solves real operational bottlenecks.
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <div className="font-semibold text-white">
                      3. Deployment & Database Ready
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">
                      Experienced with cloud deployments on Vercel and Render, local XAMPP environments, and relational MySQL database design.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 5: INTERACTIVE CONTACT & COMPOSER
        ========================================== */}
        <section id="contact" className="space-y-6 pb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400">
              <Mail className="h-4 w-4" />
              <span>Direct Connect</span>
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
              Let&apos;s Build Something Impactful
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              Based in Paras Nagar, Ahmedabad (380006). Available for immediate interviews and full-stack roles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Direct Contact Cards (5 cols) */}
            <SpotlightCard
              accentColor={currentTheme.glow}
              className="lg:col-span-5 p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">
                  Instant Contact Channels
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Click any card below to copy Dhaval&apos;s verified contact details directly to your clipboard.
                </p>

                <div className="space-y-3">
                  {/* Email Card */}
                  <button
                    onClick={() =>
                      copyToClipboard(
                        PERSONAL_INFO.email,
                        'Email dhavaldangar6115@gmail.com copied!'
                      )
                    }
                    className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left hover:border-emerald-500/40 hover:bg-emerald-500/5 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="truncate">
                        <div className="text-xs text-zinc-400">Email Address</div>
                        <div className="font-mono text-sm font-semibold text-white truncate">
                          {PERSONAL_INFO.email}
                        </div>
                      </div>
                    </div>
                    <Copy className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400 shrink-0" />
                  </button>

                  {/* Phone 1 Card */}
                  <button
                    onClick={() =>
                      copyToClipboard(
                        PERSONAL_INFO.phones[0],
                        'Primary Phone +91 9313781128 copied!'
                      )
                    }
                    className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400">
                          Primary Mobile / WhatsApp
                        </div>
                        <div className="font-mono text-sm font-semibold text-white">
                          {PERSONAL_INFO.phones[0]}
                        </div>
                      </div>
                    </div>
                    <Copy className="h-4 w-4 text-zinc-500 group-hover:text-blue-400 shrink-0" />
                  </button>

                  {/* Phone 2 Card */}
                  <button
                    onClick={() =>
                      copyToClipboard(
                        PERSONAL_INFO.phones[1],
                        'Alternate Phone +91 9313781120 copied!'
                      )
                    }
                    className="w-full flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left hover:border-violet-500/40 hover:bg-violet-500/5 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400">Alternate Mobile</div>
                        <div className="font-mono text-sm font-semibold text-white">
                          {PERSONAL_INFO.phones[1]}
                        </div>
                      </div>
                    </div>
                    <Copy className="h-4 w-4 text-zinc-500 group-hover:text-violet-400 shrink-0" />
                  </button>

                  {/* Location Card */}
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400">Current Location</div>
                      <div className="text-sm font-semibold text-white">
                        {PERSONAL_INFO.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Interactive Recruiter Inquiry Composer (7 cols) */}
            <SpotlightCard
              accentColor={currentTheme.glow}
              className="lg:col-span-7 p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Quick Inquiry Generator
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Customize an interview invite or project inquiry below and launch your email client or copy the message in one click.
                  </p>
                </div>
                <Send className={`h-5 w-5 ${currentTheme.primary}`} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g., Priya Sharma"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={senderCompany}
                    onChange={(e) => setSenderCompany(e.target.value)}
                    placeholder="e.g., TechSolutions Pvt Ltd"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Opportunity Type
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#141522] px-3.5 py-2 text-sm text-white focus:border-emerald-500/50 focus:outline-none"
                  >
                    <option value="Full-Stack Developer Role">
                      Full-Stack Developer Role
                    </option>
                    <option value="React / Next.js Frontend Role">
                      React / Next.js Frontend Role
                    </option>
                    <option value="Python / PHP Backend Role">
                      Python / PHP Backend Role
                    </option>
                    <option value="Freelance / Custom Software Build">
                      Freelance / Custom Software Build
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Additional Note (Optional)
                  </label>
                  <input
                    type="text"
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder="e.g., Are you available for a call tomorrow?"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2 text-sm text-white placeholder-zinc-600 focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>
              </div>

              {/* Live Preview Box */}
              <div className="rounded-xl border border-white/10 bg-black/50 p-3.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-1.5">
                  <span>To: {PERSONAL_INFO.email}</span>
                  <span>Live Message Preview</span>
                </div>
                <pre className="whitespace-pre-wrap font-sans text-xs text-zinc-300 leading-relaxed">
                  {generatedMessage}
                </pre>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                    `${inquiryType} Inquiry — ${senderCompany || 'Portfolio Connect'}`
                  )}&body=${encodeURIComponent(generatedMessage)}`}
                  className={`flex items-center gap-2 rounded-xl ${currentTheme.bg} px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-950 hover:opacity-95 transition-all`}
                >
                  <Send className="h-4 w-4" />
                  <span>Open in Email Client</span>
                </a>

                <button
                  onClick={() =>
                    copyToClipboard(
                      generatedMessage,
                      'Formatted inquiry message copied!'
                    )
                  }
                  className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-2.5 text-xs sm:text-sm font-medium text-white hover:bg-white/10 transition-all"
                >
                  <Copy className="h-4 w-4 text-emerald-400" />
                  <span>Copy Formatted Message</span>
                </button>
              </div>
            </SpotlightCard>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-[#07070c] py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Engineered with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span>Paras Nagar, Ahmedabad 380006</span>
            <span>•</span>
            <button
              onClick={() => setCmdOpen(true)}
              className="text-zinc-400 hover:text-white"
            >
              Press Ctrl+K for Command Menu
            </button>
          </div>
        </div>
      </footer>

      {/* ==========================================
          MODAL 1: PROJECT ARCHITECTURE INSPECTOR
      ========================================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl border border-white/15 bg-[#12131f] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 font-mono text-xs text-emerald-300">
                  System Architecture Breakdown
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-zinc-400">{selectedProject.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-zinc-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* 3-Tier Architecture Diagram */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-3.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-cyan-400">
                  <Globe className="h-3.5 w-3.5" />
                  <span>Frontend Layer</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-200 leading-relaxed">
                  {selectedProject.architecture.frontend}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-emerald-400">
                  <Server className="h-3.5 w-3.5" />
                  <span>Backend & Logic</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-200 leading-relaxed">
                  {selectedProject.architecture.backend}
                </p>
              </div>

              <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-3.5">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase text-blue-400">
                  <Database className="h-3.5 w-3.5" />
                  <span>Database & Storage</span>
                </div>
                <p className="mt-1.5 text-xs text-zinc-200 leading-relaxed">
                  {selectedProject.architecture.database}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Engineering Highlights
              </h4>
              <ul className="mt-2.5 space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-200">
                    <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/10 px-2.5 py-1 font-mono text-xs text-white"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  scrollToSection('contact');
                }}
                className={`rounded-xl ${currentTheme.bg} px-4 py-2 text-xs font-semibold text-slate-950`}
              >
                Request Code Walkthrough
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==========================================
          MODAL 2: COMMAND PALETTE (Ctrl+K / Cmd+K)
      ========================================== */}
      {cmdOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 pt-20 p-4 backdrop-blur-sm"
          onClick={() => setCmdOpen(false)}
        >
          <div
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-[#12131f] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-white/10 px-4 py-3">
              <Command className="h-4 w-4 text-emerald-400 mr-2.5" />
              <input
                type="text"
                autoFocus
                value={cmdQuery}
                onChange={(e) => setCmdQuery(e.target.value)}
                placeholder="Type a command or search sections..."
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
              />
              <button
                onClick={() => setCmdOpen(false)}
                className="rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] text-zinc-400 hover:text-white"
              >
                ESC
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {commandActions.length === 0 ? (
                <div className="py-8 text-center text-xs text-zinc-500">
                  No matching commands found.
                </div>
              ) : (
                commandActions.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={item.action}
                      className="w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-xs sm:text-sm text-zinc-200 hover:bg-white/[0.08] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-4 w-4 text-zinc-400 group-hover:text-emerald-400" />
                        <span>{item.label}</span>
                      </div>
                      <span className="font-mono text-[10px] text-zinc-500">
                        {item.category}
                      </span>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
