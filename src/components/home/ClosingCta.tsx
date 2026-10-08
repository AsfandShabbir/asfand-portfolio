import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Reveal } from '../ui/Reveal';
import { Action } from '../ui/Button';
import { Shell } from '../ui/Section';

export function ClosingCta() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden border-t border-line py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dot-grid opacity-[0.35]" />
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[720px] max-w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.07] blur-[110px]" />
      </div>

      <Shell className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-fg sm:text-4xl md:text-[3rem] md:leading-[1.08]">
            {t.homeCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {t.homeCta.body}
          </p>
          <div className="mt-9 flex justify-center">
            <Action to="/contact" arrow className="px-6 py-3.5">
              {t.homeCta.button}
            </Action>
          </div>
        </Reveal>
      </Shell>
    </section>);

}