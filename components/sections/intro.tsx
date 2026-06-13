import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Intro() {
  return (
    <section id="palestra" className="relative overflow-hidden py-24 md:py-32">
      {/* Ghost background text */}
      <span
        aria-hidden="true"
        className="font-heading pointer-events-none absolute -top-4 right-0 select-none text-[18vw] font-bold uppercase leading-none tracking-tighter text-foreground/[0.03] md:text-[14vw]"
      >
        Apolito
      </span>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Image composition */}
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/apolito%20iamges/massagiebenessere.jpg"
              alt="Interno della palestra Apolito Power"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 hidden aspect-square w-2/5 overflow-hidden rounded-sm border-4 border-background shadow-2xl sm:block">
            <Image
              src="/apolito%20iamges/machine.jpg"
              alt="Attrezzatura premium della palestra"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <p className="font-heading mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Apolito Power
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Più di una semplice palestra
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Apolito Power unisce allenamento, performance, recupero e benessere
              in un ambiente moderno e professionale. Puoi allenarti quando vuoi,
              seguire corsi dedicati, affidarti ai nostri professionisti e
              completare il tuo percorso con servizi wellness pensati per il
              recupero del corpo e della mente.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a
              href="#servizi"
              className="font-heading group mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-gold"
            >
              Scopri il club
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
