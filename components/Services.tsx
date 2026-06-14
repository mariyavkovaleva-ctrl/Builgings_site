import AnimatedSection from "@/components/AnimatedSection";
import { services } from "@/data/company";

export default function Services() {
  return (
    <section id="services" className="section-padding bg-bg-primary">
      <div className="container-wide px-6 md:px-8">
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Под ключ</p>
          <h2 className="heading-display text-3xl text-text-primary md:text-4xl lg:text-5xl">
            Что входит в строительство
          </h2>
          <p className="mt-4 text-base text-text-secondary md:text-lg">
            Полный цикл работ — от фундамента до чистовой отделки. Один договор, одна ответственность.
          </p>
        </AnimatedSection>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              delay={index * 0.08}
              className="bg-bg-primary p-8 md:p-10"
            >
              <div className="gold-line mb-6" />
              <h3 className="heading-display text-xl text-text-primary md:text-2xl">{service.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                {service.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
