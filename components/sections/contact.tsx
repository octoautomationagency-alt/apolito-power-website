import { MapPin, Phone, Clock, MessageCircle, Mail, Navigation } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { site, whatsappHref } from '@/lib/site-data'

export function Contact() {
  return (
    <section id="contatti" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="font-heading mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Contatti
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Vieni a trovarci ad Agropoli
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <Reveal className="flex items-start gap-4 rounded-md border border-border bg-card p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-gold/10 text-gold">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="font-heading text-lg uppercase tracking-wide text-foreground">
                  Dove siamo
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {site.address}
                </p>
                <a
                  href={site.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold"
                >
                  <Navigation className="size-4" />
                  Indicazioni stradali
                </a>
              </div>
            </Reveal>

            <Reveal delay={80} className="flex items-start gap-4 rounded-md border border-border bg-card p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-gold/10 text-gold">
                <Clock className="size-5" />
              </span>
              <div>
                <p className="font-heading text-lg uppercase tracking-wide text-foreground">
                  Orari
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {site.hours}. Accesso riservato ai soci in ogni momento della
                  giornata.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160} className="flex items-start gap-4 rounded-md border border-border bg-card p-6">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-sm bg-gold/10 text-gold">
                <Phone className="size-5" />
              </span>
              <div className="w-full">
                <p className="font-heading text-lg uppercase tracking-wide text-foreground">
                  Telefono
                </p>
                <div className="mt-2 flex flex-col gap-2">
                  <a
                    href={`tel:${site.leonardo.tel}`}
                    className="flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    <span>{site.leonardo.name}</span>
                    <span className="font-mono">{site.leonardo.display}</span>
                  </a>
                  <a
                    href={`tel:${site.anita.tel}`}
                    className="flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    <span>{site.anita.name}</span>
                    <span className="font-mono">{site.anita.display}</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240} className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-gold px-6 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="size-5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="font-heading inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-border px-6 py-4 text-sm uppercase tracking-widest text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Mail className="size-5" />
                Scrivici
              </a>
            </Reveal>
          </div>

          {/* Map */}
          <Reveal delay={120} className="min-h-[360px] overflow-hidden rounded-md border border-border">
            <iframe
              src={site.mapEmbed}
              title="Mappa Apolito Power ad Agropoli"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full min-h-[360px] grayscale-[0.4] contrast-110"
              style={{ border: 0 }}
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
