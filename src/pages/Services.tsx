import React from "react";
import { GlobeIcon, ServerCogIcon, SparklesIcon, LayoutPanelLeftIcon, GaugeIcon, BoxIcon } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { PageHeader } from "../components/ui/PageHeader";
import { Reveal } from "../components/ui/Reveal";
import { Shell } from "../components/ui/Section";
import { Action, DirArrow } from "../components/ui/Button";
import { ClosingCta } from "../components/home/ClosingCta";
const icons: BoxIcon[] = [GlobeIcon, BoxIcon, ServerCogIcon, SparklesIcon, LayoutPanelLeftIcon, GaugeIcon];
export function Services() {
  const {
    t
  } = useLanguage();
  return <>
      <PageHeader eyebrow={t.services.eyebrow} title={t.services.title} body={t.services.body}>
        <Action to="/contact" arrow>
          {t.common.startProject}
        </Action>
      </PageHeader>

      <Shell className="pb-24 sm:pb-28">
        <ul className="grid gap-4 border-t border-line pt-12 md:grid-cols-2">
          {t.services.items.map((service, i) => {
          const Icon = icons[i];
          const num = String(i + 1).padStart(2, '0');
          const feature = i === 0;
          return <Reveal as="li" key={service.title} delay={i % 2 * 0.07} className={feature ? 'md:col-span-2' : ''}>
                <article className={`group flex h-full flex-col rounded-2xl border bg-surface/70 p-6 transition-[border-color,transform,background-color] duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/40 hover:bg-surface sm:p-7 ${feature ? 'border-accent/25' : 'border-line'}`}>
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-lg border border-line-strong bg-raised text-accent transition-colors duration-300 ease-smooth group-hover:border-accent/60">
                      <Icon aria-hidden className="h-[18px] w-[18px]" />
                    </span>
                    <span className="font-mono text-xs text-muted/70">{num}</span>
                  </div>

                  <h2 className={`mt-6 font-medium tracking-[-0.01em] text-fg transition-colors duration-200 ease-smooth group-hover:text-accent ${feature ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
                    {service.title}
                  </h2>
                  <p className={`mt-3 leading-relaxed text-muted ${feature ? 'max-w-2xl text-[15px]' : 'text-[13.5px]'}`}>
                    {service.desc}
                  </p>

                  <div className="mt-auto pt-7">
                    <Action to="/contact" variant="ghost" arrow className="text-[13.5px]">
                      {t.common.discuss}
                    </Action>
                  </div>
                </article>
              </Reveal>;
        })}
        </ul>

        <Reveal delay={0.1} className="mt-10">
          <div className="flex flex-wrap items-center justify-between gap-5 rounded-xl border border-line bg-surface/60 p-6 sm:p-7">
            <p className="max-w-xl text-[15px] leading-relaxed text-fg/90">{t.featured.body}</p>
            <span className="inline-flex">
              <Action to="/projects" variant="secondary">
                <span className="inline-flex items-center gap-2">
                  {t.common.viewAll}
                  <DirArrow />
                </span>
              </Action>
            </span>
          </div>
        </Reveal>
      </Shell>

      <ClosingCta />
    </>;
}