import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipPath="url(#prefix__clip0_258_3084)">
      <Path
        d="M15.999 1.999h-8c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-16c0-1.103-.897-2-2-2zm0 2v2h-8v-2h8zm.001 4v8H7.999v-8H16zm-8.001 12v-2H16v2H7.999z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0_258_3084">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;
