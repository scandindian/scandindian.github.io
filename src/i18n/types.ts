import type { ReactNode } from "react";

export type Lang = "en" | "no";

export type ExperienceItem = {
    company: string;
    role: string;
    location: string;
    period: string;
    href?: string;
    highlights: string[];
};

export type SkillGroupContent = {
    label: string;
    items: string[];
};

export type StatContent = {
    value: number;
    suffix?: string;
    label: string;
};

export type Content = {
    /** Human name of THIS language, shown in the toggle (e.g. "EN"). */
    code: string;
    nav: { home: string; about: string; contact: string };
    a11y: {
        skip: string;
        switchLanguage: string;
        home: string;
    };
    hero: {
        greeting: string;
        eyebrow: string;
        roles: string[];
        rolePrefix: string;
        tagline: ReactNode;
        resume: string;
        journey: string;
        statusLabel: string;
        status: string;
        locationLabel: string;
        location: string;
        clockLabel: string;
        stats: StatContent[];
    };
    about: {
        greeting: string;
        eyebrow: string;
        title: string;
        intro: ReactNode;
        education: ReactNode;
        experienceTitle: string;
        toolboxTitle: string;
        experiences: ExperienceItem[];
        skills: SkillGroupContent[];
        note: ReactNode;
        connect: string;
        resume: string;
    };
    contact: {
        greeting: string;
        eyebrow: string;
        title: string;
        info: string;
        location: string;
        linkedin: string;
        github: string;
    };
    footer: {
        tagline: string;
        navTitle: string;
        elsewhereTitle: string;
        built: string;
        rights: string;
    };
    scrollCue: string;
};
