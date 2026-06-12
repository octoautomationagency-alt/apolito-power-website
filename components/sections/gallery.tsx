import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const images = [
  { src: '/images/gallery-1.png', alt: 'Area pesi liberi della palestra' },
  { src: '/images/gallery-2.png', alt: 'Macchine isotoniche premium' },
  { src: '/images/coaching.png', alt: 'Sessione con personal trainer' },
  { src: '/images/gallery-3.png', alt: 'Corso di gruppo in sala' },
  { src: '/images/svc-spinning.png', alt: 'Sala spinning' },
  { src: '/images/gallery-4.png', alt: 'Esterno del club Apolito Power' },
]

export function Gallery() {
  return (
    <section className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="font-heading mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
                <span className="h-px w-10 bg-gold" />
                Gli spazi
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Dentro Apolito Power
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 80}
              className={i === 0 ? 'col-span-2 md:col-span-2' : ''}
            >
              <div
                className={`group relative overflow-hidden rounded-sm ${
                  i === 0 ? 'aspect-[2/1]' : 'aspect-square'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 transition-colors group-hover:bg-background/20" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
