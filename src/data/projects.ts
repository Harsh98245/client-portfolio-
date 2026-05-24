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
  /** Path served from /public. Drop the poster here to replace the fallback. */
  image: string;
  /** First-person note about my thinking on the concept. */
  caption: string;
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
    image: "/projects/nike-2-minute-start.jpg",
    caption:
      "I built this concept on the 2-minute rule — shrink the first step until starting feels effortless, then let momentum carry the rest of the workout.",
    icon: Timer,
    accent: "linear-gradient(135deg, #a3e635, #3f6212)",
    points: [
      { label: "Insight", text: "People get overwhelmed and struggle to start their workouts." },
      { label: "Idea", text: "I created ‘2-Minute Start’ — super-short sessions that remove the barrier to entry." },
      { label: "Impact", text: "Builds daily engagement and turns small wins into lasting fitness habits." },
    ],
  },
  {
    number: "02",
    brand: "Apple",
    title: "Pride in Every Message.",
    tagline: "Everyday support, made collective.",
    image: "/projects/apple-pride.jpg",
    caption:
      "I turned a tiny everyday action — sending a Pride emoji — into real donations and a live, global map of support.",
    icon: Heart,
    accent: "linear-gradient(135deg, #ff5f6d, #7b2ff7)",
    points: [
      { label: "Insight", text: "Everyday actions of support often feel too small to matter." },
      { label: "Idea", text: "I proposed Apple donate $0.001 to LGBTQIA+ orgs for every Pride emoji sent on iMessage." },
      { label: "Impact", text: "Turns passive support into collective action and lifts iMessage engagement." },
    ],
  },
  {
    number: "03",
    brand: "Samyang",
    title: "Buldak Beach Cool.",
    tagline: "Hot flavor, chill vibes.",
    image: "/projects/samyang-buldak-beach.jpg",
    caption:
      "I reimagined Buldak for summer — the same spicy kick with light shirataki noodles, opening a whole new seasonal occasion for the brand.",
    icon: Flame,
    accent: "linear-gradient(135deg, #f97316, #0ea5e9)",
    points: [
      { label: "Insight", text: "Fans love spicy ramen but not the summer heaviness and heat." },
      { label: "Idea", text: "I developed a light shirataki Buldak — same spicy kick, 70% fewer calories." },
      { label: "Impact", text: "Expands Buldak into new seasonal, health-conscious occasions." },
    ],
  },
];
