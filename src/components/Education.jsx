import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    Education
                </motion.h2>

                <div className="education-timeline">
                    <motion.div 
                        className="edu-item section-glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ y: -4, borderColor: 'var(--glass-border-hover)' }}
                    >
                        <div className="edu-header">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <GraduationCap size={28} style={{ color: 'var(--accent-primary)' }} />
                                <h3>Bachelor of Technology <span className="edu-major">— Computer Science & Engineering (Cybersecurity)</span></h3>
                            </div>
                            <span className="edu-date text-gradient">Aug 2022 – April 2026 (Graduated)</span>
                        </div>
                        <p className="edu-school">KIET Group of Institutions · Kakinada, Andhra Pradesh</p>
                        <div className="edu-details">
                            <p><strong>GPA:</strong> 7.51 / 10.0</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;

