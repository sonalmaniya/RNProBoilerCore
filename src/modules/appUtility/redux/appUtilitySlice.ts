import {createSlice} from '@reduxjs/toolkit';
import {APP_UTILITY} from '@src/constants';
import {appUtilityInitialState} from './appUtilityInitialState';

const {actions, reducer} = createSlice({
  name: APP_UTILITY,
  initialState: appUtilityInitialState,
  reducers: {
    setSelectedLanguage(state, {payload}: {payload: string}) {
      state.selectedLanguage = payload;
    },
  },
  extraReducers: () => {},
});

export const appUtilityActions = {
  ...actions,
};

export const appUtilityReducer = reducer;
