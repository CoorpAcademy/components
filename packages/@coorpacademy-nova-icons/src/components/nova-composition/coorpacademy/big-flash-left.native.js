import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg viewBox="0 0 150 220" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G filter="url(#prefix__filter0_d)">
      <Path
        d="M131.249 220L20.087 106.548h48.332L18 18.785l113.452 111.901H80.996L131.25 220z"
        fill="#FFD942"
      />
      <Path
        d="M131.249 220l-22.827-23.307-37.159-66.007h9.715L131.249 220zm-9.511-89.314L30.706 40.911 18 18.785l113.452 111.901h-9.714z"
        fill="#FFA81C"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
