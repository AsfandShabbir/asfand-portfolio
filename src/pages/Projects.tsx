import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { Shell } from '../components/ui/Section';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/projects';
import { ClosingCta } from '../components/home/ClosingCta';

export function Projects() {
  const { t } = useLanguage();
  const [lead, ...rest] = projects;
  const mid = rest.slice(0, 2);
  const tail = rest.slice(2);

  return (
    <>
      <PageHeader eyebrow={t.projects.eyebrow} title={t.projects.title} body={t.projects.body} />

      <Shell className="pb-24 sm:pb-28">
        <div className="border-t border-line pt-12">
          <Reveal>
            <ProjectCard project={lead} layout="wide" />
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {mid.map((project, i) =>
            <Reveal key={project.id} delay={i * 0.07} className="h-full">
                <ProjectCard project={project} layout="detailed" />
              </Reveal>
            )}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {tail.map((project, i) =>
            <Reveal key={project.id} delay={i * 0.07} className="h-full">
                <ProjectCard project={project} layout="compact" />
              </Reveal>
            )}
          </div>
        </div>
      </Shell>

      <ClosingCta />
    </>);

}