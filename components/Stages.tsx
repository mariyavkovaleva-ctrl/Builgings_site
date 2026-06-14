import AnimatedSection from "@/components/AnimatedSection";
import { stages } from "@/data/company";

export default function Stages() {
  return (
    <section id="stages" className="section-padding bg-bg-secondary">
      <div className="container-wide px-6 md:px-8">
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Процесс</p>
          <h2 className="heading-display text-3xl text-text-primary md:text-4xl lg:text-5xl">
            Этапы строительства
          </h2>
          <p className="mt-4 text-base text-text-secondary md:text-lg">
            Прозрачный процесс от первой встречи до передачи ключей — с фиксированными сроками
            на каждом этапе.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stages.map((stage, index) => (
            <AnimatedSection key={stage.step} delay={index * 0.1}>
              <div className="relative border-t border-accent pt-8">
                <span className="heading-display text-5xl text-accent/25">{stage.step}</span>
                <h3 className="heading-display mt-4 text-xl text-text-primary md:text-2xl">
                  {stage.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
                  {stage.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
