import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaMicrosoft, FaGoogle, FaDocker, FaShieldAlt, FaNetworkWired, FaServer, FaCertificate } from 'react-icons/fa';
import { SiKubernetes, SiVmware } from 'react-icons/si';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      category: "Kubernetes & Container Orchestration",
      icon: <SiKubernetes />,
      color: "#326CE5",
      certs: [
        "Certified Kubernetes Administrator (CKA)"
      ]
    },
    {
      category: "Amazon Web Services (AWS)",
      icon: <FaAws />,
      color: "#FF9900",
      certs: [
        "AWS Certified Solutions Architect - Professional",
        "AWS Certified Advanced Networking - Specialty",
        "AWS Certified Security - Specialty",
        "AWS Certified Solutions Architect - Associate"
      ]
    },
    {
      category: "Google Cloud Platform",
      icon: <FaGoogle />,
      color: "#4285F4",
      certs: [
        "Google Professional Cloud Architect"
      ]
    },
    {
      category: "Microsoft Azure",
      icon: <FaMicrosoft />,
      color: "#0078D4",
      certs: [
        "Microsoft Certified: Azure DevOps Engineer Expert (AZ-400)",
        "AZ-305: Designing Microsoft Azure Infrastructure Solutions",
        "AZ-700: Designing and Implementing Microsoft Azure Networking Solutions",
        "AZ-500: Microsoft Azure Security Technologies",
        "Microsoft Certified: Azure Administrator Associate"
      ]
    },
    {
      category: "VMware",
      icon: <SiVmware />,
      color: "#607078",
      certs: [
        "VMware Certified vCloud Professional",
        "VMware vSphere 5 Certified Professional",
        "VMware vSphere Certified Professional (VCP410)(VCP310) VTSP, VSP",
        "VCP vCloud (VCP 510)"
      ]
    },
    {
      category: "Security & Network",
      icon: <FaShieldAlt />,
      color: "#48bb78",
      certs: [
        "Certified Ethical Hacker (CEH v5)",
        "Cisco Certified Network Associate (CCNA)",
        "Check Point Certified Security Administrator (CCSA)"
      ]
    },
    {
      category: "Storage & Infrastructure",
      icon: <FaServer />,
      color: "#805AD5",
      certs: [
        "NetApp Certified Implementation Engineer (SAN & Virtualization)",
        "NetApp Certified Data Management Administrator",
        "SNIA Storage Network Foundations (S10-100)"
      ]
    },
    {
      category: "ITIL & Enterprise",
      icon: <FaCertificate />,
      color: "#ED8936",
      certs: [
        "ITIL v2 Foundation",
        "IBM WebSphere Application Server Network Deployment V6.1",
        "IBM Tivoli Access Manager 6.0",
        "eTrust SSO (Single Sign On) - CA"
      ]
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Certifications</h2>
          <p>Professional certifications demonstrating expertise across cloud platforms, security, and infrastructure</p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="certification-category"
            >
              <div className="category-header">
                <div className="category-icon" style={{ color: category.color }}>
                  {category.icon}
                </div>
                <h3>{category.category}</h3>
                <div className="cert-count">{category.certs.length}</div>
              </div>
              <ul className="certification-list">
                {category.certs.map((cert, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                    viewport={{ once: true }}
                  >
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="certification-summary"
        >
          <div className="summary-card">
            <div className="summary-number">25+</div>
            <div className="summary-label">Professional Certifications</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">5</div>
            <div className="summary-label">Cloud Platforms</div>
          </div>
          <div className="summary-card">
            <div className="summary-number">15+</div>
            <div className="summary-label">Years of Expertise</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

