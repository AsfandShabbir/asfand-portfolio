import { en } from './content.en';
import { ar } from './content.ar';

export type LanguageCode = 'en' | 'ar';

export type Dict = Omit<typeof en, 'code' | 'dir'> & {
  code: LanguageCode;
  dir: 'ltr' | 'rtl';
};

export const dictionaries: Record<LanguageCode, Dict> = { en, ar };