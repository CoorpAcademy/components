export type Brand = {
  name?: string;
  host?: string;
  contentCategoryName?: string;
  colors?: {
    primary: string;
  };
  hero?: string;
  images?: {
    'logo-mobile': string;
  };
  youtube?: {
    apiKey: string;
  };
  supportedLanguages?: Array<string>;
  defaultLanguage?: string;
  env?: string;
};

export const defaultBrandTheme: Brand = {};
