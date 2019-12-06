import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../styles';

type Props = {
  value: string;
  onPress: () => void;
};

function Button({ value, onPress }: Props): React.ReactElement {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text center={true}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Button;