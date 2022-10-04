import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg viewBox="0 0 90 130" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G filter="url(#prefix__filter0_d)">
      <Path
        d="M71.478 111.363l-51.58-52.642h22.427L18.93 18 71.572 69.92H48.16l23.318 41.442z"
        fill="#FFD942"
      />
      <Path
        d="M71.478 111.363l-10.592-10.814-17.242-30.628h4.508l23.326 41.442zm-4.413-41.442L24.826 28.266 18.93 18 71.572 69.92h-4.507z"
        fill="#FFA81C"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
