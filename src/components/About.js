import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaAward, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const aboutData = {
    summary: `As a Principal Solution Architect with 20+ years of experience leading complex digital transformations & cloud migrations across Multi cloud. I Specialize in designing and implementing cutting-edge cloud technologies, Datacenter, integration, DevOps, AI solution integration, security, virtualisation, secure gateways for Federal agencies, networks, distributed systems, and e commerce infrastructure solutions. I have Proven track record in building modern and scalable solutions, reducing infrastructure costs through optimisation, accelerating deployment times, and delivering large scale transformation projects across mining, Federal Government, telecom, insurance, banking, and service provider sectors. Trusted advisor to senior stakeholders, with hands-on expertise in GCP, AWS, Azure, Kubernetes etc. Experienced in building and scaling high performing technical teams from 4 to 15+ members. `,
    
    highlights: [
      {
        icon: <FaRocket />,
        title: "Cloud Architecture",
        description: "Designing scalable, secure, and cost-effective cloud solutions across AWS, Azure, and GCP platforms."
      },
      {
        icon: <FaLightbulb />,
        title: "AI & Innovation",
        description: "Leading AI initiatives including RAG pipelines, LLM fine-tuning, and autonomous agent implementations."
      },
      {
        icon: <FaAward />,
        title: "Leadership",
        description: "Building and leading high-performing teams to deliver complex enterprise solutions and digital transformations."
      },
      {
        icon: <FaUser />,
        title: "Mentorship",
        description: "Guiding junior architects and engineers in best practices, architectural patterns, and emerging technologies."
      }
    ],
    
    stats: [
      { number: "20+", label: "Years Experience" },
      { number: "20+", label: "Projects Delivered" },
      { number: "15+", label: "Technologies Mastered" },
      { number: "100%", label: "Client Satisfaction" }
    ]
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>About Me</h2>
          <p>Passionate about transforming businesses through innovative technology solutions</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <div className="about-summary">
              <p>{aboutData.summary}</p>
            </div>

            <div className="about-highlights">
              {aboutData.highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="highlight-item"
                >
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div className="highlight-content">
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-stats"
          >
            <div className="stats-grid">
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="stat-item"
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="about-visual">
              <div className="tech-stack">
                <h3>Core Technologies</h3>
                <div className="tech-items">
                  {[
                    "AWS/Azure/GCP", "DevOps", "AI Agents", "Security Network", "DataCenters & Network", "Virtualization", "Storage", "Networks", "Firewalls", "Databases", "Redhat", "Windows"
                  ].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="tech-item"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
