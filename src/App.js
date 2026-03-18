import { useState, useEffect, useRef } from "react";

const data = {
  name: "Ishita Singhal",
  title: "Aspiring Data Analyst",
  email: "toishita15@gmail.com",
  linkedin: "https://www.linkedin.com/in/ishita-s-11bb18203/",
  profile:
    "Aspiring Data Analyst transforming messy datasets into clear decisions — through dashboards, SQL pipelines, and predictive models.",
  experience: [
  {
  role: "Founder's Office",
  company: "Embuscon",
  type: "Full-time",
  period: "03/2026 – Present",
  showCompany: true,  // shows company name on top
  points: [
    "Designed and deployed the startup's initial website with scalable architecture for dynamic content delivery.",
    "Built a prototype AI-powered chatbot using LLM APIs with data preprocessing and structured query handling.",
    "Developed a RAG pipeline integrating document ingestion, transformation, and retrieval for university brochures.",
  ],
},
{
  role: "Data Analysis",
  company: "Embuscon",
  type: "Internship",
  period: "09/2025 – 02/2026",
  showCompany: false,  // same company, don't repeat
  points: [
    "Analyzed 10K+ rows of data using SQL and Excel, improving data accuracy by 20% and enabling faster decision-making.",
    "Designed interactive dashboards in Tableau/Power BI, reducing reporting time by 30% and improving stakeholder visibility.",
    "Automated weekly reporting workflows, cutting manual effort by 40% and supporting data-driven insights across teams.",
  ],
},
  {
    role: "Associate Software Engineer",
    company: "Accenture",
    period: "09/2024 – 05/2025",
    type: "Full-time",
    points: [
      "Built dashboards and visual summaries (sunburst charts) to track process performance across ERP workflows.",
      "Used SQL and Excel to validate configuration changes and improve reliability of test scenarios.",
      "Translated business requirements into measurable KPIs for Oracle Fusion Cloud processes.",
    ],
  },
],
  publications: [
    {
      title: "Secure and Intelligent Electronic Health Records: A Cloud-Based AI-Blockchain Framework",
      publisher: "Cureus Inc.",
      date: "11/2025",
      link: "https://www.cureusjournals.com/articles/9459-secure-and-intelligent-electronic-health-records-a-cloud-based-ai-blockchain-framework",
    },
    {
      title: "Advancing Brain MRI Segmentation using Segment Anything Model",
      publisher: "Elsevier",
      date: "05/2025",
      link: "https://www.sciencedirect.com/science/article/pii/S1877050925009202",
    },
  ],
  skills: [
    { category: "Programming & Analytics", items: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "ETL/ELT", "Data Cleaning"] },
    { category: "Data Visualization", items: ["Excel", "Power BI", "Tableau", "Pivot Tables", "Power Query"] },
    { category: "Platforms & Tools", items: ["Google Cloud Platform", "Databricks", "Git", "Oracle Fusion Cloud"] },
    { category: "Concepts", items: ["Data Modeling", "Data Warehousing", "Data Lakes", "Distributed Systems", "Workflow Optimization"] },
  ],
  projectCategories: [
    {
      category: "Analytics",
      icon: "📊",
      projects: [
        {
          title: "Instagram Clone Database",
          tags: ["SQL", "Database Design"],
          link: null,
          points: [
            "Designed a relational schema replicating Instagram features — users, posts, relationships, interactions.",
            "Built scalable comment storage with timestamp handling for real-time updates.",
            "SQL indexing improved query performance by 15%.",
          ],
        },
        {
          title: "AI-Powered Hate Speech Detection",
          tags: ["NLP", "Machine Learning"],
          link: null,
          points: [
            "Built a Twitter hate speech classifier using NLP with Logistic Regression achieving 89.4% accuracy.",
            "Applied TF-IDF vectorization and text preprocessing for feature engineering.",
            "Outperformed Random Forest (89.0% accuracy, 0.87 F1-score) with 0.88 F1-score.",
          ],
        },
        {
          title: "Sales Analysis Dashboard",
          tags: ["Excel", "Power BI"],
          link: null,
          points: [
            "Created interactive Sales Dashboard analyzing 2,000+ transactions with monthly revenue tracking.",
            "Built 10+ pivot tables identifying a 15% increase in top product sales trends.",
            "Automated reporting workflows reducing manual effort by 50%.",
          ],
        },
      ],
    },
    {
      category: "AI / ML",
      icon: "🤖",
      projects: [
        {
          title: "Network Intrusion Detection System",
          tags: ["Machine Learning", "Streamlit", "Python"],
          link: "https://network-intrusion-detection-esqruzgluyhauvzftizhtw.streamlit.app/",
          points: [
            "Built a multi-class network intrusion classifier detecting DoS, Probe, R2L, and U2R attacks on the NSL-KDD benchmark dataset.",
            "Applied feature engineering, label encoding, and StandardScaler across 41 network traffic features; trained Random Forest with class-weight balancing for imbalanced attack classes.",
            "Deployed interactive Streamlit dashboard for real-time traffic classification and feature importance visualization.",
          ],
        },
        {
          title: "Anomaly Detection in Surveillance Footage",
          tags: ["Deep Learning", "OpenCV", "Streamlit"],
          link: "https://anomaly-detection-3umsynxfb73cqhjfec38qv.streamlit.app/",
          points: [
            "Designed a convolutional autoencoder trained on normal surveillance footage to detect anomalous activity through elevated reconstruction error — no labeled anomaly data required.",
            "Applied UCSD Pedestrian dataset; implemented frame-level preprocessing with OpenCV including resizing, normalization, and temporal windowing.",
            "Flagged anomalous frames using adaptive thresholding; deployed Streamlit app enabling upload-and-analyze workflow on custom video footage.",
          ],
        },
      ],
    },
    {
      category: "Dev",
      icon: "💻",
      projects: [
        {
          title: "BharatQuiz — AI Geography & History Quiz Platform",
          tags: ["React", "Node.js", "Gemini AI", "Vercel"],
          link: "https://bharatquiz.vercel.app/",
          points: [
            "Built a Seterra-inspired interactive map quiz platform for UPSC CSE aspirants covering Indian Geography & History across 10+ topic categories.",
            "Integrated Google Gemini AI as a contextual doubt-solving tutor with UPSC-focused responses, PYQ suggestions, and memory tricks.",
            "Deployed on Vercel with a React + Vite frontend and Node.js/Express proxy backend.",
          ],
        },
      ],
    },
  ],
  leadership: [
    { role: "President", org: "Cerebrate", desc: "Led debating society, delegated to core committee, and won multiple Indian & International Parliamentary debates." },
    { role: "General Secretary", org: "Global Youth India", desc: "Facilitated workshops empowering participants with practical skills in technology and innovation." },
  ],
  education: [
    { degree: "B.Tech in Information Technology", school: "Maharaja Surajmal Institute of Technology", period: "2020 – 2024", score: "GPA: 9.308" },
    { degree: "Intermediate (Class XII)", school: "Delhi Public School, Dwarka", period: "2020", score: "88%" },
  ],
};

