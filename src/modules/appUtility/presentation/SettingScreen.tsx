import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Label} from 'src/components';
import {APP_LANGUAGES, APP_THEME} from 'src/constants';
import {ViewStyles} from '@src/core-ui';
import {useAppDispatch, useLocale, useTheme} from '@src/hooks';
import {appUtilityActions} from '../redux';

const SettingScreen = () => {
  const {strings, locale, setAppLocale} = useLocale();
  const dispatch = useAppDispatch();
  const {appTheme, setAppTheme} = useTheme();

  const onSelectLocale = (code: any) => {
    setAppLocale(code);
    dispatch(appUtilityActions.setSelectedLanguage(code));
  };

  const renderColorRow = (obj: any) => {
    return (
      <TouchableOpacity
        key={obj.label}
        onPress={() => setAppTheme({accentColor: obj.code})}>
        <View style={[styles.row, {backgroundColor: appTheme.subHover}]}>
          <Label labelType="bodyMedium" style={{color: obj.code}}>
            {obj.label}
          </Label>
        </View>
      </TouchableOpacity>
    );
  };

  const renderRow = (obj: any) => {
    const isSelected = locale === obj.code;
    return (
      <TouchableOpacity
        key={obj.label}
        disabled={isSelected}
        onPress={() => onSelectLocale(obj.code)}>
        <View
          style={[
            styles.row,
            {
              backgroundColor:
                (!isSelected && appTheme.subHover) || appTheme.accentLighter10,
            },
          ]}>
          <Label>{obj.label}</Label>
        </View>
      </TouchableOpacity>
    );
  };

  const renderHeader = (title: string) => {
    return (
      <Label labelType="bodyMedium" style={styles.header}>
        {title}
      </Label>
    );
  };

  return (
    <SafeAreaView
      style={[
        ViewStyles.flexContainer,
        {backgroundColor: appTheme.background},
      ]}>
      <View style={ViewStyles.ph5}>
        {renderHeader(strings.SELECT_LANGUAGE)}
        {APP_LANGUAGES.map(obj => {
          return renderRow(obj);
        })}
      </View>
      <View style={ViewStyles.ph5}>
        {renderHeader(strings.SELECT_THEME)}
        {APP_THEME.map(obj => {
          return renderColorRow(obj);
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: StyleSheet.flatten([ViewStyles.mt3, ViewStyles.mb2]),
  row: StyleSheet.flatten([ViewStyles.ph2, ViewStyles.pv4, ViewStyles.mb2]),
});

export {SettingScreen};
