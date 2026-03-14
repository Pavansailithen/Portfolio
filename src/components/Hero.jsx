import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content" data-aos="fade-right">
                    <p className="hero-greeting text-gradient">Hello, I am</p>
                    <h1 className="hero-title">
                        <span className="text-bright">Lithin Pavan Sai Uddagiri</span><br />
                        <TypeAnimation
                            sequence={[
                                'Software Developer',
                                2000,
                                'Cloud Security Enthusiast',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-gradient"
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="hero-subtitle">
                        A B.Tech student specializing in Computer Science with Cybersecurity. I design secure, scalable architectures and develop high-performance applications.
                    </p>
                    <div className="hero-cta">
                        <a href="#projects" className="button-primary">View My Work</a>
                        <a href="/Lithin_resume.docx" download="Lithin_resume.docx" className="button-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Download size={18} /> Download CV
                        </a>
                        <a href="#contact" className="button-outline">Contact Me</a>
                    </div>
                    <div className="hero-socials animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual" data-aos="zoom-in" data-aos-delay="200">
                    <div className="visual-circle">
                        <div className="visual-core"></div>
                        <div className="orbit orbit-1"></div>
                        <div className="orbit orbit-2"></div>
                        <div className="floating-badge badge-1">🛡️ Security</div>
                        <div className="floating-badge badge-2">☁️ Cloud</div>
                        <div className="floating-badge badge-3">💻 Dev</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
