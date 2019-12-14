import React from 'react';
import ViewPager from '@react-native-community/viewpager';

import { screens, spaces } from '../styles/styles';

type Props = {
  items: React.ReactElement[];
};

const pagerProps = {
  initialPage: 0,
  showPageIndicator: true,
  style: [screens.autoFill, spaces.base],
};

function Pager(props: Props) {
  return (
    <ViewPager {...pagerProps}>
      {props.items}
    </ViewPager>
  );
}

export default Pager;