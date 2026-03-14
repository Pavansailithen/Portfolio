import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            title: "Cloud Fundamentals",
            issuer: "Google Cloud Skills Boost",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlecloud.svg"
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
        },
        {
            title: "Networking Cloud (Cohort 13)",
            issuer: "Juniper Networks / EduSkills",
            icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/junipernetworks.svg"
        },
        {
            title: "Web Exploit Hunting & Bug Bounty (Cohort 14)",
            issuer: "EduSkills Academy",
            icon: "https://eduskillsfoundation.org/wp-content/uploads/2022/09/LOGO_EduSkills.png"
        }
    ];

    return (
        <section id="certifications" className="certifications-section">
            <div className="container">
                <h2 className="section-title">Certifications</h2>

                <div className="cert-list">
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-item section-glass" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer text-gradient">{cert.issuer}</p>
                            </div>
                            <div className="cert-badge-wrapper" style={{ background: 'white', padding: '10px' }}>
                                <img src={cert.icon} alt={cert.issuer} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '50%' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'block'; }} />
                                <div className="cert-icon-fallback" style={{ display: 'none', color: 'var(--bg-primary)' }}>🏆</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
