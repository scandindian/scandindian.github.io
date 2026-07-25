import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { EASE_OUT } from "../lib/animations";

type CounterProps = {
    value: number;
    suffix?: string;
    duration?: number;
};

// Counts up from 0 to `value` the first time it scrolls into view.
const Counter = ({ value, suffix = "", duration = 1.9 }: CounterProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const reduced =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) {
            count.set(value);
            return;
        }
        if (!inView) return;
        const controls = animate(count, value, { duration, ease: EASE_OUT });
        return () => controls.stop();
    }, [inView, value, duration, count]);

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

export default Counter;
