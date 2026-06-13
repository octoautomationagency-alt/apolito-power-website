import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const stats = [
  { value: '24/7', label: 'Sempre aperta' },
  { value: '8+', label: 'Servizi dedicati' },
  { value: '100%', label: 'Percorsi su misura' },
]

export function Wellness() {
  return (
    <section id="wellness" className="relative overflow-hidden py-24 md:py-32">
      <span
        aria-hidden="true"
        className="font-heading pointer-events-none absolute -bottom-6 left-0 select-none text-[18vw] font-bold uppercase leading-none tracking-tighter text-foreground/[0.03] md:text-[13vw]"
      >
        Wellness
      </span>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="font-heading mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Recupero & Benessere
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Il benessere è parte dell’allenamento
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Sauna a infrarossi, doccia emozionale e massaggi: ad Apolito Power
              il recupero è curato con la stessa attenzione della performance.
              Perché allenarsi bene significa anche rigenerarsi.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={220 + i * 80}>
                <p className="font-heading text-4xl font-bold text-gold md:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Image */}
        <Reveal className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/apolito%20iamges/saunarom1.jpg"
              alt="Area wellness e relax di Apolito Power"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
