import type { CategoryInfo, MenuItem } from '../types'

export const categories: CategoryInfo[] = [
  {
    id: 'burgers-classiques',
    label: 'Burgers Classiques',
    icon: '🍔',
    description: 'Nos incontournables, revisités avec des produits frais',
  },
  {
    id: 'burgers-speciaux',
    label: 'Burgers Spéciaux',
    icon: '⭐',
    description: 'Créations exclusives aux saveurs de La Réunion',
  },
  {
    id: 'accompagnements',
    label: 'Accompagnements',
    icon: '🍟',
    description: 'Frites, salades et garnitures pour compléter votre repas',
  },
  {
    id: 'boissons',
    label: 'Boissons',
    icon: '🥤',
    description: 'Rafraîchissements et boissons chaudes',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    icon: '🍦',
    description: 'Pour finir sur une note sucrée',
  },
]

export const menuItems: MenuItem[] = [
  // Burgers Classiques
  {
    id: 'bc-1',
    name: 'Le CAS\'O Classic',
    description: 'Steak haché 180g, cheddar fondu, salade, tomate, oignon, sauce maison',
    price: 9.5,
    category: 'burgers-classiques',
    badge: 'bestseller',
  },
  {
    id: 'bc-2',
    name: 'Le Cheese',
    description: 'Double steak 160g, double cheddar, cornichons, moutarde, ketchup',
    price: 10.5,
    category: 'burgers-classiques',
  },
  {
    id: 'bc-3',
    name: 'Le Chicken',
    description: 'Escalope de poulet croustillante, coleslaw maison, sauce honey mustard',
    price: 9.0,
    category: 'burgers-classiques',
  },
  {
    id: 'bc-4',
    name: 'Le Végétal',
    description: 'Galette de légumes locaux, avocat, roquette, sauce yaourt citron',
    price: 8.5,
    category: 'burgers-classiques',
    badge: 'vegan',
  },
  {
    id: 'bc-5',
    name: 'Le BBQ',
    description: 'Steak haché 180g, bacon fumé, oignon caramélisé, sauce BBQ maison',
    price: 11.0,
    category: 'burgers-classiques',
  },

  // Burgers Spéciaux
  {
    id: 'bs-1',
    name: 'Le Réunionnais',
    description: 'Steak 200g, rougail mangue, piment cabri, fromage de chèvre local, roquette',
    price: 13.5,
    category: 'burgers-speciaux',
    badge: 'bestseller',
  },
  {
    id: 'bs-2',
    name: 'Le Créole Fire',
    description: 'Double steak 180g, sauce piment antillais, fromage à raclette, oignons frits',
    price: 14.0,
    category: 'burgers-speciaux',
    badge: 'spicy',
  },
  {
    id: 'bs-3',
    name: 'Le Bourbon',
    description: 'Steak 200g, sauce vanille Bourbon, foie gras de canard, confit d\'oignons',
    price: 16.5,
    category: 'burgers-speciaux',
    badge: 'new',
  },
  {
    id: 'bs-4',
    name: 'Le Surf & Turf',
    description: 'Steak 150g + gambas flambées au rhum, avocat, mayo wasabi, pickles',
    price: 15.0,
    category: 'burgers-speciaux',
  },
  {
    id: 'bs-5',
    name: 'Le Massalé',
    description: 'Poulet mariné massalé, chutney tamarin, salade de chou carottes, menthe fraîche',
    price: 12.5,
    category: 'burgers-speciaux',
    badge: 'spicy',
  },
  {
    id: 'bs-6',
    name: 'Le Black Burguer',
    description: 'Pain charbon végétal, double steak wagyu, truffe, brie fondant, jus de veau',
    price: 18.0,
    category: 'burgers-speciaux',
    badge: 'new',
  },

  // Accompagnements
  {
    id: 'ac-1',
    name: 'Frites Maison',
    description: 'Pommes de terre fraîches, assaisonnées et frites à la demande',
    price: 3.5,
    category: 'accompagnements',
    badge: 'bestseller',
  },
  {
    id: 'ac-2',
    name: 'Sweet Frites',
    description: 'Frites de patate douce de La Réunion, sauce sésame miel',
    price: 4.0,
    category: 'accompagnements',
  },
  {
    id: 'ac-3',
    name: 'Onion Rings',
    description: 'Rondelles d\'oignons croustillantes, sauce ranch',
    price: 3.5,
    category: 'accompagnements',
  },
  {
    id: 'ac-4',
    name: 'Salade Créole',
    description: 'Roquette, mangue, avocat, tomates cerises, vinaigrette gingembre-citron',
    price: 4.5,
    category: 'accompagnements',
    badge: 'vegan',
  },
  {
    id: 'ac-5',
    name: 'Cheese Sauce',
    description: 'Sauce cheddar maison pour tremper ou napper',
    price: 1.5,
    category: 'accompagnements',
  },
  {
    id: 'ac-6',
    name: 'Nuggets Poulet x6',
    description: 'Nuggets de poulet fermier, panure croustillante, sauce au choix',
    price: 5.5,
    category: 'accompagnements',
  },

  // Boissons
  {
    id: 'bo-1',
    name: 'Sodas (33cl)',
    description: 'Coca-Cola, Fanta Orange, Sprite, Coca Zero – au choix',
    price: 2.5,
    category: 'boissons',
  },
  {
    id: 'bo-2',
    name: 'Jus de Fruits Frais',
    description: 'Maracuja, mangue, ananas, goyave – pressés du jour',
    price: 3.5,
    category: 'boissons',
    badge: 'bestseller',
  },
  {
    id: 'bo-3',
    name: 'Limonade Créole',
    description: 'Citron de Cilaos, sucre de canne, menthe, eau pétillante',
    price: 3.0,
    category: 'boissons',
    badge: 'new',
  },
  {
    id: 'bo-4',
    name: 'Milkshake',
    description: 'Vanille Bourbon, chocolat ou fraise – onctueux et généreux (50cl)',
    price: 5.0,
    category: 'boissons',
  },
  {
    id: 'bo-5',
    name: 'Eau Minérale (50cl)',
    description: 'Eau plate ou gazeuse',
    price: 1.5,
    category: 'boissons',
  },
  {
    id: 'bo-6',
    name: 'Café / Thé',
    description: 'Café local ou thé de Cilaos',
    price: 2.0,
    category: 'boissons',
  },

  // Desserts
  {
    id: 'de-1',
    name: 'Brownie Maison',
    description: 'Brownie chocolat fondant, boule de glace vanille Bourbon, caramel beurre salé',
    price: 5.5,
    category: 'desserts',
    badge: 'bestseller',
  },
  {
    id: 'de-2',
    name: 'Cheese Cake Maracuja',
    description: 'Base biscuitée, crème fromage blanc, coulis maracuja de La Réunion',
    price: 5.0,
    category: 'desserts',
  },
  {
    id: 'de-3',
    name: 'Crème Brûlée Vanille',
    description: 'Vanille Bourbon de Réunion, caramel croustillant',
    price: 4.5,
    category: 'desserts',
    badge: 'new',
  },
  {
    id: 'de-4',
    name: 'Cookie Géant',
    description: 'Cookie chaud chocolat et noix de macadamia, servi tiède',
    price: 3.5,
    category: 'desserts',
  },
]

export const menuFormulas = [
  {
    id: 'f-1',
    name: 'Formule Solo',
    description: '1 burger + 1 accompagnement',
    price: 12.5,
    savings: '1€ économisé',
  },
  {
    id: 'f-2',
    name: 'Formule Complète',
    description: '1 burger + 1 accompagnement + 1 boisson',
    price: 14.5,
    savings: '1.5€ économisé',
  },
  {
    id: 'f-3',
    name: 'Formule Gourmande',
    description: '1 burger spécial + 1 accompagnement + 1 boisson + 1 dessert',
    price: 19.5,
    savings: '3€ économisé',
  },
]
