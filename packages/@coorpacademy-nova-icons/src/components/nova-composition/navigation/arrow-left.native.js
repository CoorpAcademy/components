import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg
    id="prefix__Calque_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 20 20"
    xmlSpace="preserve"
    {...props}
  >
    <G id="prefix__Page-1">
      <Path fill={props.color} d="M13.9 0l2.9 3-6.9 7 6.9 7-2.9 3L4 10z" id="prefix__arrow_left" />
    </G>
  </Svg>
);

export default SvgComponent;
