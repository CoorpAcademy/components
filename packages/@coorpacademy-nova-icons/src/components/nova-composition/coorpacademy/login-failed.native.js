import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = props => (
  <Svg id="prefix__Calque_1" x={0} y={0} viewBox="0 0 52 41" xmlSpace="preserve" {...props}>
    <Path
      d="M37.4 39.5c6.9 0 12.5-5.6 12.5-12.5s-5.6-12.5-12.5-12.5S24.9 20.1 24.9 27s5.6 12.5 12.5 12.5z"
      fill="none"
      stroke={props.color}
      strokeWidth={3}
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
    <Path
      className="prefix__st1"
      d="M32.3 32.2l10.3-10.3M42.6 32.2L32.3 21.8M20.8 20.8H2V2h47.9v12.5M10.3 7.2v8.3M13.8 9.1l-7 4.6M13.8 13.7L6.9 9.1M22.8 7.2v8.3M26.3 9.1l-7 4.6M26.3 13.7l-6.9-4.6"
    />
  </Svg>
);

export default SvgComponent;
