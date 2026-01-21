import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = context.url;
  const pathname = url.pathname;

  // Si on est déjà sur /language/, laisser passer
  if (pathname.startsWith('/language')) {
    return next();
  }

  // Si on est sur la racine sans langue
  if (pathname === '/' || pathname === '') {
    const langCookie = context.cookies.get('lang')?.value;
    const lang = langCookie === 'en' ? 'en' : 'fr';
    
    if (!langCookie) {
      // Pas de cookie, rediriger vers /language/
      return Response.redirect(new URL('/language/', url), 302);
    }
    
    // Cookie existe, rediriger vers /{lang}/
    return Response.redirect(new URL(`/${lang}/`, url), 302);
  }

  // Si on est déjà sur /fr/ ou /en/, laisser passer mais vérifier le cookie
  if (pathname.match(/^\/(fr|en)(\/|$)/)) {
    const langCookie = context.cookies.get('lang')?.value;
    const pathLang = pathname.split('/')[1];
    
    // Si le cookie ne correspond pas à l'URL, mettre à jour le cookie
    if (langCookie && langCookie !== pathLang) {
      context.cookies.set('lang', pathLang, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 an
        sameSite: 'lax',
        secure: true
      });
    }
    
    return next();
  }

  // Pour toutes les autres routes, laisser passer
  return next();
};
