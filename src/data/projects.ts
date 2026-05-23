import { Timer, Heart, Flame, type LucideIcon } from "lucide-react";

export interface ProjectPoint {
  label: string;
  text: string;
}

export interface Project {
  number: string;
  brand: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  accent: string;
  points: ProjectPoint[];
}

export const projects: Project[] = [
  {
    number: "01",
    brand: "Nike",
    title: "2-Minute Start.",
    tagline: "The hardest part is starting.",
    icon: Timer,
    accent: "linear-gradient(135deg, #a3e635, #3f6212)",
    points: [
      { label: "Insight", text: "People get overwhelmed and struggle to start their workouts." },
      { label: "Idea", text: "Super-short ‘2-Minute Start’ sessions that remove the barrier to entry." },
      { label: "Impact", text: "Builds daily engagement and consistent fitness habits." },
    ],
  },
  {
    number: "02",
    brand: "Apple",
    title: "Pride in Every Message.",
    tagline: "Everyday support, made collective.",
    icon: Heart,
    accent: "linear-gradient(135deg, #ff5f6d, #7b2ff7)",
    points: [
      { label: "Insight", text: "Everyday actions of support often feel too small to matter." },
      { label: "Idea", text: "Apple donates $0.001 to LGBTQIA+ orgs for every Pride emoji sent on iMessage." },
      { label: "Impact", text: "Turns passive support into collective action and lifts engagement." },
    ],
  },
  {
    number: "03",
    brand: "Samyang",
    title: "Buldak Beach Cool.",
    tagline: "Hot flavor, chill vibes.",
    icon: Flame,
    accent: "linear-gradient(135deg, #f97316, #0ea5e9)",
    points: [
      { label: "Insight", text: "Fans love spicy ramen but not the summer heaviness and heat." },
      { label: "Idea", text: "A light shirataki Buldak — same spicy kick, 70% fewer calories." },
      { label: "Impact", text: "Expands Buldak into new seasonal, health-conscious occasions." },
    ],
  },
];
