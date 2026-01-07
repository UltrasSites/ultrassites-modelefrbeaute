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
    siteTitle: "SIGNATURE",
    ctaButton: "Démarrer l'expérience",

    nav: {
      home: "Accueil",
      about: "L'Artisan",
      services: "Savoir-Faire",
      contact: "Me Parler",
      legal: "Mentions Légales & CGV",
      privacy: "Politique de Confidentialité",
    },

    heroTitle: "L'élégance brute.",
    heroSub: "PACK SIGNATURE",
    heroDesc:
      "Le web est saturé de bruit. Je vous propose le silence et l'impact. En tant que créateur indépendant, je façonne des sites uniques qui allient la beauté de la nature à la puissance du code.",

    aboutPageTitle: "Plus qu'un développeur, un architecte.",
    aboutPageText:
      "Mon approche est celle d'un artisan d'art. Je ne pose pas des briques préfabriquées (WordPress). Je sculpte votre interface pixel par pixel. Mon objectif ? Que votre site ne ressemble à aucun autre et qu'il traduise parfaitement l'âme de votre projet.",

    servicesSection: "L'Excellence Technique",
    servicesSubtitle: "Une fusion entre esthétique naturelle et performance brute.",
    services: [
      {
        title: "Direction Artistique",
        desc: "Choix de typographies éditoriales et d'images immersives pour une identité forte.",
      },
      {
        title: "Expérience Sensorielle",
        desc: "Animations fluides au scroll et micro-interactions pour captiver le visiteur.",
      },
      {
        title: "Architecture Green",
        desc: "Un code optimisé qui consomme moins d'énergie et charge instantanément.",
      },
      {
        title: "Référencement Organique",
        desc: "Structure sémantique parfaite pour une croissance naturelle sur Google.",
      },
      {
        title: "Intégration Sociale",
        desc: "Connexion esthétique avec vos réseaux pour un écosystème cohérent.",
      },
      {
        title: "Sécurité Absolue",
        desc: "Protection maximale de vos données et de celles de vos clients.",
      },
    ],

    contactTitle: "Créons quelque chose de beau",
    contactText:
      "Vous cherchez un partenaire qui a le souci du détail ? Je sélectionne mes projets pour garantir une qualité irréprochable. Parlons-en.",
    contactInfo: "Réponse personnelle sous 24h.",
    followMe: "Suivre mon travail",
    locationTitle: "Atelier / Localisation",

    footerText: "© 2026 — Fait main par [Votre Nom].",
  },

  en: {
    siteTitle: "SIGNATURE",
    ctaButton: "Start Experience",

    nav: {
      home: "Home",
      about: "The Craftsman",
      services: "Craftsmanship",
      contact: "Let's Talk",
      legal: "Terms & Conditions",
      privacy: "Privacy Policy",
    },

    heroTitle: "Raw Elegance.",
    heroSub: "SIGNATURE PACK",
    heroDesc:
      "The web is full of noise. I offer you silence and impact. As an independent creator, I craft unique sites that combine the beauty of nature with the power of code.",

    aboutPageTitle: "More than a developer, an architect.",
    aboutPageText:
      "My approach is that of a fine craftsman. I don't lay prefabricated bricks (WordPress). I sculpt your interface pixel by pixel. My goal? That your site looks like no other and perfectly translates the soul of your project.",

    servicesSection: "Technical Excellence",
    servicesSubtitle: "A fusion of natural aesthetics and raw performance.",
    services: [
      {
        title: "Art Direction",
        desc: "Choice of editorial typography and immersive images for a strong identity.",
      },
      {
        title: "Sensory Experience",
        desc: "Fluid scroll animations and micro-interactions to captivate the visitor.",
      },
      {
        title: "Green Architecture",
        desc: "Optimized code that consumes less energy and loads instantly.",
      },
      {
        title: "Organic SEO",
        desc: "Perfect semantic structure for natural growth on Google.",
      },
      {
        title: "Social Integration",
        desc: "Aesthetic connection with your networks for a consistent ecosystem.",
      },
      {
        title: "Absolute Security",
        desc: "Maximum protection of your data and that of your clients.",
      },
    ],

    contactTitle: "Let's create beauty",
    contactText:
      "Looking for a partner with an eye for detail? I select my projects to ensure impeccable quality. Let's talk.",
    contactInfo: "Personal response within 24h.",
    followMe: "Follow my work",
    locationTitle: "Studio / Location",

    footerText: "© 2026 — Handcrafted by [Your Name].",
  },
};