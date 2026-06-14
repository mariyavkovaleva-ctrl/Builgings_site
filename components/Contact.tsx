"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { company } from "@/data/company";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = (form.get("name") as string)?.trim();
    const phone = (form.get("phone") as string)?.trim();
    const message = (form.get("message") as string)?.trim();

    const newErrors: Record<string, string> = {};
    if (!name || name.length < 2) newErrors.name = "Введите имя";
    if (!phone || phone.length < 10) newErrors.phone = "Введите корректный телефон";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const subject = encodeURIComponent(`Заявка с сайта NordHaus — ${name}`);
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\n\nСообщение:\n${message || "—"}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-bg-primary">
      <div className="container-wide px-6 md:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <AnimatedSection>
            <p className="section-label mb-4">Контакты</p>
            <h2 className="heading-display text-3xl text-text-primary md:text-4xl lg:text-5xl">
              Обсудим ваш проект
            </h2>
            <div className="gold-line my-8" />
            <p className="text-base leading-relaxed text-text-secondary md:text-lg">
              Оставьте заявку — мы свяжемся с вами в течение одного рабочего дня для бесплатной
              консультации и предварительной оценки проекта.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-text-muted">Телефон</p>
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-xl text-text-primary transition-colors hover:text-accent"
                >
                  {company.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-text-muted">Email</p>
                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block text-xl text-text-primary transition-colors hover:text-accent"
                >
                  {company.email}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-text-muted">Адрес</p>
                <p className="mt-1 text-base text-text-secondary">{company.address}</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center border border-border bg-bg-secondary p-10 text-center">
                <p className="heading-display text-2xl text-accent">Спасибо за заявку</p>
                <p className="mt-4 text-text-secondary">
                  Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 border border-border bg-bg-secondary p-8 md:p-10">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-text-muted">
                    Имя
                  </label>
                  <input id="name" name="name" type="text" placeholder="Ваше имя" />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-widest text-text-muted">
                    Телефон
                  </label>
                  <input id="phone" name="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-text-muted">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Расскажите о вашем участке и пожеланиях"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Отправить заявку
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
