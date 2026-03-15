import type { Lang } from './utils';

export interface UITranslations {
  hero_title: string;
  hero_lead: string;
  nav_institut: string;
  nav_prestations: string;
  nav_agenda: string;
  nav_avis: string;
  nav_contact: string;
  nav_voir_offres: string;
  nav_rdv: string;
  footer_brand: string;
  footer_copyright: string;
  drawer_theme: string;
  drawer_nav: string;
  drawer_close: string;
  drawer_rdv: string;
  section_institut_label: string;
  section_institut_title: string;
  section_institut_p1: string;
  section_institut_p2: string;
  section_institut_cta: string;
  section_prestations_title: string;
  section_prestations_lead: string;
  section_prestations_cta: string;
  section_agenda_title: string;
  section_agenda_lead: string;
  section_agenda_li1: string;
  section_agenda_li2: string;
  section_agenda_li3: string;
  section_agenda_select_date: string;
  section_agenda_prev: string;
  section_agenda_next: string;
  section_agenda_demo_note: string;
  section_agenda_contact_cta: string;
  section_avis_title: string;
  section_avis_lead: string;
  section_contact_title: string;
  section_contact_address_title: string;
  section_contact_form_title: string;
  section_contact_form_note: string;
  form_name: string;
  form_email: string;
  form_message: string;
  form_send: string;
  immersion_label: string;
  carousel_prev: string;
  carousel_next: string;
  hero_contact_label: string;
  hero_expert_label: string;
  hero_cta_contact: string;
  hero_cta_rdv: string;
  hero_cta_offres: string;
  demo_label: string;
  years_expertise: string;
  nav_aria_theme: string;
  nav_aria_menu_rdv: string;
  nav_aria_contact: string;
  hero_demo_note: string;
  section_contact_ultras: string;
}

export interface PrestationItem {
  category: string;
  title: string;
  services: string[];
  prices: string[];
  desc: string;
}

export interface AvisItem {
  name: string;
  text: string;
}

const prestationsFr: PrestationItem[] = [
  { category: 'Coiffure', title: 'Coiffure femme & homme', services: ['Coupe', 'Coloration', 'Brushing', 'Barber'], prices: ['à partir de 35 €', 'sur devis', 'à partir de 25 €', 'à partir de 28 €'], desc: 'Coupes, colorations et soins pour toute la famille.' },
  { category: 'Instituts & bien-être', title: 'Soins & bien-être', services: ['Soins du visage', 'Massages', 'Épilation', 'Ongles'], prices: ['sur devis', 'sur devis', 'sur devis', 'à partir de 25 €'], desc: 'Soins personnalisés et moments de détente.' },
  { category: 'Onglerie', title: 'Mains & pieds', services: ['Vernis classique', 'Gel / semi-permanent', 'Nail art'], prices: ['à partir de 20 €', 'à partir de 35 €', 'sur devis'], desc: 'Mise en beauté des mains et des pieds.' },
  { category: 'Barber', title: 'Barber & barbier', services: ['Barbe', 'Coupe homme', 'Rasage traditionnel'], prices: ['à partir de 15 €', 'à partir de 28 €', 'à partir de 25 €'], desc: 'Coupe et entretien de la barbe, style barbershop.' },
];

const prestationsEn: PrestationItem[] = [
  { category: 'Hair', title: 'Women & men hair', services: ['Cut', 'Coloring', 'Blow-dry', 'Barber'], prices: ['from €35', 'on quote', 'from €25', 'from €28'], desc: 'Cuts, coloring and treatments for the whole family.' },
  { category: 'Spa & wellness', title: 'Treatments & wellness', services: ['Facial', 'Massages', 'Waxing', 'Nails'], prices: ['on quote', 'on quote', 'on quote', 'from €25'], desc: 'Personalized treatments and moments of relaxation.' },
  { category: 'Nail care', title: 'Hands & feet', services: ['Classic polish', 'Gel / semi-permanent', 'Nail art'], prices: ['from €20', 'from €35', 'on quote'], desc: 'Beautiful hands and feet.' },
  { category: 'Barber', title: 'Barber shop', services: ['Beard', "Men's cut", 'Traditional shave'], prices: ['from €15', 'from €28', 'from €25'], desc: 'Beard trim and styling, barbershop style.' },
];

