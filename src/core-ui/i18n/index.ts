import {EN} from './languages/en';
import {ES} from './languages/es';
import {i18nTypes} from './type';
import {LocalizedStrings} from '../localization';

export const DEFAULT_LANGUAGE = 'en';

export const locales: i18nTypes = {
  en: EN,
  es: ES,
};

export const strings = new LocalizedStrings(locales);

export * from './type';
