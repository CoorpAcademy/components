import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.625 9.221a1 1 0 0 0-1.072-.114l-5.172 2.586-2.523-4.206c-.361-.603-1.354-.603-1.715 0L8.62 11.693 3.447 9.106a1 1 0 0 0-1.418 1.137l1.789 7.153A1.993 1.993 0 0 0 3 19.001v1c0 1.103.896 2 2 2h14c1.104 0 2-.897 2-2v-1a1.99 1.99 0 0 0-.818-1.604l1.789-7.153a1.004 1.004 0 0 0-.346-1.023zM8.553 13.896a1.001 1.001 0 0 0 1.305-.38L12 9.944l2.143 3.571c.269.448.838.613 1.305.38l4.055-2.027-1.283 5.133H5.781l-1.283-5.133 4.055 2.028zm10.444 6.105H5v-1h14l-.003 1z" />
      <Circle cx={12} cy={4.001} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
