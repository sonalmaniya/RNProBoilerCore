import type {StackScreenProps} from '@react-navigation/stack';
import {NavigationRoutes, RootStackParamList} from '@src/navigation';

export type WelcomeScreenProps = StackScreenProps<
  RootStackParamList,
  NavigationRoutes.ROOT
>;