const prestationsPt: PrestationItem[] = [
  { category: 'Cabeleireiro', title: 'Cabelo mulher e homem', services: ['Corte', 'Coloração', 'Brush', 'Barbeiro'], prices: ['a partir de 35 €', 'sob orçamento', 'a partir de 25 €', 'a partir de 28 €'], desc: 'Cortes, colorações e tratamentos para toda a família.' },
  { category: 'Institutos & bem-estar', title: 'Tratamentos & bem-estar', services: ['Tratamento facial', 'Massagens', 'Depilação', 'Unhas'], prices: ['sob orçamento', 'sob orçamento', 'sob orçamento', 'a partir de 25 €'], desc: 'Tratamentos personalizados e momentos de relaxamento.' },
  { category: 'Manicure', title: 'Mãos e pés', services: ['Verniz clássico', 'Gel / semipermanente', 'Nail art'], prices: ['a partir de 20 €', 'a partir de 35 €', 'sob orçamento'], desc: 'Embelezamento das mãos e dos pés.' },
  { category: 'Barbeiro', title: 'Barber & barbearia', services: ['Barba', 'Corte homem', 'Barbear tradicional'], prices: ['a partir de 15 €', 'a partir de 28 €', 'a partir de 25 €'], desc: 'Corte e cuidado da barba, estilo barbershop.' },
];

const prestationsEs: PrestationItem[] = [
  { category: 'Peluquería', title: 'Pelo mujer y hombre', services: ['Corte', 'Coloración', 'Brushing', 'Barber'], prices: ['desde 35 €', 'bajo presupuesto', 'desde 25 €', 'desde 28 €'], desc: 'Cortes, coloraciones y cuidados para toda la familia.' },
  { category: 'Institutos y bienestar', title: 'Tratamientos y bienestar', services: ['Facial', 'Masajes', 'Depilación', 'Uñas'], prices: ['bajo presupuesto', 'bajo presupuesto', 'bajo presupuesto', 'desde 25 €'], desc: 'Tratamientos personalizados y momentos de relax.' },
  { category: 'Uñas', title: 'Manos y pies', services: ['Esmalte clásico', 'Gel / semipermanente', 'Nail art'], prices: ['desde 20 €', 'desde 35 €', 'bajo presupuesto'], desc: 'Belleza de manos y pies.' },
  { category: 'Barber', title: 'Barbería', services: ['Barba', 'Corte hombre', 'Afeitado tradicional'], prices: ['desde 15 €', 'desde 28 €', 'desde 25 €'], desc: 'Corte y cuidado de barba, estilo barbershop.' },
];

const avisFr: AvisItem[] = [
  { name: 'C. M.', text: "Ce site de démo reflète parfaitement l'ambiance d'un salon de beauté moderne. Idéal pour présenter soins visage, coiffure et onglerie." },
  { name: 'S. D.', text: "En tant qu'institut, on voit tout de suite comment présenter ses prestations, ses tarifs et la prise de rendez-vous en ligne." },
  { name: 'L. B.', text: "Parfait pour un barber ou un salon mixte : les sections et l'agenda sont déjà prêts, il ne reste qu'à personnaliser." },
];

const avisEn: AvisItem[] = [
  { name: 'C. M.', text: 'This demo site perfectly reflects the atmosphere of a modern beauty salon. Ideal for showcasing facials, hair and nail services.' },
  { name: 'S. D.', text: 'As a salon owner, you can see right away how to present your services, prices and online booking.' },
  { name: 'L. B.', text: 'Perfect for a barber or mixed salon: the sections and booking are ready, you just need to customize.' },
];

const avisPt: AvisItem[] = [
  { name: 'C. M.', text: 'Este site de demonstração reflete perfeitamente o ambiente de um salão de beleza moderno. Ideal para apresentar tratamentos faciais, cabelo e unhas.' },
  { name: 'S. D.', text: 'Como instituto, vê-se logo como apresentar os seus serviços, preços e marcação online.' },
  { name: 'L. B.', text: 'Perfeito para barbeiro ou salão misto: as secções e a agenda estão prontas, só falta personalizar.' },
];

