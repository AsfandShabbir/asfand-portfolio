import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50"
    >
      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden bg-slate-800">
        <img
          src={project.image}
          alt={project.id}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold text-emerald-400">
          {project.number}
        </span>

        <h3 className="mt-2 text-xl font-bold tracking-tight text-white capitalize">
          {project.id.replace(/-/g, ' ')}
        </h3>

        {/* Tech Stack Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((techItem) => (
            <span
              key={techItem}
              className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300 border border-slate-700/50"
            >
              {techItem}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}