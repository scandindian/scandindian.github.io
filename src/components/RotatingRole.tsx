import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type RotatingRoleProps = {
    words: string[];
    interval?: number;
};

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Gently cross-fades between roles (no typewriter). Falls back to a static
// word under reduced motion, and exposes the full list to screen readers.
const RotatingRole = ({ words, interval = 3600 }: RotatingRoleProps) => {
    const reduced = prefersReducedMotion();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (reduced) return;
        const id = window.setInterval(
            () => setIndex((prev) => (prev + 1) % words.length),
            interval
        );
        return () => window.clearInterval(id);
    }, [words, interval, reduced]);

    if (reduced) {
        return <span className="rotating-role">{words[0]}</span>;
    }

    const word = words[index % words.length];

    return (
        <span className="rotating-role-wrap">
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={word}
                    className="rotating-role"
                    aria-hidden="true"
                    initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
                >
                    {word}
                </motion.span>
            </AnimatePresence>
            <span className="sr-only">{words.join(", ")}</span>
        </span>
    );
};

export default RotatingRole;
