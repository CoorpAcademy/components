export const buildURL = (url: string, locale: string | void): string => {
  if (!locale) return url;

  const urlForTranslate = new URL(url);
  urlForTranslate.searchParams.set('lang', locale);
  return urlForTranslate.toString();
};
