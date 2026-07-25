import { type ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
    children: ReactNode;
    to?: string;
    href?: string;
    className?: string;
    primary?: boolean;
};

// A simple, calm button/link. Internal routes use `to`, external use `href`.
const MagneticButton = ({ children, to, href, className = "", primary = false }: ButtonProps) => {
    const classes = ["btn", primary ? "btn--primary" : "", className]
        .filter(Boolean)
        .join(" ");

    if (to) {
        return (
            <Link to={to} className={classes}>
                {children}
            </Link>
        );
    }

    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {children}
        </a>
    );
};

export default MagneticButton;
