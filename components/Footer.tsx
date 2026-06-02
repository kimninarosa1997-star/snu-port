import { portfolio } from "@/lib/portfolio-data";

export function Footer() {
  const email = portfolio.contact.email;

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-neutral-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <a
          href={`mailto:${email}`}
          className="block break-all text-[clamp(1.75rem,8vw,5.5rem)] font-black uppercase leading-none tracking-tighter transition-opacity hover:opacity-80"
        >
          {email}
        </a>

        <div className="mt-12 grid gap-6 text-sm text-neutral-400 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-600">Phone</p>
            <a href={`tel:${portfolio.contact.phone}`} className="mt-1 block hover:text-white">
              {portfolio.contact.phone}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-600">Website</p>
            <p className="mt-1">{portfolio.contact.website}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-600">Location</p>
            <p className="mt-1">{portfolio.contact.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-600">Name</p>
            <p className="mt-1 text-white">{portfolio.name}</p>
          </div>
        </div>

        <p className="mt-16 text-xs text-neutral-600">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
