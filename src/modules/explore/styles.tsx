import styled from 'styled-components';

const Section = styled.View`
`;

const SubSection = styled.View`
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
`;

const Title = styled.Text`
  margin: 14px;
  fontWeight: bold;
  fontSize: 18px;
  textTransform: uppercase;
`;

const SubTitle = styled.Text`
  fontWeight: bold;
  fontSize: 14px;
  textTransform: uppercase;
`;

export {
  Title,
  Section,
  SubSection,
  SubTitle
}