import Image from 'next/image'
import { MessageCircle, ChevronDown, Clock } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappHref } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <Image
        src="/apolito%20iamges/cardioroom3.jpg"
        alt="Atleta che si allena nella palestra Apolito Power"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-32 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-heading mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Fitness • Performance • Wellness
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-heading text-balance text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              Allenati senza limiti.
              <span className="block gold-gradient-text">Vivi il tuo benessere.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Una palestra aperta 24 ore su 24, servizi wellness e professionisti
              dedicati ai tuoi obiettivi. Tutto in un unico club ad Agropoli.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#palestra"
                className="font-heading inline-flex items-center justify-center rounded-sm bg-gold px-8 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Scopri la palestra
              </a>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background/40 px-8 py-4 text-sm uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="size-5" />
                Scrivici su WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-background/40 px-5 py-2.5 backdrop-blur-sm">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-gold" />
              </span>
              <Clock className="size-4 text-gold" aria-hidden="true" />
              <span className="font-heading text-xs uppercase tracking-[0.25em] text-foreground">
                Aperta 24 ore su 24 • 7 giorni su 7
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <a
        href="#palestra"
        aria-label="Scorri verso il basso"
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-foreground/60 transition-colors hover:text-gold"
      >
        <ChevronDown className="size-7 animate-bounce" />
      </a>
    </section>
  )
}
