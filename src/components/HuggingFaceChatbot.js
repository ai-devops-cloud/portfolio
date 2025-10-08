import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './HuggingFaceChatbot.css';

const HuggingFaceChatbot = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Simulate loading time
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const openHuggingFaceApp = () => {
    window.open('https://huggingface.co/spaces/techno-santy/career_conversation', '_blank');
  };

  const quickQuestions = [
    "Tell me about your cloud experience",
    "What AI projects have you worked on?",
    "Describe your leadership style",
    "What DevOps tools do you use?",
    "How do you approach security?"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="hf-chatbot-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            className="hf-chatbot-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="hf-chatbot-header">
              <div className="hf-chatbot-title">
                <FaRobot className="bot-icon" />
                <div>
                  <h3>AI Career Assistant</h3>
                  <p>Powered by Hugging Face</p>
                </div>
              </div>
              <button className="close-btn" onClick={onClose}>
                <FaTimes />
              </button>
            </div>

            {isLoading ? (
              <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading AI Assistant...</p>
              </div>
            ) : (
              <div className="hf-chatbot-content">
                <div className="welcome-section">
                  <div className="welcome-card-compact">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <h4 style={{ margin: '0 0 0.25rem 0' }}>🤖 AI Career Assistant</h4>
                        <p style={{ margin: 0, fontSize: '0.85rem' }}>
                          Trained on LinkedIn profile • Ask about cloud, DevOps, AI, leadership
                        </p>
                      </div>
                      <button
                        onClick={openHuggingFaceApp}
                        className="compact-external-btn"
                        title="Open in new tab for best experience"
                      >
                        <FaExternalLinkAlt />
                        Open Full Window
                      </button>
                    </div>
                  </div>

                  <div className="iframe-container">
                    <iframe
                      src="https://techno-santy-career-conversation.hf.space"
                      title="AI Career Assistant"
                      className="hf-iframe"
                      allow="microphone; camera; clipboard-write"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-popups-to-escape-sandbox"
                      loading="lazy"
                      frameBorder="0"
                    />
                  </div>
                </div>

                <div className="bottom-actions">
                  <button
                    onClick={openHuggingFaceApp}
                    className="external-link-btn primary"
                  >
                    <FaExternalLinkAlt />
                    Open Full AI Assistant Experience
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HuggingFaceChatbot;
