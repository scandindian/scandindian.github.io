import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useContent } from "../i18n/LanguageProvider";

// A gentle "scroll to explore" hint that appears only when the page actually
// has more content below the fold, and fades away once the user scrolls.
const ScrollCue = () => {
    const { t } = useContent();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const update = () => {
            const scrollable = document.documentElement.scrollHeight - window.innerHeight > 120;
            setVisible(scrollable && window.scrollY < 60);
        };
        update();
        // re-check after content/layout settles
        const id = window.setTimeout(update, 400);
        window.addEventListener("scroll", update, { passive: true });
        window.addEventListener("resize", update);
        return () => {
            window.clearTimeout(id);
            window.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="scroll-cue"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.5 }}
                    aria-hidden="true"
                >
                    <span className="scroll-cue__label">{t.scrollCue}</span>
                    <motion.span
                        className="scroll-cue__chevron"
                        animate={{ y: [0, 7, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        ↓
                    </motion.span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollCue;
