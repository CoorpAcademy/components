import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H15v2h2.589l-1.384 6H7.781l-.5-2H5.219l.811 3.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4z" />
      <Path d="M14.012 7c0-3.86-3.14-7-7-7-3.859 0-7 3.14-7 7s3.141 7 7 7c3.86 0 7-3.14 7-7zm-12 0c0-2.757 2.244-5 5-5 2.758 0 5 2.243 5 5s-2.242 5-5 5c-2.756 0-5-2.243-5-5z" />
      <Path d="M6.012 7h2v4h-2z" />
      <Circle cx={7} cy={5} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
