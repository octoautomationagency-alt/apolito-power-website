// Centralized site data — easy to edit later with real details.

export const site = {
  name: 'Apolito Power',
  city: 'Agropoli',
  address: 'Viale Carmine Rossi, 13 — 84043 Agropoli (SA), Italia',
  addressShort: 'Viale Carmine Rossi, 13 · Agropoli (SA)',
  hours: 'Aperta 24 ore su 24, 7 giorni su 7',
  // Phone numbers
  leonardo: { name: 'Leonardo', display: '339 721 7410', tel: '+393397217410' },
  anita: { name: 'Anita', display: '338 200 9920', tel: '+393382009920' },
  email: 'info@apolitopower.it',
  // Primary WhatsApp (Leonardo)
  whatsapp: '393397217410',
  whatsappMessage:
    'Ciao Apolito Power! Vorrei ricevere maggiori informazioni.',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  mapsDirections:
    'https://www.google.com/maps/dir/?api=1&destination=Viale+Carmine+Rossi+13+84043+Agropoli+SA+Italia',
  mapEmbed:
    'https://www.google.com/maps?q=Viale+Carmine+Rossi+13,+84043+Agropoli+SA,+Italia&output=embed',
}

export function whatsappHref(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'La Palestra', href: '#palestra' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Wellness', href: '#wellness' },
  { label: 'Abbonamenti', href: '#abbonamenti' },
  { label: 'Contatti', href: '#contatti' },
]
