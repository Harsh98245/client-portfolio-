import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef, type ReactNode } from "react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import { projects } from "../data/projects";

const WORK_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const cardEase = [0.22, 1, 0.36, 1] as const;

/** Staggered scale + fade entrance for each card. */
function RevealCard({
  index,
  className,
  children,
}: {
  index: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: cardEase }}
    >
      {children}
    </motion.div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative min-h-screen overflow-hidden bg-black px-4 py-20 md:px-6 md:py-28"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <WordsPullUpMultiStyle
            className="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[
              {
                text: "Campaigns built on insight, idea, and impact.",
                className: "text-primary",
              },
              { break: true },
              {
                text: "Real concepts. Cultural strategy. Measurable results.",
                className: "text-gray-500",
              },
            ]}
          />
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 gap-3 sm:gap-2 md:grid-cols-2 md:gap-1 lg:h-[480px] lg:grid-cols-4">
          {/* Card 1 — video canvas */}
          <RevealCard
            index={0}
            className="relative min-h-[300px] overflow-hidden rounded-2xl lg:h-full lg:min-h-0"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={WORK_VIDEO}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p
                className="text-lg font-medium leading-tight"
                style={{ color: "#E1E0CC" }}
              >
                Where strategy meets story.
              </p>
            </div>
          </RevealCard>

          {/* Campaign case-study cards */}
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <RevealCard
                key={project.number}
                index={i + 1}
                className="flex min-h-[300px] flex-col rounded-2xl bg-[#212121] p-5 lg:h-full lg:min-h-0"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg sm:h-12 sm:w-12"
                    style={{ background: project.accent }}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-medium text-gray-500">
                    {project.number}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-medium text-primary sm:text-lg">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-gray-500">{project.brand}</p>

                <ul className="mt-4 flex-1 space-y-2.5">
                  {project.points.map((point) => (
                    <li key={point.label} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-xs leading-relaxed text-gray-400">
                        <span className="font-medium text-primary/90">
                          {point.label}:
                        </span>{" "}
                        {point.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group mt-4 inline-flex items-center gap-1 text-xs font-medium text-primary"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:rotate-0" />
                </a>
              </RevealCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
