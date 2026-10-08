import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { Eyebrow, Shell } from '../ui/Section';
import { ArchitectureDiagram } from './ArchitectureDiagram';

export type HeroBackground = 'grid' | 'aurora' | 'plain';

function Backdrop({ variant }: { variant: HeroBackground }) {
  const reduce = useReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {variant === 'grid' ? <div className="absolute inset-0 grid-fade opacity-60" /> : null}
      {variant !== 'plain' ? (
        <motion.div
          className="absolute left-1/2 top-[-18%] h-[420px] w-[820px] max-w-[130vw] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[110px]"
          animate={reduce ? undefined : { opacity: [0.55, 0.85, 0.55] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
      ) : null}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg" />
    </div>
  );
}

export function Hero({ background = 'grid' }: { background?: HeroBackground }) {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const words = t.hero.headline.split(' ');

  return (
    <section className="relative isolate overflow-hidden pb-20 pt-16 sm:pb-28 sm:pt-24">
      <Backdrop variant={background} />
      <Shell className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            </motion.div>

            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-fg sm:text-5xl md:text-[3.5rem]">
              {words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: '0.4em' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 + i * 0.035, ease: [0.23, 1, 0.32, 1] }}
                >
                  {word}
                  {i < words.length - 1 ? '\u00A0' : ''}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.23, 1, 0.32, 1] }}
            >
              {t.hero.body}
            </motion.p>
          </div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <ArchitectureDiagram />
          </motion.div>
        </div>
      </Shell>
    </section>
  );
}