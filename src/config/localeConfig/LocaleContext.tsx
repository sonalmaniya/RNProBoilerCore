import React, {createContext, FC, ReactNode, useEffect, useState} from 'react';
import {
  DEFAULT_LANGUAGE,
  Languages,
  LocaleMessagesType,
  locales,
  omit,
  strings,
} from '@src/core-ui';
import {LocaleContextType} from './type';

interface LocaleContextProps {
  children: ReactNode;
}

export const LocaleContext = createContext<LocaleContextType>({
  strings: locales[DEFAULT_LANGUAGE],
  loaded: false,
  locale: DEFAULT_LANGUAGE,
  setAppLocale: () => '',
});

// Data provided by LocalizedStrings
const extraKeys = [
  '_props',
  '_opts',
  '_defaultLanguageFirstLevelKeys',
  'strings',
  '_interfaceLanguage',
];

/*
  The LocaleContextProvider is providing locale/strings for App
*/
export const LocaleContextProvider: FC<LocaleContextProps> = ({children}) => {
  const [loaded, setLoaded] = useState(false);
  const [locale, setLocale] = useState<Languages>(DEFAULT_LANGUAGE);

  useEffect(() => {}, []);

  const setLanguage = (language: Languages) => {
    strings.setLanguage(language);
    setLocale(language);
    setLoaded(true);
  };

  return (
    <LocaleContext.Provider
      value={{
        loaded,
        locale,
        strings: omit(strings, extraKeys) as LocaleMessagesType,
        setAppLocale: setLanguage,
      }}>
      {children}
    </LocaleContext.Provider>
  );
};
