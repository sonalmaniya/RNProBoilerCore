// GET APIs
import {API} from '@src/services';
import {GET_FEED} from './../constant';

export const getFeedList = () => API.get(GET_FEED);
