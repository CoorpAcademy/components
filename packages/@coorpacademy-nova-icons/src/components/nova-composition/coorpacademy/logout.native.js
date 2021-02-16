import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgComponent = (props) => (
  <Svg
    id="prefix__Calque_1"
    x={0}
    y={0}
    viewBox="0 0 18.1 18"
    xmlSpace="preserve"
    {...props}
  >
    <Path className="prefix__st0" d="M1 9h10.9M9 6.1L11.9 9 9 11.9" />
    <Path
      className="prefix__st0"
      d="M1.7 5.7C3 2.9 5.8 1 9 1c4.4 0 8 3.6 8 8s-3.6 8-8 8c-3.3 0-6.1-1.9-7.3-4.7"
    />
  </Svg>
);

export default SvgComponent;
