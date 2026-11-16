import { FormEvent, useEffect, useRef, useState } from "react";

type IconName =
  | "arrow"
  | "brain"
  | "close"
  | "code"
  | "download"
  | "external"
  | "github"
  | "linkedin"
  | "mail"
  | "menu"
  | "moon"
  | "server"
  | "sun";

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    brain: (
      <>
        <path d="M9.5 4.5A3 3 0 0 0 4 6a3 3 0 0 0 0 6 3 3 0 0 0 2 5.8A3.5 3.5 0 0 0 12 20V5a3 3 0 0 0-2.5-.5Z" />
        <path d="M14.5 4.5A3 3 0 0 1 20 6a3 3 0 0 1 0 6 3 3 0 0 1-2 5.8A3.5 3.5 0 0 1 12 20m-5-9h2m6-3h2m-1 6h3" />
      </>
    ),
    close: <path d="m6 6 12 12M18 6 6 18" />,
    code: <path d="m8 9-4 3 4 3m8-6 4 3-4 3m-2-10-4 14" />,
    download: <path d="M12 3v12m-5-5 5 5 5-5M5 21h14" />,
    external: (
      <path d="M14 4h6v6m0-6-9 9M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
    ),
    github: (
      <>
        <path d="M15 22v-4c.1-1-.4-2-1-2.5 3.3-.4 6.8-1.6 6.8-7.4A5.8 5.8 0 0 0 19.3 4 5.4 5.4 0 0 0 19.1 0S17.9-.4 15 1.5a14 14 0 0 0-6 0C6.1-.4 4.9 0 4.9 0a5.4 5.4 0 0 0-.2 4A5.8 5.8 0 0 0 3.2 8c0 5.8 3.5 7 6.8 7.4-.6.5-1 1.4-1 2.5v4" />
        <path d="M9 19c-3 .9-3-1.5-4-2" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a5 5 0 0 1 2-2Z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    moon: <path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5 8.5 8.5 0 1 0 20.5 14.3Z" />,
    server: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

type Project = {
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  built: string;
  decisions: string[];
  tags: string[];
  theme: string;
  github?: string;
  live?: string;
  note?: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "SkinAI",
    subtitle: "AI-based skin condition classification",
    problem:
      "Make image-based skin condition classification accessible through a clear, fast web experience.",
    built:
      "An end-to-end application with image upload, preprocessing, model inference, and real-time results.",
    decisions: [
      "Fine-tuned a ResNet18 CNN with PyTorch and Torchvision.",
      "Designed FastAPI REST endpoints for preprocessing and inference.",
      "Managed async requests and cold starts across Vercel and Render.",
      "Documented model evaluation and the full deployment architecture.",
    ],
    tags: ["PyTorch", "ResNet18", "FastAPI", "React", "Docker"],
    theme: "skin",
    github: "https://github.com/shivika030/SKIN-AI",
    live: "https://skin-ai-beta-sooty.vercel.app/",
    note: "Classification output is informational and is not a medical diagnosis.",
  },
  {
    number: "02",
    title: "OneSelf",
    subtitle: "Women’s wellness application",
    problem:
      "Bring cycle tracking, symptom logging, and practical wellness guidance into one private mobile workflow.",
    built:
      "A cross-platform app with calendar tracking, phase-based predictions, tailored suggestions, and an AI assistant.",
    decisions: [
      "Implemented JWT authentication with a FastAPI backend.",
      "Stored cycle and symptom records in MongoDB.",
      "Used Scikit-learn for symptom-pattern analysis.",
      "Integrated a Groq LLM assistant for contextual wellness guidance.",
    ],
    tags: ["React Native", "FastAPI", "MongoDB", "JWT", "Groq LLM"],
    theme: "oneself",
    github: "https://github.com/shivika030/Oneself",
    note: "Predictions and suggestions are informational, not medical diagnoses.",
  },
];

const skillGroups = [
  { title: "Programming", icon: "code" as IconName, skills: ["Python", "C/C++"] },
  {
    title: "Backend",
    icon: "server" as IconName,
    skills: ["FastAPI", "Django", "REST APIs"],
  },
  {
    title: "AI / ML",
    icon: "brain" as IconName,
    skills: ["PyTorch", "ResNet18", "Torchvision", "Scikit-learn"],
  },
  {
    title: "Frontend",
    icon: "code" as IconName,
    skills: ["React", "React Native", "TypeScript"],
  },
  { title: "Database", icon: "server" as IconName, skills: ["MongoDB"] },
  {
    title: "Tools",
    icon: "server" as IconName,
    skills: ["Git", "GitHub", "Docker", "Render", "Vercel"],
  },
];

const certifications = [
  "Cloud Architecting — AWS Academy",
  "Introduction to Modern AI — Cisco Networking Academy",
  "Introduction to IoT & Digital Transformation (Gold) — FutureSkills Prime, NASSCOM",
  "Data Analytics Essentials — Cisco Networking Academy",
];

const navItems = ["about", "skills", "projects", "experience", "education", "contact"];

const projectScreenshots: Record<string, string> = {
  skin: "",
  oneself: "",
};

