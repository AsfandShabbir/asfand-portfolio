import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, XIcon, LanguagesIcon, TerminalIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Action } from '../ui/Button';
import { Shell } from '../ui/Section';

export function Navbar() {
  const { t, toggle } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const links = [
  { to: '/', label: t.nav.home },
  { to: '/about', label: t.nav.about },
  { to: '/skills', label: t.nav.skills },
  { to: '/services', label: t.nav.services },
  { to: '/projects', label: t.nav.projects },
  { to: '/contact', label: t.nav.contact }];


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ease-smooth ${
      scrolled || open ?
      'border-b border-line bg-bg/80 backdrop-blur-xl supports-[backdrop-filter]:bg-bg/60' :
      'border-b border-transparent'}`
      }>
      
      <Shell>
        <nav aria-label="Main" className="flex h-16 items-center justify-between gap-6 sm:h-[72px]">
          <Link
            to="/"
            className="group flex items-center gap-2.5 text-[15px] font-semibold tracking-[-0.01em] text-fg">
            
            <span className="grid h-8 w-8 place-items-center rounded-md border border-line-strong bg-raised text-accent transition-colors duration-200 ease-smooth group-hover:border-accent/60">
              <TerminalIcon aria-hidden className="h-4 w-4" />
            </span>
            {t.name}
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((link) =>
            <li key={link.to}>
                <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                `relative block rounded-md px-3 py-2 text-sm transition-colors duration-200 ease-smooth ${
                isActive ? 'text-fg' : 'text-muted hover:text-fg'}`

                }>
                
                  {({ isActive }) =>
                <>
                      {link.label}
                      {isActive ?
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} /> :

                  null}
                    </>
                }
                </NavLink>
              </li>
            )}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={t.common.languageToggle}
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-3 py-2 text-xs font-medium text-muted transition-colors duration-200 ease-smooth hover:border-accent/60 hover:text-fg">
              
              <LanguagesIcon aria-hidden className="h-4 w-4" />
              <span>{t.other}</span>
            </button>

            <div className="hidden lg:block">
              <Action to="/contact" variant="secondary" arrow className="px-4 py-2">
                {t.common.startProject}
              </Action>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.close : t.nav.menu}
              className="grid h-10 w-10 place-items-center rounded-lg border border-line-strong text-fg transition-colors duration-200 ease-smooth hover:border-accent/60 lg:hidden">
              
              {open ? <XIcon aria-hidden className="h-5 w-5" /> : <MenuIcon aria-hidden className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Shell>

      <AnimatePresence>
        {open ?
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl lg:hidden">
          
            <Shell className="py-4">
              <ul className="flex flex-col">
                {links.map((link) =>
              <li key={link.to}>
                    <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                  `flex items-center justify-between border-b border-line py-3.5 text-base transition-colors duration-200 ease-smooth ${
                  isActive ? 'text-accent' : 'text-fg'}`

                  }>
                  
                      {link.label}
                    </NavLink>
                  </li>
              )}
              </ul>
              <div className="pt-5">
                <Action to="/contact" arrow className="w-full">
                  {t.common.startProject}
                </Action>
              </div>
            </Shell>
          </motion.div> :
        null}
      </AnimatePresence>
    </header>);

}