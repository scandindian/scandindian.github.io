import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { pageTransition } from "../lib/animations";

type PageTransitionProps = {
    children: ReactNode;
};

// Wraps each route so entering/leaving pages blur-and-slide via AnimatePresence.
const PageTransition = ({ children }: PageTransitionProps) => {
    return (
        <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
