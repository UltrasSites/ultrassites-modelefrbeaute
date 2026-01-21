export type Lang = 'fr' | 'en';

export interface ServiceItem {
  title: string;
  desc: string;
}

export interface Translation {
  siteTitle: string;
  ctaButton: string;
  heroCta: string;

  nav: {
    home: string;
    about: string;
    services: string;
    contact: string;
    legal: string;
    privacy: string;
    blog: string;
  };

  heroTitle: string;
  heroSub: string;
  heroDesc: string;
  heroCta: string;

  aboutPageTitle: string;
  aboutPageText: string;
  aboutBadge: string;
  aboutExtra: string;

  servicesSection: string;
  servicesSubtitle: string;
  services: ServiceItem[];
  metrics: { value: string; label: string }[];

  contactTitle: string;
  contactText: string;
  contactNamePlaceholder: string;
  contactEmailPlaceholder: string;
  contactMessagePlaceholder: string;
  contactSend: string;
  contactInfo: string;
  followMe: string;
  locationTitle: string;
  contactCta: string;

  footerText: string;

  blogTitle: string;
  blogLinkLabel: string;
  blogBadge: string;
  blogPosts: {
    badge: string;
    date: string;
    title: string;
    desc: string;
  }[];
}

export const translations: Record<Lang, Translation> = {
  fr: {
    siteTitle: "PRO+",
    ctaButton: "Démarrer le projet",
    heroCta: "Découvrir",

    nav: {
      home: "Accueil",
      about: "L'Artisan",
      services: "Savoir-Faire",
      contact: "Me Parler",
      legal: "Mentions Légales & CGV",
      privacy: "Politique de Confidentialité",
      blog: "Journal",
    },

    heroTitle: "L'élégance brute.",
    heroSub: "PACK PRO+",
    heroDesc:
      "Le web est saturé de bruit. Je vous propose le silence et l'impact. En tant que créateur indépendant, je façonne des sites uniques qui allient esthétique naturelle et performance technique.",

    aboutPageTitle: "Plus qu'un développeur, un architecte.",
    aboutPageText:
      "Mon approche est celle d'un artisan d'art. Je ne pose pas des briques préfabriquées. Je sculpte votre interface pixel par pixel. Mon objectif ? Que votre site soit unique et traduise parfaitement l'essence de votre projet.",
    aboutBadge: "L'Artisanat Digital",
    aboutExtra: "Pas de templates. Pas de chargements infinis. Juste du code pur taillé pour la performance. C'est ça, la promesse PRO+.",

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
    metrics: [
      { value: "100%", label: "Performance" },
      { value: "0s", label: "Attente" },
      { value: "24/7", label: "Support" },
    ],

    contactTitle: "Créons quelque chose de remarquable",
    contactText:
      "Vous cherchez un partenaire exigeant ? Je sélectionne mes projets pour garantir une qualité irréprochable. Discutons de votre vision.",
    contactNamePlaceholder: "Votre Nom",
    contactEmailPlaceholder: "Email Professionnel",
    contactMessagePlaceholder: "Parlez-moi de votre vision...",
    contactSend: "Envoyer le message",
    contactInfo: "Réponse personnalisée sous 24h.",
    followMe: "Suivre mon travail",
    locationTitle: "Atelier / Localisation",
    contactCta: "Lancer la collaboration",

    footerText: "© 2026 — Fait main.",

    blogTitle: "Le Journal.",
    blogLinkLabel: "Voir tous les articles →",
  blogBadge: "Stratégie & Contenu",
    blogPosts: [
      {
        badge: "SEO",
        date: "12 Octobre 2025",
        title: "Pourquoi le site statique domine Google cette année.",
        desc: "La vitesse n'est plus une option. Découvrez comment une architecture statique optimisée propulse votre visibilité...",
      },
      {
        badge: "Design",
        date: "28 Septembre 2025",
        title: "L'impact du \"Dark Mode\" sur la conversion client.",
        desc: "Une interface sombre n'est pas qu'esthétique, elle réduit la fatigue oculaire et augmente le temps passé...",
      },
      {
        badge: "Tech",
        date: "15 Septembre 2025",
        title: "Sécurité web : pourquoi abandonner WordPress ?",
        desc: "Les failles de sécurité des CMS coûtent cher. Le code pur offre une forteresse imprenable pour vos données.",
      },
    ],
  },

  en: {
    siteTitle: "PRO+",
    ctaButton: "Start Project",
    heroCta: "Discover",

    nav: {
      home: "Home",
      about: "The Craftsman",
      services: "Craftsmanship",
      contact: "Let's Talk",
      legal: "Terms & Conditions",
      privacy: "Privacy Policy",
      blog: "Journal",
    },

    heroTitle: "Raw Elegance.",
    heroSub: "PRO+ PACK",
    heroDesc:
      "The web is full of noise. I offer you silence and impact. As an independent creator, I craft unique sites that combine natural aesthetics with technical performance.",

    aboutPageTitle: "More than a developer, an architect.",
    aboutPageText:
      "My approach is that of a fine craftsman. I don't lay prefabricated bricks. I sculpt your interface pixel by pixel. My goal? That your site is unique and perfectly translates the essence of your project.",
    aboutBadge: "Digital Craft",
    aboutExtra: "No templates. No endless loading. Just lean code engineered for performance. That's the PRO+ promise.",

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
    metrics: [
      { value: "100%", label: "Performance" },
      { value: "0s", label: "Wait" },
      { value: "24/7", label: "Support" },
    ],

    contactTitle: "Let's create something remarkable",
    contactText:
      "Looking for a demanding partner? I select my projects to ensure impeccable quality. Let's discuss your vision.",
    contactNamePlaceholder: "Your Name",
    contactEmailPlaceholder: "Business Email",
    contactMessagePlaceholder: "Tell me about your vision...",
    contactSend: "Send message",
    contactInfo: "Personalized response within 24h.",
    followMe: "Follow my work",
    locationTitle: "Studio / Location",
    contactCta: "Start the collaboration",

    footerText: "© 2026 — Handcrafted.",

    blogTitle: "The Journal.",
    blogLinkLabel: "See all articles →",
    blogBadge: "Strategy & Content",
    blogPosts: [
      {
        badge: "SEO",
        date: "October 12, 2025",
        title: "Why static sites lead Google this year.",
        desc: "Speed is no longer optional. Learn how an optimized static architecture lifts your visibility...",
      },
      {
        badge: "Design",
        date: "September 28, 2025",
        title: "The impact of Dark Mode on conversion.",
        desc: "A dark interface is more than aesthetic; it eases eye strain and increases time on site...",
      },
      {
        badge: "Tech",
        date: "September 15, 2025",
        title: "Web security: why move past WordPress?",
        desc: "Security gaps in CMSs are costly. Lean code offers a stronger fortress for your data.",
      },
    ],
  },
};