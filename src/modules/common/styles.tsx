import styled from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  textAlign: ${props => props.center && 'center'};
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
  Text,
  Container,

  screens,
  spaces
};