function ProductMockup({ type }: { type: string }) {
  const isMobile = type === "oneself";
  const projectName = isMobile ? "OneSelf" : "SkinAI";
  const screenshot = projectScreenshots[type];

  return (
    <div
      className={`screenshot-mock ${isMobile ? "screenshot-phone" : "screenshot-browser"}`}
      aria-label={`${projectName} screenshot placeholder`}
    >
      {isMobile ? (
        <div className="device-speaker" />
      ) : (
        <div className="browser-bar">
          <div>
            <i />
            <i />
            <i />
          </div>
          <span>Application screenshot</span>
        </div>
      )}
      <div className="screenshot-viewport">
        {screenshot ? (
          <img src={screenshot} alt={`${projectName} application screenshot`} />
        ) : (
          <div className="screenshot-placeholder">
            <Icon name="code" size={24} />
            <strong>Add {projectName} screenshot</strong>
            <span>{isMobile ? "Mobile app preview" : "Browser app preview"}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <article
      className={`project-card ${project.theme} reveal`}
      onClick={() => onOpen(project)}
      onKeyDown={(event) => event.key === "Enter" && onOpen(project)}
      role="button"
      tabIndex={0}
    >
      <div className="project-art">
        <span className="project-index">{project.number} / 02</span>
        <ProductMockup type={project.theme} />
        <span className="view-label">
          View case study <Icon name="arrow" size={15} />
        </span>
      </div>
      <div className="project-summary">
        <div>
          <span>Featured project</span>
          <h3>{project.title}</h3>
          <p>{project.subtitle}</p>
        </div>
        <div className="project-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.classList.add("modal-open");
    closeRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  return (
    <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
      <button className="modal-backdrop" onClick={onClose} aria-label="Close project detail" />
      <div className="modal-panel">
        <div className={`modal-hero ${project.theme}`}>
          <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>
          <span className="section-kicker">CASE STUDY / {project.number}</span>
          <h2 id="case-title">{project.title}</h2>
          <p>{project.subtitle}</p>
          <ProductMockup type={project.theme} />
        </div>
        <div className="modal-body">
          <div className="case-grid">
            <div>
              <span className="case-label">The problem</span>
              <p>{project.problem}</p>
            </div>
            <div>
              <span className="case-label">What I built</span>
              <p>{project.built}</p>
            </div>
          </div>
          <div className="case-decisions">
            <span className="case-label">Key technical decisions</span>
            <ol>
              {project.decisions.map((decision) => (
                <li key={decision}>{decision}</li>
              ))}
            </ol>
          </div>
          <div className="case-stack">
            <span className="case-label">Tech stack</span>
            <div>
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          {project.note && <p className="project-note">{project.note}</p>}
          <div className="case-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="button secondary"
              >
                <Icon name="github" /> View repository
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="button primary">
                Open live project <Icon name="external" />
              </a>
            )}
            {!project.github && !project.live && (
              <span className="availability-note">Project links will be added when published.</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      const current = [...navItems].reverse().find((id) => {
        const element = document.getElementById(id);
        return element && window.scrollY >= element.offsetTop - 220;
      });
      if (current) setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
      }
    };
    const setHover = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      cursorRef.current?.classList.toggle(
        "hovering",
        Boolean(target.closest("a, button, [role='button']")),
      );
    };
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", setHover);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", setHover);
    };
  }, []);

  const navigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:shivikabhawsar030@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <div className="cursor-ring" ref={cursorRef} />
      <div className="cursor-dot" ref={cursorDotRef} />
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header className="site-header">
        <button className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          SB<span>.</span>
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => navigate(item)}
              className={activeSection === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          >
            <Icon name={darkMode ? "sun" : "moon"} size={18} />
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>
          <button
            className="menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-aurora" />
        <div className="code-orbit" aria-hidden="true">
          <span>01</span>
          <span>AI</span>
          <span>API</span>
          <span>ML</span>
          <div className="orbit-core">
            <Icon name="code" size={34} />
          </div>
        </div>
        <div className="hero-content reveal is-visible">
          <span className="status-pill">
            <i /> Open to AI/ML & software internships
          </span>
          <p className="intro-line">Hello, I’m Shivika Bhawsar.</p>
          <h1>
            I build intelligent systems that work <span>in the real world.</span>
          </h1>
          <p className="hero-copy">
            AI/ML and backend developer building practical applications—from deep learning inference
            pipelines to reliable APIs and full-stack products.
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={() => navigate("projects")}>
              View projects <Icon name="arrow" />
            </button>
            <a className="button secondary" href="/Shivika-Bhawsar-Resume.pdf" download>
              <Icon name="download" /> Download resume
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/shivika030" target="_blank" rel="noreferrer">
              <Icon name="github" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shivika-bhawsar-9a2196321/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="linkedin" /> LinkedIn
            </a>
            <span>Bhopal, India</span>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => navigate("about")}>
          <span>Scroll to explore</span>
          <i />
        </button>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="section-head reveal">
          <span className="section-kicker">01 / ABOUT</span>
          <h2>
            Driven by the gap between <em>an idea</em> and a working product.
          </h2>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              I’m a Computer Science & Engineering (Data Science) student at LNCTE, Bhopal,
              graduating in 2027. I’m interested in machine learning, backend systems, and the
              engineering needed to make useful software dependable.
            </p>
            <p>
              I learn by building: breaking a problem into smaller decisions, testing what works,
              and understanding the system beyond the tutorial. My projects span model training, API
              design, mobile experiences, and cloud deployment.
            </p>
          </div>
          <div className="about-facts reveal">
            <div>
              <span>01</span>
              <strong>Data Science undergraduate</strong>
            </div>
            <div>
              <span>02</span>
              <strong>AI/ML + backend focus</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Graduating 2027</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-shell">
          <div className="section-head reveal">
            <span className="section-kicker">02 / TECHNICAL SKILLS</span>
            <h2>
              A focused toolkit for building <em>end to end.</em>
            </h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card reveal" key={group.title}>
                <div className="skill-card-head">
                  <span>0{index + 1}</span>
                  <Icon name={group.icon} />
                </div>
                <h3>{group.title}</h3>
                <div>
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="section-head project-heading reveal">
          <div>
            <span className="section-kicker">03 / FEATURED PROJECTS</span>
            <h2>
              Selected builds, <em>explained.</em>
            </h2>
          </div>
          <p>Click any project to explore the problem, architecture, and technical decisions.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} onOpen={setSelectedProject} key={project.title} />
          ))}
          <article className="project-placeholder reveal">
            <span>04 / NEXT BUILD</span>
            <div className="placeholder-mark">+</div>
            <h3>Space for what’s next.</h3>
            <p>Always exploring, learning, and building something new.</p>
          </article>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-shell experience-grid">
          <div className="section-head reveal">
            <span className="section-kicker">04 / EXPERIENCE</span>
            <h2>
              Technical thinking, <em>human communication.</em>
            </h2>
          </div>
          <div className="experience-list">
            <article className="experience-card reveal">
              <div className="experience-meta">
                <span>SEP — DEC 2024</span>
                <span>INTERNSHIP</span>
              </div>
              <h3>Social Media Manager</h3>
              <h4>PaPaPet</h4>
              <p>
                Created content, managed LinkedIn presence, supported social media strategy, and
                developed clear audience-focused communication.
              </p>
            </article>
            <article className="experience-card reveal">
              <div className="experience-meta">
                <span>2024</span>
                <span>HACKATHON</span>
              </div>
              <h3>Frontend Developer — Team Agrow</h3>
              <h4>Smart India Hackathon 2024</h4>
              <p>
                Participated in the national-level government hackathon organized through AICTE,
                contributing as the frontend developer for Team Agrow.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="education-section section-shell" id="education">
        <div className="section-head reveal">
          <span className="section-kicker">05 / EDUCATION</span>
          <h2>
            Foundations and <em>continuous learning.</em>
          </h2>
        </div>
        <div className="education-layout">
          <div className="education-main reveal">
            <span>2023 — 2027</span>
            <h3>B.Tech — Computer Science & Engineering</h3>
            <h4>Data Science · LNCTE, Bhopal</h4>
            <div>
              <strong>Current CGPA</strong>
              <b>7.6 / 10</b>
            </div>
          </div>
          <div className="certifications reveal">
            <span className="case-label">Certifications</span>
            {certifications.map((certificate, index) => (
              <div key={certificate}>
                <span>0{index + 1}</span>
                <p>{certificate}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="learning-block reveal">
          <span className="section-kicker">CURRENTLY LEARNING</span>
          <div>
            <span>Data Structures & Algorithms</span>
            <span>Cloud computing & AWS</span>
            <span>Backend development</span>
            <span>AI/ML & deep learning</span>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />
        <div className="section-shell contact-grid">
          <div className="contact-copy reveal">
            <span className="section-kicker">06 / CONTACT</span>
            <h2>
              Let’s build something that <em>solves a real problem.</em>
            </h2>
            <p>
              I’m open to software engineering and AI/ML internship opportunities, as well as
              thoughtful collaborations with developers and teams.
            </p>
            <a href="mailto:shivikabhawsar030@gmail.com" className="email-link">
              <Icon name="mail" /> shivikabhawsar030@gmail.com
            </a>
            <div className="contact-socials">
              <a href="https://github.com/shivika030" target="_blank" rel="noreferrer">
                <Icon name="github" /> GitHub <Icon name="external" size={14} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivika-bhawsar-9a2196321/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="linkedin" /> LinkedIn <Icon name="external" size={14} />
              </a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={sendMessage}>
            <label>
              Your name
              <input name="name" placeholder="Jane Smith" required />
            </label>
            <label>
              Email address
              <input name="email" type="email" placeholder="jane@company.com" required />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity or idea..."
                required
              />
            </label>
            <button className="button primary" type="submit">
              Send message <Icon name="arrow" />
            </button>
            <small>This opens your email app—your message is not stored.</small>
          </form>
        </div>
        <footer className="section-shell">
          <span>© 2025 Shivika Bhawsar</span>
          <span>AI/ML · Backend · Data Science</span>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top ↑
          </button>
        </footer>
      </section>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </main>
  );
}
