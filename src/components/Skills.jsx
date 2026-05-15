import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: '💻',
            skills: [
                { name: 'Python', level: 'Advanced', percentage: 95 },
                { name: 'JavaScript', level: 'Advanced', percentage: 90 },
                { name: 'TypeScript', level: 'Intermediate', percentage: 80 },
                { name: 'SQL', level: 'Advanced', percentage: 90 }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            icon: '⚙️',
            skills: [
                { name: 'FastAPI', level: 'Advanced', percentage: 95 },
                { name: 'Flask', level: 'Intermediate', percentage: 85 },
                { name: 'React.js', level: 'Advanced', percentage: 90 },
                { name: 'Node.js / Next.js', level: 'Intermediate', percentage: 85 },
                { name: 'Pydantic', level: 'Advanced', percentage: 90 }
            ]
        },
        {
            title: 'Databases & Cloud',
            icon: '☁️',
            skills: [
                { name: 'MySQL / SQLite', level: 'Advanced', percentage: 90 },
                { name: 'Google Cloud Platform (GCP)', level: 'Intermediate', percentage: 80 },
                { name: 'Vercel', level: 'Advanced', percentage: 90 },
                { name: 'HuggingFace Spaces', level: 'Intermediate', percentage: 85 }
            ]
        },
        {
            title: 'AI / ML & Agentic',
            icon: '🤖',
            skills: [
                { name: 'LLMs (Gemini, Groq, OpenAI)', level: 'Advanced', percentage: 95 },
                { name: 'LLM Evaluation', level: 'Advanced', percentage: 90 },
                { name: 'Agentic Workflows', level: 'Advanced', percentage: 95 }
            ]
        },
        {
            title: 'DevOps & Tools',
            icon: '🛠️',
            skills: [
                { name: 'Docker', level: 'Advanced', percentage: 90 },
                { name: 'Git & GitHub Actions', level: 'Advanced', percentage: 90 },
                { name: 'CI/CD', level: 'Intermediate', percentage: 85 },
                { name: 'REST APIs', level: 'Advanced', percentage: 95 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card section-glass" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="skill-icon-wrapper">
                                <span className="skill-icon">{category.icon}</span>
                            </div>
                            <h3>{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <div className="skill-info">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}</span>
                                        </div>
                                        <div className="skill-progress-track">
                                            <div
                                                className="skill-progress-fill"
                                                style={{ width: `${skill.percentage}%` }}
                                                title={`${skill.percentage}% Proficiency`}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="skill-card-bg"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

