import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { dictionaries, type Dict, type LanguageCode } from '../data/content';

interface LanguageValue {
  lang: LanguageCode;
  dir: 'ltr' | 'rtl';
  t: Dict;
  setLang: (lang: LanguageCode) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageValue | null>(null);

export function LanguageProvider({
  children,
  initialLanguage = 'en'



}: {children: React.ReactNode;initialLanguage?: LanguageCode;}) {
  const [lang, setLang] = useState<LanguageCode>(initialLanguage);
  const t = dictionaries[lang];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = t.dir;
  }, [lang, t.dir]);

  const toggle = useCallback(() => setLang((prev) => prev === 'en' ? 'ar' : 'en'), []);

  const value = useMemo<LanguageValue>(() => ({ lang, dir: t.dir, t, setLang, toggle }), [lang, t, toggle]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}