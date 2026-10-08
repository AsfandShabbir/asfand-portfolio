import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, GithubIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from '../components/ui/Reveal';
import { Eyebrow, Shell } from '../components/ui/Section';
import { Action, DirArrow } from '../components/ui/Button';
import { getProject, projects, mailto } from '../data/projects';

function Block({
  label,
  children



}: {label: string;children: React.ReactNode;}) {
  return (
    <Reveal className="border-t border-line pt-8">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{label}</h2>
      <div className="mt-4 max-w-2xl">{children}</div>
    </Reveal>);

}

export function ProjectDetail() {
  const { projectId } = useParams();
  const { t, dir } = useLanguage();
  const project = getProject(projectId ?? '');

  if (!project) {
    return (
      <Shell className="py-32 text-center">
        <h1 className="text-2xl font-semibold text-fg">404</h1>
        <div className="mt-6 flex justify-center">
          <Action to="/projects" variant="secondary">
            {t.common.back}
          </Action>
        </div>
      </Shell>);

  }

  const copy = t.projects.items[project.id];
  const labels = t.projects.labels;
  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];
  const nextCopy = t.projects.items[next.id];
  const BackIcon = dir === 'rtl' ? ArrowRightIcon : ArrowLeftIcon;

  return (
    <>
      <section className="relative isolate overflow-hidden pt-10 sm:pt-14">
        <div aria-hidden className="pointer-events-none absolute inset-0 grid-fade opacity-40" />
        <Shell className="relative">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-[13px] text-muted transition-colors duration-200 ease-smooth hover:text-accent">
            
            <BackIcon aria-hidden className="h-4 w-4" />
            {t.common.back}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 max-w-3xl">
            
            <Eyebrow>{copy.category}</Eyebrow>
            <h1 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-fg sm:text-4xl md:text-[3rem]">
              {copy.name}
            </h1>
            <p className="mt-6 text-[15px] leading-relaxed text-muted sm:text-base">{copy.summary}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Action href={project.github} external variant="secondary" icon={<GithubIcon aria-hidden className="h-4 w-4" />}>
                {t.common.github}
              </Action>
              {project.demo ?
              <Action href={project.demo} external variant="secondary">
                  {t.common.liveDemo}
                </Action> :
              null}
              <Action href={mailto(`${t.common.discuss}: ${copy.name}`)} arrow>
                {t.common.discuss}
              </Action>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="mt-12 overflow-hidden rounded-2xl border border-line bg-raised shadow-panel">
            
            <img
              src={project.image}
              alt={`${copy.name} interface`}
              loading="lazy"
              decoding="async"
              className="w-full object-cover" />
            
          </motion.div>
        </Shell>
      </section>

      <Shell className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div className="space-y-10">
            <Block label={labels.challenge}>
              <p className="text-[15px] leading-relaxed text-fg/90">{copy.challenge}</p>
              <p className="mt-4 text-[14px] leading-relaxed text-muted">{copy.problem}</p>
            </Block>

            <Block label={labels.solution}>
              <p className="text-[15px] leading-relaxed text-fg/90">{copy.solution}</p>
            </Block>

            <Block label={labels.architecture}>
              <ul className="space-y-3">
                {copy.architecture.map((item, i) =>
                <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-muted">
                    <span className="mt-[3px] font-mono text-[11px] text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                )}
              </ul>
            </Block>

            <Block label={labels.outcome}>
              <p className="text-[15px] leading-relaxed text-fg/90">{copy.outcome}</p>
            </Block>
          </div>

          <div className="space-y-10">
            <Block label={labels.features}>
              <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {copy.features.map((feature) =>
                <li
                  key={feature}
                  className="flex items-center gap-2.5 rounded-lg border border-line bg-surface/60 px-3.5 py-2.5 text-[13px] text-muted">
                  
                    <CheckIcon aria-hidden className="h-3.5 w-3.5 shrink-0 text-accent" />
                    {feature}
                  </li>
                )}
              </ul>
            </Block>

            <Block label={labels.tech}>
              <ul className="flex flex-wrap gap-1.5">
                {project.tech.map((tech) =>
                <li
                  key={tech}
                  className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-muted">
                  
                    {tech}
                  </li>
                )}
              </ul>
            </Block>
          </div>
        </div>
      </Shell>

      <section className="border-t border-line">
        <Shell>
          <Link
            to={`/projects/${next.id}`}
            className="group flex flex-wrap items-center justify-between gap-4 py-10">
            
            <span>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {t.common.next}
              </span>
              <span className="mt-2 block text-xl font-semibold text-fg transition-colors duration-200 ease-smooth group-hover:text-accent sm:text-2xl">
                {nextCopy.name}
              </span>
            </span>
            <span className="text-muted transition-colors duration-200 ease-smooth group-hover:text-accent">
              <DirArrow className="h-5 w-5" />
            </span>
          </Link>
        </Shell>
      </section>
    </>);

}