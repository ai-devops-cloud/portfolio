import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experience = [
    {
      id: 1,
      title: "Principal Solutions Architect",
      company: "Cognizant",
      location: "Sydney, Australia",
      period: "2021 - Present",
      description: "Leading enterprise-scale cloud transformations and AI initiatives across multiple business units.",
      achievements: [
        "Architected cloud migration strategy for 200+ applications, reducing infrastructure costs by 30%",
        "Led VMware Cloud on AWS migration for an airline, moving 700+ workloads with zero downtime",
        "Implemented DevOps practices reducing deployment time by 70%",
        "Designed and delivered a multiagent AI security solution for SOC automation.",
        "Built and managed cross-functional teams of 15+ engineers and architects"
      ],
      technologies: ["AWS", "Azure", "GCP", "Kubernetes", "CICD", "DevOps", "Terraform", "Security", "Agentic-AI"]
    },
    {
      id: 2,
      title: "Senior Cloud & Platform Architect",
      company: "PWC",
      location: "Sydney, Australia",
      period: "2017 - 2021",
      description: "Early member of PwC's Platform Engineering team, scaling from 4 to 50+ engineers.",
      achievements: [
        "Led largescale Federal Government AWS transformation projects, ensuring compliance with sringent security standards",
        "Delivered cloud security audits, SAP S/4HANA on AWS/Azure, and multisector cloud solutions.",
        "Implemented microservices architecture reducing system complexity",
        "Established CI/CD pipelines improving deployment frequency by 20%",
        "Achieved 99.99% uptime for missioncritical workloads",
        "Mentored 15+ junior architects and engineers"
      ],
      technologies: ["AWS", "Azure","GCP", "Security", "Jenkins", "cloud networking & security", "Terraform"]
    },
    {
      id: 3,
      title: "Senior Gateway and Cloud Consultant",
      company: "Macquarie Telecom",
      location: "Sydney, Australia",
      period: "2014 - 2017",
      description: "As a Senior Secure Cloud and Gateway Consultant with Macquarie Telecom Government, I spearheaded the onboarding of Australian Federal and State Government agencies onto Macquarie Telecom’s Secure Internet Gateway (SIG) and Secure Cloud solutions.",
      achievements: [
        "Guiding agencies through seamless migration to secure, compliant cloud environments, ensuring alignment with stringent government security standards.",
        "Designing and implementing tailored gateway architectures to enhance network security, visibility, and threat protection for critical government workloads.",
        "Collaborating with cross-functional teams to deliver scalable, high-availability solutions that met the unique needs of public sector clients.",
        "Led the migration of Federal Government agencies to Macquarie’s Secure Internet Gateway (SIG),including HA/DR design, implementation, and handover.",
        "Onboarded agencies to Secure Cloud solutions, designing secure email (Sophos/IronPort), webproxy (Websense), and Secure Dropbox (Covata Safeshare).",
        "Automated provisioning of network devices (Cisco, F5, Fortinet) and VM patching (Windows/Linux) using BladeLogic, Puppet, and vSphere CLI.",
        "Managed VMware, Cisco UCS, and Fortinet upgrades, along with SQL migrations (2005/2008 --> 2012) and legacy infrastructure transitions to VCD Cloud.",
        "Provide Tier 3 support during major incidents in gateway and during escalations."
      ],
      technologies: ["VMware", "Fortinet","F5 GTM LTM", "UCS", "Proxies", "networking & security", "Automation"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Professional Experience</h2>
          <p>A comprehensive overview of my career progression and professional achievements in last 3 roles</p>
        </motion.div>

        <div className="experience-timeline">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="company">
                      <FaBuilding />
                      {job.company}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt />
                      {job.location}
                    </span>
                    <span className="period">
                      <FaCalendarAlt />
                      {job.period}
                    </span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                
                <div className="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {job.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
