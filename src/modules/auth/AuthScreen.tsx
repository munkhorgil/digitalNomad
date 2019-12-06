import React from 'react';

import { 
  Text, 
  Container 
} from '../common/styles';
import Pager from '../common/components/Pager';

import { WELCOME_MESSAGES } from './constants';
import Svg from '../common/components/Svg';
import Button from '../common/components/Button';

type Props = {
  navigation: any;
};

type RenderPageArgs = {
  text: string;
  svgName: string;
};

function renderPage({ text, svgName }: RenderPageArgs, element?: React.ReactElement) {
  return (
    <Container key={svgName}>
      <Svg width="70%" height="70%" name={svgName} />
      <Text center={true}>{text}</Text>
      {element}
    </Container>
  );
}

function Auth({ navigation }: Props) {
  const [ welcomeMessage, guideMessage, getStartedMessage ] = WELCOME_MESSAGES;

  const go = () => navigation.navigate('main');

  const button = <Button value="Get Started" onPress={go} />;

  return (
    <Pager 
      items={[
        renderPage(welcomeMessage),
        renderPage(guideMessage),
        renderPage(getStartedMessage, button),
      ]} 
    />
  );
};


export default Auth;