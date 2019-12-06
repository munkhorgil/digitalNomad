import * as React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';

import Routes from './routes';

function Init() {
  return (
    <NavigationNativeContainer>
      <Routes />
    </NavigationNativeContainer>
  );
}

export default Init;