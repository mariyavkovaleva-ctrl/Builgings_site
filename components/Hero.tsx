"use client";

import { company } from "@/data/company";
import { heroImage } from "@/data/projects";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Премиальная загородная резиденция в лесу"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-bg-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 to-transparent" />
      </div>

      <div className="relative z-10 container-wide w-full px-6 pb-20 pt-32 md:px-8 md:pb-28 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="section-label mb-6">Премиальное строительство</p>
          <h1 className="heading-display text-4xl text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            {company.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            {company.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#portfolio" className="btn-primary">
              Смотреть проекты
            </a>
            <a href="#contact" className="btn-ghost">
              Обсудить проект
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 right-6 hidden md:block md:right-8"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-text-muted [writing-mode:vertical-lr]">
              Scroll
            </span>
            <div className="h-16 w-px bg-gradient-to-b from-accent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
