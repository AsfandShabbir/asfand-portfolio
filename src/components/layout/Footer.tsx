import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Mail, ArrowUp, Terminal } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Shell } from '../ui/Section';

export function Footer() {
  const { t } = useLanguage();

  const email = "theasfand616@gmail.com";
  const whatsappNumber = "+923257732616";
  const whatsappFormatted = "+92 325 7732616";

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/skills', label: t.nav.skills },
    { to: '/services', label: t.nav.services },
    { to: '/projects', label: t.nav.projects },
    { to: '/contact', label: t.nav.contact },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-line bg-surface/60 backdrop-blur-sm">
      <Shell className="py-12">
        
        {/* Main Grid: 3 Clean Columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] pb-10 border-b border-line">
          
          {/* Column 1: Identity & Direct Contact */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-line-strong bg-raised text-accent shadow-sm">
                <Terminal aria-hidden className="h-5 w-5" />
              </span>
              <div>
                <p className="text-base font-semibold text-fg tracking-tight">{t.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted">{t.role}</p>
              </div>
            </div>
            
            <p className="mt-4 text-xs leading-relaxed text-muted max-w-xs">
              {t.footer?.tagline || "Building scalable backend architecture & reliable business software."}
            </p>

            <div className="mt-5 space-y-2">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-xs text-muted hover:text-fg transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-accent" />
                <span>{email}</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-xs text-muted hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span>{whatsappFormatted}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-4 font-semibold">
              {t.footer?.linksTitle || "NAVIGATION"}
            </h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-xs text-muted hover:text-fg transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Connect & Scroll Action */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted mb-4 font-semibold">
                GET IN TOUCH
              </h3>
              <p className="text-xs text-muted leading-relaxed mb-4">
                Have a project or technical inquiry? Send a message directly on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-medium transition-all"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Back to top button */}
            <div className="mt-6 pt-4 border-t border-line/40 flex items-center justify-between">
              <span className="text-[11px] font-mono text-muted">Back to top</span>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="grid h-8 w-8 place-items-center rounded-md border border-line bg-raised text-muted hover:text-fg hover:border-line-strong transition-all"
              >
                <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-muted font-mono">
          <p>{t.footer?.rights || `© ${new Date().getFullYear()} Hamza Shahid. All rights reserved.`}</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for new projects</span>
          </div>
        </div>

      </Shell>
    </footer>
  );
}