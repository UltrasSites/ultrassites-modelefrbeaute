import { translations, type Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const params = new URLSearchParams(url.search);
  const lang = params.get('lang');
  
  if (lang === 'en') return 'en';
  return 'fr'; // Par défaut
}

export function useTranslations(url: URL) {
  const lang = getLangFromUrl(url);
  return translations[lang];
}
