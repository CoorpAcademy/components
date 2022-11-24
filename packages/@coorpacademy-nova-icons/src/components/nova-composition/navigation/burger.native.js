import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg
    id="prefix__Calque_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 16 12"
    xmlSpace="preserve"
    {...props}
  >
    <Path
      className="prefix__st0"
      d="M15 10H1c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zM15 5H1c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1zM15 0H1C.4 0 0 .4 0 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1z"
    />
  </Svg>
);

export default SvgComponent;
