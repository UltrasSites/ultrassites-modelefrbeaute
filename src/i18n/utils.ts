import { translations, type Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  // Extraire la langue depuis le pathname : /fr/, /en/, /pt/ ou /es/
  const pathname = url.pathname;
  const langMatch = pathname.match(/^\/(fr|en|pt|es)(\/|$)/);
  
  if (langMatch) {
    const lang = langMatch[1];
    if (lang === 'en') return 'en';
    if (lang === 'pt') return 'pt';
    if (lang === 'es') return 'es';
  }
  return 'fr'; // Par défaut
}

export function useTranslations(url: URL) {
  const lang = getLangFromUrl(url);
  return translations[lang];
}
