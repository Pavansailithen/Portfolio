import './Education.css';

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="container">
                <h2 className="section-title">Education</h2>

                <div className="education-timeline">
                    <div className="edu-item section-glass animate-fade-in">
                        <div className="edu-header">
                            <h3>Bachelor of Technology <span className="edu-major">— Computer Science & Engineering (Cybersecurity)</span></h3>
                            <span className="edu-date text-gradient">Aug 2022 – April 2026 (Graduated)</span>
                        </div>
                        <p className="edu-school">KIET Group of Institutions · Kakinada, Andhra Pradesh</p>
                        <div className="edu-details">
                            <p><strong>GPA:</strong> 7.51 / 10.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

