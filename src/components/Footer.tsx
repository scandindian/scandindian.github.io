import { contact } from "../data/resume";
import "../css/Footer.css";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__copy">© {year} Varun Kumar</p>
            <nav className="footer__links" aria-label="Elsewhere">
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={`mailto:${contact.email}`}>Email</a>
            </nav>
        </footer>
    );
};

export default Footer;
