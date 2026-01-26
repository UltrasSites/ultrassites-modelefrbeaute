export type Lang = 'fr' | 'en' | 'pt' | 'es';

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
  
  pt: {
    siteTitle: "PRO+",
    ctaButton: "Iniciar Projeto",
    heroCta: "Descobrir",

    nav: {
      home: "Início",
      about: "O Artesão",
      services: "Artesanato",
      contact: "Fale Comigo",
      legal: "Termos e Condições",
      privacy: "Política de Privacidade",
      blog: "Jornal",
    },

    heroTitle: "Elegância Bruta.",
    heroSub: "PACOTE PRO+",
    heroDesc:
      "A web está saturada de ruído. Ofereço silêncio e impacto. Como criador independente, moldo sites únicos que combinam estética natural com desempenho técnico.",

    aboutPageTitle: "Mais que um desenvolvedor, um arquiteto.",
    aboutPageText:
      "Minha abordagem é a de um artesão de arte. Não coloco tijolos pré-fabricados. Esculpo sua interface pixel por pixel. Meu objetivo? Que seu site seja único e traduza perfeitamente a essência do seu projeto.",
    aboutBadge: "Artesanato Digital",
    aboutExtra: "Sem templates. Sem carregamentos infinitos. Apenas código enxuto projetado para desempenho. Essa é a promessa PRO+.",

    servicesSection: "Excelência Técnica",
    servicesSubtitle: "Uma fusão entre estética natural e desempenho técnico.",
    services: [
      {
        title: "Direção de Arte",
        desc: "Tipografias cuidadosas e imagens imersivas para uma identidade visual marcante.",
      },
      {
        title: "Experiência Sensorial",
        desc: "Animações fluidas e micro-interações para criar uma experiência cativante.",
      },
      {
        title: "Arquitetura Performante",
        desc: "Código otimizado para consumo mínimo e carregamento instantâneo.",
      },
      {
        title: "Referenciamento Orgânico",
        desc: "Estrutura semântica otimizada para visibilidade natural nos motores de busca.",
      },
      {
        title: "Integração Social",
        desc: "Conexão harmoniosa com suas redes para um ecossistema digital coerente.",
      },
      {
        title: "Segurança Reforçada",
        desc: "Proteção avançada de seus dados e dos de seus usuários.",
      },
    ],
    metrics: [
      { value: "100%", label: "Desempenho" },
      { value: "0s", label: "Espera" },
      { value: "24/7", label: "Suporte" },
    ],

    contactTitle: "Vamos criar algo notável",
    contactText:
      "Procurando um parceiro exigente? Seleciono meus projetos para garantir qualidade impecável. Vamos discutir sua visão.",
    contactNamePlaceholder: "Seu Nome",
    contactEmailPlaceholder: "Email Profissional",
    contactMessagePlaceholder: "Fale-me sobre sua visão...",
    contactSend: "Enviar mensagem",
    contactInfo: "Resposta personalizada em 24h.",
    followMe: "Seguir meu trabalho",
    locationTitle: "Estúdio / Localização",
    contactCta: "Iniciar a colaboração",

    footerText: "© 2026 — Feito à mão.",

    blogTitle: "O Jornal.",
    blogLinkLabel: "Ver todos os artigos →",
    blogBadge: "Estratégia & Conteúdo",
    blogPosts: [
      {
        badge: "SEO",
        date: "12 Outubro 2025",
        title: "Por que sites estáticos dominam o Google este ano.",
        desc: "A velocidade não é mais opcional. Descubra como uma arquitetura estática otimizada impulsiona sua visibilidade...",
      },
      {
        badge: "Design",
        date: "28 Setembro 2025",
        title: "O impacto do \"Modo Escuro\" na conversão do cliente.",
        desc: "Uma interface escura não é apenas estética, reduz a fadiga ocular e aumenta o tempo gasto...",
      },
      {
        badge: "Tech",
        date: "15 Setembro 2025",
        title: "Segurança web: por que abandonar o WordPress?",
        desc: "As falhas de segurança dos CMS custam caro. O código enxuto oferece uma fortaleza inexpugnável para seus dados.",
      },
    ],
  },
  
  es: {
    siteTitle: "PRO+",
    ctaButton: "Iniciar Proyecto",
    heroCta: "Descubrir",

    nav: {
      home: "Inicio",
      about: "El Artesano",
      services: "Artesanía",
      contact: "Hablemos",
      legal: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      blog: "Diario",
    },

    heroTitle: "Elegancia Cruda.",
    heroSub: "PACOTE PRO+",
    heroDesc:
      "La web está saturada de ruido. Ofrezco silencio e impacto. Como creador independiente, moldeo sitios únicos que combinan estética natural con rendimiento técnico.",

    aboutPageTitle: "Más que un desarrollador, un arquitecto.",
    aboutPageText:
      "Mi enfoque es el de un artesano de arte. No coloco ladrillos prefabricados. Esculpo su interfaz pixel por pixel. ¿Mi objetivo? Que su sitio sea único y traduzca perfectamente la esencia de su proyecto.",
    aboutBadge: "Artesanía Digital",
    aboutExtra: "Sin plantillas. Sin cargas infinitas. Solo código ligero diseñado para el rendimiento. Esa es la promesa PRO+.",

    servicesSection: "Excelencia Técnica",
    servicesSubtitle: "Una fusión entre estética natural y rendimiento técnico.",
    services: [
      {
        title: "Dirección de Arte",
        desc: "Tipografías cuidadosas e imágenes inmersivas para una identidad visual marcante.",
      },
      {
        title: "Experiencia Sensorial",
        desc: "Animaciones fluidas y micro-interacciones para crear una experiencia cautivadora.",
      },
      {
        title: "Arquitectura Performante",
        desc: "Código optimizado para consumo mínimo y carga instantánea.",
      },
      {
        title: "Referenciamiento Orgánico",
        desc: "Estructura semántica optimizada para visibilidad natural en los motores de búsqueda.",
      },
      {
        title: "Integración Social",
        desc: "Conexión armoniosa con sus redes para un ecosistema digital coherente.",
      },
      {
        title: "Seguridad Reforzada",
        desc: "Protección avanzada de sus datos y los de sus usuarios.",
      },
    ],
    metrics: [
      { value: "100%", label: "Rendimiento" },
      { value: "0s", label: "Espera" },
      { value: "24/7", label: "Soporte" },
    ],

    contactTitle: "Creemos algo notable",
    contactText:
      "¿Busca un socio exigente? Selecciono mis proyectos para garantizar calidad impecable. Hablemos de su visión.",
    contactNamePlaceholder: "Su Nombre",
    contactEmailPlaceholder: "Email Profesional",
    contactMessagePlaceholder: "Hábleme de su visión...",
    contactSend: "Enviar mensaje",
    contactInfo: "Respuesta personalizada en 24h.",
    followMe: "Seguir mi trabajo",
    locationTitle: "Estudio / Ubicación",
    contactCta: "Iniciar la colaboración",

    footerText: "© 2026 — Hecho a mano.",

    blogTitle: "El Diario.",
    blogLinkLabel: "Ver todos los artículos →",
    blogBadge: "Estrategia & Contenido",
    blogPosts: [
      {
        badge: "SEO",
        date: "12 Octubre 2025",
        title: "Por qué los sitios estáticos lideran Google este año.",
        desc: "La velocidad ya no es opcional. Descubra cómo una arquitectura estática optimizada impulsa su visibilidad...",
      },
      {
        badge: "Design",
        date: "28 Septiembre 2025",
        title: "El impacto del \"Modo Oscuro\" en la conversión del cliente.",
        desc: "Una interfaz oscura no es solo estética, reduce la fatiga ocular y aumenta el tiempo pasado...",
      },
      {
        badge: "Tech",
        date: "15 Septiembre 2025",
        title: "Seguridad web: ¿por qué abandonar WordPress?",
        desc: "Las brechas de seguridad de los CMS cuestan caro. El código ligero ofrece una fortaleza inexpugnable para sus datos.",
      },
    ],
  },
};