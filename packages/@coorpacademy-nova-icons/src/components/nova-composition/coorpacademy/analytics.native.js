import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 24 24" xmlSpace="preserve" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path className="prefix__st0" d="M2.7 21.3V0H0v22.7c0 .7.6 1.3 1.3 1.3H24v-2.7H2.7z" />
      <Path
        className="prefix__st0"
        d="M10.7 12.6l3.1 3.1c.5.5 1.4.5 1.9 0l8-8-1.9-1.9-7.1 7.1-3.1-3.1c-.5-.5-1.4-.5-1.9 0l-5.3 5.3L6.3 17l4.4-4.4z"
      />
    </G>
  </Svg>
);

export default SvgComponent;
