import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Label} from '@src/components';
import {ViewStyles} from '@src/core-ui';
import {useTheme} from '@src/hooks';
import {Feed} from '../../redux';

const FeedRow = ({item}: {item: Feed}) => {
  const {appTheme} = useTheme();
  const {title, body = ''} = item;

  return (
    <View style={[styles.row, {borderColor: appTheme.stroke}]}>
      <Label labelType="h6">{title}</Label>
      <Label>{body}</Label>
    </View>
  );
};

const styles = StyleSheet.create({
  row: StyleSheet.flatten([
    ViewStyles.p2,
    ViewStyles.mh5,
    ViewStyles.mb5,
    {borderWidth: 1, borderRadius: 10},
  ]),
});
export {FeedRow};
