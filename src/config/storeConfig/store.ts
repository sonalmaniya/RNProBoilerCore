import {configureStore, PreloadedState} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import {reduxPersistConfig} from './reduxPersist';
import rootReducer from './rootReducer';
import {RootState} from './type';

const persistedReducer = persistReducer(reduxPersistConfig, rootReducer);

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

const persistor = persistStore(store);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;

export {store, persistor};
