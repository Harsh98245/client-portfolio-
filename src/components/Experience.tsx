import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import Reveal from "./Reveal";
import { education, roles, skillGroups } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="bg-black px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <WordsPullUpMultiStyle
            className="text-xl font-normal sm:text-2xl md:text-3xl lg:text-4xl"
            segments={[
              { text: "Where I have made an impact.", className: "text-primary" },
              { break: true },
              {
                text: "Four roles. Three countries. One throughline — strategy.",
                className: "text-gray-500",
              },
            ]}
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-xs text-gray-400 sm:text-sm">
              {education.degree} · {education.school} —{" "}
              <span className="text-primary/80">{education.detail}</span>
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-white/10 md:left-[9px]" />
          <div className="space-y-8 md:space-y-10">
            {roles.map((role, i) => (
              <Reveal key={role.company} delay={i * 0.08}>
                <div className="relative pl-8 md:pl-10">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border border-primary/40 bg-primary md:h-[19px] md:w-[19px] md:border-2" />
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-sm font-bold text-primary sm:text-base">
                      {role.title}
                    </h3>
                    <span className="text-[11px] text-gray-500 sm:text-xs">
                      {role.period} · {role.location}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs text-gray-400 sm:text-sm">
                    {role.company}
                  </p>
                  <p className="mt-2 max-w-2xl text-xs leading-relaxed text-gray-400 sm:text-sm">
                    {role.highlight}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Skills strip */}
        <div id="skills" className="mt-20 scroll-mt-24 md:mt-28">
          <Reveal>
            <p className="mb-8 text-center text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs">
              Toolkit &amp; capabilities
            </p>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group, i) => (
              <Reveal key={group.label} delay={i * 0.08}>
                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-[#101010] px-3 py-1.5 text-[11px] text-primary/80 transition-colors hover:border-primary/40 hover:text-primary sm:text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
