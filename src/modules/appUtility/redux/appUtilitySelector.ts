import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@src/config';

const appUtilityState = (state: RootState) => state.appUtility;

// Get Selected Language
export const selectCurrentLanguage = createSelector(
  appUtilityState,
  state => state.selectedLanguage,
);
