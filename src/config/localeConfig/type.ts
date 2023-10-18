import {Languages, LocaleMessagesType} from '@src/core-ui';

export interface LocaleContextType {
  loaded: boolean;
  strings: LocaleMessagesType;
  setAppLocale: (locale: Languages) => void;
  locale?: string;
}
