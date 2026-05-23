import { ArrowRight, Mail } from "lucide-react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";
import Reveal from "./Reveal";

const EMAIL = "mchiragworks@gmail.com";

export default function Footer() {
  return (
    <footer id="contact" className="bg-black px-4 pb-6 md:px-6">
      <div className="mx-auto rounded-2xl bg-[#101010] px-6 py-16 text-center md:rounded-[2rem] md:px-16 md:py-24">
        <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-primary sm:text-xs">
          Let’s work together
        </p>

        <WordsPullUpMultiStyle
          className="mx-auto max-w-3xl text-3xl font-medium leading-[0.95] text-primary sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl"
          segments={[
            { text: "Have a brand", className: "font-normal" },
            { text: "to build?", className: "italic font-serif" },
          ]}
        />

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex w-fit items-center justify-between gap-2 rounded-full bg-primary py-1.5 pl-5 pr-1.5 transition-all hover:gap-3"
            >
              <span className="text-sm font-medium text-black sm:text-base">
                {EMAIL}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                <ArrowRight className="h-4 w-4" style={{ color: "#E1E0CC" }} />
              </span>
            </a>

            <a
              href="/Chirag-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-primary/80 transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Download résumé
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-12 text-[11px] text-gray-500 sm:text-xs">
            Google-certified · English · Hindi · Spanish · French ·{" "}
            <span className="text-primary/60">© {new Date().getFullYear()} Chirag</span>
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
