import {mockTranslate} from '@coorpacademy/translate';

export const translate = (key: string, data?: Record<string, string>): string =>
  mockTranslate(key, data);
