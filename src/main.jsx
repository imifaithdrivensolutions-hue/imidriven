import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, BrainCircuit, Cloud, Code2, Cpu, Database,
  Globe2, Layers3, Link2, Menu, MessageSquare, Network,
  Play, Settings2, Sparkles, X, Zap
} from 'lucide-react';
import './styles.css';

const services = [
  { icon: Code2, title: 'Custom Software', text: 'Purpose-built software designed around your business requirements and processes.' },
  { icon: Globe2, title: 'Web & Mobile Apps', text: 'Modern digital experiences for customers, teams and organisations.' },
  { icon: Layers3, title: 'Business Systems', text: 'Connected systems that make operations easier to manage and scale.' },
  { icon: Zap, title: 'Automation', text: 'Reduce repetitive work and improve efficiency with intelligent workflows.' },
  { icon: Cloud, title: 'Cloud Solutions', text: 'Scalable cloud-ready solutions that keep your business connected.' },
  { icon: BrainCircuit, title: 'AI & Intelligent Systems', text: 'Practical AI solutions for smarter processes, service and decision-making.' },
  { icon: Link2, title: 'API & Integration', text: 'Connect applications and systems so information flows where it needs to go.' },
  { icon: Database, title: 'LMS Solutions', text: 'Digital learning and training-management technology for modern organisations.' }
];

const steps = [
  ['01', 'Discover', 'Understand the business problem, users and desired outcome.'],
  ['02', 'Design', 'Turn requirements into a clear, usable digital experience.'],
  ['03', 'Develop', 'Build, test and refine the solution with modern technology.'],
  ['04', 'Transform', 'Deploy, improve and help your organisation get lasting value.']
];


