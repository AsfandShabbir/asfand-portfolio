import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';

export function ProcessTimeline() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const stages = t.about.approach.stages;

  return (
    <Section id="approach" className="bg-surface/40">
      <SectionHeading
        eyebrow={t.about.approach.eyebrow}
        title={t.about.approach.title}
        body={t.about.approach.body}
        size="lg" />
      

      <ol className="relative mt-12 ps-8 sm:ps-10">
        <span aria-hidden className="absolute inset-y-2 start-[11px] w-px bg-line sm:start-[15px]" />
        <motion.span
          aria-hidden
          className="absolute top-2 start-[11px] w-px origin-top bg-accent/60 sm:start-[15px]"
          initial={{ height: 0 }}
          whileInView={{ height: reduce ? 0 : 'calc(100% - 1rem)' }}
          viewport={{ once: true, margin: '-20% 0px -30% 0px' }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }} />
        

        {stages.map((stage, i) =>
        <Reveal as="li" key={stage.title} delay={i * 0.08} className="relative pb-9 last:pb-0">
            <span
            aria-hidden
            className="absolute -start-8 top-1 grid h-[23px] w-[23px] place-items-center rounded-full border border-line-strong bg-bg font-mono text-[10px] text-accent sm:-start-10 sm:h-[31px] sm:w-[31px] sm:text-[11px]">
            
              {i + 1}
            </span>
            <h3 className="text-base font-medium text-fg sm:text-lg">{stage.title}</h3>
            <p className="mt-1.5 max-w-lg text-[13.5px] leading-relaxed text-muted">{stage.desc}</p>
          </Reveal>
        )}
      </ol>
    </Section>);

}