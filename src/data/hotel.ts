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
  { icon: 'briefcase', name: 'Salles de réunion', detail: 'Séminaires, formations et réunions d’affaires.' },
  { icon: 'concierge-bell', name: 'Room service', detail: 'Repas et boissons servis dans votre chambre.' },
  { icon: 'wifi', name: 'Wi-Fi haut débit', detail: 'Inclus dans toutes les chambres et les espaces communs.' },
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
];


// Horaires — DONNÉES FICTIVES, à remplacer par les vrais horaires
export const hours = {
  restaurant: 'Tous les jours, de 6 h 30 à 22 h 30',
  snack: 'Tous les jours, de 11 h à 23 h',
  lounge: 'Tous les jours, de 17 h à 1 h',
};

// Carte du snack-bar et du bar lounge — DONNÉES FICTIVES (noms et prix),
// à remplacer par la carte et les tarifs validés par la direction.
export const snackMenu: MenuSection[] = [
  {
    name: 'À grignoter',
    items: [
      { name: 'Soya', detail: 'Brochettes de bœuf épicées, oignons', price: 1500 },
      { name: 'Poisson braisé', detail: 'Bâton de manioc ou plantain', price: 4500 },
      { name: 'Frites de plantain', price: 1000 },
      { name: 'Sandwich poulet', detail: 'Pain du jour, crudités', price: 2000 },
      { name: 'Burger Moolah', detail: 'Bœuf, fromage, frites', price: 3500 },
    ],
  },
];

export const drinksMenu: MenuSection[] = [
  {
    name: 'Bières',
    items: [
      { name: '33 Export', detail: '65 cl', price: 800 },
      { name: 'Castel Beer', detail: '65 cl', price: 800 },
      { name: 'Mützig', detail: '65 cl', price: 900 },
      { name: 'Guinness', detail: '65 cl', price: 1200 },
    ],
  },
  {
    name: 'Sans alcool',
    items: [
      { name: 'Jus de foléré', detail: 'Maison, servi frais', price: 1000 },
      { name: 'Jus de gingembre', detail: 'Maison', price: 1000 },
      { name: 'Jus d’ananas frais', price: 1200 },
      { name: 'Sodas', detail: 'Top, Djino, Coca-Cola', price: 600 },
      { name: 'Eau minérale', detail: '1,5 l', price: 700 },
    ],
  },
  {
    name: 'Cocktails',
    items: [
      { name: 'Planteur', detail: 'Rhum, jus de fruits, cannelle', price: 3500 },
      { name: 'Mojito', detail: 'Rhum, menthe, citron vert', price: 3500 },
      { name: 'Moolah Sunset', detail: 'Sans alcool : foléré, ananas, gingembre', price: 2500 },
    ],
  },
  {
    name: 'Vins et spiritueux',
    items: [
      { name: 'Vin rouge ou blanc', detail: 'Au verre', price: 2500 },
      { name: 'Whisky', detail: '4 cl', price: 3000 },
      { name: 'Champagne', detail: 'La bouteille, sur commande', price: 45000 },
    ],
  },
  {
    name: 'Boissons chaudes',
    items: [
      { name: 'Café de l’Ouest', detail: 'Arabica de la région', price: 800 },
      { name: 'Thé ou infusion', price: 600 },
      { name: 'Chocolat chaud', price: 1000 },
    ],
  },
];