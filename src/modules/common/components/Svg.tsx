import React from 'react';
import { SvgXml } from 'react-native-svg';
import svgs from '../../assets/images/svg';

type Props = {
  width?: string; 
  height?: string; 
  name: string;
}

function Svg({ width = '100%', height = '100%', name }: Props) {
  return (
    <SvgXml width={width} height={height} xml={svgs[name]} />
  );
}

export default Svg;