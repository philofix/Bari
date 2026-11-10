import { Hero } from '@/components/sections/process/Hero';
import { Stages } from '@/components/sections/process/Stages';
import { Tracking } from '@/components/sections/process/Tracking';
import { Plans } from '@/components/sections/shared/Plans';
import { Deploy } from '@/components/sections/process/Deploy';
import { Support } from '@/components/sections/process/Support';
import { Faq } from '@/components/sections/shared/Faq';
import { DawnCta } from '@/components/sections/shared/DawnCta';
import { PageRuntime } from '@/components/runtime/PageRuntime';

export function ProcessPage() {
  return (
    <div className="page" data-page="process">
      <Hero />
      <Stages />
      <Tracking />
      <Plans />
      <Deploy />
      <Support />
      <Faq idPrefix="p" />
      <DawnCta />
      <PageRuntime />
    </div>
  );
}
