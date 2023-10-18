import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '@src/config';

const appUtilityState = (state: RootState) => state.feed;

// To get Feed State
export const selectFeed = createSelector(appUtilityState, state => state);

// To get only List
export const selectFeedList = createSelector(
  appUtilityState,
  state => state.data,
);
