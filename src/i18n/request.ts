import {getRequestConfig} from 'next-intl/server';
import {cookies, headers} from 'next/headers';

const locales = ['en', 'vi'] as const;
type Locale = typeof locales[number];
const defaultLocale: Locale = 'en';

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get('NEXT_LOCALE')?.value as Locale | undefined;
  const acceptLang = (await headers()).get('accept-language') || '';
  const preferred = acceptLang.split(',')[0]?.split('-')[0] as Locale | undefined;

  let locale: Locale = cookieLocale && locales.includes(cookieLocale)
    ? cookieLocale
    : preferred && locales.includes(preferred)
      ? preferred
      : defaultLocale;
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});