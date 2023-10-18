import React, {useEffect} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {ViewStyles} from '@src/core-ui';
import {useAppDispatch, useAppSelector, useTheme} from '@src/hooks';
import {FeedRow} from './component';
import {Feed, feedActions, selectFeed} from '../redux';

const FeedScreen = () => {
  const dispatch = useAppDispatch();
  const {appTheme} = useTheme();
  const {data = []} = useAppSelector(selectFeed);

  useEffect(() => {
    getFeed();
  }, []);

  const getFeed = () => {
    dispatch(feedActions.getFeedList());
  };

  const renderItem = ({item}: {item: Feed; index: number}) => {
    return <FeedRow item={item} />;
  };

  const keyExtractor = (item: Feed, _: number) => `feed_${item.id}`;

  return (
    <SafeAreaView style={[{backgroundColor: appTheme.background}]}>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={ViewStyles.pv4}
      />
    </SafeAreaView>
  );
};

export {FeedScreen};
