import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import AnimatedParagraph from "./AnimatedParagraph";

export default function About() {
  return (
    <section id="about" className="bg-black px-4 py-20 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[#101010] px-6 py-16 text-center sm:px-10 md:rounded-[2rem] md:px-16 md:py-24">
        <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs md:mb-10">
          Communications &amp; Media
        </p>

        <WordsPullUpMultiStyle
          className="mx-auto max-w-3xl text-3xl leading-[0.95] text-primary sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl"
          segments={[
            { text: "I am Chirag,", className: "font-normal" },
            { text: "a media-driven marketer.", className: "italic font-serif" },
            {
              text: "I have skills in campaign management, media planning, and brand storytelling.",
              className: "font-normal",
            },
          ]}
        />

        <div className="mx-auto mt-10 max-w-2xl md:mt-16">
          <AnimatedParagraph
            className="text-xs leading-relaxed text-[#DEDBC8] sm:text-sm md:text-base"
            text="Over the past three years I have driven measurable results across multicultural markets — coordinating bilingual C-suite conferences in Mexico City, running cross-channel campaigns that lifted engagement by forty percent, and surfacing trends across two hundred-plus media sources as a research assistant. Together, the work has been about turning data and culture into stories that genuinely connect."
          />
        </div>
      </div>
    </section>
  );
}
