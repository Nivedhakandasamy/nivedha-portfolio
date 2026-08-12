import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Nivedha K",
  title: "Software Developer",
  tagline: "Building practical, user-focused web applications with clean code and thoughtful UX.",
  email: "nivedhajan04@gmail.com",
  phone: "7806970132",
  linkedin: "https://www.linkedin.com/in/nivedha-kandasamy-598393259/",
  github: "https://github.com/Nivedhakandasamy",
  leetcode: "https://leetcode.com/u/nivedha138/",
};

const skills = {
  "Programming Languages": ["Java", "C", "JavaScript"],
  "Frontend": ["HTML", "CSS", "React.js"],
  "Backend & Data": ["Node.js", "SQL", "MongoDB"],
  "Tools & Design": ["Figma", "Git", "GitHub"],
  "Professional": ["Observation", "Adaptability", "Teamwork", "DBMS", "Agile Methodologies"],
};

const projects = [
  {
    title: "Farmer App",
    problem: "Help farmers and buyers make better decisions by bringing produce pricing and market information into one platform.",
    tech: ["React", "Node.js", "Python", "Flask", "ARIMA"],
    achievements: [
      "Built a platform for farmers to list produce prices.",
      "Enabled buyers to view market trends.",
      "Integrated real-time market price data from the Tamil Nadu Horticulture website."
    ],
    github: profile.github,
    demo: null
  },
  {
    title: "Anonymous Message App",
    problem: "Create a messaging experience where users can communicate through roll numbers while protecting sender anonymity.",
    tech: ["React", "MongoDB", "Node.js"],
    achievements: [
      "Developed an anonymous messaging platform.",
      "Implemented privacy controls designed to preserve user anonymity."
    ],
    github: profile.github,
    demo: null
  },
  {
    title: "Book Recommendation",
    problem: "Make it easier for users to discover books and explore useful book metadata in a simple interface.",
    tech: ["React", "Node.js", "Google Books API"],
    achievements: [
      "Integrated Google Books API for dynamic book details.",
      "Displayed title, author, genre, description and ratings.",
      "Designed UI flows for viewing details, saving favorites and rating books."
    ],
    github: profile.github,
    demo: null
  }
];

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  const paths = {
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    x: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></>,
    moon: <><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7a5.4 5.4 0 0 0-1.4-3.8A5 5 0 0 0 19.3 0S18.1-.4 15 1.7a13.4 13.4 0 0 0-6 0C5.9-.4 4.7 0 4.7 0a5 5 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.4 3.8c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.5 2-5-2-7-2"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2a5 5 0 0 1 2-2Z"/><path d="M2 9h4v12H2z"/><path d="M4 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/></>,
    external: <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    check: <path d="m5 12 4 4L19 6"/>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 500);
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        return el && window.scrollY >= el.offsetTop - 180 && window.scrollY < el.offsetTop + el.offsetHeight - 180;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(data.get("subject") || "Portfolio enquiry");
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Nivedha K home">
            <span className="brand-mark">NK</span><span>Nivedha<span className="brand-dot">.</span></span>
          </a>

          <button className="menu-btn" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "x" : "menu"} />
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
            {["home", "about", "skills", "projects", "experience", "education", "contact"].map((id) => (
              <a key={id} className={active === id ? "active" : ""} href={`#${id}`} onClick={closeMenu}>
                {id[0].toUpperCase() + id.slice(1)}
              </a>
            ))}
            <button className="theme-btn" onClick={() => setDark(!dark)} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>
              <Icon name={dark ? "sun" : "moon"} size={18} />
            </button>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="pulse"></span> Open to opportunities</div>
              <h1>Hi, I'm <span>Nivedha K.</span></h1>
              <h2>{profile.title} <span className="slash">/</span> UI-minded Builder</h2>
              <p>{profile.tagline}</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">View Projects <Icon name="arrow" size={18} /></a>
                <a className="btn btn-ghost" href="/resume/Nivedha_K.pdf" download>Download Resume <Icon name="download" size={18} /></a>
              </div>
              <div className="quick-links">
                <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a>
                <a href={`mailto:${profile.email}`}><Icon name="mail" /> Email</a>
              </div>
            </div>

            <div className="hero-visual reveal" aria-label="Developer profile visual">
              <div className="orb orb-a"></div><div className="orb orb-b"></div>
              <div className="code-card">
                <div className="window-bar"><span></span><span></span><span></span><b>nivedha.js</b></div>
                <pre><code><span className="pink">const</span> developer = {'{'}
{"\n  "}<span className="blue">name</span>: <span className="green">"Nivedha K"</span>,
{"\n  "}<span className="blue">stack</span>: [<span className="green">"React"</span>, <span className="green">"Node.js"</span>, <span className="green">"MongoDB"</span>],
{"\n  "}<span className="blue">focus</span>: <span className="green">"clean UX"</span>,
{"\n  "}<span className="blue">mindset</span>: <span className="green">"keep learning"</span>
{'\n'}{'}'};</code></pre>
                <div className="code-status"><span className="status-dot"></span> ready to build</div>
              </div>
              <div className="floating-chip chip-one">React.js</div>
              <div className="floating-chip chip-two">Figma</div>
              <div className="floating-chip chip-three">Node.js</div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeading kicker="About me" title="Code with purpose. Design with empathy." text="A recruiter-friendly snapshot of my background, interests and approach." />
            <div className="about-grid">
              <div className="about-card reveal">
                <p className="lead">I'm an enthusiastic Computer Science Engineering student focused on software development and application building, with a strong interest in creating practical and user-friendly digital experiences.</p>
                <p>My project work spans web applications, APIs, data-backed experiences and UX-oriented interfaces. I enjoy understanding a problem first, then turning it into a clean flow that people can actually use.</p>
                <div className="mini-stats">
                  <div><strong>7.47</strong><span>CGPA</span></div>
                  <div><strong>3</strong><span>Featured projects</span></div>
                  <div><strong>3+</strong><span>Core development areas</span></div>
                </div>
              </div>
              <div className="principles reveal">
                <div className="principle"><span>01</span><div><h3>Problem solving</h3><p>Break complex requirements into manageable, testable pieces.</p></div></div>
                <div className="principle"><span>02</span><div><h3>User focus</h3><p>Use simple information architecture and visual hierarchy to improve usability.</p></div></div>
                <div className="principle"><span>03</span><div><h3>Continuous learning</h3><p>Stay curious across frontend, backend, databases and design tools.</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionHeading kicker="Skills" title="A practical full-stack toolkit." text="Technologies and professional strengths listed in my resume." />
            <div className="skills-grid">
              {Object.entries(skills).map(([group, items], i) => (
                <div className="skill-card reveal" key={group}>
                  <div className="skill-head"><span>0{i + 1}</span><h3>{group}</h3></div>
                  <div className="skill-list">
                    {items.map((skill, j) => <div className="skill-row" key={skill}><span>{skill}</span><div className="bar"><i style={{ width: `${82 - j * 5}%` }}></i></div></div>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionHeading kicker="Selected work" title="Projects that solve real problems." text="Project descriptions are rewritten from the supplied resume without inventing employment experience or unlisted metrics." />
            <div className="project-grid">
              {projects.map((p, i) => (
                <article className="project-card reveal" key={p.title}>
                  <div className="project-top"><span className="project-number">0{i + 1}</span><div className="project-links">{p.github && <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} GitHub`}><Icon name="github" /></a>}{p.demo && <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} demo`}><Icon name="external" /></a>}</div></div>
                  <h3>{p.title}</h3>
                  <p className="project-problem"><b>Problem:</b> {p.problem}</p>
                  <ul>{p.achievements.map(a => <li key={a}><Icon name="check" size={17} />{a}</li>)}</ul>
                  <div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section section-alt">
          <div className="container">
            <SectionHeading kicker="Experience" title="Hands-on experience through projects." text="The supplied resume does not list a formal company role, so this section presents project experience without fabricating employment." />
            <div className="timeline">
              <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-card"><span className="timeline-label">Project Experience</span><h3>Full-Stack Web Application Development</h3><p>Worked across frontend, backend and data layers using React, Node.js, MongoDB, Python/Flask and SQL-related skills across academic and personal projects.</p><div className="tags"><span>React.js</span><span>Node.js</span><span>MongoDB</span><span>Python</span></div></div>
              </div>
              <div className="timeline-item reveal">
                <div className="timeline-dot"></div>
                <div className="timeline-card"><span className="timeline-label">Design Experience</span><h3>UI/UX & Product Thinking</h3><p>Applied user-focused interface thinking and Figma-based design skills, supported by the Foundations of UX Design certification from Google.</p><div className="tags"><span>Figma</span><span>UX Design</span><span>Usability</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <SectionHeading kicker="Education & credentials" title="Academic foundation and continuous learning." text="Education, certification, workshop and campus achievements from my resume." />
            <div className="education-grid">
              <div className="edu-card reveal">
                <span className="edu-year">2022 — 2026</span>
                <h3>B.E. Computer Science Engineering</h3>
                <p>Kongu Engineering College</p><strong>CGPA: 7.47</strong>
              </div>
              <div className="edu-card reveal">
                <span className="edu-year">2020 — 2021</span>
                <h3>Higher Secondary Certificate</h3>
                <p>G.V Higher Secondary School</p><strong>HSC: 92.63%</strong>
              </div>
              <div className="edu-card reveal">
                <span className="edu-year">2018 — 2019</span>
                <h3>Secondary School Leaving Certificate</h3>
                <p>Ramesh Vidhyasharam Matriculation Higher Secondary School</p><strong>SSLC: 94.40%</strong>
              </div>
            </div>

            <div className="credential-grid">
              <div className="credential-card reveal"><span className="credential-icon">01</span><div><h3>MongoDB Associate Developer</h3><p>Certification listed on resume.</p></div></div>
              <div className="credential-card reveal"><span className="credential-icon">02</span><div><h3>Foundations of UX Design</h3><p>Google certification listed on resume.</p></div></div>
              <div className="credential-card reveal"><span className="credential-icon">03</span><div><h3>Women Entrepreneurship Workshop</h3><p>Workshop conducted by Kongu Engineering College.</p></div></div>
            </div>

            <div className="achievements reveal">
              <span>Achievements</span>
              <p><b>3rd Prize</b> — Paper Presentation on “Generative AI”</p>
              <p><b>1st Place</b> — CSI Coding Event</p>
              <p><b>2nd Place</b> — Neo Codeathon</p>
              <p><b>Memberships:</b> Computer Society of India (CSI) · English Proficiency in Readers Club (EPRC)</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-wrap reveal">
              <div className="contact-copy">
                <span className="section-kicker">Contact</span>
                <h2>Let's build something useful.</h2>
                <p>Open to conversations about software development, frontend roles, UI/UX opportunities and project collaborations.</p>
                <div className="contact-list">
                  <a href={`mailto:${profile.email}`}><Icon name="mail" /><span>{profile.email}</span></a>
                  <a href={`tel:${profile.phone}`}><Icon name="phone" /><span>{profile.phone}</span></a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /><span>LinkedIn</span></a>
                  <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" /><span>GitHub</span></a>
                </div>
              </div>
              <form className="contact-form" onSubmit={submitForm}>
                <div className="form-row"><label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Email<input type="email" name="email" required autoComplete="email" placeholder="you@example.com" /></label></div>
                <label>Subject<input name="subject" placeholder="Let's connect" /></label>
                <label>Message<textarea name="message" required rows="5" placeholder="Tell me a little about your opportunity or idea..."></textarea></label>
                <button className="btn btn-primary" type="submit">Send message <Icon name="arrow" size={18} /></button>
                <small>This form opens your email client using a mailto action; no message is stored by this static site.</small>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Nivedha K. Built with React.</p>
          <div><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href="/resume/Nivedha_K.pdf" download>Resume</a></div>
        </div>
      </footer>

      <button className={`to-top ${showTop ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">↑</button>
    </>
  );
}

function SectionHeading({ kicker, title, text }) {
  return <div className="section-heading reveal"><span className="section-kicker">{kicker}</span><h2>{title}</h2><p>{text}</p></div>;
}

createRoot(document.getElementById("root")).render(<App />);
