import React from 'react';
import {Container, Text} from '../../common/styles/styles';
import {View} from 'react-native';
import Button from '../../common/components/Button';

function Auth({ navigation }: any) {
  const goTo = () => navigation.navigate('main');

  return (
    <Container>
      <View><Text>Auth screen</Text></View>
      <Button value="Go to main" onPress={goTo}/>
    </Container>
  );
}

export default Auth;
