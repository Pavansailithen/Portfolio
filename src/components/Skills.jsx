import { motion } from 'framer-motion';
import { Code, Cpu, Cloud, Brain, Terminal } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages',
            icon: <Code size={24} style={{ color: 'var(--accent-primary)' }} />,
            skills: [
                { name: 'Python', level: 'Advanced', percentage: 95 },
                { name: 'JavaScript', level: 'Advanced', percentage: 90 },
                { name: 'TypeScript', level: 'Intermediate', percentage: 80 },
                { name: 'SQL', level: 'Advanced', percentage: 90 }
            ]
        },
        {
            title: 'Frameworks & Libraries',
            icon: <Cpu size={24} style={{ color: 'var(--accent-secondary)' }} />,
            skills: [
                { name: 'FastAPI', level: 'Advanced', percentage: 95 },
                { name: 'Flask', level: 'Intermediate', percentage: 85 },
                { name: 'React.js', level: 'Advanced', percentage: 90 },
                { name: 'Node.js', level: 'Intermediate', percentage: 85 },
                { name: 'Next.js', level: 'Intermediate', percentage: 85 },
                { name: 'Pydantic', level: 'Advanced', percentage: 90 }
            ]
        },
        {
            title: 'Databases & Cloud',
            icon: <Cloud size={24} style={{ color: 'var(--accent-primary)' }} />,
            skills: [
                { name: 'MySQL', level: 'Advanced', percentage: 90 },
                { name: 'SQLite', level: 'Advanced', percentage: 90 },
                { name: 'GCP', level: 'Intermediate', percentage: 80 },
                { name: 'Vercel', level: 'Advanced', percentage: 90 },
                { name: 'HuggingFace Spaces', level: 'Intermediate', percentage: 85 }
            ]
        },
        {
            title: 'AI / ML',
            icon: <Brain size={24} style={{ color: 'var(--accent-secondary)' }} />,
            skills: [
                { name: 'LLMs', level: 'Advanced', percentage: 95 },
                { name: 'Groq API', level: 'Advanced', percentage: 95 },
                { name: 'OpenAI API', level: 'Advanced', percentage: 95 },
                { name: 'LLM Evaluation', level: 'Advanced', percentage: 90 },
                { name: 'Agentic Workflows', level: 'Advanced', percentage: 95 }
            ]
        },
        {
            title: 'DevOps & Tools',
            icon: <Terminal size={24} style={{ color: 'var(--accent-primary)' }} />,
            skills: [
                { name: 'Docker', level: 'Advanced', percentage: 90 },
                { name: 'Git', level: 'Advanced', percentage: 90 },
                { name: 'REST APIs', level: 'Advanced', percentage: 95 }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    Technical Skills
                </motion.h2>

                <motion.div 
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div 
                            key={index} 
                            className="skill-card section-glass"
                            variants={cardVariants}
                            whileHover={{ y: -5, borderColor: 'var(--glass-border-hover)' }}
                        >
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
                                            <motion.div
                                                className="skill-progress-fill"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.percentage}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (i * 0.05), ease: "easeOut" }}
                                                title={`${skill.percentage}% Proficiency`}
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="skill-card-bg"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

