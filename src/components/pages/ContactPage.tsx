import { Hero } from '@/components/sections/contact/Hero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { NextSteps } from '@/components/sections/contact/NextSteps';
import { Faq } from '@/components/sections/shared/Faq';
import { PageRuntime } from '@/components/runtime/PageRuntime';

export function ContactPage() {
  return (
    <div className="page" data-page="contact">
      <Hero />
      <ContactForm />
      <NextSteps />
      <Faq idPrefix="c" />
      <PageRuntime />
    </div>
  );
}
