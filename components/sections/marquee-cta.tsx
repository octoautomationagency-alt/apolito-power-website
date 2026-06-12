import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { whatsappHref } from '@/lib/site-data'

const words = [
  'Diventa Socio',
  'Allenati 24/7',
  'Performance',
  'Wellness',
  'Apolito Power',
]

export function MarqueeCta() {
  return (
    <section className="relative overflow-hidden border-y border-border">
      <Image
        src="/images/cta.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-background/85" />

      <div className="relative z-10 py-16 md:py-20">
        {/* Marquee */}
        <div className="flex overflow-hidden" aria-hidden="true">
          <div className="apl-marquee flex shrink-0 items-center gap-8 whitespace-nowrap pr-8">
            {[...words, ...words].map((w, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="font-heading text-4xl font-bold uppercase tracking-tight text-foreground/90 md:text-6xl">
                  {w}
                </span>
                <span className="size-2.5 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 px-5 text-center">
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Unisciti ad Apolito Power e trasforma il tuo modo di allenarti.
            Il primo passo è una semplice chiacchierata.
          </p>
          <a
            href={whatsappHref('Ciao! Vorrei diventare socio di Apolito Power.')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-heading group inline-flex items-center gap-2 rounded-sm bg-gold px-9 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Diventa socio
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
