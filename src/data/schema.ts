// Données structurées (schema.org) partagées entre les pages restaurant et bar.
import { hotel, type MenuSection } from './hotel';

export function menuSchema(sections: MenuSection[], menuName: string) {
  return {
    '@type': 'Menu',
    name: menuName,
    hasMenuSection: sections.map((s) => ({
      '@type': 'MenuSection',
      name: s.name,
      hasMenuItem: s.items.map((i) => ({
        '@type': 'MenuItem',
        name: i.name,
        ...(i.detail && { description: i.detail }),
        ...(i.price && { offers: { '@type': 'Offer', price: i.price, priceCurrency: 'XAF' } }),
      })),
    })),
  };
}

export function placeSchema(site: URL | undefined, type: 'Restaurant' | 'BarOrPub', name: string, extra: Record<string, unknown>) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    containedInPlace: { '@id': new URL('/#hotel', site).href },
    address: {
      '@type': 'PostalAddress',
      addressLocality: hotel.address.locality,
      addressRegion: hotel.address.region,
      addressCountry: hotel.address.country,
    },
    telephone: hotel.phone,
    acceptsReservations: true,
    ...extra,
  };
}