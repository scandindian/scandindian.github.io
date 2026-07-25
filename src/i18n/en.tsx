import type { Content } from "./types";

const en: Content = {
    code: "EN",
    nav: { home: "Home", about: "About", contact: "Contact" },
    a11y: {
        skip: "Skip to content",
        switchLanguage: "Bytt til norsk",
        home: "Varun Kumar — home",
    },
    hero: {
        greeting: "Hello",
        eyebrow: "Software developer",
        rolePrefix: "I'm a",
        roles: ["frontend developer", "data-visualisation engineer", "product engineer", "full-stack problem-solver"],
        tagline: (
            <>
                Software developer with <strong>7+ years</strong> building scalable,
                data-driven web platforms — with a focus on <strong>frontend</strong> and{" "}
                <strong>data visualisation</strong>. I turn complex data into calm, considered
                interfaces — currently at <strong>Xeneta</strong>, based in Billingstad just
                outside Oslo.
            </>
        ),
        resume: "Résumé",
        journey: "My journey",
        statusLabel: "Status",
        status: "Open to opportunities",
        locationLabel: "Based in",
        location: "Billingstad · Oslo, Norway",
        clockLabel: "Oslo",
        stats: [
            { value: 7, suffix: "+", label: "Years building for the web" },
            { value: 6, suffix: "+", label: "Years with React & TypeScript" },
            { value: 3, label: "Languages spoken" },
        ],
    },
    about: {
        greeting: "Nice to meet you",
        eyebrow: "About me",
        title: "Turning complex data into interfaces people love",
        intro: (
            <>
                I'm a software developer who loves hard problems and building for people. Over the
                past seven years I've delivered scalable, data-driven web platforms — owning
                delivery end-to-end, mentoring developers, and turning complex data into interfaces
                people enjoy. First in <strong>Tokyo</strong>, and since 2022 with{" "}
                <strong>Xeneta</strong>, where I moved from the German team to our Oslo HQ.
            </>
        ),
        education: (
            <>
                I hold a dual bachelor's + master's degree in Information Technology from{" "}
                <a href="https://iiita.ac.in/" target="_blank" rel="noopener noreferrer">IIIT Allahabad</a>,
                with a specialisation in Cyber Law and Information Security.
            </>
        ),
        experienceTitle: "Experience",
        toolboxTitle: "Toolbox",
        experiences: [
            {
                company: "Xeneta",
                role: "Software Developer",
                location: "Germany → Oslo, Norway",
                period: "Feb 2022 — Present",
                href: "https://www.xeneta.com/",
                highlights: [
                    "Owned end-to-end delivery of a multi-source data-handling pipeline — from stakeholder requirements to design, build and rollout — migrating 80%+ of users to the new platform.",
                    "Design and lead the frontend architecture for large-scale ocean-freight data visualisation with TypeScript and D3.js.",
                    "Run sprint planning, stand-ups and retrospectives, and mentor junior & mid-level developers through code reviews and career support.",
                    "Interview and evaluate engineers, contributing to hiring decisions and team growth.",
                    "Built a budget-forecasting and market-analysis tool for enterprise customers, supporting commercial decisions.",
                    "Reworked platform authentication into reusable, secure components across applications.",
                ],
            },
            {
                company: "JIG-SAW Inc.",
                role: "Software Developer",
                location: "Tokyo, Japan",
                period: "Feb 2019 — Jan 2022",
                href: "https://www.jig-saw.com/en/",
                highlights: [
                    "Built and maintained a web-based IoT device monitoring & management console with React and Python.",
                    "Designed and operated AWS cloud infrastructure (Lambda, Step Functions, EC2, RDS, DynamoDB, CloudWatch) for scalable device-data processing.",
                    "Led GDPR compliance and hardened the platform against XSS and spam.",
                    "Integrated Salesforce workflows to automate customer inquiries and sales/marketing data, and added lightweight encryption for low-resource IoT devices.",
                ],
            },
            {
                company: "Industrial Technology Research Institute",
                role: "R&D Intern",
                location: "Hsinchu, Taiwan",
                period: "May 2018 — Jul 2018",
                href: "https://www.itri.org.tw/english/",
                highlights: [
                    "Researched the effect of VR-headset light on the human circadian rhythm.",
                    "Built an Android app to compute circadian parameters from a spectral sensor.",
                ],
            },
            {
                company: "Google Summer of Code · FOSSASIA",
                role: "Android Developer Intern",
                location: "Remote",
                period: "May 2017 — Aug 2017",
                href: "https://summerofcode.withgoogle.com/archive/2017/projects/5117290592862208/",
                highlights: [
                    "Drove adoption of FOSSASIA's Open Event standard across open-source conference apps.",
                    "Documented the work through blogs and daily scrums, sharpening technical communication.",
                ],
            },
            {
                company: "Gwangju Institute of Science and Technology",
                role: "Research Intern",
                location: "Gwangju, South Korea",
                period: "Jun 2017 — Aug 2017",
                href: "https://www.gist.ac.kr/en/main.html",
                highlights: [
                    "Researched ML artistic style transfer, including blending multiple styles at user-defined proportions.",
                    "Built an Android app that generates pastiche via a neural network and presented it in a poster session.",
                ],
            },
        ],
        skills: [
            { label: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL", "C++", "HTML", "CSS"] },
            { label: "Frameworks", items: ["ReactJS", "Redux", "D3.js", "Tailwind", "Retool", "Semantic UI"] },
            { label: "Cloud & DevOps", items: ["AWS", "Docker", "Netlify", "Travis CI", "Jenkins"] },
            { label: "Tools & Testing", items: ["Git", "Jest", "Cypress", "ESLint", "Jira", "VS Code"] },
            { label: "AI Tools", items: ["Claude (Anthropic)", "Prompt Engineering", "LLM Integration", "Generative AI"] },
        ],
        note: (
            <>
                Off the keyboard, I play for <strong>Oslo Raballder Rugbyklubb</strong> in the
                international gay rugby union — representing Norway, recruiting players and
                fundraising for LGBT organisations. I speak English and Hindi natively, and I'm
                learning Norwegian.
            </>
        ),
        connect: "Let's connect",
        resume: "Résumé",
    },
    contact: {
        greeting: "Say hi",
        eyebrow: "Get in touch",
        title: "Let's build something great",
        info: "Have a project, a role, or just want to say hello? My inbox is always open — I'll do my best to get back to you.",
        location: "Billingstad, Norway",
        linkedin: "LinkedIn",
        github: "GitHub",
    },
    footer: {
        tagline: "Frontend developer & data-visualisation engineer, based near Oslo.",
        navTitle: "Navigate",
        elsewhereTitle: "Elsewhere",
        built: "Designed & built by Varun Kumar.",
        rights: "All rights reserved.",
    },
    scrollCue: "Scroll to explore",
};

export default en;
