import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>

                <div className="experience-timeline">
                    <div className="timeline-item section-glass" data-aos="fade-up">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3>Software Developer Intern</h3>
                                <span className="timeline-date text-gradient">Dec. 2025 – Feb. 2026</span>
                            </div>
                            <p className="timeline-company">Internship · Industrial Project Program</p>
                            <ul className="timeline-list">
                                <li>Developed <strong>KIET Jira</strong>, a full-stack project management platform serving 50+ users with task tracking, assignment management, and real-time status updates</li>
                                <li>Built scalable Backend APIs using <strong>FastAPI and Python</strong>; integrated frontend and backend for seamless API communication achieving &lt;250ms average response time</li>
                                <li>Designed and implemented a clean, modular, and scalable architecture, reducing page load time by 35% and significantly enhancing user experience</li>
                                <li>Reduced authentication latency by 40% through JWT token optimization and implemented role-based access control for 3 user tiers (Admin, Manager, Developer)</li>
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
