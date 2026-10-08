import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function BackToTop() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 720);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ?
      <motion.button
        type="button"
        aria-label={t.common.backToTop}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, y: 12, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.96 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="fixed bottom-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-line-strong bg-raised/90 text-fg shadow-lift backdrop-blur transition-colors duration-200 ease-smooth hover:border-accent/60 hover:text-accent ltr:right-6 rtl:left-6">
        
          <ArrowUpIcon aria-hidden className="h-4 w-4" />
        </motion.button> :
      null}
    </AnimatePresence>);

}