const avisEs: AvisItem[] = [
  { name: 'C. M.', text: 'Esta web de demostración refleja perfectamente el ambiente de un salón de belleza moderno. Ideal para presentar faciales, peluquería y uñas.' },
  { name: 'S. D.', text: 'Como instituto, se ve al instante cómo presentar servicios, precios y reserva online.' },
  { name: 'L. B.', text: 'Perfecto para barbería o salón mixto: las secciones y la agenda están listas, solo hay que personalizar.' },
];

export function getPrestations(lang: Lang): PrestationItem[] {
  switch (lang) {
    case 'en': return prestationsEn;
    case 'pt': return prestationsPt;
    case 'es': return prestationsEs;
    default: return prestationsFr;
  }
}

export function getAvis(lang: Lang): AvisItem[] {
  switch (lang) {
    case 'en': return avisEn;
    case 'pt': return avisPt;
    case 'es': return avisEs;
    default: return avisFr;
  }
}

const fr: UITranslations = {
  hero_title: 'Coiffure, Institut, Barber & Bien-être',
  hero_lead: 'Démo pour salons de coiffure, instituts de beauté, barbershops et centres bien-être. Votre site sera adapté à vos prestations.',
  nav_institut: "L'Institut",
  nav_prestations: 'Prestations',
  nav_agenda: 'Agenda',
  nav_avis: 'Avis',
  nav_contact: 'Contact',
  nav_voir_offres: 'Voir offres',
  nav_rdv: 'Prendre RDV',
  footer_brand: 'Beauté & Bien-être.',
  footer_copyright: 'Démo',
  drawer_theme: 'Changer le thème clair/sombre',
  drawer_nav: 'Navigation',
  drawer_close: 'Fermer',
  drawer_rdv: 'Prendre un rendez-vous',
  section_institut_label: "L'esprit de votre site",
  section_institut_title: '"Un site qui met en valeur votre institut, votre salon ou votre barber."',
  section_institut_p1: 'Ce modèle de site vitrine est pensé pour les instituts, soins du visage, salons de coiffure, barbershops et centres bien-être. Il vous permet de présenter clairement vos prestations, vos tarifs et votre univers.',
  section_institut_p2: "Tout est démo : visuels, textes, tarifs. Lors de la mise en ligne, nous adaptons chaque bloc à votre identité, votre quartier et votre clientèle, afin que votre présence en ligne reflète vraiment votre savoir-faire.",
  section_institut_cta: 'Votre futur site.',
  section_prestations_title: 'Nos prestations',
  section_prestations_lead: 'Soins visage, coiffure, barber, onglerie et bien-être : exemple de prestations et de tarifs à personnaliser pour votre établissement.',
  section_prestations_cta: 'Prendre rendez-vous',
  section_agenda_title: 'Prenez du temps pour vous.',
  section_agenda_lead: "Choisissez le jour et l'heure qui vous conviennent. Une confirmation vous sera envoyée. Compatible MyCockpit pour la prise de rendez-vous en ligne.",
  section_agenda_li1: 'Paiement sécurisé ou sur place',
  section_agenda_li2: 'Rappel SMS 24h avant',
  section_agenda_li3: 'Modification gratuite jusqu\'à 48h',
  section_agenda_select_date: 'Sélectionnez une date',
  section_agenda_prev: 'Mois précédent',
  section_agenda_next: 'Mois suivant',
  section_agenda_demo_note: 'Réservation démo. En production : intégration MyCockpit (localsearch.ch) pour confirmer le RDV.',
  section_agenda_contact_cta: 'Contact ultras-sites.com',
  section_avis_title: 'Avis fictifs sur la démo',
  section_avis_lead: 'Témoignages inventés pour illustrer le rendu d\'un site d\'institut, de salon de coiffure ou de barber.',
  section_contact_title: 'Nous trouver',
  section_contact_address_title: 'Adresse & contact',
  section_contact_form_title: 'Demande de contact',
  section_contact_form_note: 'Formulaire fictif pour la démo. En production, à brancher sur votre envoi d\'emails.',
  form_name: 'Votre nom',
  form_email: 'Email',
  form_message: 'Votre message',
  form_send: 'Envoyer',
  immersion_label: 'Immersion',
  carousel_prev: 'Image précédente',
  carousel_next: 'Image suivante',
  hero_contact_label: 'Votre contact',
  hero_expert_label: 'Votre experte beauté (démo)',
  hero_cta_contact: 'Contact',
  hero_cta_rdv: 'Prendre rendez-vous',
  hero_cta_offres: 'Voir nos offres',
  demo_label: 'Démo',
  years_expertise: 'Années d\'expertise',
  nav_aria_theme: 'Changer le thème clair/sombre',
  nav_aria_menu_rdv: 'Menu ou RDV',
  nav_aria_contact: 'Contact',
  hero_demo_note: 'Démo',
  section_contact_ultras: 'ultras-sites.com',
};

