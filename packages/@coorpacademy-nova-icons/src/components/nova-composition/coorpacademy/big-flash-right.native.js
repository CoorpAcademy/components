import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg viewBox="0 0 161 240" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G filter="url(#prefix__filter0_d)">
      <Path
        d="M142.776 0L20.299 125h53.252L18 221.695l125-123.29H87.408L142.776 0z"
        fill="#FFD942"
      />
      <Path
        d="M142.776 0l-25.15 25.68-40.941 72.725h10.703L142.776 0zm-10.479 98.405L32 197.318l-14 24.377 125-123.29h-10.703z"
        fill="#FFA81C"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
