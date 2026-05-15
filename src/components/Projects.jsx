import './Projects.css';

const Projects = () => {
    const projectsList = [
        {
            title: 'App Compiler (SchemaForge)',
            bullets: [
                'Built a 4-stage LLM pipeline (Intent Extraction → System Design → Schema Generation → Refinement) converting natural language into production-ready UI, API, DB, and Auth schemas with a Validation + Repair Engine that auto-fixes broken layers.',
                'Implemented a runtime executability validator (0-100 score), and a 20-prompt evaluation framework, achieving 92% success rate while tracking latency and failure types across normal and edge case inputs.'
            ],
            tech: ['FastAPI', 'Next.js', 'Groq API', 'Pydantic v2', 'Render', 'Vercel'],
            github: '#',
            demo: 'https://schemaforge-ai.vercel.app/',
            icon: '🛠️'
        },
        {
            title: 'SQL Query RL Environment',
            bullets: [
                'Built a production-ready OpenEnv-compatible RL environment where AI agents debug and optimize broken SQL queries against a live SQLite database, deployed on Hugging Face Spaces.',
                'Designed deterministic graders across 3 difficulty tiers (Easy / Medium / Hard) with partial reward signals; baseline LLM agent scored 1.0 on all tasks in 14.8 seconds.'
            ],
            tech: ['Python', 'FastAPI', 'SQLite', 'Docker', 'Pydantic', 'HuggingFace Spaces', 'OpenAI API'],
            github: 'https://github.com/Pavansailithen/sql-query-env',
            demo: '#',
            icon: '🤖'
        },
        {
            title: 'IP to ASN Lookup Tool',
            bullets: [
                'Built a web app mapping any IPv4 address to its ASN, organization, and country using offline pre-processed datasets — no external API calls required.',
                'Implemented SQLite-based IP range lookup with integer-based CIDR conversion; lightweight Flask REST API with JavaScript frontend.'
            ],
            tech: ['Python', 'Flask', 'SQLite', 'JavaScript'],
            github: 'https://github.com/Pavansailithen/IP2ASN',
            demo: '#',
            icon: '🔍'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>

                <div className="projects-grid">
                    {projectsList.map((project, index) => (
                        <div key={index} className="project-card section-glass" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="project-top">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-links">
                                    {project.github !== '#' && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        </a>
                                    )}
                                    {project.demo !== '#' && (
                                        <a href={project.demo} target="_blank" rel="noreferrer" className="project-link" aria-label="Live Demo">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <ul className="project-bullets">
                                {project.bullets.map((bullet, i) => (
                                    <li key={i} className="project-bullet-item">{bullet}</li>
                                ))}
                            </ul>

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

