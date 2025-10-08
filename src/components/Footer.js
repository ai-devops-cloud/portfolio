import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, 
  FaHeart, FaCode, FaCloud, FaBrain
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' }
    ],
    technologies: [
      { name: 'Cloud Architecture', icon: <FaCloud /> },
      { name: 'AI/ML Solutions', icon: <FaBrain /> },
      { name: 'DevOps Automation', icon: <FaCode /> }
    ],
    social: [
      { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/techno-santy' },
      { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/pandesantosh' },
      { name: 'Email', icon: <FaEnvelope />, url: 'mailto:santosh@example.com' }
    ]
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="footer-section footer-brand"
          >
            <div className="brand-info">
              <h3>Santosh Pande</h3>
              <p className="brand-title">Principal Solutions Architect</p>
              <p className="brand-description">
                Transforming businesses through innovative cloud solutions, 
                cutting-edge AI implementations, and robust DevOps practices.
              </p>
            </div>
            
            <div className="brand-stats">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    whileHover={{ x: 5 }}
                    className="footer-link"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h4>Expertise</h4>
            <ul className="expertise-list">
              {footerLinks.technologies.map((tech, index) => (
                <li key={index} className="expertise-item">
                  <span className="expertise-icon">{tech.icon}</span>
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="footer-section"
          >
            <h4>Connect</h4>
            <div className="social-links">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="social-link"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
            
            <div className="contact-info">
              <p>
                <FaEnvelope />
                santosh@example.com
              </p>
              <p>Available for freelance projects and full-time opportunities</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <p>
              © {currentYear} Santosh Pande. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="heart-icon"
              >
                <FaHeart />
              </motion.span>
              {' '}and modern web technologies
            </p>
            
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#sitemap">Sitemap</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
