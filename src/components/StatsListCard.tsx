import React from 'react';
import { View, StyleSheet, Text, FlatList, ListRenderItemInfo } from 'react-native';

import { Colors, Dimens } from '../styles';
import Icon, { IconProps } from './Icon';

export type IconTitleValueRecord = {
  iconProps: IconProps;
  title: string;
  value: string | number | null | undefined;
};

type IconTitleValueRecordsListCardProps = {
  recordsList: IconTitleValueRecord[];
};

const renderRecord = ({ item }: ListRenderItemInfo<IconTitleValueRecord>) => {
  return (
    <View style={styles.record}>
      <Icon {...item.iconProps} size={Dimens.icon_x_small} />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.value}</Text>
    </View>
  );
};

const renderItemSeparatorComponent = () => {
  return <View style={styles.listSeparator} />;
};

const IconTitleValueRecordsListCard = (props: IconTitleValueRecordsListCardProps) => {
  return (
    <View style={styles.container}>
      <FlatList data={props.recordsList} renderItem={renderRecord} scrollEnabled={false} ItemSeparatorComponent={renderItemSeparatorComponent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderRadius: Dimens.cardBorderRadius,
    padding: Dimens.cardPadding,
    margin: Dimens.cardPadding,
  },
  record: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    color: Colors.gray,
  },
  listSeparator: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
    marginVertical: Dimens.space12,
    marginStart: 48,
  },
});

export default IconTitleValueRecordsListCard;
