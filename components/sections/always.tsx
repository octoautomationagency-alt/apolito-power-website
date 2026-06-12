import Image from 'next/image'
import { Clock, Zap, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { whatsappHref } from '@/lib/site-data'

const points = [
  { icon: Zap, text: 'Allenati prima del lavoro, a tarda notte o nel weekend.' },
  { icon: ShieldCheck, text: 'Accesso sicuro e riservato ai soci, in ogni momento.' },
]

export function Always() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative grid lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[60vh] lg:min-h-[80vh]">
          <Image
            src="/images/section-247.png"
            alt="Allenamento notturno nella palestra aperta 24 ore su 24"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent lg:bg-gradient-to-r" />
        </div>

        {/* Text side */}
        <div className="flex items-center bg-card">
          <div className="px-5 py-16 md:px-12 lg:px-16 lg:py-24">
            <Reveal>
              <p className="font-heading mb-6 inline-flex items-center gap-3 rounded-full border border-gold/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gold">
                <Clock className="size-4" />
                24 / 7
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                La palestra che non chiude mai
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
                Apolito Power è aperta 24 ore su 24, 7 giorni su 7. Il tuo
                allenamento si adatta alla tua vita, non il contrario. Nessun
                orario rigido: solo la libertà di dare il massimo quando vuoi tu.
              </p>
            </Reveal>

            <div className="mt-9 flex flex-col gap-4">
              {points.map((p, i) => {
                const Icon = p.icon
                return (
                  <Reveal
                    key={p.text}
                    delay={220 + i * 80}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-sm bg-gold/10 text-gold">
                      <Icon className="size-5" />
                    </span>
                    <p className="text-sm leading-relaxed text-foreground/90">{p.text}</p>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={400}>
              <a
                href={whatsappHref('Ciao! Vorrei informazioni sull’accesso 24/7 di Apolito Power.')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading mt-10 inline-flex rounded-sm bg-gold px-8 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Richiedi informazioni
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
