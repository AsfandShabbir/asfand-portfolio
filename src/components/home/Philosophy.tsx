import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Reveal } from '../ui/Reveal';
import { Eyebrow, Section } from '../ui/Section';

export function Philosophy() {
  const { t } = useLanguage();

  return (
    <Section id="philosophy" className="bg-surface/40">
      <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <Reveal>
          <Eyebrow>{t.philosophy.eyebrow}</Eyebrow>
          <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.12] tracking-[-0.025em] text-fg sm:text-4xl md:text-[2.75rem]">
            {t.philosophy.title}
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {t.philosophy.body}
          </p>
        </Reveal>

        <ul className="flex flex-col justify-center divide-y divide-line border-t border-line">
          {t.philosophy.principles.map((principle, i) =>
          <Reveal as="li" key={principle.title} delay={0.08 + i * 0.08}>
              <div className="group flex items-start gap-5 py-6 transition-colors duration-200 ease-smooth">
                <span className="font-mono text-[11px] text-accent">{principle.num}</span>
                <div>
                  <h3 className="text-base font-medium text-fg">{principle.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{principle.desc}</p>
                </div>
              </div>
            </Reveal>
          )}
        </ul>
      </div>
    </Section>);

}