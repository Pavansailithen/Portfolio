import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Cloud Security (GCP & Networking)',
            icon: '☁️',
            skills: [
                { name: 'Google Cloud Platform (GCP)', level: 'Intermediate', percentage: 80 },
                { name: 'Cloud IAM & Access Control', level: 'Intermediate', percentage: 80 },
                { name: 'Threat Detection & Response', level: 'Beginner', percentage: 60 },
                { name: 'Incident Response & Recovery', level: 'Beginner', percentage: 60 }
            ]
        },
        {
            title: 'Backend',
            icon: '⚙️',
            skills: [
                { name: 'FastAPI', level: 'Advanced', percentage: 95 },
                { name: 'Python', level: 'Advanced', percentage: 90 },
                { name: 'RESTful APIs', level: 'Advanced', percentage: 90 },
                { name: 'JWT Authentication', level: 'Intermediate', percentage: 85 }
            ]
        },
        {
            title: 'Frontend',
            icon: '🎨',
            skills: [
                { name: 'React.js', level: 'Intermediate', percentage: 80 },
                { name: 'HTML & CSS', level: 'Advanced', percentage: 85 },
                { name: 'JavaScript', level: 'Intermediate', percentage: 75 }
            ]
        },
        {
            title: 'Database & Tools',
            icon: '🗄️',
            skills: [
                { name: 'MySQL / SQLite', level: 'Intermediate', percentage: 80 },
                { name: 'Git & Gitlab', level: 'Advanced', percentage: 85 },
                { name: 'Jira', level: 'Advanced', percentage: 90 },
                { name: 'WebSockets', level: 'Intermediate', percentage: 75 }
            ]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technologies Used</h2>

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
