import { Hero } from '@/components/sections/home/Hero';
import { Problem } from '@/components/sections/home/Problem';
import { Build } from '@/components/sections/home/Build';
import { Coverage } from '@/components/sections/home/Coverage';
import { Local } from '@/components/sections/home/Local';
import { Howcards } from '@/components/sections/home/Howcards';
import { Plans } from '@/components/sections/shared/Plans';
import { Dash } from '@/components/sections/home/Dash';
import { Why } from '@/components/sections/home/Why';
import { Selwork } from '@/components/sections/home/Selwork';
import { TeamTeaser } from '@/components/sections/home/TeamTeaser';
import { Faq } from '@/components/sections/shared/Faq';
import { DawnCta } from '@/components/sections/shared/DawnCta';
import { PageRuntime } from '@/components/runtime/PageRuntime';

export function HomePage() {
  return (
    <div className="page" data-page="home">
      <Hero />
      <Problem />
      <Build />
      <Coverage />
      <Local />
      <Howcards />
      <Plans />
      <Dash />
      <Why />
      <Selwork />
      <TeamTeaser />
      <Faq idPrefix="h" />
      <DawnCta />
      <PageRuntime />
    </div>
  );
}
