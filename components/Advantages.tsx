import AnimatedSection from "@/components/AnimatedSection";
import { advantages } from "@/data/company";

export default function Advantages() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="container-wide px-6 md:px-8">
        <AnimatedSection className="mb-16 text-center">
          <p className="section-label mb-4">Почему мы</p>
          <h2 className="heading-display text-3xl text-text-primary md:text-4xl lg:text-5xl">
            Преимущества NordHaus
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {advantages.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1} className="text-center md:text-left">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-accent/30 md:mx-0">
                <span className="text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="heading-display text-xl text-text-primary">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-base">
                {item.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
