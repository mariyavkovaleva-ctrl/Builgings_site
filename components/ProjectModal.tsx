"use client";

import { Project } from "@/data/projects";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-bg-primary/90 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 max-h-[90vh] w-full max-w-5xl overflow-y-auto bg-bg-secondary border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center border border-border text-text-secondary transition-colors hover:border-accent hover:text-accent"
              aria-label="Закрыть"
            >
              ✕
            </button>

            <div className="relative aspect-[16/9] w-full">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 80vw"
              />
            </div>

            <div className="p-6 md:p-10">
              <p className="section-label mb-3">{project.style}</p>
              <h3 className="heading-display text-3xl text-text-primary md:text-4xl">{project.name}</h3>
              <div className="gold-line my-6" />

              <p className="text-base leading-relaxed text-text-secondary">{project.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-muted">Площадь</p>
                  <p className="mt-1 text-lg text-text-primary">{project.area} м²</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-muted">Локация</p>
                  <p className="mt-1 text-lg text-text-primary">{project.location}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-muted">Год</p>
                  <p className="mt-1 text-lg text-text-primary">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-text-muted">Материалы</p>
                  <p className="mt-1 text-sm text-text-primary">{project.material}</p>
                </div>
              </div>

              {project.gallery.length > 1 && (
                <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {project.gallery.map((img) => (
                    <div key={img} className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img}
                        alt={`${project.name} — фото`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