const NAV = ["About", "Experience", "Projects", "Skills", "Publications", "Contact"];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [scrolled, setScrolled] = useState(false);
  const [activeProjectTab, setActiveProjectTab] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#0a0a0f", color: "#e8e6f0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,300&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #0a0a0f; }
        ::-webkit-scrollbar-thumb { background: #a78bfa; border-radius: 2px; }

        .nav-link {
          background: none; border: none; color: #9ca3af; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 0.875rem; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 6px 2px; position: relative; transition: color 0.25s;
        }
        .nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 1px; background: #a78bfa; transition: width 0.3s; }
        .nav-link:hover, .nav-link.active { color: #e8e6f0; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }

        .pill {
          display: inline-block; background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.25);
          color: #c4b5fd; border-radius: 999px; font-size: 0.72rem; padding: 3px 12px;
          letter-spacing: 0.05em; font-weight: 500;
        }
        .type-badge {
          display: inline-block; font-size: 0.68rem; padding: 2px 10px; border-radius: 999px;
          font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase;
        }
        .badge-full { background: rgba(52,211,153,0.12); border: 1px solid rgba(52,211,153,0.3); color: #6ee7b7; }
        .badge-intern { background: rgba(251,191,36,0.12); border: 1px solid rgba(251,191,36,0.3); color: #fcd34d; }

        .card {
          background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px; padding: 28px 32px; transition: border-color 0.3s, transform 0.3s;
        }
        .card:hover { border-color: rgba(167,139,250,0.35); transform: translateY(-3px); }

        .proj-tab {
          background: none; border: none; cursor: pointer; padding: 10px 22px;
          font-family: 'DM Sans', sans-serif; font-size: 0.88rem; font-weight: 500;
          color: #6b7280; border-radius: 999px; transition: all 0.25s; letter-spacing: 0.03em;
        }
        .proj-tab:hover { color: #c4b5fd; background: rgba(167,139,250,0.08); }
        .proj-tab.active { color: #0a0a0f; background: #a78bfa; font-weight: 600; }

        .skill-chip {
          background: rgba(167,139,250,0.08); border: 1px solid rgba(167,139,250,0.2);
          border-radius: 8px; padding: 6px 14px; font-size: 0.8rem; color: #c4b5fd; transition: background 0.2s;
        }
        .skill-chip:hover { background: rgba(167,139,250,0.18); }

        .contact-link {
          display: flex; align-items: center; gap: 10px; color: #9ca3af;
          text-decoration: none; font-size: 0.95rem; transition: color 0.2s; padding: 8px 0;
        }
        .contact-link:hover { color: #a78bfa; }

        .section-label { font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; color: #a78bfa; font-weight: 600; margin-bottom: 8px; }
        .glow-dot { width: 8px; height: 8px; border-radius: 50%; background: #a78bfa; box-shadow: 0 0 8px #a78bfa, 0 0 20px rgba(167,139,250,0.4); display: inline-block; flex-shrink: 0; }

        .pub-link { color: #a78bfa; text-decoration: none; font-size: 0.82rem; font-weight: 500; display: inline-flex; align-items: center; gap: 4px; transition: color 0.2s; border: 1px solid rgba(167,139,250,0.3); border-radius: 6px; padding: 3px 10px; }
        .pub-link:hover { color: #c4b5fd; border-color: #c4b5fd; }

        .proj-link-btn {
          display: inline-flex; align-items: center; gap: 6px; color: #9ca3af;
          font-size: 0.78rem; text-decoration: none; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; padding: 5px 12px; transition: all 0.2s; margin-top: 14px; width: fit-content;
        }
        .proj-link-btn:hover { color: #a78bfa; border-color: rgba(167,139,250,0.4); }

        .exp-section-header {
          font-size: 0.7rem; letter-spacing: 0.18em; text-transform: uppercase;
          color: #4b5563; font-weight: 600; margin-bottom: 18px; padding-left: 2px;
          display: flex; align-items: center; gap: 10px;
        }
        .exp-section-header::after { content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.06); }

        @keyframes grain { 0%,100%{transform:translate(0,0)} 10%{transform:translate(-2%,-3%)} 30%{transform:translate(3%,2%)} 50%{transform:translate(-1%,4%)} 70%{transform:translate(2%,-2%)} 90%{transform:translate(-3%,1%)} }
      `}</style>

      {/* Background */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.03, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", animation: "grain 8s steps(10) infinite" }} />
      <div style={{ position: "fixed", top: "10%", right: "5%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "20%", left: "-5%", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s", padding: "0 40px",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.15rem", color: "#e8e6f0" }}>
            IS<span style={{ color: "#a78bfa" }}>.</span>
          </span>
          <div style={{ display: "flex", gap: 32 }}>
            {NAV.map(n => (
              <button key={n} className={`nav-link ${active === n ? "active" : ""}`} onClick={() => scrollTo(n)}>{n}</button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "0 40px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", width: "100%", paddingTop: 80 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span className="glow-dot" />
            <span style={{ fontSize: "0.78rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#a78bfa" }}>Available for opportunities</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
            Ishita<br /><span style={{ fontStyle: "italic", color: "#a78bfa" }}>Singhal</span>
          </h1>
          <p style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#9ca3af", maxWidth: 560, lineHeight: 1.7, marginBottom: 40, fontWeight: 300 }}>
            {data.profile}
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button onClick={() => scrollTo("Contact")} style={{
              background: "#a78bfa", color: "#0a0a0f", border: "none", borderRadius: 10,
              padding: "13px 28px", fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
              fontSize: "0.9rem", cursor: "pointer", letterSpacing: "0.03em", transition: "background 0.2s, transform 0.2s",
            }}
              onMouseOver={e => { e.target.style.background = "#c4b5fd"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseOut={e => { e.target.style.background = "#a78bfa"; e.target.style.transform = "translateY(0)"; }}
            >Get in touch</button>
            <a href={data.linkedin} target="_blank" rel="noreferrer" style={{
              background: "transparent", color: "#e8e6f0", border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 10, padding: "13px 28px", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500, fontSize: "0.9rem", cursor: "pointer", textDecoration: "none",
              letterSpacing: "0.03em", transition: "border-color 0.2s", display: "inline-flex", alignItems: "center", gap: 8,
            }}
              onMouseOver={e => e.currentTarget.style.borderColor = "#a78bfa"}
              onMouseOut={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"}
            >LinkedIn ↗</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: "0 48px", marginTop: 72, width: "fit-content" }}>
            {[["2+", "Years of Experience"], ["2", "Publications"], ["6", "Projects"]].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#a78bfa" }}>{num}</div>
                <div style={{ fontSize: "0.8rem", color: "#6b7280", letterSpacing: "0.05em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, color: "#4b5563" }}>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #4b5563, transparent)" }} />
        </div>
      </section>

      {/* EXPERIENCE */}
<section id="experience" style={{ padding: "100px 40px", position: "relative", zIndex: 1 }}>
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <FadeIn>
      <p className="section-label">Career</p>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 52 }}>Experience</h2>
    </FadeIn>
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {data.experience.map((exp, i) => {
        const nextSameCompany = data.experience[i + 1]?.company === exp.company;
        const prevSameCompany = data.experience[i - 1]?.company === exp.company;
        return (
          <FadeIn key={i} delay={i * 0.1} style={{ marginBottom: nextSameCompany ? 0 : undefined }}>
            <div className="card" style={{
              borderRadius: nextSameCompany && !prevSameCompany ? "16px 16px 0 0"
                : prevSameCompany && !nextSameCompany ? "0 0 16px 16px"
                : prevSameCompany && nextSameCompany ? "0"
                : "16px",
              borderBottom: nextSameCompany ? "none" : undefined,
              marginBottom: nextSameCompany ? 0 : undefined,
            }}>
              {exp.showCompany && (
                <p style={{ color: "#a78bfa", fontSize: "0.95rem", fontWeight: 700, marginBottom: 16, letterSpacing: "0.02em" }}>{exp.company}</p>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>{exp.role}</h3>
                  <span className={`type-badge ${exp.type === "Internship" ? "badge-intern" : "badge-full"}`}>{exp.type}</span>
                </div>
                <span className="pill">{exp.period}</span>
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {exp.points.map((p, j) => (
                  <li key={j} style={{ display: "flex", gap: 12, color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.65 }}>
                    <span style={{ color: "#a78bfa", marginTop: 6, flexShrink: 0 }}>▸</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        );
      })}
    </div>
  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 40px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p className="section-label">Work</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 36 }}>Projects</h2>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div style={{ display: "flex", gap: 6, marginBottom: 40, flexWrap: "wrap", background: "rgba(255,255,255,0.03)", borderRadius: 999, padding: 5, width: "fit-content", border: "1px solid rgba(255,255,255,0.07)" }}>
              {data.projectCategories.map((cat, i) => (
                <button key={i} className={`proj-tab ${activeProjectTab === i ? "active" : ""}`} onClick={() => setActiveProjectTab(i)}>
                  {cat.icon} {cat.category}
                </button>
              ))}
            </div>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {data.projectCategories[activeProjectTab].projects.map((proj, i) => (
              <FadeIn key={`${activeProjectTab}-${i}`} delay={i * 0.08}>
                <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                    {proj.tags.map(t => <span key={t} className="pill">{t}</span>)}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, marginBottom: 16, lineHeight: 1.4 }}>{proj.title}</h3>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                    {proj.points.map((p, j) => (
                      <li key={j} style={{ display: "flex", gap: 10, color: "#9ca3af", fontSize: "0.85rem", lineHeight: 1.6 }}>
                        <span style={{ color: "#a78bfa", flexShrink: 0, marginTop: 5 }}>▸</span>{p}
                      </li>
                    ))}
                  </ul>
                  {proj.link ? (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="proj-link-btn">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      View Project
                    </a>
                  ) : (
                    <span style={{ marginTop: 14, fontSize: "0.74rem", color: "#374151", fontStyle: "italic" }}>Link coming soon</span>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={{ padding: "100px 40px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p className="section-label">Toolkit</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 56 }}>Skills</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {data.skills.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card">
                  <h3 style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.12em", color: "#a78bfa", marginBottom: 16, fontWeight: 600 }}>{s.category}</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {s.items.map(item => <span key={item} className="skill-chip">{item}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" style={{ padding: "100px 40px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p className="section-label">Research</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: 56 }}>Publications</h2>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {data.publications.map((pub, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: "1rem", fontWeight: 500, lineHeight: 1.55, marginBottom: 10 }}>{pub.title}</h3>
                      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                        <span style={{ color: "#a78bfa", fontSize: "0.85rem" }}>{pub.publisher}</span>
                        <a href={pub.link} target="_blank" rel="noreferrer" className="pub-link">
                          Read Paper ↗
                        </a>
                      </div>
                    </div>
                    <span className="pill" style={{ flexShrink: 0 }}>{pub.date}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Leadership */}
          <FadeIn delay={0.2}>
            <p className="section-label" style={{ marginTop: 72 }}>Leadership</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: 32 }}>Roles</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {data.leadership.map((l, i) => (
                <div key={i} className="card">
                  <span style={{ color: "#a78bfa", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{l.org}</span>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, margin: "6px 0 12px" }}>{l.role}</h3>
                  <p style={{ color: "#9ca3af", fontSize: "0.88rem", lineHeight: 1.65 }}>{l.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.3}>
            <p className="section-label" style={{ marginTop: 72 }}>Background</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", marginBottom: 32 }}>Education</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {data.education.map((ed, i) => (
                <div key={i} className="card" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 600, marginBottom: 4 }}>{ed.degree}</h3>
                    <span style={{ color: "#9ca3af", fontSize: "0.88rem" }}>{ed.school}</span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span className="pill" style={{ display: "block", marginBottom: 6 }}>{ed.period}</span>
                    <span style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600 }}>{ed.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 40px 140px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <p className="section-label">Connect</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 4rem)", marginBottom: 24, lineHeight: 1.1 }}>
              Let's build<br /><span style={{ fontStyle: "italic", color: "#a78bfa" }}>something together.</span>
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "1rem", marginBottom: 48, maxWidth: 480, lineHeight: 1.7 }}>
              Open to data analyst roles, research collaborations, and analytics consulting. Don't hesitate to reach out.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <a href={`mailto:${data.email}`} className="contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                {data.email}
              </a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                linkedin.com/in/ishita-s-11bb18203
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "24px 40px", borderTop: "1px solid rgba(255,255,255,0.06)", color: "#4b5563", fontSize: "0.8rem", position: "relative", zIndex: 1 }}>
        Designed & built — Ishita Singhal © 2026
      </footer>
    </div>
  );
}