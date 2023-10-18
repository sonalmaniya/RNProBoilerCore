import {useContext} from 'react';
import {ThemeContext, ThemeContextType} from '@src/config';

export const useTheme = () => useContext(ThemeContext) as ThemeContextType;
