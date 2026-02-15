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
  demoBanner: string;

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
      "Le web est saturé de bruit. Je vous propose du silence et de l'impact. Créateur indépendant, je façonne des sites uniques qui allient esthétique et performance.",

    aboutPageTitle: "Plus qu'un développeur, un architecte.",
    aboutPageText:
      "Mon approche est celle d'un artisan d'art. Je ne pose pas des briques préfabriquées — je sculpte votre interface pixel par pixel pour qu'elle traduise parfaitement l'essence de votre projet.",
    aboutBadge: "L'Artisanat Digital",
    aboutExtra: "Pas de templates. Pas de chargements interminables. Juste du code pur, taillé pour la performance. C'est ça, la promesse PRO+.",

    servicesSection: "L'Excellence Technique",
    servicesSubtitle: "Esthétique naturelle et performance technique, sans compromis.",
    services: [
      {
        title: "Direction Artistique",
        desc: "Typographies soignées et visuels immersifs pour une identité visuelle marquante.",
      },
      {
        title: "Expérience Sensorielle",
        desc: "Animations fluides et micro-interactions pour une expérience captivante.",
      },
      {
        title: "Architecture Performante",
        desc: "Code optimisé, consommation minimale, chargement instantané.",
      },
      {
        title: "Référencement Organique",
        desc: "Structure sémantique optimisée pour une visibilité naturelle sur Google.",
      },
      {
        title: "Intégration Réseaux Sociaux",
        desc: "Connexion harmonieuse avec vos plateformes pour un écosystème digital cohérent.",
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

    footerText: "— Fait main par Ultras Sites.",
    demoBanner: "Ceci est un modèle de démonstration. Le contenu, le design et la structure seront entièrement adaptés à votre activité et à votre image.",

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
        title: "L'impact du « Dark Mode » sur la conversion client.",
        desc: "Une interface sombre n'est pas qu'esthétique : elle réduit la fatigue oculaire et augmente le temps passé sur le site...",
      },
      {
        badge: "Tech",
        date: "15 Septembre 2025",
        title: "Sécurité web : pourquoi quitter WordPress ?",
        desc: "Les failles de sécurité des CMS coûtent cher. Le code pur offre une forteresse pour vos données.",
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
      "The web is drowning in noise. I offer clarity and impact. As an independent creator, I craft unique sites where aesthetics and performance go hand in hand.",

    aboutPageTitle: "More than a developer — an architect.",
    aboutPageText:
      "My approach is that of a master craftsman. I don't use prefab building blocks — I sculpt your interface pixel by pixel so it perfectly captures the essence of your project.",
    aboutBadge: "Digital Craftsmanship",
    aboutExtra: "No templates. No endless loading. Just lean code engineered for performance. That's the PRO+ promise.",

    servicesSection: "Technical Excellence",
    servicesSubtitle: "Natural aesthetics meets technical performance — no compromises.",
    services: [
      {
        title: "Art Direction",
        desc: "Refined typography and immersive visuals for a striking brand identity.",
      },
      {
        title: "Sensory Experience",
        desc: "Fluid animations and micro-interactions that create a captivating experience.",
      },
      {
        title: "Performance Architecture",
        desc: "Optimized code, minimal footprint, instant loading.",
      },
      {
        title: "Organic SEO",
        desc: "Semantic structure built for natural visibility on Google.",
      },
      {
        title: "Social Media Integration",
        desc: "Seamless connection with your platforms for a cohesive digital ecosystem.",
      },
      {
        title: "Rock-Solid Security",
        desc: "Advanced protection for your data and your users' information.",
      },
    ],
    metrics: [
      { value: "100%", label: "Performance" },
      { value: "0s", label: "Wait Time" },
      { value: "24/7", label: "Support" },
    ],

    contactTitle: "Let's create something remarkable",
    contactText:
      "Looking for a demanding partner? I handpick my projects to ensure flawless quality. Let's discuss your vision.",
    contactNamePlaceholder: "Your Name",
    contactEmailPlaceholder: "Business Email",
    contactMessagePlaceholder: "Tell me about your vision...",
    contactSend: "Send message",
    contactInfo: "Personal reply within 24 hours.",
    followMe: "Follow my work",
    locationTitle: "Studio / Location",
    contactCta: "Start the collaboration",

    footerText: "— Handcrafted by Ultras Sites.",
    demoBanner: "This is a demo template. The content, design, and structure will be fully tailored to your business and brand identity.",

    blogTitle: "The Journal.",
    blogLinkLabel: "See all articles →",
    blogBadge: "Strategy & Content",
    blogPosts: [
      {
        badge: "SEO",
        date: "October 12, 2025",
        title: "Why static sites are leading Google this year.",
        desc: "Speed is no longer optional. Discover how an optimized static architecture boosts your visibility...",
      },
      {
        badge: "Design",
        date: "September 28, 2025",
        title: "How Dark Mode drives better conversion rates.",
        desc: "A dark interface isn't just stylish — it reduces eye strain and keeps visitors on your site longer...",
      },
      {
        badge: "Tech",
        date: "September 15, 2025",
        title: "Web security: why it's time to move beyond WordPress.",
        desc: "CMS security gaps come at a price. Lean code provides a stronger fortress for your data.",
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
      services: "Competências",
      contact: "Fale Comigo",
      legal: "Termos e Condições",
      privacy: "Política de Privacidade",
      blog: "Jornal",
    },

    heroTitle: "Elegância em estado puro.",
    heroSub: "PACK PRO+",
    heroDesc:
      "A web está saturada de ruído. Eu ofereço clareza e impacto. Como criador independente, modelo sites únicos onde estética e desempenho andam de mãos dadas.",

    aboutPageTitle: "Mais do que um programador — um arquiteto.",
    aboutPageText:
      "A minha abordagem é a de um mestre artesão. Não uso peças pré-fabricadas — esculpo a sua interface pixel a pixel para que traduza na perfeição a essência do seu projeto.",
    aboutBadge: "Artesanato Digital",
    aboutExtra: "Sem templates. Sem carregamentos intermináveis. Apenas código limpo, pensado para o desempenho. É esta a promessa PRO+.",

    servicesSection: "Excelência Técnica",
    servicesSubtitle: "Estética natural e desempenho técnico, sem compromissos.",
    services: [
      {
        title: "Direção Artística",
        desc: "Tipografia cuidada e visuais imersivos para uma identidade de marca marcante.",
      },
      {
        title: "Experiência Sensorial",
        desc: "Animações fluidas e micro-interações que criam uma experiência cativante.",
      },
      {
        title: "Arquitetura Performante",
        desc: "Código otimizado, pegada mínima, carregamento instantâneo.",
      },
      {
        title: "SEO Orgânico",
        desc: "Estrutura semântica pensada para uma visibilidade natural no Google.",
      },
      {
        title: "Integração com Redes Sociais",
        desc: "Ligação harmoniosa com as suas plataformas para um ecossistema digital coerente.",
      },
      {
        title: "Segurança Reforçada",
        desc: "Proteção avançada dos seus dados e dos seus utilizadores.",
      },
    ],
    metrics: [
      { value: "100%", label: "Desempenho" },
      { value: "0s", label: "Espera" },
      { value: "24/7", label: "Suporte" },
    ],

    contactTitle: "Vamos criar algo notável",
    contactText:
      "Procura um parceiro exigente? Seleciono os meus projetos para garantir uma qualidade impecável. Vamos conversar sobre a sua visão.",
    contactNamePlaceholder: "O Seu Nome",
    contactEmailPlaceholder: "Email Profissional",
    contactMessagePlaceholder: "Fale-me da sua visão...",
    contactSend: "Enviar mensagem",
    contactInfo: "Resposta personalizada em 24 horas.",
    followMe: "Acompanhe o meu trabalho",
    locationTitle: "Estúdio / Localização",
    contactCta: "Iniciar a colaboração",

    footerText: "— Feito à mão por Ultras Sites.",
    demoBanner: "Este é um modelo de demonstração. O conteúdo, o design e a estrutura serão totalmente adaptados ao seu negócio e à sua imagem.",

    blogTitle: "O Jornal.",
    blogLinkLabel: "Ver todos os artigos →",
    blogBadge: "Estratégia & Conteúdo",
    blogPosts: [
      {
        badge: "SEO",
        date: "12 de Outubro de 2025",
        title: "Porque é que os sites estáticos dominam o Google este ano.",
        desc: "A velocidade já não é opcional. Descubra como uma arquitetura estática otimizada impulsiona a sua visibilidade...",
      },
      {
        badge: "Design",
        date: "28 de Setembro de 2025",
        title: "O impacto do Modo Escuro na conversão de clientes.",
        desc: "Uma interface escura não é apenas estética — reduz a fadiga ocular e aumenta o tempo passado no site...",
      },
      {
        badge: "Tech",
        date: "15 de Setembro de 2025",
        title: "Segurança web: porque é altura de deixar o WordPress.",
        desc: "As falhas de segurança dos CMS saem caras. O código limpo oferece uma fortaleza para os seus dados.",
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
      services: "Competencias",
      contact: "Hablemos",
      legal: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      blog: "Diario",
    },

    heroTitle: "Elegancia en estado puro.",
    heroSub: "PACK PRO+",
    heroDesc:
      "La web está saturada de ruido. Yo ofrezco claridad e impacto. Como creador independiente, modelo sitios únicos donde estética y rendimiento van de la mano.",

    aboutPageTitle: "Más que un desarrollador — un arquitecto.",
    aboutPageText:
      "Mi enfoque es el de un maestro artesano. No uso piezas prefabricadas — esculpo su interfaz píxel a píxel para que refleje a la perfección la esencia de su proyecto.",
    aboutBadge: "Artesanía Digital",
    aboutExtra: "Sin plantillas. Sin cargas interminables. Solo código limpio, diseñado para el rendimiento. Esa es la promesa PRO+.",

    servicesSection: "Excelencia Técnica",
    servicesSubtitle: "Estética natural y rendimiento técnico, sin compromisos.",
    services: [
      {
        title: "Dirección Artística",
        desc: "Tipografía cuidada y visuales inmersivos para una identidad de marca impactante.",
      },
      {
        title: "Experiencia Sensorial",
        desc: "Animaciones fluidas y microinteracciones que crean una experiencia cautivadora.",
      },
      {
        title: "Arquitectura Performante",
        desc: "Código optimizado, huella mínima, carga instantánea.",
      },
      {
        title: "SEO Orgánico",
        desc: "Estructura semántica pensada para una visibilidad natural en Google.",
      },
      {
        title: "Integración con Redes Sociales",
        desc: "Conexión armoniosa con sus plataformas para un ecosistema digital coherente.",
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
      "¿Busca un socio exigente? Selecciono mis proyectos para garantizar una calidad impecable. Hablemos de su visión.",
    contactNamePlaceholder: "Su Nombre",
    contactEmailPlaceholder: "Email Profesional",
    contactMessagePlaceholder: "Hábleme de su visión...",
    contactSend: "Enviar mensaje",
    contactInfo: "Respuesta personalizada en 24 horas.",
    followMe: "Siga mi trabajo",
    locationTitle: "Estudio / Ubicación",
    contactCta: "Iniciar la colaboración",

    footerText: "— Hecho a mano por Ultras Sites.",
    demoBanner: "Este es un modelo de demostración. El contenido, el diseño y la estructura se adaptarán completamente a su negocio y a su imagen.",

    blogTitle: "El Diario.",
    blogLinkLabel: "Ver todos los artículos →",
    blogBadge: "Estrategia & Contenido",
    blogPosts: [
      {
        badge: "SEO",
        date: "12 de Octubre de 2025",
        title: "Por qué los sitios estáticos lideran Google este año.",
        desc: "La velocidad ya no es opcional. Descubra cómo una arquitectura estática optimizada impulsa su visibilidad...",
      },
      {
        badge: "Design",
        date: "28 de Septiembre de 2025",
        title: "El impacto del Modo Oscuro en la tasa de conversión.",
        desc: "Una interfaz oscura no es solo estética — reduce la fatiga visual y aumenta el tiempo en el sitio...",
      },
      {
        badge: "Tech",
        date: "15 de Septiembre de 2025",
        title: "Seguridad web: ¿por qué es hora de dejar WordPress?",
        desc: "Las brechas de seguridad de los CMS salen caras. El código limpio ofrece una fortaleza para sus datos.",
      },
    ],
  },
};
