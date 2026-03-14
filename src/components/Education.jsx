import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="education-timeline">
                    <div className="edu-item section-glass animate-fade-in">
                        <div className="edu-header">
                            <h3>Bachelor of Engineering & Technology</h3>
                            <span className="edu-date text-gradient">Nov. 2022 – Apr. 2026</span>
                        </div>
                        <p className="edu-school">KIET Group of Institutions · Kakinada, AP</p>
                        <div className="edu-details">
                            <p><strong>Specialization:</strong> Computer Science with Cybersecurity</p>
                            <p><strong>Coursework:</strong> Network Security Fundamentals, Vulnerability Assessment, Risk Management, Cloud Security</p>
                        </div>
                    </div>

                    <div className="edu-item section-glass animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        <div className="edu-header">
                            <h3>Intermediate (MPC)</h3>
                            <span className="edu-date text-gradient">Jun. 2020 – May 2022</span>
                        </div>
                        <p className="edu-school">Narayana Junior College · Vijayawada, AP</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
