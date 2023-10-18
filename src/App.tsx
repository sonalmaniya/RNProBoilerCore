import React from 'react';
import {Provider} from 'react-redux';
import {LocaleContextProvider, store, ThemeContextProvider} from '@src/config';
import AppNavigator from '@src/navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <LocaleContextProvider>
          <AppNavigator />
        </LocaleContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}

export default App;
