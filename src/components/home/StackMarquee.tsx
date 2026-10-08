import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Shell } from '../ui/Section';

export function StackMarquee() {
  const { t } = useLanguage();
  const items = t.stack.items;

  return (
    <section aria-label={t.stack.title} className="border-y border-line bg-surface/50 py-10">
      <Shell>
        <h2 className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {t.stack.title}
        </h2>
      </Shell>

      <div className="marquee-mask relative mt-7 overflow-hidden">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) =>
          <ul key={copy} className="flex shrink-0 gap-3 pe-3" aria-hidden={copy === 1}>
              {items.map((item) =>
            <li
              key={`${copy}-${item}`}
              className="whitespace-nowrap rounded-full border border-line bg-raised/60 px-4 py-2 text-[13px] text-muted transition-colors duration-200 ease-smooth hover:border-accent/50 hover:text-fg">
              
                  {item}
                </li>
            )}
            </ul>
          )}
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 start-0 w-16 bg-gradient-to-r from-bg to-transparent rtl:bg-gradient-to-l" />
        
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 end-0 w-16 bg-gradient-to-l from-bg to-transparent rtl:bg-gradient-to-r" />
        
      </div>
    </section>);

}