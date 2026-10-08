import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollProgress } from './ScrollProgress';
import { BackToTop } from './BackToTop';
import { Chatbot } from '../Chatbot';
import { useLanguage } from '../../contexts/LanguageContext';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export function Layout() {
  const location = useLocation();
  const { lang, t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <div className="flex min-h-screen w-full flex-col bg-bg font-sans antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:border focus:border-accent focus:bg-bg focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
      >
        {t.common.skip}
      </a>
      <ScrollProgress />
      <Navbar />
      <ScrollReset />
      <main id="main" className="flex-1 pt-16 sm:pt-[72px]">
        <motion.div
          key={`${location.pathname}-${lang}`}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <BackToTop />
      
      {/* Floating AI Chatbot Assistant */}
      <Chatbot />
    </div>
  );
}