import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always' // URL luôn có /vi hoặc /en
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};