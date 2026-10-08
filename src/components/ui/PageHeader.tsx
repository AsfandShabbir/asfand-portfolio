import React from 'react';
import { motion } from 'framer-motion';
import { Eyebrow, Shell } from './Section';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  body?: string;
  children?: React.ReactNode;
}

export function PageHeader({ eyebrow, title, body, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden pb-14 pt-14 sm:pb-20 sm:pt-20">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-40" />
      </div>
      <Shell className="relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="max-w-3xl">
          
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-fg sm:text-4xl md:text-[3rem]">
            {title}
          </h1>
          {body ?
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted sm:text-base">{body}</p> :
          null}
          {children ? <div className="mt-8">{children}</div> : null}
        </motion.div>
      </Shell>
    </section>);

}