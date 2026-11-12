// Source unique des infos de l'hôtel : elles alimentent les pages,
// les balises SEO et les données structurées (JSON-LD) pour Google.
// Tout ce qui est marqué À CONFIRMER doit être validé par la direction
// avant la mise en ligne (charte : aucun tarif publié sans validation).

export const hotel = {
  name: 'Moolah Hotel',
  description:
    "Moolah Hotel à Batcham, Région de l'Ouest : chambres, restaurant, bar lounge et salles de fête et de réunion. Demande de réservation en ligne, réponse en moins de 4 h.",
  address: {
    street: '', // À CONFIRMER : quartier / repère (ex. « Carrefour …, face à … »)
    locality: 'Batcham',
    region: 'Ouest',
    country: 'CM',
    countryName: 'Cameroun',
  },
  geo: { lat: 5.5333, lng: 10.2333 }, // À CONFIRMER : coordonnées exactes de l'entrée
  phone: '+237600000000', // À CONFIRMER (format international, sans espaces)
  phoneDisplay: '+237 6 00 00 00 00', // À CONFIRMER
  whatsapp: '237600000000', // À CONFIRMER (chiffres seulement, pour wa.me)
  email: 'contact@moolahhotel.cm', // À CONFIRMER
  checkIn: '12:00', // À CONFIRMER
  checkOut: '12:00', // À CONFIRMER
  vat: '19,25 %',
  responseTime: '4 h',
  social: {
    facebook: '', // À CONFIRMER
    instagram: '', // À CONFIRMER
  },
};

/** Format FCFA de la charte : 25 000 FCFA (espace fine insécable). */
export const fcfa = (n: number) => `${n.toLocaleString('fr-FR').replace(/\s/g, ' ')} FCFA`;

export type Room = {
  slug: string;
  name: string;
  guests: number;
  bed: string;
  /** Prix TTC par nuit. null = « Tarif sur demande » tant que non validé. */
  price: number | null;
  summary: string;
  features: string[];
  photo?: string; // ex. '/images/chambre-familiale.jpg'
};

export const rooms: Room[] = [
  {
    slug: 'standard',
    name: 'Chambre Standard', // À CONFIRMER
    guests: 2,
    bed: 'Lit double',
    price: null,
    summary: 'Une chambre simple et soignée pour une ou deux personnes, idéale pour un séjour de travail.',
    features: ['Salle de bain privée', 'Wi-Fi haut débit', 'Télévision'],
  },
  {
    slug: 'superieure',
    name: 'Chambre Supérieure', // À CONFIRMER
    guests: 2,
    bed: 'Grand lit',
    price: null,
    summary: 'Plus d’espace, un coin bureau et un grand lit pour se reposer après la route ou une journée chargée.',
    features: ['Coin bureau', 'Wi-Fi haut débit', 'Room service'],
  },
  {
    slug: 'familiale',
    name: 'Chambre Familiale',
    guests: 4,
    bed: 'Grand lit + lits d’appoint', // À CONFIRMER
    price: 45000, // tarif constaté sur facture d'octobre 2026, À VALIDER pour publication
    summary: 'Pensée pour les familles et les invités venus pour une célébration : de la place pour tout le monde.',
    features: ['Jusqu’à 4 personnes', 'Wi-Fi haut débit', 'Room service'],
  },
  {
    slug: 'suite',
    name: 'Suite', // À CONFIRMER
    guests: 2,
    bed: 'Grand lit',
    price: null,
    summary: 'Notre chambre la plus spacieuse, souvent réservée pour les mariés et les séjours d’exception.',
    features: ['Espace salon', 'Room service', 'Accueil personnalisé'],
  },
];

export type Service = { icon: string; name: string; detail: string };

