import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Logo";
import LanguageToggle from "./LanguageToggle";
import { useContent } from "../i18n/LanguageProvider";
import { EASE_OUT } from "../lib/animations";
import "../css/NavigationBar.css";

const linkClass = ({ isActive }: { isActive: boolean }): string =>
    isActive ? "nav__link nav__link--active" : "nav__link";

const NavigationBar = () => {
    const { t } = useContent();
    const links = [
        { to: "/", label: t.nav.home, end: true },
        { to: "/about", label: t.nav.about, end: false },
        { to: "/contact", label: t.nav.contact, end: false },
    ];

    return (
        <motion.nav
            className="nav"
            aria-label="Primary"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: EASE_OUT }}
        >
            <NavLink to="/" end className="nav__brand" aria-label={t.a11y.home}>
                <Logo />
                <span className="nav__wordmark">Varun Kumar</span>
            </NavLink>

            <div className="nav__right">
                <div className="nav__links">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
                            {({ isActive }) => (
                                <>
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            className="nav__underline"
                                            layoutId="nav-underline"
                                            transition={{ duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>
                <span className="nav__divider" aria-hidden="true" />
                <LanguageToggle />
            </div>
        </motion.nav>
    );
};

export default NavigationBar;
