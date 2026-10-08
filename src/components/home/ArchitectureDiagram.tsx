import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LayoutDashboardIcon, PlugZapIcon, CogIcon, DatabaseIcon, ServerIcon, BoxIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
const icons: BoxIcon[] = [LayoutDashboardIcon, PlugZapIcon, CogIcon, DatabaseIcon, ServerIcon];
export function ArchitectureDiagram() {
  const {
    t
  } = useLanguage();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  return <div className="relative rounded-2xl border border-line bg-surface/80 p-5 shadow-panel backdrop-blur-sm sm:p-6">
      <div className="flex items-center justify-between gap-4 border-b border-line pb-4">
    ;    <div className="flex items-center gap-2">
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {t.hero.diagramTitle}
          </h2>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted/70">
          {t.hero.diagramHint}
        </span>
      </div>

      <ul className="relative mt-5 space-y-2">
        {t.hero.layers.map((layer, i) => {
        const Icon = icons[i];
        const isActive = active === i;
        return <li key={layer.name} className="relative">
              <button type="button" onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} aria-expanded={isActive} className={`w-full rounded-xl border p-3.5 text-start transition-[border-color,background-color] duration-200 ease-smooth ${isActive ? 'border-accent/50 bg-accent/[0.06]' : 'border-line bg-raised/40 hover:border-line-strong'}`}>
                <div className="flex items-center gap-3">
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition-colors duration-200 ease-smooth ${isActive ? 'border-accent/60 text-accent' : 'border-line-strong text-muted'}`}>
                    <Icon aria-hidden className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-fg">{layer.name}</span>
                  </span>
                  <span className="font-mono text-[10px] text-muted/70">0{i + 1}</span>
                </div>
                <motion.p initial={false} animate={{
              height: isActive ? 'auto' : 0,
              opacity: isActive ? 1 : 0
            }} transition={{
              duration: 0.24,
              ease: [0.23, 1, 0.32, 1]
            }} className="overflow-hidden text-[13px] leading-relaxed text-muted">
                  <span className="mt-2 block">{layer.desc}</span>
                </motion.p>
              </button>

              {i < t.hero.layers.length - 1 ? <div aria-hidden className="mx-auto flex h-2 w-px items-center justify-center bg-line-strong">
                  {!reduce ? <motion.span className="block h-1.5 w-1.5 rounded-full bg-accent" animate={{
              opacity: [0, 1, 0],
              y: [-6, 6]
            }} transition={{
              duration: 1.6,
              repeat: Infinity,
              delay: i * 0.32,
              ease: 'linear'
            }} /> : null}
                </div> : null}
            </li>;
      })}
      </ul>
    </div>;
}