// Services listés sur les factures de l'hôtel
export const services: Service[] = [
  { icon: 'utensils', name: 'Restaurant & snack-bar', detail: 'Cuisine camerounaise et internationale, du petit-déjeuner au dîner.' },
  { icon: 'wine', name: 'Bar lounge', detail: 'Pour un verre après le travail ou une soirée entre amis.' },
  { icon: 'party-popper', name: 'Salles de fête', detail: 'Mariages, dots, anniversaires, réceptions : une salle décorée selon votre événement.' },
  { icon: 'briefcase', name: 'Salles de réunion', detail: 'Séminaires, formations et réunions d’affaires, avec pause café.' },
  { icon: 'chef-hat', name: 'Service traiteur', detail: 'Nos cuisiniers préparent vos repas d’événement, sur place ou à l’extérieur.' },
  { icon: 'concierge-bell', name: 'Room service', detail: 'Repas et boissons servis dans votre chambre.' },
  { icon: 'wifi', name: 'Wi-Fi haut débit', detail: 'Inclus dans toutes les chambres et les espaces communs.' },
  { icon: 'plane', name: 'Navette aéroport', detail: 'Sur demande, à organiser lors de votre réservation.' },
];

// La promesse client de la charte : « Réponse rapide, service sûr, séjour réussi »
export const promises: { title: string; text: string }[] = [
  { title: 'Réponse rapide', text: `Nous répondons à chaque demande en moins de ${hotel.responseTime}.` },
  { title: 'Service sûr', text: 'Vous recevez une confirmation écrite, par e-mail ou WhatsApp.' },
  { title: 'Séjour réussi', text: 'Les prestations sont conformes à ce que nous vous présentons ici.' },
];

export type MenuSection = { name: string; items: { name: string; detail?: string; price?: number }[] };

// Carte du restaurant (consultable sans téléchargement, charte §22).
// À CONFIRMER : remplacer par la vraie carte et les prix validés.
export const menu: MenuSection[] = [
  {
    name: 'Plats camerounais',
    items: [
      { name: 'Taro sauce jaune', detail: 'La spécialité de l’Ouest' },
      { name: 'Ndolè', detail: 'Aux crevettes ou à la viande, plantain mûr' },
      { name: 'Poulet DG', detail: 'Plantain, légumes sautés' },
      { name: 'Poisson braisé', detail: 'Bâton de manioc ou frites de plantain' },
    ],
  },
  {
    name: 'Cuisine internationale',
    items: [
      { name: 'Brochettes de bœuf', detail: 'Frites ou riz' },
      { name: 'Omelette garnie', detail: 'Servie toute la journée' },
      { name: 'Salade composée' },
    ],
  },
  {
    name: 'Snack-bar',
    items: [
      { name: 'Sandwichs et burgers' },
      { name: 'Soya', detail: 'Le soir au bar lounge' },
      { name: 'Jus de fruits frais' },
    ],
  },
];

export const eventTypes = ['Mariage ou dot', 'Anniversaire', 'Réception familiale', 'Réunion ou séminaire', 'Autre'];

export const faq: { q: string; a: string }[] = [
  { q: 'À quelle heure puis-je arriver et partir ?', a: `Les chambres sont disponibles à partir de ${hotel.checkIn.replace(':', ' h ')} et se libèrent avant ${hotel.checkOut.replace(':', ' h ')}. Prévenez-nous si vous arrivez tard.` },
  { q: 'Ma réservation est-elle confirmée dès l’envoi ?', a: `Non : vous envoyez une demande, nous vérifions la disponibilité et nous vous confirmons par écrit en moins de ${hotel.responseTime}.` },
  { q: 'Comment puis-je payer ?', a: 'En espèces à la réception. Les autres moyens de paiement vous sont précisés dans la confirmation.' }, // À CONFIRMER
  { q: 'Les prix incluent-ils la TVA ?', a: `Oui, tous nos prix sont indiqués TTC, TVA de ${hotel.vat} incluse.` },
  { q: 'Proposez-vous une navette depuis l’aéroport ?', a: 'Oui, sur demande. Indiquez-le dans votre demande de réservation avec l’heure de votre vol.' },
];
