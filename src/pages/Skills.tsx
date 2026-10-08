import React, { useState } from 'react';
import { Terminal, Server, Layout, Cpu, Wrench, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Skill {
  name: string;
  category: 'backend' | 'frontend' | 'tools' | 'devops';
  level: number; // 0 to 100
  description: string;
}

export const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>('all');

  const skillsData: Skill[] = [
    { name: 'Node.js / Express.js', category: 'backend', level: 90, description: 'REST APIs, Middleware, Authentication, Backend Architecture' },

{ name: 'React.js / JavaScript', category: 'frontend', level: 90, description: 'Component Design, State Management, Hooks, Responsive UI' },

{ name: 'MongoDB', category: 'backend', level: 88, description: 'Schema Design, CRUD Operations, Indexing, Query Optimization' },

{ name: 'Tailwind CSS', category: 'frontend', level: 90, description: 'Responsive Layouts, Custom UI Systems, Modern Interfaces' },

{ name: 'Docker & Deployment', category: 'devops', level: 80, description: 'Containerization, Docker Compose, Environment Configuration' },

{ name: 'Git / GitHub Workflow', category: 'tools', level: 90, description: 'Version Control, Branching Strategies, Collaboration' },

{ name: 'RESTful API Architecture', category: 'backend', level: 92, description: 'Scalable Endpoints, JWT Authentication, Validation, API Design' },

{ name: 'Full-Stack MERN', category: 'fullstack', level: 88, description: 'React, Node.js, Express.js, MongoDB, End-to-End Application Development' }
  ];

  const categories = [
    { id: 'all', label: 'All Skills', icon: Terminal },
    { id: 'backend', label: 'Backend Engineering', icon: Server },
    { id: 'frontend', label: 'Frontend & UI', icon: Layout },
    { id: 'devops', label: 'DevOps & Architecture', icon: Cpu },
    { id: 'tools', label: 'Tools & Workflows', icon: Wrench },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-black text-neutral-100 relative overflow-hidden border-t border-neutral-800/80 min-h-screen">
      
      {/* Background Overlay Effects (Exact Match with Site Theme) */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px)] bg-[size:4rem] opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_20%,#000_85%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 inline-block animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-widest text-teal-400 uppercase">
              {t.skills?.eyebrow || "TECHNICAL CAPABILITIES"}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            {t.skills?.title || "Architecting Robust Digital Solutions."}
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            {t.skills?.body || "A comprehensive overview of my core engineering toolkit, specialized frameworks, and production-proven tech stack."}
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-neutral-800/80 pb-4">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  isActive
                    ? 'bg-neutral-800 border-neutral-600 text-white shadow-sm'
                    : 'bg-neutral-900/30 border-neutral-800/60 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-teal-400' : 'text-neutral-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/90 transition-all duration-300 backdrop-blur-sm group hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-white tracking-tight">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-mono text-neutral-400 bg-neutral-800/80 px-2.5 py-1 rounded-md border border-neutral-700/50">
                  {skill.level}%
                </span>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed mb-4 font-normal">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-neutral-800/80 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-400/80 rounded-full group-hover:bg-teal-400 transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};