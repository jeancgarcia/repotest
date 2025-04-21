
import { FadeIn } from './ui/Motion';
import { CTA } from "@/components/ui/cta";

const Services = () => {
  return (
    <section id="services" className="bg-white">
      <FadeIn direction="up" delay={0.2}>
        <CTA />
      </FadeIn>
    </section>
  );
};

export default Services;
