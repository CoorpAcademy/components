import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 20 20" xmlSpace="preserve" {...props}>
    <G id="prefix__Page-1">
      <Path fill={props.color} d="M20 13.9l-3 2.9-7-6.9-7 6.9-3-2.9L10 4z" id="prefix__arrow_top" />
    </G>
  </Svg>
);

export default SvgComponent;
