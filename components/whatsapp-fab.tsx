'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { whatsappHref } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function WhatsappFab() {
  const [show, setShow] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const syncState = () => {
      setMenuOpen(document.body.dataset.mobileMenuOpen === 'true')
    }

    const onMenuToggle = (event: Event) => {
      const customEvent = event as CustomEvent<{ open?: boolean }>
      setMenuOpen(Boolean(customEvent.detail?.open))
    }

    syncState()
    window.addEventListener('mobile-menu-toggle', onMenuToggle as EventListener)
    return () => {
      window.removeEventListener('mobile-menu-toggle', onMenuToggle as EventListener)
    }
  }, [])

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Scrivici su WhatsApp"
      className={cn(
        'apl-fab-attention fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-4 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105',
        show && !menuOpen
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <MessageCircle className="size-6" />
      <span className="font-heading text-[11px] uppercase tracking-[0.12em] sm:text-sm sm:tracking-widest">
        Prenota la tua prova gratuita
        <br />
        Allenamento + wellness
      </span>
    </a>
  )
}
