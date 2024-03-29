import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg
    id="prefix__Calque_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    {...props}
  >
    <G fill="none" fillRule="evenodd">
      <Path
        className="prefix__st0"
        d="M6.3 20.9h7.4c-.1-.3-.1-.7-.1-1 0-3.1 2.3-5.7 5.2-6.2V1c0-.6-.5-1-1-1H6.3v20.9zM4.2 0H1C.5 0 0 .5 0 1v18.8c0 .6.5 1 1 1h3.1V0zM24 18.8h-3.1v-3.1h-2.1v3.1h-3.1v2.1h3.1V24h2.1v-3.1H24v-2.1z"
      />
    </G>
  </Svg>
);

export default SvgComponent;
