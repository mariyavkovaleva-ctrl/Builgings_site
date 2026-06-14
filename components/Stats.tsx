import AnimatedSection from "@/components/AnimatedSection";
import { company } from "@/data/company";

export default function Stats() {
  return (
    <section className="border-y border-border bg-bg-secondary">
      <div className="container-wide section-padding !py-16 px-6 md:px-8 lg:!py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {company.stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1} className="text-center md:text-left">
              <p className="heading-display text-3xl text-accent md:text-4xl lg:text-5xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-text-secondary md:text-sm">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
