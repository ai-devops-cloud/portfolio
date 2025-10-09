import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaRobot, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ chatbotOpen, setChatbotOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="nav-logo"
        >
          <span className="logo-text">SP</span>
          <span className="logo-title">Santosh Pande</span>
        </motion.div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ color: '#667eea' }}
              className="nav-link"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="nav-actions">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setChatbotOpen(!chatbotOpen)}
            className={`chatbot-btn ${chatbotOpen ? 'active' : ''}`}
            title="AI Assistant"
          >
            <FaRobot />
            <span className="btn-text">AI Assistant</span>
          </motion.button>

          <div className="social-links">
            <motion.a
              href="https://github.com/ai-devops-cloud"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="social-link"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/pandesantosh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="social-link"
            >
              <FaLinkedin />
            </motion.a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
