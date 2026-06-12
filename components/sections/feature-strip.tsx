import { Clock, Dumbbell, Flame, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const features = [
  {
    icon: Clock,
    title: 'Accesso 24/7',
    text: 'Entra quando vuoi, di giorno o di notte, ogni giorno della settimana.',
  },
  {
    icon: Dumbbell,
    title: 'Sala Pesi',
    text: 'Attrezzature dedicate a forza, resistenza e forma fisica.',
  },
  {
    icon: Flame,
    title: 'Sauna a Infrarossi',
    text: 'Uno spazio dedicato al recupero e al benessere del corpo.',
  },
  {
    icon: UserRound,
    title: 'Personal Trainer',
    text: 'Professionisti al tuo fianco per risultati concreti.',
  },
]

export function FeatureStrip() {
  return (
    <section className="relative z-20 border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <Reveal
                key={f.title}
                delay={i * 80}
                className="flex min-w-[80%] snap-start flex-col gap-3 border-border px-6 py-9 sm:min-w-[55%] md:min-w-0 md:px-8 md:py-12 [&:not(:last-child)]:border-b md:[&:not(:last-child)]:border-b-0 md:[&:not(:last-child)]:border-r"
              >
                <Icon className="size-8 text-gold" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="font-heading text-xl uppercase tracking-wide text-foreground">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
