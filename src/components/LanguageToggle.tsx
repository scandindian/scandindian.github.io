import { useContent } from "../i18n/LanguageProvider";
import type { Lang } from "../i18n/types";

// Segmented EN / NO switch — the active language is shown in the accent colour.
const LanguageToggle = () => {
    const { lang, setLang, t } = useContent();
    const options: Lang[] = ["en", "no"];

    return (
        <div className="lang" role="group" aria-label={t.a11y.switchLanguage}>
            {options.map((code, i) => (
                <span className="lang__item" key={code}>
                    {i > 0 && <span className="lang__sep" aria-hidden="true" />}
                    <button
                        type="button"
                        className={`lang__opt ${lang === code ? "lang__opt--active" : ""}`}
                        aria-pressed={lang === code}
                        onClick={() => setLang(code)}
                    >
                        {code.toUpperCase()}
                    </button>
                </span>
            ))}
        </div>
    );
};

export default LanguageToggle;
