import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type Service = {
  title: string
  text: string
  image: string
  span: 'wide' | 'tall' | 'normal'
}

const services: Service[] = [
  {
    title: 'Sala Pesi',
    text: 'Spazi e attrezzature dedicati allo sviluppo della forza, della resistenza e della forma fisica.',
    image: '/apolito%20iamges/trainingroom.jpg',
    span: 'wide',
  },
  {
    title: 'Corso Spinning',
    text: 'Allenamenti energici e coinvolgenti per migliorare resistenza cardiovascolare e performance.',
    image: '/apolito%20iamges/cardioroom1.jpg',
    span: 'normal',
  },
  {
    title: 'Il Tai Chi',
    text: 'Movimento, equilibrio, respirazione e benessere per corpo e mente.',
    image: '/apolito%20iamges/taichi1.jpg',
    span: 'normal',
  },
  {
    title: 'Personal Trainer',
    text: 'Percorsi personalizzati e supporto professionale per raggiungere risultati concreti.',
    image: '/apolito%20iamges/personal-trainer-apolito.jpg',
    span: 'tall',
  },
  {
    title: 'Sauna',
    text: 'Uno spazio dedicato al relax, al recupero e al benessere dopo l’allenamento.',
    image: '/apolito%20iamges/saunarom.jpg',
    span: 'normal',
  },
  {
    title: 'Doccia Emozionale',
    text: 'Un’esperienza multisensoriale pensata per completare il tuo momento di recupero.',
    image: '/apolito%20iamges/shower.jpg',
    span: 'normal',
  },
  {
    title: 'Massaggi e Benessere',
    text: 'Trattamenti professionali dedicati al rilassamento, al recupero e alla cura del corpo.',
    image: '/apolito%20iamges/massagiebenessere.jpg',
    span: 'normal',
  },
  {
    title: 'Consulenze Mediche',
    text: 'Supporto professionale per affrontare il percorso fitness con maggiore consapevolezza.',
    image: '/apolito%20iamges/medicaladivceapolito.jpg',
    span: 'wide',
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <a
      href="#contatti"
      className="group relative block h-full overflow-hidden rounded-sm"
    >
      <div
        className={cn(
          'relative w-full',
          service.span === 'tall' ? 'aspect-[4/5] sm:h-full' : 'aspect-[4/3]',
        )}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-2xl uppercase tracking-wide text-foreground">
            {service.title}
          </h3>
          <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          {service.text}
        </p>
        <span className="font-heading mt-1 text-xs uppercase tracking-widest text-gold">
          Scopri di più
        </span>
      </div>
    </a>
  )
}

export function Services() {
  return (
    <section id="servizi" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 max-w-3xl">
          <Reveal>
            <p className="font-heading mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Servizi
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-heading text-balance text-4xl font-bold uppercase leading-[0.98] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Tutto ciò che ti serve per stare bene
            </h2>
          </Reveal>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={(i % 3) * 80}
              className={cn(
                'h-full',
                service.span === 'wide' && 'sm:col-span-2',
                service.span === 'tall' && 'sm:row-span-2',
              )}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