const en: UITranslations = {
  hero_title: 'Hair, Spa, Barber & Wellness',
  hero_lead: 'Demo for hair salons, beauty institutes, barbershops and wellness centers. Your site will be tailored to your services.',
  nav_institut: 'The Salon',
  nav_prestations: 'Services',
  nav_agenda: 'Booking',
  nav_avis: 'Reviews',
  nav_contact: 'Contact',
  nav_voir_offres: 'View offers',
  nav_rdv: 'Book now',
  footer_brand: 'Beauty & Wellness.',
  footer_copyright: 'Demo',
  drawer_theme: 'Toggle light/dark theme',
  drawer_nav: 'Navigation',
  drawer_close: 'Close',
  drawer_rdv: 'Book an appointment',
  section_institut_label: 'The spirit of your site',
  section_institut_title: '"A site that showcases your salon, your space or your barbershop."',
  section_institut_p1: 'This showcase template is designed for institutes, facials, hair salons, barbershops and wellness centers. It lets you clearly present your services, prices and your universe.',
  section_institut_p2: 'Everything here is demo: visuals, copy, prices. When we go live, we adapt each block to your identity, neighborhood and clientele, so your online presence truly reflects your expertise.',
  section_institut_cta: 'Your future site.',
  section_prestations_title: 'Our services',
  section_prestations_lead: 'Facials, hair, barber, nails and wellness: sample services and prices to customize for your business.',
  section_prestations_cta: 'Book an appointment',
  section_agenda_title: 'Take time for yourself.',
  section_agenda_lead: 'Choose the date and time that work for you. You will receive a confirmation. Compatible with MyCockpit for online booking.',
  section_agenda_li1: 'Secure or in-person payment',
  section_agenda_li2: 'SMS reminder 24h before',
  section_agenda_li3: 'Free change up to 48h before',
  section_agenda_select_date: 'Select a date',
  section_agenda_prev: 'Previous month',
  section_agenda_next: 'Next month',
  section_agenda_demo_note: 'Demo booking. In production: MyCockpit (localsearch.ch) integration to confirm the appointment.',
  section_agenda_contact_cta: 'Contact ultras-sites.com',
  section_avis_title: 'Demo reviews',
  section_avis_lead: 'Sample testimonials to illustrate how a salon, hair or barber site can look.',
  section_contact_title: 'Find us',
  section_contact_address_title: 'Address & contact',
  section_contact_form_title: 'Contact request',
  section_contact_form_note: 'Demo form. In production, connect to your email sending.',
  form_name: 'Your name',
  form_email: 'Email',
  form_message: 'Your message',
  form_send: 'Send',
  immersion_label: 'Immersion',
  carousel_prev: 'Previous image',
  carousel_next: 'Next image',
  hero_contact_label: 'Your contact',
  hero_expert_label: 'Your beauty expert (demo)',
  hero_cta_contact: 'Contact',
  hero_cta_rdv: 'Book an appointment',
  hero_cta_offres: 'View our offers',
  demo_label: 'Demo',
  years_expertise: 'Years of expertise',
  nav_aria_theme: 'Toggle light/dark theme',
  nav_aria_menu_rdv: 'Menu or book',
  nav_aria_contact: 'Contact',
  hero_demo_note: 'Demo',
  section_contact_ultras: 'ultras-sites.com',
};

