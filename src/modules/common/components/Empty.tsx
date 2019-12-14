import React from 'react';
import { Container, Text } from '../styles/styles';
import Svg from './Svg';

export default function Empty() {
  return (
    <Container>
      <Svg height="70%" width="70%" name="empty" />
      <Text center={true}>Empty</Text>
    </Container>
  );
}