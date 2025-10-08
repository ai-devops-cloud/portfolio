import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowDown, FaCode, FaCloud, FaCogs, FaBrain } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Principal Solutions Architect",
    "Cloud Infrastructure Expert",
    "DevOps & AI Specialist",
    "Infrastructure Architecture",
    "Security & Compliance",
    "Leadership & Strategy",
    "Technology Leader"
  ];

  const skills = [
 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="hero-badge"
            >
              <span>🚀 Available for Opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hero-title"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Santosh Pande</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="hero-subtitle"
            >
              <ReactTyped
                strings={heroTexts}
                typeSpeed={50}
                backSpeed={30}
                loop
                showCursor={true}
                cursorChar="|"
                className="typewriter"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="hero-description"
            >
              Transforming businesses through innovative cloud solutions, 
              cutting-edge AI implementations, and robust DevOps practices. 
              Leading teams to deliver scalable, secure, and efficient 
              infrastructure solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="hero-actions"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <FaDownload />
                Download Resume
              </motion.a>
              
              <motion.button
                onClick={scrollToAbout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <FaArrowDown />
                Learn More
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="hero-skills"
            >
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.text}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="skill-item"
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-visual"
          >
            <div className="hero-image">
              <div className="floating-cards">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="floating-card card-1"
                >
                  <FaCloud />
                  <span>AWS/Azure/GCP</span>
                </motion.div>

                
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="floating-card card-2"
                >
                  <FaBrain />
                  <span>AI Agents</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -25, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="floating-card card-3"
                >
                  <FaCogs />
                  <span>DevOps</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="floating-card card-4"
                >
                  <FaCloud />
                  <span>Security Network</span>
                </motion.div>

              </div>
              
              <div className="hero-avatar">
                <div className="avatar-ring">
                  <div className="avatar-ring-inner">
                    <div className="avatar-placeholder">
                      <img 
                        src="/profile-photo.jpg" 
                        alt="Santosh Pande" 
                        className="profile-photo"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = '<span class="avatar-initials">SK</span>';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="scroll-indicator"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="scroll-arrow"
          >
            <FaArrowDown />
          </motion.div>
          <span>Scroll Down</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
