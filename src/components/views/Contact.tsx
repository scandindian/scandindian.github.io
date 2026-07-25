import { motion } from "framer-motion";
import MagneticButton from "../MagneticButton";
import AuroraOrb from "../AuroraOrb";
import { staggerContainer, fadeUpItem } from "../../lib/animations";
import { useContent } from "../../i18n/LanguageProvider";
import { contact } from "../../data/resume";
import "../../css/Contact.css";

const Contact = () => {
    const { t } = useContent();
    const c = t.contact;

    return (
        <div className="page">
            <motion.section
                className="contact"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <motion.div className="contact__orb-wrap" variants={fadeUpItem}>
                    <AuroraOrb className="contact__orb" />
                </motion.div>

                <motion.p className="contact__greeting jp-line" variants={fadeUpItem}>
                    {c.greeting}
                </motion.p>

                <motion.p className="contact__eyebrow" variants={fadeUpItem}>
                    <span className="contact__eyebrow-line" /> {c.eyebrow}
                </motion.p>

                <motion.h1 className="contact__title display-text" variants={fadeUpItem}>
                    {c.title}
                </motion.h1>

                <motion.p className="contact__info" variants={fadeUpItem}>
                    {c.info}
                </motion.p>

                <motion.a
                    className="contact__email"
                    href={`mailto:${contact.email}`}
                    variants={fadeUpItem}
                    whileHover={{ scale: 1.02 }}
                >
                    {contact.email}
                </motion.a>

                <motion.div className="contact__meta" variants={fadeUpItem}>
                    <span>📍 {c.location}</span>
                    <span className="contact__dot" aria-hidden="true">·</span>
                    <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
                </motion.div>

                <motion.div className="contact__socials" variants={fadeUpItem}>
                    <MagneticButton href={contact.linkedin}>
                        <i className="linkedin icon" aria-hidden="true" /> {c.linkedin}
                    </MagneticButton>
                    <MagneticButton href={contact.github}>
                        <i className="github icon" aria-hidden="true" /> {c.github}
                    </MagneticButton>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default Contact;
