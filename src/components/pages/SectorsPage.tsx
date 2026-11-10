import { Hero } from '@/components/sections/sectors/Hero';
import { SectorTabs } from '@/components/sections/sectors/SectorTabs';
import { Coverage } from '@/components/sections/sectors/Coverage';
import { Outcomes } from '@/components/sections/sectors/Outcomes';
import { Foundations } from '@/components/sections/sectors/Foundations';
import { DawnCta } from '@/components/sections/shared/DawnCta';
import { PageRuntime } from '@/components/runtime/PageRuntime';

export function SectorsPage() {
  return (
    <div className="page" data-page="sectors">
      <Hero />
      <SectorTabs />
      <Coverage />
      <Outcomes />
      <Foundations />
      <DawnCta />
      <PageRuntime />
    </div>
  );
}
