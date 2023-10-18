export enum LocaleMessages {
  KEY = 'KEY',
  WELCOME = 'WELCOME',
  SELECT_LANGUAGE = 'SELECT_LANGUAGE',
  SELECT_THEME = 'SELECT_THEME',
  SELECTED_LANGUAGE_CODE = 'SELECTED_LANGUAGE_CODE',
}

export type LocaleMessagesType = {
  [key in LocaleMessages]: string;
};

export type Languages = 'en' | 'es'; // add other languages here

export type i18nTypes = {
  [key in Languages]: LocaleMessagesType;
};
