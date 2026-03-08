export type Lang = 'fr' | 'en' | 'pt' | 'es';

export const supportedLangs: Lang[] = ['fr', 'en', 'pt', 'es'];

export const defaultLang: Lang = 'fr';

export const langLabels: Record<Lang, string> = {
  fr: 'Français',
  en: 'English',
  pt: 'Português',
  es: 'Español',
};

export function getLangFromParam(param: string | undefined): Lang {
  if (param && supportedLangs.includes(param as Lang)) return param as Lang;
  return defaultLang;
}
