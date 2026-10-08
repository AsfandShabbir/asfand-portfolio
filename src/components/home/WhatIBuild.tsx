import React from "react";
import { Link } from "react-router-dom";
import { LayersIcon, ServerCogIcon, SparklesIcon, WorkflowIcon, BoxIcon } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Reveal } from "../ui/Reveal";
import { Section, SectionHeading } from "../ui/Section";
import { DirArrow } from "../ui/Button";
const icons: BoxIcon[] = [LayersIcon, ServerCogIcon, SparklesIcon, WorkflowIcon];
const targets = ['/services', '/services', '/services', '/services'];
export function WhatIBuild() {
  const {
    t
  } = useLanguage();
  return <Section id="what-i-build">
      <SectionHeading eyebrow={t.build.eyebrow} title={t.build.title} body={t.build.body} size="lg" />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.build.cards.map((card, i) => {
        const Icon = icons[i];
        return <Reveal as="li" key={card.title} delay={i * 0.07} className="h-full">
              <Link to={targets[i]} className="group flex h-full flex-col rounded-xl border border-line bg-surface/70 p-6 transition-[border-color,transform,background-color] duration-300 ease-smooth hover:-translate-y-1 hover:border-accent/40 hover:bg-surface">
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-line-strong bg-raised text-accent transition-colors duration-300 ease-smooth group-hover:border-accent/60">
                  <Icon aria-hidden className="h-[18px] w-[18px]" />
                </span>
                <h3 className="mt-5 text-[15px] font-medium leading-snug text-fg">{card.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{card.desc}</p>
                <span className="mt-auto flex items-center pt-6 text-muted transition-colors duration-200 ease-smooth group-hover:text-accent">
                  <DirArrow />
                </span>
              </Link>
            </Reveal>;
      })}
      </ul>
    </Section>;
}