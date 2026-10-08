import React from "react";
import { TargetIcon, CodeIcon, TrendingUpIcon, MessagesSquareIcon, ClockIcon, BoxIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { Section, SectionHeading, Shell } from "../components/ui/Section";
import { Action } from "../components/ui/Button";
import { ProcessTimeline } from "../components/about/ProcessTimeline";
const whyIcons: BoxIcon[] = [TargetIcon, CodeIcon, TrendingUpIcon, MessagesSquareIcon, ClockIcon, BoxIcon];
export function About() {
  const {
    t
  } = useLanguage();
  return <>
      <PageHeader eyebrow={t.about.eyebrow} title={t.about.title} />

      <Shell className="pb-16 sm:pb-20">
        <div className="grid gap-12 border-t border-line pt-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal>
            <p className="text-lg leading-relaxed text-fg/90 sm:text-xl sm:leading-relaxed">{t.about.p1}</p>
            <p className="mt-6 text-[15px] leading-relaxed text-muted sm:text-base">{t.about.p2}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Action to="/projects" variant="secondary">
                {t.common.viewWork}
              </Action>
              <Action to="/skills" variant="ghost" arrow>
                {t.skills.title}
              </Action>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="divide-y divide-line rounded-xl border border-line bg-surface/60 px-5">
              {t.about.facts.map((fact) => <div key={fact.k} className="py-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">{fact.k}</dt>
                  <dd className="mt-1.5 text-sm text-fg">{fact.v}</dd>
                </div>)}
            </dl>
          </Reveal>
        </div>
      </Shell>

      <ProcessTimeline />

      <Section id="why">
        <SectionHeading eyebrow={t.about.why.eyebrow} title={t.about.why.title} size="lg" />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.why.cards.map((card, i) => {
          const Icon = whyIcons[i];
          return <Reveal as="li" key={card.title} delay={i % 3 * 0.07} className="h-full">
                <div className="group flex h-full flex-col rounded-xl border border-line bg-surface/70 p-6 transition-[border-color,transform] duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/40">
                  <span className="grid h-9 w-9 place-items-center rounded-lg border border-line-strong bg-raised text-accent transition-colors duration-300 ease-smooth group-hover:border-accent/60">
                    <Icon aria-hidden className="h-4 w-4" />
                  </span>
                  <h3 className="mt-5 text-[15px] font-medium text-fg">{card.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{card.desc}</p>
                </div>
              </Reveal>;
        })}
        </ul>
      </Section>
    </>;
}