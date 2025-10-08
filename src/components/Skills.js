import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCloud, FaDocker, FaPython, FaJs, FaReact, FaNodeJs, 
  FaAws, FaLinux, FaGit, FaDatabase, FaShieldAlt, FaBrain,
  FaCogs, FaServer, FaNetworkWired, FaLock, FaRocket
} from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('cloud');

  const skillCategories = {
    cloud: {
      title: "Cloud & Infrastructure",
      icon: <FaCloud />,
      color: "#FF6B6B",
      skills: [
        { name: "AWS", level: 95, icon: <FaAws /> },
        { name: "Azure", level: 90, icon: <FaCloud /> },
        { name: "Google Cloud", level: 85, icon: <FaCloud /> },
        { name: "Migrations & Migration Tools", level: 90, icon: <FaCloud /> },
        { name: "Digital Transformatiion", level: 80, icon: <FaCloud /> },
        { name: "Cloud Native Solutions", level: 90, icon: <FaServer /> }
      ]
    },
    devops: {
      title: "DevOps & Automation",
      icon: <FaCogs />,
      color: "#4ECDC4",
      skills: [
        { name: "CI/CD Pipelines", level: 90, icon: <FaCogs /> },
        { name: "Terraform", level: 75, icon: <FaCogs /> },
        { name: "Kubernetes & Docker", level: 75, icon: <FaGit /> },
        { name: "GitHub Actions", level: 80, icon: <FaGit /> },
        { name: "Python", level: 60, icon: <FaLinux /> },
        { name: "Monitoring & Logs", level: 80, icon: <FaServer /> }
      ]
    },
    ai: {
      title: "Agentic AI & Gen AI",
      icon: <FaBrain />,
      color: "#45B7D1",
      skills: [
        { name: "Bedrock", level: 80, icon: <FaPython /> },
        { name: "Sagemaker", level: 60, icon: <FaBrain /> },
        { name: "CrewAi", level: 70, icon: <FaBrain /> },
        { name: "OpenAI GPT", level: 80, icon: <FaBrain /> },
        { name: "GenAI & LLMs", level: 70, icon: <FaBrain /> },
        { name: "RAG Pipelines", level: 70, icon: <FaBrain /> }
      ]
    },
    development: {
      title: "DataCenters & Network",
      icon: <FaReact />,
      color: "#96CEB4",
      skills: [
        { name: "Virtualization (VMware)", level: 90, icon: <FaPython /> },
        { name: "Storage", level: 80, icon: <FaJs /> },
        { name: "Networks (Cloud & Onpremise)", level: 80, icon: <FaReact /> },
        { name: "Loadbalancers (Cloud & Onpremise)", level: 90, icon: <FaNodeJs /> },
        { name: "Databases", level: 70, icon: <FaPython /> },
        { name: "Redhat", level: 80, icon: <FaDatabase /> },
        { name: "Windows", level: 80, icon: <FaDatabase /> }
      ]
    },
    security: {
      title: "Security & Compliance",
      icon: <FaShieldAlt />,
      color: "#FECA57",
      skills: [
        { name: "Security Architecture (Cloud & Onpremise)", level: 90, icon: <FaShieldAlt /> },
        { name: "Identity Management (Cloud & Onpremise)", level: 80, icon: <FaLock /> },
        { name: "Network Security (Cloud & Onpremise)", level: 85, icon: <FaNetworkWired /> },
        { name: "Compliance", level: 80, icon: <FaShieldAlt /> },
        { name: "L4 and L7 Firewalls", level: 90, icon: <FaLock /> },
        { name: "Risk Assessment (Cloud & Onpremise)", level: 80, icon: <FaShieldAlt /> }
      ]
    },
    leadership: {
      title: "Leadership & Strategy",
      icon: <FaRocket />,
      color: "#FF9FF3",
      skills: [
        { name: "Team Leadership", level: 90, icon: <FaRocket /> },
        { name: "Strategic Planning", level: 90, icon: <FaRocket /> },
        { name: "Technical Mentoring", level: 90, icon: <FaRocket /> },
        { name: "Project Management", level: 85, icon: <FaRocket /> },
        { name: "Client Relations", level: 90, icon: <FaRocket /> },
        { name: "Innovation", level: 90, icon: <FaRocket /> }
      ]
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Skills & Expertise</h2>
          <p>Comprehensive technical and leadership capabilities across multiple domains</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-categories"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`category-btn ${activeCategory === key ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                '--category-color': category.color
              }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-title">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="skills-content"
        >
          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="skill-card"
                style={{
                  '--category-color': skillCategories[activeCategory].color
                }}
              >
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                </div>
                
                <div className="skill-progress">
                  <div 
                    className="skill-progress-bar"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                <div className="skill-description">
                  <p>Expert level proficiency with extensive hands-on experience</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
