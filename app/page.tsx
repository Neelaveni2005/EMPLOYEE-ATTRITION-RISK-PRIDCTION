import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import {
  StatBand,
  Workflow,
  ModelSection,
  CtaSection,
  SiteFooter,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <StatBand />
      <Features />
      <Workflow />
      <ModelSection />
      <CtaSection />
      <SiteFooter />
    </main>
  );
}
