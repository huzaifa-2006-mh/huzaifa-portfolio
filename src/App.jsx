import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Mail, Phone, MapPin, ExternalLink, 
  Github, Linkedin, Code, Layers, Server, Database, Code2, Monitor, Braces
} from 'lucide-react';
import './index.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React JS', icon: <Monitor /> },
    { name: 'Node JS & Express', icon: <Server /> },
    { name: 'MongoDB & Mongoose', icon: <Database /> },
    { name: 'WordPress', icon: <Layers /> },
    { name: 'HTML, CSS & JS', icon: <Code /> },
    { name: 'Tailwind CSS', icon: <Braces /> },
    { name: 'MySQL', icon: <Database /> },
    { name: 'Python (Basic)', icon: <Code2 /> }
  ];

  const projects = [
    {
      title: 'MHLMS',
      desc: 'A full-stack Learning Management System developed with the MERN stack. Features robust user roles, course management, and authentication.',
      tags: ['MERN Stack', 'React', 'Node.js', 'MongoDB'],
      link: 'https://mhlms.vercel.app/',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Circle Six',
      desc: 'A professional business website developed with WordPress. Designed with a custom theme to highlight their services and portfolio.',
      tags: ['WordPress', 'HTML/CSS', 'PHP'],
      link: 'https://circlesix.pk/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Skill Development Foundation',
      desc: 'An educational foundation website created in WordPress, emphasizing aesthetics, high-performance, and responsive design.',
      tags: ['WordPress', 'Web Design'],
      link: 'https://skilldevelopmentfoundation.com/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
      </div>

      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <a href="#" className="logo">Muhammad Huzaifa.</a>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="active" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>

          <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="container hero-content">
            <div className="hero-text fade-in-up">
              <h2>Hello, I am Muhammad Huzaifa</h2>
              <h1><span>Full Stack</span> Developer.</h1>
              <p>MERN Stack & WordPress Specialist with a strong eye for dynamic designs and robust backend architecture.</p>
              
              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="#contact" className="btn btn-outline">Contact Me</a>
              </div>
            </div>
            
            <div className="hero-image fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="hero-img-wrapper">
                <img src="/avatar.jpg" alt="Muhammad Huzaifa" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&w=600&q=80' }} />
              </div>

              <div className="badge badge-1">
                <div className="badge-icon"><Code2 /></div>
                <div className="badge-text">
                  <h4>MERN Stack</h4>
                  <p>Expert</p>
                </div>
              </div>

              <div className="badge badge-2">
                <div className="badge-icon"><Layers /></div>
                <div className="badge-text">
                  <h4>WordPress</h4>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section glass-panel container" style={{marginTop: '4rem'}}>
          <h2 className="section-title">About Me</h2>
          <div style={{maxWidth: '800px', margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-muted)'}}>
            <p style={{marginBottom: '1rem'}}>
              I am a passionate Full Stack Developer with expertise in the MERN stack and WordPress. I specialize in building highly interactive, scalable, and beautifully designed web applications.
            </p>
            <p>
              With 5 months of hands-on experience as a WordPress Developer at SDC, I have refined my front-end aesthetics and backend logic capabilities, seamlessly integrating modern JS frameworks to deliver state-of-the-art software solutions. Let's code the future!
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card glass-panel" key={index}>
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, idx) => (
              <div className="project-card glass-panel" key={idx}>
                <div className="project-img">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span className="tag" key={i}>{tag}</span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section container">
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline glass-panel">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-date">5 Months</span>
                <h3 className="timeline-title">WordPress Developer</h3>
                <div className="timeline-company">SDC (Skill Development Council)</div>
                <p style={{color: 'var(--text-muted)'}}>
                  Developed and customized sophisticated WordPress websites, focusing on high performance, responsive layouts, and seamless user experiences. Collaborated closely with clients to understand requirements and translate them into robust digital solutions. Strengthened core skills in HTML, CSS, JavaScript, and PHP while diving deeply into full-stack modern aesthetics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper glass-panel">
            <div className="contact-info">
              <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>Let's Build Something Great Together!</h3>
              <p style={{color: 'var(--text-muted)', marginBottom: '2rem'}}>
                Whether you have a project in mind, an opportunity to discuss, or just want to say hi, my inbox is always open.
              </p>

              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div>
                  <h4 style={{fontWeight: 600}}>Email</h4>
                  <p style={{color: 'var(--text-muted)'}}>huzaifamm70@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div>
                  <h4 style={{fontWeight: 600}}>WhatsApp</h4>
                  <p style={{color: 'var(--text-muted)'}}>
                    <a href="https://wa.me/923158067492" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none', transition: 'color 0.3s ease'}} onMouseOver={e => e.target.style.color='var(--primary)'} onMouseOut={e => e.target.style.color='inherit'}>+92 315 8067492</a>
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div>
                  <h4 style={{fontWeight: 600}}>Location</h4>
                  <p style={{color: 'var(--text-muted)'}}>Available Worldwide</p>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                <a href="https://github.com/huzaifa-2006-mh" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}><Github size={28} /></a>
                <a href="https://linkedin.com/in/muhammad-huzaifa-mhs" target="_blank" rel="noopener noreferrer" style={{color: '#fff'}}><Linkedin size={28} /></a>
              </div>
            </div>

            <form className="contact-form" action="https://formsubmit.co/huzaifamm70@gmail.com" method="POST">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New submission from your Portfolio!" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea name="message" className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{alignSelf: 'flex-start', border: 'none'}}>Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>© {new Date().getFullYear()} Muhammad Huzaifa. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
