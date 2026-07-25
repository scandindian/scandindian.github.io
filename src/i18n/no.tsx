import type { Content } from "./types";

const no: Content = {
    code: "NO",
    nav: { home: "Hjem", about: "Om meg", contact: "Kontakt" },
    a11y: {
        skip: "Hopp til innhold",
        switchLanguage: "Switch to English",
        home: "Varun Kumar — hjem",
    },
    hero: {
        greeting: "Hei",
        eyebrow: "Programvareutvikler",
        rolePrefix: "Jeg er",
        roles: ["frontendutvikler", "datavisualiseringsingeniør", "full-stack problemløser"],
        tagline: (
            <>
                Programvareutvikler med <strong>7+ års</strong> erfaring med å bygge skalerbare,
                datadrevne webplattformer — med fokus på <strong>frontend</strong> og{" "}
                <strong>datavisualisering</strong>. Jeg gjør komplekse data om til rolige,
                gjennomtenkte grensesnitt — for tiden hos <strong>Xeneta</strong>, bosatt i
                Billingstad rett utenfor Oslo.
            </>
        ),
        resume: "CV",
        journey: "Min reise",
        statusLabel: "Status",
        status: "Åpen for muligheter",
        locationLabel: "Bosatt i",
        location: "Billingstad · Oslo, Norge",
        clockLabel: "Oslo",
        stats: [
            { value: 7, suffix: "+", label: "År med webutvikling" },
            { value: 6, suffix: "+", label: "År med React og TypeScript" },
            { value: 3, label: "Språk jeg snakker" },
        ],
    },
    about: {
        greeting: "Hyggelig",
        eyebrow: "Om meg",
        title: "Gjør komplekse data om til grensesnitt folk elsker",
        intro: (
            <>
                Jeg er en programvareutvikler som elsker vanskelige problemer og å bygge for
                mennesker. De siste syv årene har jeg levert skalerbare, datadrevne webplattformer
                — med ansvar for hele leveransen, mentorering av utviklere, og å gjøre komplekse
                data om til grensesnitt folk liker. Først i <strong>Tokyo</strong>, og siden 2022
                hos <strong>Xeneta</strong>, der jeg flyttet fra det tyske teamet til hovedkontoret
                i Oslo.
            </>
        ),
        education: (
            <>
                Jeg har en integrert bachelor- og mastergrad i informasjonsteknologi fra{" "}
                <a href="https://iiita.ac.in/" target="_blank" rel="noopener noreferrer">IIIT Allahabad</a>,
                med spesialisering i cyberjus og informasjonssikkerhet.
            </>
        ),
        experienceTitle: "Erfaring",
        toolboxTitle: "Verktøykasse",
        experiences: [
            {
                company: "Xeneta",
                role: "Programvareutvikler",
                location: "Tyskland → Oslo, Norge",
                period: "feb. 2022 — nå",
                href: "https://www.xeneta.com/",
                highlights: [
                    "Hadde ansvar for hele leveransen av en datapipeline for flere kilder — fra behov hos interessenter til design, bygging og utrulling — og migrerte over 80 % av brukerne til den nye plattformen.",
                    "Designer og leder frontend-arkitekturen for storskala visualisering av sjøfraktdata med TypeScript og D3.js.",
                    "Kjører sprintplanlegging, stand-ups og retrospektiver, og mentorerer junior- og mellomnivåutviklere gjennom kodegjennomganger og karrierestøtte.",
                    "Intervjuer og vurderer utviklere, og bidrar til ansettelser og teamvekst.",
                    "Bygde et verktøy for budsjettprognoser og markedsanalyse for bedriftskunder, som støtter kommersielle beslutninger.",
                    "Gjorde om plattformens autentisering til gjenbrukbare, sikre komponenter på tvers av applikasjoner.",
                ],
            },
            {
                company: "JIG-SAW Inc.",
                role: "Programvareutvikler",
                location: "Tokyo, Japan",
                period: "feb. 2019 — jan. 2022",
                href: "https://www.jig-saw.com/en/",
                highlights: [
                    "Bygde og vedlikeholdt en web-basert konsoll for overvåking og styring av IoT-enheter med React og Python.",
                    "Designet og driftet AWS-skyinfrastruktur (Lambda, Step Functions, EC2, RDS, DynamoDB, CloudWatch) for skalerbar prosessering av enhetsdata.",
                    "Ledet GDPR-arbeidet og sikret plattformen mot XSS og spam.",
                    "Integrerte Salesforce-arbeidsflyter for å automatisere kundehenvendelser og salgs-/markedsdata, og la til lettvekts-kryptering for IoT-enheter med lite ressurser.",
                ],
            },
            {
                company: "Industrial Technology Research Institute",
                role: "FoU-praktikant",
                location: "Hsinchu, Taiwan",
                period: "mai 2018 — jul. 2018",
                href: "https://www.itri.org.tw/english/",
                highlights: [
                    "Forsket på hvordan lys fra VR-briller påvirker menneskets døgnrytme.",
                    "Bygde en Android-app som beregner døgnrytmeparametere fra en spektralsensor.",
                ],
            },
            {
                company: "Google Summer of Code · FOSSASIA",
                role: "Android-utviklerpraktikant",
                location: "Ekstern",
                period: "mai 2017 — aug. 2017",
                href: "https://summerofcode.withgoogle.com/archive/2017/projects/5117290592862208/",
                highlights: [
                    "Bidro til utbredelsen av FOSSASIAs Open Event-standard på tvers av åpen kildekode-apper for konferanser.",
                    "Dokumenterte arbeidet gjennom blogger og daglige scrums, og styrket teknisk kommunikasjon.",
                ],
            },
            {
                company: "Gwangju Institute of Science and Technology",
                role: "Forskningspraktikant",
                location: "Gwangju, Sør-Korea",
                period: "jun. 2017 — aug. 2017",
                href: "https://www.gist.ac.kr/en/main.html",
                highlights: [
                    "Forsket på maskinlæring for kunstnerisk stiloverføring, inkludert blanding av flere stiler i brukerdefinerte forhold.",
                    "Bygde en Android-app som lager pastisj med et nevralt nettverk, og presenterte arbeidet i en postersesjon.",
                ],
            },
        ],
        skills: [
            { label: "Språk", items: ["JavaScript", "TypeScript", "Python", "SQL", "C++", "HTML", "CSS"] },
            { label: "Rammeverk", items: ["ReactJS", "Redux", "D3.js", "Tailwind", "Retool", "Semantic UI"] },
            { label: "Sky og DevOps", items: ["AWS", "Docker", "Netlify", "Travis CI", "Jenkins"] },
            { label: "Verktøy og testing", items: ["Git", "Jest", "Cypress", "ESLint", "Jira", "VS Code"] },
            { label: "KI-verktøy", items: ["Claude (Anthropic)", "Prompt engineering", "LLM-integrasjon", "Generativ KI"] },
        ],
        note: (
            <>
                Utenom tastaturet spiller jeg for <strong>Oslo Raballder Rugbyklubb</strong> i den
                internasjonale skeive rugbyunionen — representerer Norge, rekrutterer spillere og
                samler inn penger til skeive organisasjoner. Jeg snakker engelsk og hindi flytende,
                og jeg lærer norsk.
            </>
        ),
        connect: "La oss ta kontakt",
        resume: "CV",
    },
    contact: {
        greeting: "Si hei",
        eyebrow: "Ta kontakt",
        title: "La oss bygge noe stort",
        info: "Har du et prosjekt, en stilling, eller vil du bare si hei? Innboksen min er alltid åpen — jeg svarer så fort jeg kan.",
        location: "Billingstad, Norge",
        linkedin: "LinkedIn",
        github: "GitHub",
    },
    footer: {
        tagline: "Frontendutvikler og datavisualiseringsingeniør, bosatt nær Oslo.",
        navTitle: "Naviger",
        elsewhereTitle: "Andre steder",
        built: "Designet og utviklet av Varun Kumar.",
        rights: "Alle rettigheter reservert.",
    },
    scrollCue: "Bla for å utforske",
};

export default no;
