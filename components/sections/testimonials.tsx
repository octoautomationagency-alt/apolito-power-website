import { Star, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const testimonials = [
  {
    name: 'Marco D.',
    role: 'Socio dal 2022',
    text: 'Poter entrare a qualsiasi ora ha cambiato il mio modo di allenarmi. Ambiente curato e personale sempre disponibile.',
  },
  {
    name: 'Giulia R.',
    role: 'Corsi & Wellness',
    text: 'I corsi di yoga e la sauna a infrarossi sono il mio momento preferito della settimana. Mi sento seguita e a casa.',
  },
  {
    name: 'Antonio P.',
    role: 'Percorso con PT',
    text: 'Con il personal trainer ho finalmente raggiunto i miei obiettivi. Professionalità e attenzione su ogni dettaglio.',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="font-heading mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Dicono di noi
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Storie di chi si allena con noi
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure className="flex h-full flex-col rounded-md border border-border bg-card p-8">
                <Quote className="size-8 text-gold/50" aria-hidden="true" />
                <div className="mt-4 flex gap-1" aria-label="Cinque stelle su cinque">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-pretty leading-relaxed text-foreground/90">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="font-heading text-lg uppercase tracking-wide text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-gold">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
