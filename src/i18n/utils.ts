import { translations, type Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  // Extraire la langue depuis le pathname : /fr/ ou /en/
  const pathname = url.pathname;
  const langMatch = pathname.match(/^\/(fr|en)(\/|$)/);
  
  if (langMatch && langMatch[1] === 'en') return 'en';
  return 'fr'; // Par défaut
}

export function useTranslations(url: URL) {
  const lang = getLangFromUrl(url);
  return translations[lang];
}
