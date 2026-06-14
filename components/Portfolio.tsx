"use client";

import AnimatedSection from "@/components/AnimatedSection";
import ProjectModal from "@/components/ProjectModal";
import { Project, projects } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-bg-primary">
      <div className="container-wide px-6 md:px-8">
        <AnimatedSection className="mb-16 max-w-2xl">
          <p className="section-label mb-4">Портфолио</p>
          <h2 className="heading-display text-3xl text-text-primary md:text-4xl lg:text-5xl">
            Реализованные резиденции
          </h2>
          <p className="mt-4 text-base text-text-secondary md:text-lg">
            Каждый проект — уникальная история. Мы строим дома, которые гармонично вписываются в
            природный ландшафт и отражают характер их владельцев.
          </p>
        </AnimatedSection>

        <div className="grid auto-rows-[300px] gap-4 md:grid-cols-2 md:auto-rows-[320px] md:gap-6">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              delay={(index % 2) * 0.15}
              className={`h-full ${project.tall ? "md:row-span-2" : ""}`}
            >
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="group relative h-full min-h-[300px] w-full overflow-hidden text-left"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-accent">{project.style}</p>
                  <h3 className="heading-display mt-2 text-2xl text-text-primary md:text-3xl">
                    {project.name}
                  </h3>
                  <div className="mt-3 flex gap-4 text-xs text-text-secondary">
                    <span>{project.area} м²</span>
                    <span>·</span>
                    <span>{project.location}</span>
                    <span>·</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="mt-4 h-px w-0 bg-accent transition-all duration-500 group-hover:w-12" />
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
