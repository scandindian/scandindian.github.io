import { motion } from "framer-motion";
import MagneticButton from "../MagneticButton";
import ScrollCue from "../ScrollCue";
import Counter from "../Counter";
import {
    staggerContainer,
    gridContainer,
    fadeUpItem,
    fadeInItem,
    scaleInItem,
} from "../../lib/animations";
import { useContent } from "../../i18n/LanguageProvider";
import "../../css/About.css";

const About = () => {
    const { t } = useContent();
    const a = t.about;

    return (
        <div className="page page--scroll">
            <motion.section
                className="about"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <div className="about__intro">
                    <motion.p className="about__greeting jp-line" variants={fadeUpItem}>
                        {a.greeting}
                    </motion.p>

                    <motion.p className="about__eyebrow" variants={fadeUpItem}>
                        <span className="about__eyebrow-line" /> {a.eyebrow}
                    </motion.p>

                    <motion.h1 className="about__title display-text" variants={fadeUpItem}>
                        {a.title}
                    </motion.h1>

                    <motion.p className="about__info" variants={fadeUpItem}>
                        {a.intro}
                    </motion.p>

                    <motion.p className="about__info" variants={fadeUpItem}>
                        {a.education}
                    </motion.p>

                    <motion.dl className="about__stats" variants={fadeUpItem}>
                        {t.hero.stats.map((stat) => (
                            <div className="about__stat" key={stat.label}>
                                <dt className="about__stat-value grad-text">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </dt>
                                <dd className="about__stat-label">{stat.label}</dd>
                            </div>
                        ))}
                    </motion.dl>
                </div>

                {/* Experience timeline */}
                <motion.h2 className="about__section-title" variants={fadeUpItem}>
                    {a.experienceTitle}
                </motion.h2>

                <motion.ol className="timeline" variants={staggerContainer}>
                    {a.experiences.map((exp) => (
                        <motion.li className="timeline__item" key={exp.company} variants={fadeInItem}>
                            <span className="timeline__dot" />
                            <div className="timeline__head">
                                <h3 className="timeline__role">
                                    {exp.role}
                                    <span className="timeline__at"> · </span>
                                    {exp.href ? (
                                        <a href={exp.href} target="_blank" rel="noopener noreferrer">{exp.company}</a>
                                    ) : (
                                        <span className="timeline__company">{exp.company}</span>
                                    )}
                                </h3>
                                <span className="timeline__meta">{exp.location} · {exp.period}</span>
                            </div>
                            <ul className="timeline__highlights">
                                {exp.highlights.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.li>
                    ))}
                </motion.ol>

                {/* Skills */}
                <motion.h2 className="about__section-title" variants={fadeUpItem}>
                    {a.toolboxTitle}
                </motion.h2>

                <div className="skills">
                    {a.skills.map((group) => (
                        <motion.div
                            className="skills__group"
                            key={group.label}
                            variants={gridContainer}
                        >
                            <motion.span className="skills__label" variants={fadeUpItem}>
                                {group.label}
                            </motion.span>
                            <div className="skills__chips">
                                {group.items.map((item) => (
                                    <motion.span
                                        className="chip"
                                        key={item}
                                        variants={scaleInItem}
                                        whileHover={{ y: -3, scale: 1.05 }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Personal note */}
                <motion.p className="about__note" variants={fadeUpItem}>
                    {a.note}
                </motion.p>

                <motion.div className="about__actions" variants={fadeUpItem}>
                    <MagneticButton primary to="/contact">
                        {a.connect} <span className="btn__arrow">→</span>
                    </MagneticButton>
                    <MagneticButton href="/Resume.pdf">{a.resume}</MagneticButton>
                </motion.div>
            </motion.section>

            <ScrollCue />
        </div>
    );
};

export default About;
