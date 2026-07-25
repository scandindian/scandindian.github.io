import type { Variants, Transition } from "framer-motion";

// Gentle, organic easing (easeOutCubic) — softer than a snappy expo curve.
export const EASE_OUT: [number, number, number, number] = [0.33, 1, 0.68, 1];

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.14, delayChildren: 0.14 },
    },
};

// Tighter stagger for grids / chip rows.
export const gridContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07, delayChildren: 0.06 },
    },
};

export const fadeUpItem: Variants = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE_OUT } },
};

export const fadeInItem: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.85, ease: EASE_OUT } },
};

export const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -26 },
    show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: EASE_OUT } },
};

export const scaleInItem: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE_OUT } },
};

// Reusable hover/tap feedback for interactive cards & chips.
export const hoverLift = {
    whileHover: { y: -3, transition: { duration: 0.35, ease: EASE_OUT } },
    whileTap: { scale: 0.98 },
};

// Shared viewport config for scroll-reveal (whileInView).
export const revealViewport = { once: true, amount: 0.25 } as const;

export const pageTransition = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -6 },
    transition: { duration: 0.7, ease: EASE_OUT } satisfies Transition,
};
