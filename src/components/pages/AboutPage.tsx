import { Hero } from '@/components/sections/about/Hero';
import { Story } from '@/components/sections/about/Story';
import { VisionMission } from '@/components/sections/about/VisionMission';
import { Values } from '@/components/sections/about/Values';
import { Location } from '@/components/sections/about/Location';
import { Team } from '@/components/sections/about/Team';
import { Principles } from '@/components/sections/about/Principles';
import { DawnCta } from '@/components/sections/shared/DawnCta';
import { PageRuntime } from '@/components/runtime/PageRuntime';

export function AboutPage() {
  return (
    <div className="page" data-page="about">
      <Hero />
      <Story />
      <VisionMission />
      <Values />
      <Location />
      <Team />
      <Principles />
      <DawnCta />
      <PageRuntime />
    </div>
  );
}
