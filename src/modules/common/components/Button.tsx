import React from 'react';
import { Text } from '../styles/styles';
import styled from 'styled-components';

type Props = {
  value: string;
  onPress: () => void;
};

const ButtonStyled = styled.TouchableOpacity`
  padding: 10px;
  backgroundColor: #EEE;
`;

function Button({ value, onPress }: Props): React.ReactElement {
  return (
    <ButtonStyled onPress={onPress}>
      <Text center={true}>{value}</Text>
    </ButtonStyled>
  );
};

export default Button;