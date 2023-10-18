import {useDispatch} from 'react-redux';
import {AppDispatch} from '@src/config';

export const useAppDispatch = () => useDispatch<AppDispatch>();
