import {useContext} from 'react';
import {LocaleContext, LocaleContextType} from '@src/config';

export const useLocale = () => useContext(LocaleContext) as LocaleContextType;