const pt: UITranslations = {
  hero_title: 'Cabeleireiro, Instituto, Barber & Bem-estar',
  hero_lead: 'Demonstração para salões de cabeleireiro, institutos de beleza, barbearias e centros de bem-estar. O seu site será adaptado às suas prestações.',
  nav_institut: 'O Instituto',
  nav_prestations: 'Prestações',
  nav_agenda: 'Agenda',
  nav_avis: 'Avaliações',
  nav_contact: 'Contacto',
  nav_voir_offres: 'Ver ofertas',
  nav_rdv: 'Marcar',
  footer_brand: 'Beleza & Bem-estar.',
  footer_copyright: 'Demonstração',
  drawer_theme: 'Alternar tema claro/escuro',
  drawer_nav: 'Navegação',
  drawer_close: 'Fechar',
  drawer_rdv: 'Marcar uma consulta',
  section_institut_label: 'O espírito do seu site',
  section_institut_title: '"Um site que valoriza o seu instituto, o seu salão ou a sua barbearia."',
  section_institut_p1: 'Este modelo de site vitrina foi pensado para institutos, tratamentos faciais, salões de cabeleireiro, barbearias e centros de bem-estar. Permite apresentar de forma clara as suas prestações, preços e universo.',
  section_institut_p2: 'Tudo é demonstração: imagens, textos, preços. Na publicação, adaptamos cada bloco à sua identidade, bairro e clientela, para que a sua presença online reflita o seu saber-fazer.',
  section_institut_cta: 'O seu futuro site.',
  section_prestations_title: 'As nossas prestações',
  section_prestations_lead: 'Tratamentos faciais, cabeleireiro, barber, unhas e bem-estar: exemplo de prestações e preços para personalizar no seu estabelecimento.',
  section_prestations_cta: 'Marcar consulta',
  section_agenda_title: 'Reserve tempo para si.',
  section_agenda_lead: 'Escolha o dia e a hora que lhe convêm. Receberá uma confirmação. Compatível com MyCockpit para marcação online.',
  section_agenda_li1: 'Pagamento seguro ou no local',
  section_agenda_li2: 'Lembrete por SMS 24h antes',
  section_agenda_li3: 'Alteração gratuita até 48h antes',
  section_agenda_select_date: 'Selecione uma data',
  section_agenda_prev: 'Mês anterior',
  section_agenda_next: 'Mês seguinte',
  section_agenda_demo_note: 'Marcação de demonstração. Em produção: integração MyCockpit (localsearch.ch) para confirmar a marcação.',
  section_agenda_contact_cta: 'Contacto ultras-sites.com',
  section_avis_title: 'Avaliações de demonstração',
  section_avis_lead: 'Depoimentos de exemplo para ilustrar o aspecto de um site de instituto, cabeleireiro ou barber.',
  section_contact_title: 'Encontrar-nos',
  section_contact_address_title: 'Morada e contacto',
  section_contact_form_title: 'Pedido de contacto',
  section_contact_form_note: 'Formulário de demonstração. Em produção, ligar ao envio de emails.',
  form_name: 'O seu nome',
  form_email: 'Email',
  form_message: 'A sua mensagem',
  form_send: 'Enviar',
  immersion_label: 'Imersão',
  carousel_prev: 'Imagem anterior',
  carousel_next: 'Imagem seguinte',
  hero_contact_label: 'O seu contacto',
  hero_expert_label: 'A sua especialista em beleza (demo)',
  hero_cta_contact: 'Contacto',
  hero_cta_rdv: 'Marcar consulta',
  hero_cta_offres: 'Ver as nossas ofertas',
  demo_label: 'Demo',
  years_expertise: 'Anos de experiência',
  nav_aria_theme: 'Alternar tema claro/escuro',
  nav_aria_menu_rdv: 'Menu ou marcar',
  nav_aria_contact: 'Contacto',
  hero_demo_note: 'Demo',
  section_contact_ultras: 'ultras-sites.com',
};

