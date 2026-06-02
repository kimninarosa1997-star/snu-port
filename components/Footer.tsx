import { portfolio } from "@/lib/portfolio-data";

export function Footer() {
  const email = portfolio.contact.email;

  return (
    <footer id="contact" className="section-py border-t border-border bg-background">
      <div className="mx-auto max-w-content px-6 md:px-10">
        <a
          href={`mailto:${email}`}
          className="block whitespace-nowrap text-[clamp(0.875rem,3.2vw,2.25rem)] font-black uppercase leading-none tracking-tight transition-opacity hover:opacity-80"
        >
          {email}
        </a>

        <div className="mt-12 grid gap-6 text-sm text-muted sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-label text-faint">Phone</p>
            <a href={`tel:${portfolio.contact.phone}`} className="mt-1 block hover:text-foreground">
              {portfolio.contact.phone}
            </a>
          </div>
          <div>
            <p className="text-label text-faint">Website</p>
            <p className="mt-1">{portfolio.contact.website}</p>
          </div>
          <div>
            <p className="text-label text-faint">Location</p>
            <p className="mt-1">{portfolio.contact.location}</p>
          </div>
          <div>
            <p className="text-label text-faint">Name</p>
            <p className="mt-1 text-foreground">{portfolio.name}</p>
          </div>
        </div>

        <p className="mt-16 text-label text-faint">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
