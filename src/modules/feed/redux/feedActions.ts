// API actions
import {createAsyncThunk} from '@reduxjs/toolkit';
import {FEED} from '@src/constants';
import {getFeedList as getFeedListAPI} from '../api';

// Get Feed List
export const getFeedList = createAsyncThunk(
  `${FEED}getFeedList`,
  async (_: void, {rejectWithValue}) => {
    const response: any = await getFeedListAPI();
    const {data, ok, problem} = response;
    if (ok) {
      return data;
    }
    return rejectWithValue(problem);
  },
);
