'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navLinks, whatsappHref } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    document.documentElement.style.overflow = open ? 'hidden' : ''
    document.body.dataset.mobileMenuOpen = open ? 'true' : 'false'
    window.dispatchEvent(new CustomEvent('mobile-menu-toggle', { detail: { open } }))

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
      delete document.body.dataset.mobileMenuOpen
      window.dispatchEvent(new CustomEvent('mobile-menu-toggle', { detail: { open: false } }))
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" aria-label="Apolito Power — Home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigazione principale">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm uppercase tracking-widest text-foreground/80 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#abbonamenti"
            className="font-heading hidden rounded-sm bg-gold px-6 py-3 text-sm uppercase tracking-widest text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-block"
          >
            Iscriviti Ora
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Apri menu"
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          'fixed inset-0 z-50 h-[100dvh] overflow-y-auto bg-background transition-opacity duration-300 lg:hidden',
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
      >
        <div className="flex min-h-full flex-col">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/60 bg-background px-5 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Chiudi menu"
              className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <X className="size-6" />
            </button>
          </div>

          <nav
            className="flex flex-col px-5 pt-4"
            aria-label="Navigazione mobile"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-start gap-4 border-b border-border/40 py-5 text-foreground transition-colors hover:text-gold"
              >
                <span className="font-heading shrink-0 pt-1 text-sm uppercase tracking-[0.3em] text-gold/70">
                  0{i + 1}
                </span>
                <span className="font-heading min-w-0 text-2xl leading-tight uppercase tracking-wide sm:text-3xl">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-6 flex flex-col gap-4 px-5 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
            <a
              href="#abbonamenti"
              onClick={() => setOpen(false)}
              className="font-heading rounded-sm bg-gold px-6 py-4 text-center text-base uppercase tracking-widest text-primary-foreground"
            >
              Iscriviti Ora
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="font-heading inline-flex items-center justify-center gap-2 rounded-sm border border-border px-6 py-4 text-center text-base uppercase tracking-widest text-foreground"
            >
              <MessageCircle className="size-5" />
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
