export const buildURL = (url: string, locale: string | void): string => {
  if (!locale) return url;

  const urlForTranslate = new URL(url);
  urlForTranslate.searchParams.append('lang', locale);
  return urlForTranslate.toString();
};
