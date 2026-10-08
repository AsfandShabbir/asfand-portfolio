import React from 'react';
import { Reveal } from './Reveal';

export function Shell({ children, className = '' }: {children: React.ReactNode;className?: string;}) {
  return <div className={`mx-auto w-full max-w-shell px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: {children: React.ReactNode;}) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
      <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
      {children}
    </span>);

}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: 'start' | 'center';
  size?: 'md' | 'lg';
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'start',
  size = 'md',
  id
}: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        id={id}
        className={`mt-4 text-balance font-semibold tracking-[-0.02em] text-fg ${
        size === 'lg' ? 'text-3xl sm:text-4xl md:text-[2.75rem] md:leading-[1.1]' : 'text-2xl sm:text-3xl'}`
        }>
        
        {title}
      </h2>
      {body ? <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">{body}</p> : null}
    </Reveal>);

}

export function Section({
  children,
  className = '',
  id,
  label





}: {children: React.ReactNode;className?: string;id?: string;label?: string;}) {
  return (
    <section id={id} aria-label={label} className={`border-t border-line py-20 sm:py-28 ${className}`}>
      <Shell>{children}</Shell>
    </section>);

}