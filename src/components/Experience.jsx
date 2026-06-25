import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    Work Experience
                </motion.h2>

                <div className="experience-timeline">
                    <motion.div 
                        className="timeline-item section-glass"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>Software Developer Intern <span className="timeline-location">— KIET Group of Institutions, Kakinada, AP</span></h3>
                                <span className="timeline-date text-gradient">Dec 2025 – Feb 2026</span>
                            </div>
                            <p className="timeline-company">
                                Internship | <a href="https://kiet-jira.vercel.app/" target="_blank" rel="noreferrer" className="live-demo-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                                    Live Demo <ExternalLink size={14} />
                                </a>
                            </p>
                            <ul className="timeline-list">
                                <li>Contributed to backend development for KIET Jira — a full-stack project management platform — within an Agile team of 14, working on REST API endpoints, auth workflows, and DB schema design.</li>
                                <li>Resolved critical deployment issues including CORS misconfiguration, bcrypt version compatibility, DB connection timeouts, and global exception handling; containerized full stack with Docker for cloud deployment.</li>
                                <li>Implemented JWT-based auth UI and middleware logic with RBAC across Admin, Manager, and Developer tiers; reduced authentication round-trip time by 40% through token caching and middleware optimization.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

