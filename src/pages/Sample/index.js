/* eslint-disable react-native/no-inline-styles */
import { useIsFocused } from '@react-navigation/native';
import useFlatList from '@src/hooks/useFlatList';
import React, { useCallback } from 'react';
import { FlatList, Image } from 'react-native';
import { getSamplePhotos } from './services';
import Box from '@src/components/Box';
import { SafeAreaView } from 'react-native-safe-area-context';

const Sample = (props) => {
  const isFocused = useIsFocused();

  const { flatListProps } = useFlatList(
    (lastResult) => {
      return getSamplePhotos({ ...lastResult });
    },
    {
      refreshDeps: [isFocused],
      isNoMore: (r) => {
        return r?.list?.length >= r?.total;
      },
    },
  );

  const renderItem = useCallback(({ item }) => {
    return (
      <Image
        source={{ uri: item.url }}
        resizeMode="contain"
        style={{ width: '100%', height: 200 }}
      />
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1}>
        <FlatList
          {...flatListProps}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </Box>
    </SafeAreaView>
  );
};

export default Sample;
