import { Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappHref } from '@/lib/site-data'
import { cn } from '@/lib/utils'

type Plan = {
  name: string
  tagline: string
  features: string[]
  featured?: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Fitness',
    tagline: 'Per chi vuole allenarsi in libertà',
    features: [
      'Accesso 24/7 alla sala pesi',
      'Area cardio e funzionale',
      'Spogliatoi e docce',
      'Scheda di allenamento iniziale',
    ],
  },
  {
    name: 'Performance',
    tagline: 'Allenamento completo + corsi',
    features: [
      'Tutto il piano Fitness',
      'Corsi di spinning e yoga',
      'Check-up con personal trainer',
      'Programmazione personalizzata',
    ],
    featured: true,
    badge: 'Più scelto',
  },
  {
    name: 'Wellness Total',
    tagline: 'Allenamento e recupero senza limiti',
    features: [
      'Tutto il piano Performance',
      'Sauna a infrarossi e doccia emozionale',
      'Massaggi e trattamenti dedicati',
      'Consulenza medica inclusa',
    ],
  },
]

export function Memberships() {
  return (
    <section id="abbonamenti" className="border-t border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="font-heading mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Abbonamenti
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Scegli il percorso giusto per te
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Contattaci per scoprire le tariffe aggiornate e le promozioni del
              mese. Costruiamo insieme l’abbonamento più adatto ai tuoi obiettivi.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100} className="h-full">
              <div
                className={cn(
                  'flex h-full flex-col rounded-md border p-8 transition-colors',
                  plan.featured
                    ? 'border-gold bg-background shadow-[0_0_40px_-12px_var(--gold)]'
                    : 'border-border bg-background/40 hover:border-gold/50',
                )}
              >
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-heading text-2xl uppercase tracking-wide text-foreground">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="font-heading rounded-full bg-gold px-3 py-1 text-xs uppercase tracking-widest text-primary-foreground">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p className="mb-7 text-sm leading-relaxed text-muted-foreground">
                  {plan.tagline}
                </p>

                <ul className="mb-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappHref(
                    `Ciao! Sono interessato/a all’abbonamento ${plan.name} di Apolito Power.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'font-heading mt-auto inline-flex items-center justify-center rounded-sm px-6 py-4 text-sm uppercase tracking-widest transition-transform hover:scale-[1.03]',
                    plan.featured
                      ? 'bg-gold text-primary-foreground'
                      : 'border border-border text-foreground hover:border-gold hover:text-gold',
                  )}
                >
                  Richiedi tariffe
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
