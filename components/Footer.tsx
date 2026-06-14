import { company } from "@/data/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="container-wide section-padding !py-12 px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="heading-display text-2xl tracking-widest">{company.name}</p>
            <p className="mt-2 text-sm text-text-secondary">
              Премиальное строительство загородных резиденций
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-text-secondary md:text-right">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:text-accent transition-colors">
              {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="hover:text-accent transition-colors">
              {company.email}
            </a>
            <p>{company.address}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-text-muted">
            © {year} {company.name}. Все права защищены.
          </p>
          <div className="flex gap-6">
            {company.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
