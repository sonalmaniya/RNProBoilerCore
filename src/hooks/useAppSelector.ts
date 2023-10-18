import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '@src/config';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
