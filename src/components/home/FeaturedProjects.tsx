import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';
import { Action } from '../ui/Button';
import { ProjectCard } from '../projects/ProjectCard';
import { featuredProjects } from '../../data/projects';

export function FeaturedProjects() {
  const { t } = useLanguage();

  return (
    <Section id="featured">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow={t.featured.eyebrow}
          title={t.featured.title}
          body={t.featured.body}
          size="lg" />
        
        <Reveal delay={0.1}>
          <Action to="/projects" variant="ghost" arrow>
            {t.common.viewAll}
          </Action>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {featuredProjects.map((project, i) =>
        <Reveal key={project.id} delay={i * 0.08} className="h-full">
            <ProjectCard project={project} layout="compact" />
          </Reveal>
        )}
      </div>
    </Section>);

}