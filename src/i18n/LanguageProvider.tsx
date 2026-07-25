import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Content, Lang } from "./types";
import en from "./en";
import no from "./no";

const dictionaries: Record<Lang, Content> = { en, no };
const STORAGE_KEY = "vk-lang";

type LanguageContextValue = {
    lang: Lang;
    t: Content;
    setLang: (lang: Lang) => void;
    toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const detectInitial = (): Lang => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "no") return stored;
    return navigator.language?.toLowerCase().startsWith("nb") ||
        navigator.language?.toLowerCase().startsWith("no")
        ? "no"
        : "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLangState] = useState<Lang>(detectInitial);

    useEffect(() => {
        document.documentElement.lang = lang;
        window.localStorage.setItem(STORAGE_KEY, lang);
    }, [lang]);

    const setLang = useCallback((next: Lang) => setLangState(next), []);
    const toggle = useCallback(() => setLangState((l) => (l === "en" ? "no" : "en")), []);

    const value = useMemo<LanguageContextValue>(
        () => ({ lang, t: dictionaries[lang], setLang, toggle }),
        [lang, setLang, toggle]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useContent = (): LanguageContextValue => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useContent must be used within a LanguageProvider");
    return ctx;
};
