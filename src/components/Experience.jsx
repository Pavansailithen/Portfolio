import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>

                <div className="experience-timeline">
                    <div className="timeline-item section-glass" data-aos="fade-up">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>Software Developer Intern <span className="timeline-location">— KIET Group of Institutions, Kakinada, AP</span></h3>
                                <span className="timeline-date text-gradient">Dec 2025 – Feb 2026</span>
                            </div>
                            <p className="timeline-company">
                                Internship | <a href="https://kiet-jira.vercel.app/" target="_blank" rel="noreferrer" className="live-demo-link">Live Demo</a>
                            </p>
                            <ul className="timeline-list">
                                <li>Led backend architecture for <strong>KIET Jira</strong> — a full-stack project management platform — defining REST APIs, DB schema, and auth workflows within an Agile team of 14.</li>
                                <li>Engineered <strong>FastAPI + Python</strong> backend services with optimized async endpoints; Integrated <strong>React.js</strong> frontend and containerized the full stack with <strong>Docker</strong> for reproducible deployments.</li>
                                <li>Designed <strong>JWT-based</strong> role-based access control (RBAC) across Admin, Manager, and Developer tiers, reduced authentication round-trip time by 40% through token caching and middleware optimization.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Add more timeline items here if needed */}
                </div>
            </div>
        </section>
    );
};

export default Experience;

