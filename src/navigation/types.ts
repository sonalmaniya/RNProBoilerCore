import {ImageSourcePropType} from 'react-native';
import {NavigationRoutes} from './navigationRoutes';

// RootStack
export type RootStackParamList = {
  [NavigationRoutes.ROOT]: undefined;
  [NavigationRoutes.MAIN_TAB]: undefined;
};

export type TabStackParamList = {
  [NavigationRoutes.HOME]: undefined;
  [NavigationRoutes.FEED]: undefined;
  [NavigationRoutes.SETTINGS]: undefined;
};

export interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
}
