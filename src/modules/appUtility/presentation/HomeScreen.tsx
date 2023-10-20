import React from 'react';
import {SafeAreaView} from 'react-native';
import {Label} from '@src/components';
import {ViewStyles} from '@src/core-ui';
import {useAppSelector, useLocale, useTheme} from '@src/hooks';
import {selectCurrentLanguage} from '../redux';

const HomeScreen = () => {
  const language = useAppSelector(selectCurrentLanguage);
  const {strings} = useLocale();
  const {appTheme} = useTheme();

  return (
    <SafeAreaView
      style={[
        ViewStyles.flexContainer,
        ViewStyles.center,
        {backgroundColor: appTheme.background},
      ]}>
      <Label labelType="h3" style={{color: appTheme.accent}}>
        {strings.WELCOME}
      </Label>
      <Label style={[ViewStyles.mv5, {color: appTheme.primaryFont}]}>
        {strings.SELECTED_LANGUAGE_CODE}:- {language}
      </Label>
    </SafeAreaView>
  );
};

export {HomeScreen};
