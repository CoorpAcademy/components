export const buildURL = (
  base: string,
  locale?: string,
  additionalParams: Record<string, string> = {}
): string => {
  const url = new URL(base);

  if (locale) {
    url.searchParams.set('lang', locale);
  }

  // eslint-disable-next-line fp/no-loops
  for (const [key, value] of Object.entries(additionalParams)) {
    url.searchParams.set(key, value);
  }

  return url.toString();
};
