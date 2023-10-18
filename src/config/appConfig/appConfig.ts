import {BASE_URL} from '@src/appKeys';

// Default App Settings
export type Environment = 'development' | 'production';

export type ENVConfigs = {
  baseUrl: string;
  // cdnUrl: string;
};

export const CURRENT_ENVIRONMENT: Environment = 'development';

export const URLS: ENVConfigs = {
  baseUrl: BASE_URL,
};
