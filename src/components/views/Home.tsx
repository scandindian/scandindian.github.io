import { motion } from "framer-motion";
import RotatingRole from "../RotatingRole";
import MagneticButton from "../MagneticButton";
import AuroraOrb from "../AuroraOrb";
import { staggerContainer, fadeUpItem, EASE_OUT } from "../../lib/animations";
import { useContent } from "../../i18n/LanguageProvider";
import "../../css/Home.css";

const Home = () => {
    const { t } = useContent();

    return (
        <div className="page page--hero">
            <motion.section
                className="hero"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
            >
                <div className="hero__main">
                    <motion.p className="hero__eyebrow" variants={fadeUpItem}>
                        <span className="hero__eyebrow-line" /> {t.hero.eyebrow} · Oslo
                    </motion.p>

                    <motion.h1 className="hero__name display-text" variants={fadeUpItem}>
                        Varun Kumar
                    </motion.h1>

                    <motion.p className="hero__role" variants={fadeUpItem}>
                        {t.hero.rolePrefix} <RotatingRole words={t.hero.roles} />
                    </motion.p>

                    <motion.p className="hero__tagline" variants={fadeUpItem}>
                        {t.hero.tagline}
                    </motion.p>

                    <motion.div className="hero__actions" variants={fadeUpItem}>
                        <MagneticButton primary href="/Resume.pdf">
                            {t.hero.resume} <span className="btn__arrow">→</span>
                        </MagneticButton>
                        <MagneticButton to="/about">{t.hero.journey}</MagneticButton>
                    </motion.div>
                </div>

                <motion.div
                    className="hero__orb"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.3, ease: EASE_OUT, delay: 0.25 }}
                >
                    <AuroraOrb />
                </motion.div>
            </motion.section>
        </div>
    );
};

export default Home;
