import AnimatedSection from "@/components/AnimatedSection";
import { company } from "@/data/company";
import { aboutImage } from "@/data/projects";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-padding bg-bg-primary">
      <div className="container-wide px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection>
            <p className="section-label mb-4">О компании</p>
            <h2 className="heading-display text-3xl text-text-primary md:text-4xl lg:text-5xl">
              Создаём резиденции, которые становятся частью ландшафта
            </h2>
            <div className="gold-line my-8" />
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              {company.description}
            </p>
            <div className="mt-6 space-y-4">
              {company.aboutText.map((paragraph) => (
                <p key={paragraph.slice(0, 30)} className="text-sm leading-relaxed text-text-secondary md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={aboutImage}
                alt="Современный загородный дом NordHaus"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-accent/20" />
              <div className="absolute -bottom-4 -right-4 h-full w-full border border-accent/10 -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
