import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg viewBox="0 0 94 139" fill="none" {...props}>
    <G filter="url(#prefix__filter0_d)">
      <Path d="M75.896 18l-56.83 58h24.71L18 120.867 76 63.66H50.205L75.896 18z" fill="#FFD942" />
      <Path
        d="M75.896 18l-11.67 11.915L45.23 63.66h4.966L75.896 18zm-4.862 45.66l-46.538 45.896L18 120.867 76 63.66h-4.966z"
        fill="#FFA81C"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
