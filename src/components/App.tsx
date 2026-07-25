import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavigationBar from "./NavigationBar";
import AuroraBackground from "./AuroraBackground";
import PageTransition from "./PageTransition";
import ScrollProgress from "./ScrollProgress";
import Footer from "./Footer";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import { LanguageProvider, useContent } from "../i18n/LanguageProvider";
import "../css/App.css";

// Reset scroll to the top whenever the route changes. Force instant scrolling
// so the global `scroll-behavior: smooth` doesn't animate the jump.
const ScrollToTop = () => {
    const { pathname } = useLocation();
    useLayoutEffect(() => {
        const html = document.documentElement;
        const prev = html.style.scrollBehavior;
        html.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);
        html.style.scrollBehavior = prev;
    }, [pathname]);
    return null;
};

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

const Shell = () => {
    const { t } = useContent();
    return (
        <BrowserRouter>
            <ScrollToTop />
            <a className="skip-link" href="#main">{t.a11y.skip}</a>
            <ScrollProgress />
            <AuroraBackground />
            <NavigationBar />
            <main id="main">
                <AnimatedRoutes />
            </main>
            <Footer />
        </BrowserRouter>
    );
};

const App = () => (
    <LanguageProvider>
        <Shell />
    </LanguageProvider>
);

export default App;
