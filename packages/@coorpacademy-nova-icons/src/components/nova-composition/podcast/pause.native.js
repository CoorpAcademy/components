import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 16 16" xmlSpace="preserve" {...props}>
    <Path
      className="prefix__st0"
      d="M1.3 1.3c0-.3.3-.6.7-.6h4c.4 0 .7.3.7.7v13.3c0 .4-.3.7-.7.7H2c-.4 0-.7-.3-.7-.7V1.3zM9.3 1.3c0-.3.3-.6.7-.6h4c.4 0 .7.3.7.7v13.3c0 .4-.3.7-.7.7h-4c-.4 0-.7-.3-.7-.7V1.3z"
    />
  </Svg>
);

export default SvgComponent;
