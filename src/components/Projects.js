import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGithub, FaExternalLinkAlt, FaCloud, FaBrain, 
  FaCogs, FaShieldAlt, FaServer, FaCode,
  FaPython, FaReact, FaDocker, FaAws
} from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Enterprise Cloud Migration - VMware to VMC on AWS Migration",
      description: "Design and build of VMC on AWS for a Airline customer, helped in migrating the VMware workloads from datacenter to VMC on AWS cloud and helped customer in DC exit programme.",
      category: "cloud",
      technologies: ["AWS", "Terraform", "VMC on AWS", "NSX", "HCX"],
      features: [
        "Led 10-person technical team to successfully migrate 700+ VMware workloads to VMC AWS cloud, resulting in 30% cost reduction and zero downtime (Outside migration Window)",
        "Completed project on schedule",
        "Implemented automated disaster recovery for critical applications reducing RTO from 24 hours to 4 hours",
        "Security compliance framework"
      ],
      github: "https://github.com/ai-devops-cloud",
      demo: "https://huggingface.co/spaces/techno-santy/career_conversation",
      impact: "Migration completed 2 months before schedule and within budget"
    },
    {
      id: 2,
      title: "Cloud Migration and modernization",
      description: "I worked as an architect and lead a team to help a retail customer in Cloud design, build & implementation, and then migrate their critical business application from a third party datacenter on to the AWS Cloud.",
      category: "cloud",
      technologies: ["AWS", "Terraform", "ECS Fargate", "EC2", "Containers", "AWS Migration Hub"],
      features: [
        "Lift and Shift of the application on to AWS",
        "Build Multiple environments and a stable DevOPS environment for build and release",
        "Modernize the application by converting it to microservices running on ECS fargate.",
        "From No DR to Design and build DR solution in the cloud"
      ],
      github: "https://github.com/ai-devops-cloud",
      demo: "https://huggingface.co/spaces/techno-santy/career_conversation",
      impact: "The deployment and update velocity of the application was increaased by 300%, and the application was migrated to the cloud in 6 months"
    },
    {
      id: 3,
      title: "Digital Transformation - Cloud Standardization through Well Architected Framework",
      description: "As the Principal Architect and Technical Delivery Lead for a leading mining company, I spearheaded their digital transformation initiative by designing and implementing a robust multi-cloud architecture (AWS and Azure)",
      category: "cloud",
      technologies: ["AWS", "Azure", "Terraform", "Python", "Cloud Networking", "Containers & K8", "Landing Zones"],
      features: [
        "Designed and built the cloud landing zone on AWS (Organization, Accounts, Hub-Spoke Network, Centralized Ingress & Egress, IAM Security, Guardrails)",
        "Reducing deployment times by 60% through the establishment of standardized DevOps practices, covering both infrastructure provisioning and application deployment (Terraform, Python, Gitlab etc).",
        "Achieving 99.9% uptime for critical workloads by optimizing cloud resource allocation and automating scaling processes.",
        "Additionally, I led cross-functional teams to ensure seamless adoption of cloud technologies, resulting in a 40% improvement in development velocity and a 50% reduction in manual intervention for deployments."
      ],
      github: "https://github.com/ai-devops-cloud",
      demo: "https://huggingface.co/spaces/techno-santy/career_conversation",
      impact: "Cutting operational costs by 25% by leveraging cloud-native services and eliminating redundant on-premises infrastructure."
    },
    {
      id: 4,
      title: "Large Scale Govt Digital Transformation Project on Cloud",
      description: "This initiative stands as one of PwC’s largest federal government transformation projects, executed in partnership with AWS to meet the agency’s unprecedented scale and security requirements—setting a benchmark for Australia’s public sector. As the Solution Architect and Technical Lead, my contributions included",
      category: "cloud",
      technologies: ["AWS", "Terraform", "Serverless", "Cloud Networking", "DynamoDB", "Landing Zones", "IRAP Protected", "AWS Shield"],
      features: [
        "Designing and implementing a scalable, secure cloud architecture, achieving 99.99% uptime for mission-critical workloads while ensuring compliance with stringent federal security standards",
        "Leading a cross-functional team of 10+ experts to deliver the project on schedule, resulting in a 40% acceleration in deployment timelines compared to traditional approaches",
        "The project not only modernized the agency’s IT infrastructure but also established a replicable framework for future government cloud transformations"
      ],
      github: "https://github.com/ai-devops-cloud",
      demo: "https://huggingface.co/spaces/techno-santy/career_conversation",
      impact: "Reducing operational costs by 30% through optimized cloud resource utilization and automation, enabling the agency to reallocate funds to citizen-facing services."
    },
    {
      id: 5,
      title: "GCP Data Platform and Architecture",
      description: "Helped the data platform team in their secure analytics project with domain-based access and external reporting capabilities",
      category: "Cloud",
      technologies: ["GCP", "Data", "Architecture", "API", "Data Platform", "Framework"],
      features: [
        "Designed and built the platform for the Solution on GCP"
      ],
      github: "https://github.com/ai-devops-cloud",
      demo: "https://huggingface.co/spaces/techno-santy/career_conversation",
      impact: "Designed and built the platform for the Solution on GCP"
    },
    {
      id: 6,
      title: "DevSecOPs Agenti AI - Multi-Agent Security solution",
      description: "As part of the Cognizant vibe-coding event, designed and developed intelligent AI agents solutions on GCP for automating core Security Operations functions.",
      category: "ai",
      technologies: ["Python", "CrewAI", "GCP", "Github CI-CD", "Cursor"],
      features: [
        "Multi-agent system integrates advanced automation into the Security Operations Center (SOC), with each agent specialized for specific security tasks.",
        "Agents perform targeted operations: scanning repositories and cloud infrastructure, penetration testing, and generating comprehensive security reports.",
        "Designed to augment human analysts by handling routine tasks, accelerating threat detection, and improving response time and accuracy.",
        "Real-time monitoring and reporting"
      ],
      github: "https://github.com/ai-devops-cloud",
      demo: "https://huggingface.co/spaces/techno-santy/career_conversation",
      impact: "Real-time threat detection and response, reducing the time taken to identify and respond to threats. Link to the Security Agent solution https://lnkd.in/gdhEwjEG"
    },
    {
      id: 7,
      title: "Microservices Security Framework",
      description: "Architected a comprehensive security framework for microservices architecture with zero-trust principles and automated threat detection.",
      category: "security",
      technologies: ["Istio", "Kubernetes", "Python", "Prometheus", "Grafana"],
      features: [
        "Zero-trust network policies",
        "Automated vulnerability scanning",
        "Real-time threat detection",
        "Compliance reporting"
      ],
      github: "https://github.com/ai-devops-cloud",
      demo: "https://huggingface.co/spaces/techno-santy/career_conversation",
      impact: "Achieved 99.9% security compliance and reduced security incidents by 90%"
    },
    {
      id: 8,
      title: "Cloud Security Audits",
      description: "Led comprehensive cloud security audits for multiple clients, aligning their environments with the Well-Architected Framework’s Security Pillar to enhance resilience and compliance. Key contributions included",
      category: "security",
      technologies: ["IAM", "Monitoring", "Logging", "API", "Threat Detection", "Fiewalls"],
      features: [
        "Identity & Access Management (IAM): Designed and deployed SSO solutions (AWS IAM Identity Center / Azure AD) with least-privilege role assignments, reducing unauthorized access.",
        "Automated vulnerability scanning",
        "hreat Detection & Response: Configured AWS GuardDuty and AWS Config with custom rulesets, enabling real-time threat detection and automated remediation, cutting mean time-to-resolution",
        "Compliance reporting",
        "Infrastructure Hardening: Enforced CIS Benchmark compliance via automated machine hardening, shrinking the organization’s attack surface"
      ],
      github: "https://github.com/ai-devops-cloud",
      impact: "Achieved 99.9% security compliance and reduced security incidents by 90%"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects', icon: <FaCode /> },
    { key: 'cloud', label: 'Cloud', icon: <FaCloud /> },
    { key: 'ai', label: 'AI & Agents', icon: <FaBrain /> },
    { key: 'devops', label: 'DevOps', icon: <FaCogs /> },
    { key: 'security', label: 'Security', icon: <FaShieldAlt /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getTechIcon = (tech) => {
    const iconMap = {
      'Python': <FaPython />,
      'React': <FaReact />,
      'Docker': <FaDocker />,
      'AWS': <FaAws />,
      'Kubernetes': <FaServer />,
      'Terraform': <FaCogs />,
      'Jenkins': <FaCogs />,
      'TensorFlow': <FaBrain />,
      'Istio': <FaServer />,
      'Prometheus': <FaServer />,
      'Grafana': <FaServer />
    };
    return iconMap[tech] || <FaCode />;
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          <h2>Featured Projects</h2>
          <p>Innovative solutions that demonstrate expertise across cloud, AI, DevOps, and security domains</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="project-filters"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="filter-icon">{category.icon}</span>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="projects-grid"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image">
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="project-link"
                    >
                      <FaGithub />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  </div>
                </div>
                <div className="project-category">
                  <span className={`category-badge ${project.category}`}>
                    {categories.find(cat => cat.key === project.category)?.icon}
                    {categories.find(cat => cat.key === project.category)?.label}
                  </span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-list">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {getTechIcon(tech)}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-impact">
                  <h4>Impact:</h4>
                  <p>{project.impact}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
