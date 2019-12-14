import React from 'react';
import { FlatList } from 'react-native';

type Props = {
  data: { [key: string]: string }[];
  horizontal?: boolean;
  keyExtractor: any;
  renderItem: any;
};

const listProps = {
  horizontal: false,
};

function List({ data, renderItem, ...props }: Props) {
  return (
    <FlatList data={data} renderItem={renderItem} {...props} />
  );
}

export default List;