export interface Role {
  company: string;
  title: string;
  period: string;
  location: string;
  highlight: string;
}

export const education = {
  school: "York University",
  degree: "Hons. BA, Communications & Media Studies",
  detail: "Toronto, ON · 2026 · Dean’s Honour Roll",
};

export const roles: Role[] = [
  {
    company: "Massimo Dutti, Yorkdale",
    title: "Sales Associate",
    period: "Jan 2026 – Present",
    location: "Toronto, ON",
    highlight:
      "I generated $40K+ in revenue at a 30% upsell rate, using consultative selling and brand storytelling to give customers tailored, personal experiences.",
  },
  {
    company: "York University — Dept. of Communication & Media Studies",
    title: "Research Assistant · Dr. Anne F. MacLennan",
    period: "May 2024 – Apr 2026",
    location: "North York, ON",
    highlight:
      "I ran multi-method media analysis across 200+ sources and built archive and podcast metadata systems that made content far easier to find.",
  },
  {
    company: "York University — IEP Bridging Program",
    title: "Events & Promotions Assistant",
    period: "Oct 2023 – Apr 2024",
    location: "North York, ON",
    highlight:
      "I designed cross-channel campaigns that lifted engagement 40%, and used A/B testing to sharpen messaging and conversion.",
  },
  {
    company: "Mexico Business Events",
    title: "Conference Coordinator & Strategy Intern",
    period: "May 2023 – Sep 2023",
    location: "Mexico City, MX",
    highlight:
      "I ran bilingual (ES/EN) logistics for C-suite conferences — vetting speakers and curating programming on-site.",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Tools",
    items: ["Google Ads", "Analytics 4 (GA4)", "DV360", "Adobe Creative Suite", "Canva", "WordPress"],
  },
  {
    label: "Competencies",
    items: [
      "Campaign Management",
      "Media Planning",
      "Content Strategy",
      "Copywriting",
      "A/B Testing",
      "Data Analysis",
      "Brand Communications",
    ],
  },
  {
    label: "Certifications",
    items: ["Google Search & Display Ads", "Google Analytics", "Google DV360"],
  },
  {
    label: "Languages",
    items: ["English (Fluent)", "Hindi (Fluent)", "Spanish (Advanced)", "French (Intermediate)"],
  },
];
