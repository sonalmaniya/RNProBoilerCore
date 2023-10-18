import {createSlice} from '@reduxjs/toolkit';
import {FEED} from '@src/constants';
import {getFeedList} from './feedActions';
import {feedInitialState} from './feedInitialState';

const {actions, reducer} = createSlice({
  name: FEED,
  initialState: feedInitialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getFeedList.pending, state => {
      state.loading = true;
    });
    builder.addCase(getFeedList.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.data = payload || [];
    });
    builder.addCase(getFeedList.rejected, (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const feedActions = {
  ...actions,
  getFeedList,
};

export const feedReducer = reducer;
