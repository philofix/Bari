import { Hero } from '@/components/sections/services/Hero';
import { ServicesOverview } from '@/components/sections/services/ServicesOverview';
import { ServiceDetails } from '@/components/sections/services/ServiceDetails';
import { Integrations } from '@/components/sections/services/Integrations';
import { TechStack } from '@/components/sections/services/TechStack';
import { Plans } from '@/components/sections/shared/Plans';
import { DawnCta } from '@/components/sections/shared/DawnCta';
import { PageRuntime } from '@/components/runtime/PageRuntime';

export function ServicesPage() {
  return (
    <div className="page" data-page="services">
      <Hero />
      <ServicesOverview />
      <ServiceDetails />
      <Integrations />
      <TechStack />
      <Plans />
      <DawnCta />
      <PageRuntime />
    </div>
  );
}
