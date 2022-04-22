import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill={props.color}>
      <Path d="M20 17.203l-7.427-5.201a1.002 1.002 0 00-1.146 0L4 17.203v2.44l8-5.602 8 5.602v-2.44z" />
      <Path d="M20 12.381l-7.427-5.199a.999.999 0 00-1.146 0L4 12.381v2.44l8-5.6 8 5.6v-2.44z" />
      <Path d="M20 7.381l-7.427-5.199a.999.999 0 00-1.146 0L4 7.381v2.44l8-5.6 8 5.6v-2.44z" />
    </G>
  </Svg>
);

export default SvgComponent;
