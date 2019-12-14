import React from 'react';
import styled from 'styled-components';

import * as colors from '../styles/colors';

const CardStyled = styled.TouchableOpacity`
  height: 150px;
  width: 250px;
  padding: 6px;
  borderRadius: 8px;
  marginLeft: 14px;
  textAlign: center;
  backgroundColor: ${colors.colorWhite};
  borderColor: ${colors.colorBlack};
`;

function Card(props: { children: React.ReactElement }) {
  return (
    <CardStyled>
      {props.children}
    </CardStyled>
  );
}

export default Card;