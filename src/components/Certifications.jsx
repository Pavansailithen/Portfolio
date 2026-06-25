import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: "Security Principles in Cloud Computing",
            issuer: "Google Cloud Skills Boost",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg"
        },
        {
            title: "Build Modern Applications with Generative AI",
            issuer: "Google Cloud",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg"
        },
        {
            title: "Juniper Networking Cloud",
            issuer: "Juniper Networks / EduSkills",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/junipernetworks.svg"
        },
        {
            title: "Palo Alto Cybersecurity (Cohort 9)",
            issuer: "Palo Alto Networks / EduSkills",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paloaltonetworks.svg"
        },
        {
            title: "Ethical Hacking (Cohort 10)",
            issuer: "EduSkills Academy",
            icon: "https://eduskillsfoundation.org/wp-content/uploads/2022/09/LOGO_EduSkills.png"
        },
        {
            title: "Network Security Associate (Cohort 12)",
            issuer: "Fortinet / EduSkills",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fortinet.svg"
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
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-title"
                >
                    Certifications
                </motion.h2>

                <motion.div 
                    className="cert-list"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {certifications.map((cert, index) => (
                        <motion.div 
                            key={index} 
                            className="cert-item section-glass"
                            variants={cardVariants}
                            whileHover={{ scale: 1.02, borderColor: 'var(--glass-border-hover)' }}
                        >
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer text-gradient">{cert.issuer}</p>
                            </div>
                            <div className="cert-badge-wrapper" style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '10px', borderRadius: '50%', border: '1px solid var(--glass-border)' }}>
                                <img 
                                    src={cert.icon} 
                                    alt={cert.issuer} 
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%', filter: 'brightness(0.9) contrast(1.1)' }} 
                                    onError={(e) => { 
                                        e.target.style.display = 'none'; 
                                        e.target.nextElementSibling.style.display = 'flex'; 
                                    }} 
                                />
                                <div className="cert-icon-fallback" style={{ display: 'none', color: 'var(--accent-primary)', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                                    <Award size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;

