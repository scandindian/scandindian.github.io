import { motion, useScroll, useSpring } from "framer-motion";

// Thin aurora-gradient bar at the very top that fills as the page scrolls —
// a clear, studio-style affordance that there's more below.
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 });

    return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
};

export default ScrollProgress;
