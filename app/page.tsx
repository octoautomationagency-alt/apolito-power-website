import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFab } from '@/components/whatsapp-fab'
import { Hero } from '@/components/sections/hero'
import { FeatureStrip } from '@/components/sections/feature-strip'
import { Intro } from '@/components/sections/intro'
import { Services } from '@/components/sections/services'
import { Always } from '@/components/sections/always'
import { Wellness } from '@/components/sections/wellness'
import { Gallery } from '@/components/sections/gallery'
import { Memberships } from '@/components/sections/memberships'
import { Testimonials } from '@/components/sections/testimonials'
import { MarqueeCta } from '@/components/sections/marquee-cta'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeatureStrip />
        <Intro />
        <Services />
        <Always />
        <Wellness />
        <Gallery />
        <Memberships />
        <Testimonials />
        <MarqueeCta />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFab />
    </>
  )
}
