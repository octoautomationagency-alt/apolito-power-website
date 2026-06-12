import { Instagram, MapPin, Phone, Mail } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks, site } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Fitness, performance e benessere ad Agropoli. Una palestra aperta
              24 ore su 24 con servizi wellness dedicati a te.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="size-5" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex size-10 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="size-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-widest text-gold">
              Naviga
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-widest text-gold">
              Contatti
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {site.addressShort}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href={`tel:${site.leonardo.tel}`} className="hover:text-gold">
                  {site.leonardo.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-gold" />
                <a href={`tel:${site.anita.tel}`} className="hover:text-gold">
                  {site.anita.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-gold" />
                <a href={`mailto:${site.email}`} className="hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-widest text-gold">
              Orari
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Aperta 24 ore su 24
              <br />7 giorni su 7
            </p>
            <p className="mt-4 font-heading text-xs uppercase tracking-widest text-foreground">
              Sempre al tuo fianco.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tutti i diritti riservati.
          </p>
          <p className="font-heading uppercase tracking-widest">
            Agropoli · Cilento
          </p>
        </div>
      </div>
    </footer>
  )
}
