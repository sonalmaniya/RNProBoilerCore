import axios, {AxiosError, AxiosResponse} from 'axios';
import {URLS} from '@src/config';
import {isWithin} from '@src/helpers';

// the default headers given to axios
const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const DEFAULT_CONFIG = {
  timeout: 0,
};
export const NONE = null;
export const CLIENT_ERROR = 'CLIENT_ERROR';
export const SERVER_ERROR = 'SERVER_ERROR';
export const TIMEOUT_ERROR = 'TIMEOUT_ERROR';
export const CONNECTION_ERROR = 'CONNECTION_ERROR';
export const NETWORK_ERROR = 'NETWORK_ERROR';
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR';
export const CANCEL_ERROR = 'CANCEL_ERROR';
export const ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
export const UNAUTHENTIC_ERROR = 'UNAUTHENTIC_ERROR';

const TIMEOUT_ERROR_CODES = ['ECONNABORTED'];
const NODEJS_CONNECTION_ERROR_CODES = [
  'ENOTFOUND',
  'ECONNREFUSED',
  'ECONNRESET',
];
const in200s = (n: number): boolean => isWithin(200, 299, n);
const in400s = (n: number): boolean => isWithin(400, 499, n);
const in500s = (n: number): boolean => isWithin(500, 599, n);

type StatusCodes = undefined | number;
type HEADERS = {[key: string]: string | number};
type RequestsWithoutBody = 'get' | 'delete';
type RequestsWithBody = 'post' | 'put' | 'patch';

/**
 * Given a HTTP status code, return back the appropriate problem enum.
 */
export const getProblemFromStatus = (status: StatusCodes) => {
  if (!status) {
    return UNKNOWN_ERROR;
  }
  if (in200s(status)) {
    return NONE;
  }
  if (status === 401 || status === 403) {
    return UNAUTHENTIC_ERROR;
  }
  if (in400s(status)) {
    return CLIENT_ERROR;
  }
  if (in500s(status)) {
    return SERVER_ERROR;
  }
  return UNKNOWN_ERROR;
};

/**
 * What's the problem for this axios response?
 */
export const getProblemFromError = (error: any) => {
  if (error.message === 'Network Error') {
    return NETWORK_ERROR;
  }
  if (axios.isCancel(error)) {
    return CANCEL_ERROR;
  }
  // then check the specific error code
  if (error.code) {
    return getProblemFromStatus(error.response.status);
  }

  if (TIMEOUT_ERROR_CODES.includes(error.code)) {
    return TIMEOUT_ERROR;
  }
  if (NODEJS_CONNECTION_ERROR_CODES.includes(error.code)) {
    return CONNECTION_ERROR;
  }
  return UNKNOWN_ERROR;
};

const create = (config: any) => {
  // combine the user's headers with ours
  const headers = {...DEFAULT_HEADERS, ...(config.headers || {})};

  let instance: any;
  const configWithoutHeaders = {...config, headers: undefined};
  const combinedConfig = {...DEFAULT_CONFIG, ...configWithoutHeaders};
  // create the axios instance
  instance = axios.create(combinedConfig);

  // remove header
  const deleteHeader = (name: string) => {
    delete headers[name];
    return instance;
  };

  // convenience for setting new request headers
  const setHeader = (name: string, value: string) => {
    headers[name] = value;
    return instance;
  };

  // sets headers in bulk
  const setHeaders = (newHeaders: HEADERS) => {
    Object.keys(newHeaders).forEach(header =>
      setHeader(header, newHeaders[header]),
    );
    return instance;
  };

  /**
   * Sets a new base URL.
   */
  const setBaseURL = (newURL: string) => {
    instance.defaults.baseURL = newURL;
    return instance;
  };

  /**
   * Gets the current base URL used by axios.
   */
  const getBaseURL = () => {
    return instance.defaults.baseURL;
  };

  /**
   * Make the request for GET, DELETE
   */
  const doRequestWithoutBody =
    (method: RequestsWithoutBody) =>
    (url: string, params = {}, axiosConfig = {}) => {
      return doRequest({...axiosConfig, url, params, method});
    };

  /**
   * Make the request for POST, PUT, PATCH
   */
  const doRequestWithBody =
    (method: RequestsWithBody) =>
    (url: string, data: any, axiosConfig = {}) => {
      return doRequest({...axiosConfig, url, method, data});
    };

  /**
   * Make the request with this config!
   */
  const doRequest = async (axiosRequestConfig: any) => {
    axiosRequestConfig.headers = {
      ...headers,
      ...axiosRequestConfig.headers,
    };
    return instance
      .request(axiosRequestConfig)
      .then(convertResponse)
      .catch(convertResponse);
  };

  // Handle API Response or Error
  const convertResponse = (axiosResult: AxiosResponse | AxiosError) => {
    const isError = axiosResult instanceof Error || axios.isCancel(axiosResult);
    const axiosResponse = axiosResult as AxiosResponse;
    const axiosError = axiosResult as AxiosError;
    const response = isError ? axiosError.response : axiosResponse;
    const status = (response && response.status) || 0;

    const problem = isError
      ? getProblemFromError(axiosResult)
      : getProblemFromStatus(status);
    const originalError = isError ? axiosError : null;
    const ok = in200s(status);
    const resConfig = axiosResult.config || null;
    const resHeaders = (response && response.headers) || null;
    const data = (response && response.data) || null;
    const transformedResponse = {
      problem,
      originalError,
      ok,
      status,
      data,
      headers: resHeaders,
      config: resConfig,
    };
    // try {
    //   // Handling error with 200 status code based on backend server structure
    //   if (!isError && !data?.status) {
    //     transformedResponse.ok = false;
    //     transformedResponse.status = 0;
    //     transformedResponse.problem = data.error;
    //     transformedResponse.originalError = data.error.message;
    //   } else if (isError && problem === UNAUTHENTIC_ERROR) {
    //     // DeviceEventEmitter.emit(LOGOUT_EVENT);
    //     transformedResponse.problem = data.error;
    //   }
    // } catch (e) {
    //   console.log({e});
    // }

    // Handle Response Error here...
    return transformedResponse;
  };

  // create the base object
  const APIInstance = {
    setHeader,
    setHeaders,
    deleteHeader,
    headers,
    setBaseURL,
    getBaseURL,
    axiosInstance: instance,
    get: doRequestWithoutBody('get'),
    delete: doRequestWithoutBody('delete'),
    post: doRequestWithBody('post'),
    put: doRequestWithBody('put'),
    patch: doRequestWithBody('patch'),
  };
  // send back the Instance
  return APIInstance;
};

const API = create({
  baseURL: URLS.baseUrl,
});

export {API};
