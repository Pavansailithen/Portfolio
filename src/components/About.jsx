import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-content section-glass">
                    <div className="about-text">
                        <h3 className="text-gradient">Innovating at the Intersection of Cloud & Security</h3>
                        <p>
                            I am a final-year B.Tech student with a strong passion for building resilient software systems and securing cloud infrastructures. With hands-on experience in modern web development and deep knowledge of cloud architectures, I aim to bridge the gap between fast deployment and robust security.
                        </p>
                        <p>
                            Whether it's configuring a CI/CD pipeline, pentesting a web application, or developing a responsive frontend in React, I thrive on solving complex technical challenges.
                        </p>

                        <div className="about-stats">
                            <div className="stat-card">
                                <h4 className="text-gradient">3+</h4>
                                <span>Years coding</span>
                            </div>
                            <div className="stat-card">
                                <h4 className="text-gradient">15+</h4>
                                <span>Projects Built</span>
                            </div>
                            <div className="stat-card">
                                <h4 className="text-gradient">5</h4>
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
