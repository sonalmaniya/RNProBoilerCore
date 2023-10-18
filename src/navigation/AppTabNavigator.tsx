import React from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images} from 'src/assets';
import {useTheme} from 'src/hooks';
import {FeedScreen, HomeScreen, SettingScreen} from 'src/modules';
import {NavigationRoutes} from './navigationRoutes';
import {TabIconProps, TabStackParamList} from './types';

const MainTab = createBottomTabNavigator<TabStackParamList>();

const TabIcon = ({icon, color}: TabIconProps) => {
  return (
    <Image
      style={[styles.icon, {tintColor: color}]}
      resizeMode="contain"
      source={icon}
    />
  );
};

const AppTabNavigator = () => {
  const {appTheme} = useTheme();

  const renderIcon = (color: string, icon: ImageSourcePropType) => {
    return <TabIcon icon={icon} color={color} />;
  };

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: appTheme.disabled,
        tabBarActiveTintColor: appTheme.accent,
      }}>
      <MainTab.Screen
        name={NavigationRoutes.HOME}
        options={{
          title: 'Home',
          tabBarIcon: ({color}) => renderIcon(color, Images.icHome),
        }}
        component={HomeScreen}
      />
      <MainTab.Screen
        name={NavigationRoutes.FEED}
        options={{
          tabBarIcon: ({color}) => renderIcon(color, Images.icFeed),
          title: 'Feeds',
        }}
        component={FeedScreen}
      />
      <MainTab.Screen
        name={NavigationRoutes.SETTINGS}
        options={{
          tabBarIcon: ({color}) => renderIcon(color, Images.icSettings),
          title: 'Settings',
        }}
        component={SettingScreen}
      />
    </MainTab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 22,
    width: 22,
  },
});

export {AppTabNavigator};
