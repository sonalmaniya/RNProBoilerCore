export type ThemeColors = {
  readonly backgroundColor: string;
  readonly primaryColor: string;
  readonly secondaryColor: string;
  readonly accentColor: string;
  readonly primaryFontColor: string;
  readonly secondaryFontColor: string;
};

export interface ThemeData {
  readonly background: string;
  readonly accent: string;
  readonly primary: string;
  readonly secondary: string;
  readonly primaryFont: string;
  readonly secondaryFont: string;
  readonly accentDarked10: string;
  readonly accentLighter10: string;
  readonly accentLighter20: string;
  readonly body: string;
  readonly caption: string;
  readonly ghost: string;
  readonly disabled: string;
  readonly stroke: string;
  readonly hover: string;
  readonly subHover: string;
  readonly focused: string;
  readonly toasts: string;
  readonly success: string;
  readonly error: string;
  readonly warning: string;
  readonly info: string;
  readonly success05: string;
  readonly error05: string;
  readonly warning05: string;
  readonly info05: string;
  readonly transparent: string;
}

export interface ThemeContextType {
  appTheme: ThemeData;
  initializeAppTheme: () => void;
  setAppTheme: (theme: any) => void;
}

export interface ThemeContextProviderInterface {
  children: React.ReactNode;
}
