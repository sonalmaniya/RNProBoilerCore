import React from 'react';
import {SafeAreaView} from 'react-native';
import {Label} from '@src/components';
import {ViewStyles} from '@src/core-ui';
import {useAppSelector, useLocale, useTheme} from '@src/hooks';
import {WelcomeScreenProps} from './types';
import {selectCurrentLanguage} from '../redux';

const WelcomeScreen = ({}: WelcomeScreenProps) => {
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
      <Label labelType="h4">{strings.WELCOME}</Label>
      <Label style={[ViewStyles.mv5, {color: appTheme.primaryFont}]}>
        Current Selected Language code:- {language}
      </Label>
    </SafeAreaView>
  );
};

export {WelcomeScreen};
