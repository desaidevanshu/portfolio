import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronUp } from 'lucide-react';
import './styles.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    document.body.classList.remove('light-mode', 'dark-mode');
    document.body.classList.add(darkMode ? 'dark-mode' : 'light-mode');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const skills = {
    'Programming Languages': ['Java', 'Python', 'C'],
    'Libraries/Frameworks': ['JavaScript', 'React', 'Express js', 'Flask', 'NodeJS'],
    'Tools/Platforms': ['Git', 'VS code', 'Firebase', 'Kubernetes','Kali Linux'],
    'Databases': ['MySQL', 'MongoDB', 'PostgreSQL']
  };

  const experiences = [
    {
      role: "KJSCE ROBOCON",
      position: "Coding Member",
      period: "2023",
      description: "Contributed in project for DD ROBOCON competition."
    },
    {
      role: "GIRLSCRIPT SUMMER OF CODE",
      position: "Contributor",
      period: "2023",
      description: "Participated as an open source contributor."
    },
    {
      role: "KJSCE SDC",
      position: "Web Developer",
      period: "2025",
      description: "Worked on the SDC platform for KJSCE."
    }
  ];

  const onButtonClick = () => {
    fetch("Devanshu_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Devanshu_Resume.pdf";
        alink.click();
        alert("Devanshu Resume Downloaded!!");
      });
    });
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Devanshu</div>
        <div className="navbar-right">
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Devanshu Desai</h1>
          <p>Web Developer & AI Enthusiast</p>
          <div className="hero-buttons">
            <a href="#about" className="btn primary">About Me</a>
            <a href="#contact" className="btn secondary">Get in Touch</a>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            <img 
              src="/DD.jpg"
              alt="Devanshu"
              className="profile-pic"
            />
          </div>
          <div className="about-text">
            <p>
              I am a B.Tech student pursuing a degree in Artificial Intelligence and Data Science, driven by an unwavering passion for web and software development. Proficient in Python, C/C++, Java, HTML, CSS, and MySQL, I am committed to refining my skills and staying ahead in the rapidly evolving tech landscape.
            </p>
            <p>
              My vision is to revolutionize the way we interact with technology, focusing on creating seamless, intuitive, and impactful digital experiences. I believe in the power of ethical considerations and creative problem-solving, aiming to develop solutions that not only meet but exceed user expectations. As I continue to learn and grow, I am excited to contribute to the tech industry, driving innovation and making a meaningful difference in the digital world.
            </p>
            <div className="social-links">
              <a href="https://github.com/desaidevanshu" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/devanshu-desai-70704b1ab/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <button  className="btn third" onClick={onButtonClick}>
                Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-container">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skill-list">
                {skillList.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {[
            {
              id: 1,
              title: "Weather Web",
              description: "This website shows the current time weather of your location. Using the weather API to fetch the data and display it accordingly.",
              imageUrl: "/Weather.png",
              tags: ["HTML", "CSS", "JavaScript"]
            },
            {
              id: 2,
              title: "Emotion Detector",
              description: "This website uses IBM’s watson API to detect the text and then analyze it according to tone of the text.",
              tags: ["HTML","CSS","Python", "Flask"]
            },
            {
              id: 3,
              title: "SDC Platform",
              description: " This is Student Development Cell platform for KJSCE.",
              tags: ["ReactJS", "Node.js","MongoDB"]
            }
          ].map((project) => (
            <div key={project.id} className="project-card">
              {project.imageUrl && (
                <img 
                  src={project.imageUrl}
                  alt={project.title}
                />
              )}
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="project-link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="position">{exp.position}</p>
                </div>
                <span className="period">{exp.period}</span>
              </div>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Get In Touch</h2>
        <div className="contact-container">
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="contact-links">
            <a href="mailto:devanshu.desai0501@gmail.com">
              <Mail size={24} />
              <span>Email Me</span>
            </a>
            <a href="https://www.linkedin.com/in/devanshu-desai-70704b1ab/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Made with ❤️ by Devanshu Desai</p>
      </footer>

      {isVisible && (
        <button onClick={scrollToTop} className="scroll-top">
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;