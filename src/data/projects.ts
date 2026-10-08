export type ProjectId =
  | 'ai-chatbot'
  | 'ecommerce-platform'
  | 'logifleet'
  | 'automation-platform'
  | 'saas-analytics'
  | 'crm-platform';

export interface Project {
  id: ProjectId;
  number: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
  featured?: boolean;
}

const GITHUB_USER = 'AsfandShabbir';
const repo = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;

export const projects: Project[] = [
  {
    id: 'ai-chatbot',
    number: '01',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop',
    tech: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: repo('ai-chatbot-platform'),
    featured: true
  },
  {
    id: 'ecommerce-platform',
    number: '02',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    github: repo('ecommerce-platform'),
    featured: true
  },
  {
    id: 'logifleet',
    number: '03',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    github: repo('logifleet'),
    featured: true
  },
  {
    id: 'automation-platform',
    number: '04',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    github: repo('business-automation-platform')
  },
  {
    id: 'saas-analytics',
    number: '05',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB',],
    github: repo('saas-analytics-dashboard')
  },
  {
    id: 'crm-platform',
    number: '06',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: repo('customer-management-platform')
  }
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (id: string) => projects.find((p) => p.id === id);

export const contact = {
  email: 'theasfand616@gmail.com',
  phone: '+92 3257732616',
  phoneHref: 'tel:+923257732616',
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: 'https://www.linkedin.com/in/hamzashahiddev'
};

export const mailto = (subject: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;