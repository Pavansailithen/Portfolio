import './Projects.css';

const Projects = () => {
    const projectsList = [
        {
            title: 'IP to ASN Intelligence Tool',
            description: 'Created a cybersecurity investigation tool for network analysis and threat attribution — extracts ASN details including organization name and geolocation from any IP address. Integrated IPinfo API with a MySQL caching layer, reducing lookup latency from 2s to 300ms (85% improvement). Processes 120+ IP lookups per minute with 96.5% accuracy.',
            tech: ['Python', 'MySQL', 'APIs', 'Cybersecurity'],
            github: 'https://github.com/Pavansailithen/IP2ASN',
            demo: '#',
            icon: '🔍'
        },
        {
            title: 'KIET Jira',
            description: 'A comprehensive full-stack project management platform serving 50+ users, equipped with real-time task tracking and assignment workflows. Engineered scalable RESTful APIs using FastAPI, consistently achieving <250ms average response times. Implemented secure JWT role-based access control and an intuitive React interface to streamline team collaboration.',
            tech: ['FastAPI', 'React.js', 'Python', 'JWT'],
            github: 'https://github.com/Pavansailithen/Kiet_Jira',
            demo: '#',
            icon: '📋'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>

                <div className="projects-grid">
                    {projectsList.map((project, index) => (
                        <div key={index} className="project-card section-glass" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="project-top">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    </a>
                                    {/* <a href={project.demo} target="_blank" rel="noreferrer" className="project-link" aria-label="Live Demo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a> */}
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech-stack">
                                {project.tech.map((item, i) => (
                                    <span key={i} className="tech-badge">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
