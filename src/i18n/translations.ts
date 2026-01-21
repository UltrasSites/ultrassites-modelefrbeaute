export type Lang = 'fr' | 'en';

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface Translation {
  siteTitle: string;
  ctaButton: string;

  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    legal: string;
    privacy: string;
  };

  heroTitle: string;
  heroSub: string;
  heroDesc: string;

  aboutPageTitle: string;
  aboutPageText: string;

  servicesSection: string;
  servicesSubtitle: string;
  services: ServiceItem[];

  contactTitle: string;
  contactText: string;
  contactInfo: string;
  followMe: string;
  locationTitle: string;

  footerText: string;
}

export const translations: Record<Lang, Translation> = {
  fr: {
    siteTitle: "PRO+",
    ctaButton: "Démarrer le projet",

    nav: {
      home: "Accueil",
      about: "L'Artisan",
      services: "Savoir-Faire",
      contact: "Me Parler",
      legal: "Mentions Légales & CGV",
      privacy: "Politique de Confidentialité",
    },

    heroTitle: "L'élégance brute.",
    heroSub: "PACK PRO+",
    heroDesc:
      "Le web est saturé de bruit. Je vous propose le silence et l'impact. En tant que créateur indépendant, je façonne des sites uniques qui allient esthétique naturelle et performance technique.",

    aboutPageTitle: "Plus qu'un développeur, un architecte.",
    aboutPageText:
      "Mon approche est celle d'un artisan d'art. Je ne pose pas des briques préfabriquées. Je sculpte votre interface pixel par pixel. Mon objectif ? Que votre site soit unique et traduise parfaitement l'essence de votre projet.",

    servicesSection: "L'Excellence Technique",
    servicesSubtitle: "Une fusion entre esthétique naturelle et performance technique.",
    services: [
      {
        title: "Direction Artistique",
        desc: "Typographies soignées et images immersives pour une identité visuelle marquante.",
      },
      {
        title: "Expérience Sensorielle",
        desc: "Animations fluides et micro-interactions pour créer une expérience captivante.",
      },
      {
        title: "Architecture Performante",
        desc: "Code optimisé pour une consommation minimale et un chargement instantané.",
      },
      {
        title: "Référencement Organique",
        desc: "Structure sémantique optimisée pour une visibilité naturelle sur les moteurs de recherche.",
      },
      {
        title: "Intégration Sociale",
        desc: "Connexion harmonieuse avec vos réseaux pour un écosystème digital cohérent.",
      },
      {
        title: "Sécurité Renforcée",
        desc: "Protection avancée de vos données et de celles de vos utilisateurs.",
      },
    ],

    contactTitle: "Créons quelque chose de remarquable",
    contactText:
      "Vous cherchez un partenaire exigeant ? Je sélectionne mes projets pour garantir une qualité irréprochable. Discutons de votre vision.",
    contactInfo: "Réponse personnalisée sous 24h.",
    followMe: "Suivre mon travail",
    locationTitle: "Atelier / Localisation",

    footerText: "© 2026 — Fait main.",
  },

  en: {
    siteTitle: "PRO+",
    ctaButton: "Start Project",

    nav: {
      home: "Home",
      about: "The Craftsman",
      services: "Craftsmanship",
      contact: "Let's Talk",
      legal: "Terms & Conditions",
      privacy: "Privacy Policy",
    },

    heroTitle: "Raw Elegance.",
    heroSub: "PRO+ PACK",
    heroDesc:
      "The web is full of noise. I offer you silence and impact. As an independent creator, I craft unique sites that combine natural aesthetics with technical performance.",

    aboutPageTitle: "More than a developer, an architect.",
    aboutPageText:
      "My approach is that of a fine craftsman. I don't lay prefabricated bricks. I sculpt your interface pixel by pixel. My goal? That your site is unique and perfectly translates the essence of your project.",

    servicesSection: "Technical Excellence",
    servicesSubtitle: "A fusion of natural aesthetics and technical performance.",
    services: [
      {
        title: "Art Direction",
        desc: "Carefully selected typography and immersive imagery for a strong visual identity.",
      },
      {
        title: "Sensory Experience",
        desc: "Smooth animations and micro-interactions to create a captivating experience.",
      },
      {
        title: "Performance Architecture",
        desc: "Optimized code for minimal consumption and instant loading.",
      },
      {
        title: "Organic SEO",
        desc: "Semantic structure optimized for natural visibility on search engines.",
      },
      {
        title: "Social Integration",
        desc: "Harmonious connection with your networks for a coherent digital ecosystem.",
      },
      {
        title: "Enhanced Security",
        desc: "Advanced protection of your data and that of your users.",
      },
    ],

    contactTitle: "Let's create something remarkable",
    contactText:
      "Looking for a demanding partner? I select my projects to ensure impeccable quality. Let's discuss your vision.",
    contactInfo: "Personalized response within 24h.",
    followMe: "Follow my work",
    locationTitle: "Studio / Location",

    footerText: "© 2026 — Handcrafted.",
  },
};