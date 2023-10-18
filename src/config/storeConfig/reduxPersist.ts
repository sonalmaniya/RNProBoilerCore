import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistConfig} from 'redux-persist';
import {RootState} from './type';

/*
Blacklist contain module name which we don't want to persist in app
Add in BlackList if we don't want to persist data
*/
const blacklist: string[] = [];

export const reduxPersistConfig: PersistConfig<RootState> = {
  key: 'fdApp',
  storage: AsyncStorage,
  blacklist,
};
