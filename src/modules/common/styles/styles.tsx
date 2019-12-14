import styled from 'styled-components';
import * as colors from './colors';

const Screen = styled.View`
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  backgroundColor: #FFF;
`;

const Text = styled.Text`
  textAlign: ${props => props.center ? 'center' : 'auto'};
`;

const screens = {
  autoFill: { 
    flex: 1,
  }
};

const spaces = {
  base: {
    padding: 40,
  }
};

export {
  Screen,
  Container,
  Text,

  screens,
  spaces
};