function Logo() {
  return (
    <a className="logo" href="#home" aria-label="IMI Faith Driven Solutions home">
      <img
        src="/logo.png.png"
        alt="IMI Faith Driven Solutions"
        className="logo-image"
      />
    </a>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [theme, setTheme] = React.useState('pink');

  const closeMenu = () => setOpen(false);

  return (
    <div className={`site-shell theme-${theme}`}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="header">
        <div className="container nav-wrap">
          <Logo />
          <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`nav ${open ? 'nav-open' : ''}`}>
            {['About', 'Services', 'Solutions','Consulting', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a Project <ArrowRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" />
          <div className="container hero-content">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="pulse-dot" /> FAITH • INNOVATION • IMPACT</div>
              <h1>We build software that <em>moves businesses forward.</em></h1>
              <p className="hero-lead">We design and develop custom software, web applications and intelligent business systems that solve real challenges, simplify operations and help businesses grow. From innovative ideas to practical digital solutions, we turn your vision into technology that works for you.</p>

              <div className="hero-actions">
               <a className="btn btn-primary" href="#contact">Let's Discuss Your Project <ArrowRight size={18} /></a> <a className="btn btn-ghost" href="#services"><Play size={16} /> Explore Our Services</a>

              </div>
              <div className="hero-trust"><span>South African technology company</span><span>•</span><span>Software • AI • Cloud • Automation</span></div>
            </div>

            <div className="hero-visual" aria-label="Animated digital technology visual">
              <div className="orb-ring ring-a" />
              <div className="orb-ring ring-b" />
              <div className="orb-ring ring-c" />
              <div className="core-orb">
  <img
    src="/logo.png.png"
    alt="IMI Faith Driven Solutions"
    className="orbit-logo"
  />
</div>
              <div className="float-card card-ai"><BrainCircuit size={18} /><span>AI</span></div>
              <div className="float-card card-cloud"><Cloud size={18} /><span>Cloud</span></div>
              <div className="float-card card-api"><Network size={18} /><span>API</span></div>
              <div className="float-card card-auto"><Zap size={18} /><span>Automation</span></div>
              <div className="data-line line-1" /><div className="data-line line-2" /><div className="data-line line-3" />
              <div className="particle p1" /><div className="particle p2" /><div className="particle p3" /><div className="particle p4" /><div className="particle p5" />
            </div>
          </div>
          <div className="scroll-cue">SCROLL <span /></div>
        </section>

        <section
  className="intro section"
  id="about"
  onMouseEnter={() => setTheme('pink')}
>
          <div className="container intro-grid">
            <div className="section-label">01 / ABOUT IMI</div>
            <div>
              <h2>Technology <span>built around</span> your business.</h2>
              <p className="large-copy">IMI Faith Driven Solutions is a technology company that helps businesses and organisations solve real challenges through software development and digital innovation. We combine practical thinking, modern technology and a faith-driven commitment to integrity to build solutions that improve efficiency, simplify operations and support sustainable growth.</p>

              <div className="value-row"><span>01</span><b>Business-focused</b><p>Technology aligned to real operational goals.</p></div>
              <div className="value-row"><span>02</span><b>Scalable</b><p>Solutions designed to grow with your organisation.</p></div>
              <div className="value-row"><span>03</span><b>Purpose-driven</b><p>Built with faith, integrity and meaningful impact.</p></div>
            </div>
          </div>
        </section>
 
        <section
  className="services section dark-section"
  id="services"
  onMouseEnter={() => setTheme('blue')}
>
          <div className="container">
            <div className="section-head">
              <div><div className="section-label">02 / SERVICES</div><h2>Our technology <span>solutions.</span></h2></div>
              <p>From custom software to AI and automation, we build digital capabilities around the way your organisation works.</p>
            </div>
            <div className="service-grid">
              {services.map(({icon: Icon, title, text: copy}, i) => (
                <article className="service-card" key={title}>
                  <div className="service-number">0{i + 1}</div>
                  <Icon className="service-icon" size={28} strokeWidth={1.4} />
                  <h3>{title}</h3><p>{copy}</p><a href="#contact">Explore <ArrowRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
  className="solutions section"
  id="solutions"
  onMouseEnter={() => setTheme('purple')}
>
          <div className="container transformation">
            <div className="section-label">03 / DIGITAL TRANSFORMATION</div>
            <div className="transformation-copy"><h2>Your business.<br /><span>Digitally transformed.</span></h2><p>Technology should make your business simpler, faster and smarter.</p></div>
            <div className="journey">
              {steps.map(([num, title, copy]) => <div className="journey-item" key={num}><div className="journey-num">{num}</div><h3>{title}</h3><p>{copy}</p></div>)}
            </div>
          </div>
        </section>

        <section className="consulting section dark-section" id="consulting">
          <div className="container consulting-grid">
            <div><div className="section-label">04 / CONSULTING</div><h2>Accreditation support meets <span>digital capability.</span></h2><p className="large-copy">IMI also helps organisations prepare, organise and improve their systems for accreditation readiness and digital transformation.</p><a className="btn btn-primary" href="#contact">Request a Consultation <ArrowRight size={18} /></a></div>
            <div className="consulting-panel"><div className="panel-top"><span>QCTO-ALIGNED SUPPORT</span><Settings2 size={18} /></div><ul>{['Accreditation readiness assessment','Documentation and policy support','Quality management systems','Training-provider process improvement','LMS implementation','Digital records and evidence organisation'].map(x => <li key={x}><span>✓</span>{x}</li>)}</ul><small>IMI provides consulting and preparation support. Accreditation decisions remain with the relevant regulatory/accrediting bodies.</small></div>
          </div>
        </section>

        <section className="lms section" id="projects">
          
  

  <div className="container">

    <div className="section-head">
      <div>
        <div className="section-label">06 / OUR WORK</div>

        <h2>
          Real solutions.<br />
          <span>Real organisations.</span>
        </h2>
      </div>

      <p>
        IMI designs and develops practical digital solutions that help
        organisations improve their operations, learning experiences
        and digital presence.
      </p>
    </div>

    <div className="project-grid">

      <article className="project-card">

        <div className="project-window">
          <div className="window-bar">
            <i />
            <i />
            <i />
          </div>

          <div className="mock-interface">
            <div className="mock-side" />

            <div className="mock-main">
              <div className="mock-line w60" />
              <div className="mock-line w90" />

              <div className="mock-blocks">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="project-caption">

          <span>PROJECT 01 • DELIVERED</span>

          <h3>Thuto Training Academy</h3>

          <b>LMS + Landing Page</b>

          <p>
            IMI designed and delivered a learning management system
            together with a professional landing page for Thuto
            Training Academy.
          </p>

          <div className="project-tags">
            <span>LMS</span>
            <span>Web Application</span>
            <span>Landing Page</span>
            <span>Digital Learning</span>
          </div>

          <a
            href="https://www.thutotraining.co.za/"
            target="_blank"
            rel="noreferrer"
          >
            Visit Website <ArrowRight size={16} />
          </a>

        </div>

      </article>

      <article className="project-card">

        <div className="project-window">
          <div className="window-bar">
            <i />
            <i />
            <i />
          </div>

          <div className="mock-interface">
            <div className="mock-side" />

            <div className="mock-main">
              <div className="mock-line w60" />
              <div className="mock-line w90" />

              <div className="mock-blocks">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="project-caption">

          <span>PROJECT 02 • DELIVERED</span>

          <h3>Red Dot Fire</h3>

          <b>Professional Business Website</b>

          <p>
            IMI designed and delivered a professional website for
            Red Dot Fire, creating a stronger digital presence and
            customer-facing experience.
          </p>

          <div className="project-tags">
            <span>Web Development</span>
            <span>Responsive Design</span>
            <span>Business Website</span>
            <span>Digital Presence</span>
          </div>

        </div>

      </article>

    </div>

    <div className="project-stats">

      <div>
        <strong>02+</strong>
        <span>Client projects delivered</span>
      </div>

      <div>
        <strong>01</strong>
        <span>Custom LMS delivered</span>
      </div>

      <div>
        <strong>02</strong>
        <span>Web projects delivered</span>
      </div>

      <div>
        <strong>100%</strong>
        <span>Business-focused solutions</span>
      </div>

    </div>

  </div>

</section>



        <section className="values section">
          <div className="container"><div className="section-label">07 / WHY IMI</div><div className="values-grid"><h2>Driven by faith.<br /><span>Built for impact.</span></h2><div className="values-list">{[['CUSTOM-BUILT','Solutions designed around your organisation.'],['INNOVATIVE','Modern technology including AI and automation.'],['RELIABLE','Focused on quality and dependable systems.'],['INTEGRITY','Clear, responsible and purpose-led delivery.']].map(([a,b]) => <div key={a}><Sparkles size={19}/><div><b>{a}</b><p>{b}</p></div></div>)}</div></div></div>
        </section>

        <section className="cta section" id="contact">
 <div className="contact-mini">
  <span>imifaithdriven@outlook.com</span>
  <span>061 406 3929</span>
  <span>064 472 4865</span>
  <span>079 527 0476</span>
</div>

<div className="whatsapp-options">
  <p>Chat with IMI on WhatsApp</p>

  <a href="https://wa.me/27614063929" target="_blank" rel="noreferrer">
    WhatsApp: 061 406 3929
  </a>

  <a href="https://wa.me/27644724865" target="_blank" rel="noreferrer">
    WhatsApp: 064 472 4865
  </a>

  <a href="https://wa.me/27795270476" target="_blank" rel="noreferrer">
    WhatsApp: 079 527 0476
  </a>
</div>


        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <Logo />

          <div>
            <b>Solutions</b>
            <a href="#services">Software Development</a>
            <a href="#services">Automation</a>
            <a href="#services">AI & Intelligent Systems</a>
            <a href="#projects">LMS Solutions</a>
          </div>

          <div>
            <b>Company</b>
            <a href="#about">About IMI</a>
            <a href="#projects">Projects</a>
            <a href="#consulting">Consulting</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <b>Contact</b>
            <p>Gauteng, South Africa</p>
            <p>imifaithdriven@outlook.com</p>
            <p>061 406 3929</p>
            <p>064 472 4865</p>
            <p>079 527 0476</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 IMI Faith Driven Solutions. All rights reserved.</span>
          <span>Faith • Innovation • Excellence • Integrity • Impact</span>
        </div>
      </footer>
    </div>
  );
}
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/27614063929"
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with IMI on WhatsApp"
    >
      WhatsApp
    </a>
  );
}

function BackToTop() {
  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <FloatingWhatsApp />
    <BackToTop />
  </>
);