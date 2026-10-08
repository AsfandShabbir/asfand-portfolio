import React from 'react';
import { Hero, type HeroBackground } from '../components/home/Hero';
import { StackMarquee } from '../components/home/StackMarquee';
import { WhatIBuild } from '../components/home/WhatIBuild';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { Philosophy } from '../components/home/Philosophy';
import { ClosingCta } from '../components/home/ClosingCta';

export function Home({ heroBackground = 'grid' }: {heroBackground?: HeroBackground;}) {
  return (
    <>
      <Hero background={heroBackground} />
      <StackMarquee />
      <WhatIBuild />
      <FeaturedProjects />
      <Philosophy />
      <ClosingCta />
    </>);

}