const es: UITranslations = {
  hero_title: 'Peluquería, Instituto, Barber y Bienestar',
  hero_lead: 'Demo para salones de peluquería, institutos de belleza, barberías y centros de bienestar. Tu web se adaptará a tus servicios.',
  nav_institut: 'El Instituto',
  nav_prestations: 'Servicios',
  nav_agenda: 'Reservas',
  nav_avis: 'Opiniones',
  nav_contact: 'Contacto',
  nav_voir_offres: 'Ver ofertas',
  nav_rdv: 'Reservar',
  footer_brand: 'Belleza y Bienestar.',
  footer_copyright: 'Demo',
  drawer_theme: 'Cambiar tema claro/oscuro',
  drawer_nav: 'Navegación',
  drawer_close: 'Cerrar',
  drawer_rdv: 'Pedir cita',
  section_institut_label: 'El espíritu de tu web',
  section_institut_title: '"Una web que pone en valor tu instituto, tu salón o tu barbería."',
  section_institut_p1: 'Esta maqueta de web está pensada para institutos, faciales, peluquerías, barberías y centros de bienestar. Te permite presentar con claridad tus servicios, precios y tu universo.',
  section_institut_p2: 'Todo es demo: imágenes, textos, precios. En la puesta en marcha adaptamos cada bloque a tu identidad, barrio y clientela, para que tu presencia en línea refleje tu saber hacer.',
  section_institut_cta: 'Tu futura web.',
  section_prestations_title: 'Nuestros servicios',
  section_prestations_lead: 'Faciales, peluquería, barber, uñas y bienestar: ejemplo de servicios y precios para personalizar en tu establecimiento.',
  section_prestations_cta: 'Pedir cita',
  section_agenda_title: 'Reserva tiempo para ti.',
  section_agenda_lead: 'Elige el día y la hora que te convengan. Recibirás una confirmación. Compatible con MyCockpit para reservas en línea.',
  section_agenda_li1: 'Pago seguro o en el local',
  section_agenda_li2: 'Recordatorio por SMS 24h antes',
  section_agenda_li3: 'Modificación gratuita hasta 48h antes',
  section_agenda_select_date: 'Seleccione una fecha',
  section_agenda_prev: 'Mes anterior',
  section_agenda_next: 'Mes siguiente',
  section_agenda_demo_note: 'Reserva demo. En producción: integración MyCockpit (localsearch.ch) para confirmar la cita.',
  section_agenda_contact_cta: 'Contacto ultras-sites.com',
  section_avis_title: 'Opiniones de demo',
  section_avis_lead: 'Testimonios de ejemplo para ilustrar el aspecto de un site de instituto, peluquería o barbería.',
  section_contact_title: 'Encontrarnos',
  section_contact_address_title: 'Dirección y contacto',
  section_contact_form_title: 'Solicitud de contacto',
  section_contact_form_note: 'Formulario de demo. En producción, conectar al envío de emails.',
  form_name: 'Tu nombre',
  form_email: 'Email',
  form_message: 'Tu mensaje',
  form_send: 'Enviar',
  immersion_label: 'Inmersión',
  carousel_prev: 'Imagen anterior',
  carousel_next: 'Imagen siguiente',
  hero_contact_label: 'Tu contacto',
  hero_expert_label: 'Tu experta en belleza (demo)',
  hero_cta_contact: 'Contacto',
  hero_cta_rdv: 'Pedir cita',
  hero_cta_offres: 'Ver nuestras ofertas',
  demo_label: 'Demo',
  years_expertise: 'Años de experiencia',
  nav_aria_theme: 'Cambiar tema claro/oscuro',
  nav_aria_menu_rdv: 'Menú o reservar',
  nav_aria_contact: 'Contacto',
  hero_demo_note: 'Demo',
  section_contact_ultras: 'ultras-sites.com',
};

export const translations: Record<Lang, UITranslations> = { fr, en, pt, es };
