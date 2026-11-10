import { Hero } from '@/components/sections/work/Hero';
import { CaseStudies } from '@/components/sections/work/CaseStudies';
import { CaseStudyFormat } from '@/components/sections/work/CaseStudyFormat';
import { WorkCta } from '@/components/sections/work/WorkCta';
import { PageRuntime } from '@/components/runtime/PageRuntime';

export function WorkPage() {
  return (
    <div className="page" data-page="work">
      <Hero />
      <CaseStudies />
      <CaseStudyFormat />
      <WorkCta />
      <PageRuntime />
    </div>
  );
}
