import { useState } from "react";
import { Check } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import Reveal from "./Reveal";
import { projects, type Project } from "../data/projects";

/** Shows the campaign poster; falls back to a branded title card if missing. */
function ProjectImage({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
      {!failed ? (
        <img
          src={project.image}
          alt={`${project.brand} — ${project.title} campaign concept`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain p-2 sm:p-4"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center"
          style={{ background: project.accent }}
        >
          <span className="text-xl font-bold text-white sm:text-2xl">
            {project.brand}
          </span>
          <span className="text-sm text-white/90">{project.tagline}</span>
        </div>
      )}
    </div>
  );
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const Icon = project.icon;
  const reversed = index % 2 === 1;

  return (
    <Reveal>
      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className={reversed ? "lg:order-2" : ""}>
          <ProjectImage project={project} />
        </div>

        <div className={reversed ? "lg:order-1" : ""}>
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ background: project.accent }}
            >
              <Icon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
              {project.brand} · {project.number}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-medium text-primary sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 font-serif text-lg italic text-primary/70 sm:text-xl">
            {project.tagline}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-400">
            {project.caption}
          </p>

          <ul className="mt-5 space-y-2.5">
            {project.points.map((point) => (
              <li key={point.label} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-gray-400">
                  <span className="font-medium text-primary/90">
                    {point.label}:
                  </span>{" "}
                  {point.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="relative overflow-hidden bg-black px-4 py-20 md:px-6 md:py-28"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-[0.15]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center md:mb-16">
          <WordsPullUpMultiStyle
            className="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[
              { text: "The work I’m proud of.", className: "text-primary" },
              { break: true },
              {
                text: "Concepts I built on insight, idea, and impact.",
                className: "text-gray-500",
              },
            ]}
          />
        </div>

        {/* Project showcases */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
