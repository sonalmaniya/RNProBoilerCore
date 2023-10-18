import React, {createContext, FC, ReactNode, useEffect, useState} from 'react';
import {defaultThemeColors} from './colors';
import {getThemeColors} from './getThemeColors';
import {ThemeContextType, ThemeData} from './type';

interface ThemeContextProps {
  children: ReactNode;
}

export interface ThemeOptions {
  appTheme: ThemeData;
}

export const defaultTheme: ThemeOptions = {
  appTheme: getThemeColors(defaultThemeColors),
};

export const ThemeContext = createContext<ThemeContextType>({
  appTheme: defaultTheme.appTheme,
  initializeAppTheme: () => '',
  setAppTheme: () => '',
});

/*
  The ThemeContextProvider is providing colors for App
*/
export const ThemeContextProvider: FC<ThemeContextProps> = ({children}) => {
  const [appTheme, setAppTheme] = useState<ThemeData>(defaultTheme.appTheme);

  useEffect(() => {
    setInitialLoad();
  });

  // Theme from Server
  const setTheme = (theme: any = {}) => {
    setAppTheme(getThemeColors({...defaultThemeColors, ...theme}));
  };

  const initializeAppTheme = () => {};

  const setInitialLoad = () => {
    initializeAppTheme();
  };

  return (
    <ThemeContext.Provider
      value={{
        appTheme,
        initializeAppTheme: initializeAppTheme,
        setAppTheme: setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
