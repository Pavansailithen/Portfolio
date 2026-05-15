import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content section-glass">
                    <div className="about-text">
                        <h3 className="text-gradient">Innovating at the Intersection of AI, Cloud & Security</h3>
                        <p>
                            I am a B.Tech Graduate in Computer Science & Engineering (Cybersecurity) with a strong passion for building resilient, intelligent software systems. With hands-on experience in developing scalable AI pipelines, full-stack applications, and managing secure cloud environments, I bridge the gap between sophisticated deployment and robust security.
                        </p>
                        <p>
                            Whether it's engineering high-performance APIs with FastAPI, setting up agentic LLM workflows, or automating infrastructure security, I thrive on solving complex architectural challenges.
                        </p>

                        <div className="about-stats">
                            <div className="stat-card">
                                <h4 className="text-gradient">3+</h4>
                                <span>Years coding</span>
                            </div>
                            <div className="stat-card">
                                <h4 className="text-gradient">10+</h4>
                                <span>Projects Built</span>
                            </div>
                            <div className="stat-card">
                                <h4 className="text-gradient">5+</h4>
                                <span>Cloud Certs</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-image-container">
                        <div className="about-image-wrapper">
                            {/* Using a placeholder gradient area since we don't have a real image */}
                            <div className="about-image-placeholder">
                                <span className="hacker-icon">👨‍💻</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

