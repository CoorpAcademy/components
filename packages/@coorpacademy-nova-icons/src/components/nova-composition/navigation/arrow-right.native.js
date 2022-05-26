import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 20 20" xmlSpace="preserve" {...props}>
    <G id="prefix__Page-1">
      <Path fill={props.color} d="M7 20l-3-3 6.9-7L4 3l3-3 9.8 10z" id="prefix__arrow_right" />
    </G>
  </Svg>
);

export default SvgComponent;
